import { NextResponse } from "next/server";
import Post from "../../../../../database/models/post";

export async function PUT(request, { params }) {
  try {
    await Post.decVote(params.id);

    return NextResponse.json(
      {
        message: "Berhasil Vote",
      },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        error: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
