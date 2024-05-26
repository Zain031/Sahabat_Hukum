"use client";
import { useChat } from "ai/react";
import { Bot, Loader2, User2 } from "lucide-react";
import { useEffect } from "react";
import Navbar from "@/components/navbar";

export default function ChatBox() {
  const { messages, input, handleInputChange, handleSubmit, isLoading, stop } =
    useChat({
      api: "api/chatbox",
    });

  useEffect(() => {
    sendAutomaticPrompt();
  }, []);
  const sendAutomaticPrompt = () => {
    const syntheticEvent = {
      preventDefault: () => {},
    };
    handleSubmit(syntheticEvent, {
      data: {
        prompt: "Hai, ada yang bisa saya bantu?",
      },
    });
  };

  useEffect(() => {}, [messages]);

  return (
    <>
      <main className="flex min-h-screen flex-col items-center p-12">
        {RenderMessages()}
        {RenderForm()}
      </main>
    </>
  );

  function RenderForm() {
    return (
      <>
        <form
          onSubmit={(event) => {
            event.preventDefault(),
              handleSubmit(event, {
                data: {
                  prompt: input,
                },
              });
          }}
          className="w-full flex flex-row gap-2 items-center h-full"
        >
          <input
            className="mt-5 ml-10 border-b border-2 outline-none w-[80rem] px-4 py-2 focus:placeholder-transparent disabled:bg-transparent"
            type="text"
            placeholder={isLoading ? "Mengetik..." : "Kirim pesan..."}
            value={input}
            disabled={isLoading}
            onChange={handleInputChange}
          />
          <button type="submit" className="flex flex-row">
            {isLoading ? (
              <Loader2
                onClick={stop}
                className="p-3 h-10 w-10 stroke-stone-500"
              />
            ) : (
              <div className="mt-5 bg-blue-950 px-2 py-1 text-white rounded-sm hover:bg-blue-800">
                Kirim
              </div>
            )}
          </button>
        </form>
      </>
    );
  }

  function RenderMessages() {
    const reversedMessages = [...messages].reverse();
    return (
      <div className="flex flex-col-reverse w-full text-left mt-4 gap-4 whitespace-pre-wrap">
        {reversedMessages.map((m, index) => {
          return (
            <div
              key={index}
              className={`p-4 shadow-md rounded-md ml-10 relative ${
                m.role === "user" ? "bg-stone-300" : ""
              }`}
            >
              {m.content}
              {m.role === "user" ? (
                <User2 className="absolute top-2 -left-10 border rounded-full p-1 shadow-lg" />
              ) : (
                <Bot className="absolute top-2 -left-10 border rounded-full p-1 shadow-lg stroke-[0842A0]" />
              )}
            </div>
          );
        })}
        <div className={`p-4 shadow-md rounded-md ml-10 relative`}>
          "Hai, ada yang bisa saya bantu?"{" "}
          {
            <Bot className="absolute top-2 -left-10 border rounded-full p-1 shadow-lg stroke-[0842A0]" />
          }
        </div>
      </div>
    );
  }
}
