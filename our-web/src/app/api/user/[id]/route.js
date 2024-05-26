import { NextResponse } from "next/server";
import User from "../../../../../database/models/user";

export async function GET(request, { params }) {
  try {
    await User.findById(params.id);

    return NextResponse.json(
      {
        message: "Berhasil Vote",
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
