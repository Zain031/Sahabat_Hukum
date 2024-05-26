import { NextResponse } from "next/server";
import { ZodError } from "zod";
import Post from "../../../../database/models/post";

export async function POST(request) {
  try {
    console.log(request, "<<< req")
    const userId = request.headers.get("x-user-id")
    console.log(userId, "<<<")

    const body = await request.json();

    body.userId = userId

    await Post.createPost(body);

    return NextResponse.json(
      {
        message: "Post berhasil terdaftar",
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

    return NextResponse.json(
      {
        error: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
