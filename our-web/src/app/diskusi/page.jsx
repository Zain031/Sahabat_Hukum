"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Modal from "@/components/modal";
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'

const page = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");

  const router = useRouter()

  const [inputSearch, setInputSearch] = useState("")

  const handleSearch = (event) => {
    event.preventDefault();
    router.push("/advokat?search="+inputSearch)
  }

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          process.env.NEXT_PUBLIC_BASE_URL + `/api/post?search=`+ (search?search:""),
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

  const totalPages = Math.ceil(data.length/itemsPerPage)

  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )
  
  return (
    <>
      <div>
        <div
          style={{ marginLeft: 300, width: 900 }}
          className=" text-center pb-5 bg-white pt-10  z-5  "
        >
          <h1 className="font-bold text-4xl text-blue-950 mr-32">
            Pertanyaan paling populer
          </h1>
          <Link href="/add-question">
            {" "}
            <div className=" flex justify-start ml-40 mt-5 text-white">
              <button className=" bg-blue-950 px-3 py-2 rounded-md">
                Tambah Pertanyaan
              </button>
            </div>
          </Link>
        </div>

        <div
          style={{ marginLeft: 460 }}
          className="  h-screen mt-3 flex-col "
        >
          {currentData?.map((item, index) => {
            
            return (
                <Link key={index} href={`/diskusi/${item.slug}`}>
                  <div
                    style={{ width: 600 }}
                    className="  bg-slate-100 border-b-4 border-slate-600 h-44 mt-10 px-5 pt-3 rounded-md  "
                  >
                    <p className="bg-blue-50 inline-block px-2 py-1 rounded-sm font-bold text-slate-700">
                      {item.title}
                    </p>
                    <p className="mt-5 font-bold">
                      {item.answers.length} Comment
                    </p>
                 
                    <div className="flex gap-4  text-sm justify-end">
                      <p className="font-light">{item.user.name}</p>
                      <p className="font-light">{item.createdAt.slice(0,10)}</p>
                    </div>
                  </div>
                </Link>
            
            );
          })}
           <div className="flex justify-center mt-2 w-full">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                className={`px-3 py-1 mx-1 rounded ${
                  currentPage === index + 1 ? "bg-blue-950 text-white" : "bg-gray-300"
                }`}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
      <Modal />
    </>
  );
};

export default page;
