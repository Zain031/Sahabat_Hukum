import { NextResponse } from "next/server";
import Post from "../../../../../database/models/post";

export async function GET(req, { params }) {
  try {
    const data = await Post.getPostBySlug(params.slug);
    return NextResponse.json(data, { status: 200 });
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
