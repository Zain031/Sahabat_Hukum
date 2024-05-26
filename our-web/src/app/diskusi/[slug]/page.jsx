"use client";
import Coment from "@/components/coment";
import Navbar from "@/components/navbar";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Footer from "@/components/footer";

const page = ({ params }) => {
  const [data, setData] = useState([]);
  const router = useRouter();

  function Role({role}) {
    if (role === "Advokat") {
      return (
        <p className="font-bold bg-blue-200 text-slate-800 px-3 py-2 inline-block rounded-sm">
          advokat
        </p>
      );
    }
  }

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          process.env.NEXT_PUBLIC_BASE_URL + `/api/post/` + params.slug,
          {
            method: "GET",
            cache: "no-store",
            headers: {
              "Content-type": "application/json",
            },
          }
        );
        const data = await res.json();
        console.log(data);

        setData(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center">
        <div
          style={{ width: 1000 }}
          className="  bg-slate-100 border-b-4 border-slate-600 h-64 mt-20 px-5 pt-3 rounded-md    "
        >
          <p className="bg-blue-50 inline-block px-2 py-1 rounded-sm font-bold text-slate-700">
            {data.title}
          </p>
          <p className="mt-5 font-bold">{data.answers?.length} Comment</p>
          <span className=""> {data.content}</span>
          <span className="font-light text-[12px] ">
            <u>{" " + data.user?.name}</u>{" "}
            <u> {data?.createdAt?.slice(0, 10)}</u>{" "}
          </span>
        </div>
        <Coment id={data._id} router={router} />

        <div style={{ width: 1000 }} className="">
          <a href="#up">
            <div className="mt-16 text-blue-950 text-xl font-bold">
              Semua Komen
            </div>
          </a>

          {data.answers?.map((item, index) => {
            return (
              <>
                <div className="px-16 py-12 rounded-md mt-5  bg-slate-200">
                  <div className="flex justify-between">
                    <p className="font-bold bg-blue-200 text-slate-800 px-3 py-2 inline-block rounded-sm">
                      {data?.answersUser[index]?.name}
                    </p>
                    <Role role={data?.answersUser[index].role} />
                  </div>

                  <p className="mt-5" style={{ whiteSpace: "pre-line" }}>
                    {item.content}
                  </p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default page;
