import { NextResponse } from "next/server";
import Answer from "../../../../../database/models/answer";

export async function DELETE(request, { params }) {
  try {
    await Answer.deleteAnswer(params.id);

    return NextResponse.json(
      {
        message: "Answer berhasil terdelete",
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
