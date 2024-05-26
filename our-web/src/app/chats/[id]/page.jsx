import { headers } from "next/headers";
import Chat from "@/components/chat";
import User from "../../../../database/models/user";

export default async function Page({ params }) {
  const headersList = headers();
  const userId = headersList.get("x-user-id");

  const user = await User.findById(userId);
  const otherUser = await User.findById(params.id);
  console.log(otherUser);

  return (
    <>
      <Chat user={user} otherUser={otherUser} />
    </>
  );
}
