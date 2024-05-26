const { NextResponse } = require("next/server");
const { ZodError } = require("zod");
const Advocate = require("../../../../database/models/advocate").default;

export async function POST(request) {
  try {
    const body = await request.json();

    const { NIA } = body;

    const newUser = await Advocate.addAdvocate(body);

    return NextResponse.json(
      {
        message:
          "Data kamu sudah berhasil terkirim. Tunggu konfirmasi selanjutnya ya",
        NIA,
      },
      { status: 201 }
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

    if (error.message === "NIA sudah terdaftar") {
      return NextResponse.json(
        {
          error: error.message,
        },
        { status: 409 }
      );
    }

    return NextResponse.json(
      {
        error: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
