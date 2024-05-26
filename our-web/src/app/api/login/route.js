import { NextResponse } from "next/server";
import { comparePasword } from "../../../../database/helpers/bcrypt";
import { createToken } from "../../../../database/helpers/jwt";
import User, { loginSchema } from "../../../../database/models/user";
import { ZodError } from "zod";

export async function POST(request) {
  try {
    const body = await request.json();

    const result = loginSchema.safeParse(body);

    if (!result.success) {
      throw result.error;
    }

    const { identifier, password } = body;
    const user = await User.findByIdentifier(identifier);

    if (!user) {
      throw new Error("Email atau No Handphone salah");
    }

    if (!comparePasword(password, user.password)) {
      throw new Error("Password salah");
    }

    const accessToken = createToken({
      _id: user._id,
      role: user.role,
    });

    return NextResponse.json(
      {
        access_token: accessToken,
        _id: user._id
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);

    if (error instanceof ZodError) {
      const err = error.issues[0].message;

      return NextResponse.json(
        {
          error: err,
        },
        { status: 400 }
      );
    }

    if (error instanceof Error) {
      return NextResponse.json(
        {
          error: error.message,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        error: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}
