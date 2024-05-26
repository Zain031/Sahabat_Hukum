"use client";
import { useCallback } from "react";
import Talk from "talkjs";
import { Session, Chatbox } from "@talkjs/react";

export default function Chat({ user, otherUser }) {
  const syncUser = useCallback(
    () =>
      new Talk.User({
        id: user._id,
        name: user.name,
        photoUrl:
          "https://www.nicepng.com/png/detail/933-9332131_profile-picture-default-png.png",
      }),
    []
  );

  const syncConversation = useCallback((session) => {
    // JavaScript SDK code here
    const conversation = session.getOrCreateConversation(otherUser._id);

    const other = new Talk.User({
      id: otherUser._id,
      name: otherUser.name,
      photoUrl: otherUser.imgUrl,
      welcomeMessage: "Halo ada yang bisa saya bantu?",
    });
    conversation.setParticipant(session.me);
    conversation.setParticipant(other);
    console.log(conversation);
    return conversation;
  }, []);

  return (
    <div>
      {user.name}
      <Session appId="t6cWkLWk" syncUser={syncUser}>
        <Chatbox
          conversationId="welcome2"
          syncConversation={syncConversation}
          style={{ width: "100%", height: "500px" }}
        ></Chatbox>
      </Session>
    </div>
  );
}
