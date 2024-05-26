import { NextResponse } from "next/server";
import Advocate from "../../../../database/models/advocate";

export async function GET(req) {
  const url = new URL(req.url)
  const search = url.searchParams.get("search");
  try {
    const data = await Advocate.getAdvocates(search);
    return NextResponse.json(
      {
        data,
      },
      { status: 200 }
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
