"use client";
import { useCallback, useEffect, useState } from "react";
import Talk from "talkjs";
import { Session, Inbox } from "@talkjs/react";

export default function Chat({ user }) {
  const syncUser = useCallback(() => {
    return new Talk.User({
      id: user._id,
      name: user.name,
      photoUrl:
        user.imgUrl ||
        "https://www.nicepng.com/png/detail/933-9332131_profile-picture-default-png.png",
    });
  }, []);

  const syncConversation = useCallback((session) => {
    const convo = session.getOrCreateConversation("welcome");
    convo.setParticipant(session.me);
  }, []);

  return (
    <Session appId="t6cWkLWk" syncUser={syncUser}>
      <Inbox
        syncConversation={syncConversation}
        style={{ width: 1000, height: "100vh" }}
      ></Inbox>
      ;
    </Session>
  );
}
