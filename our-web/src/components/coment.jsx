"use client";
import React, { useState } from "react";
import { useCookies } from "next-client-cookies";

const Coment = ({ id, router }) => {
  const [comment, setComment] = useState("");
  const cookies = useCookies();
  const isLogin = cookies.get("Authorization");

  const handleComment = async (event) => {
    event.preventDefault();
    const input = {
      content: comment,
      postId: id,
    };
    console.log(comment);
    await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/add-answer", {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(input),
    });
    router.refresh();
  };
  if (isLogin)
    return (
      <div id="#up" className="mt-4">
        <form onSubmit={handleComment}>
          <div>
            <textarea
              onChange={(event) => setComment(event.target.value)}
              placeholder="tambahkan komen"
              className=" p-2 outline outline-2 outline-gray-700 rounded-md border-b-4 border-slate-600 ml-5"
              name="content"
              rows="4"
              cols="105"
              id=""
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="ml-5 bg-blue-200 hover:bg-blue-300 rounded-sm px-2 py-1"
            >
              Kirim
            </button>
          </div>
        </form>
      </div>
    );
};

export default Coment;
