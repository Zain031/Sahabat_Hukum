"use server"
import { headers } from "next/headers";
import User from "../../../database/models/user";
import Chat from "@/components/chatList";

export default async function Page() {
  const headersList = headers();

  const userId = headersList.get("x-user-id");

  const user = await User.findById(userId);
  return (
    <>
      <Chat user={user} />
    </>
  );
}
