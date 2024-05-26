"use client";
import React, { Suspense, useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import Link from "next/link";

const Page = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");

  const router = useRouter()

  const [inputSearch, setInputSearch] = useState("")

  const handleSearch = (event) => {
    event.preventDefault();
    router.push("/advokat?search="+inputSearch)
  }

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          process.env.NEXT_PUBLIC_BASE_URL + `/api/advocates?search=`+ (search?search:""),
          {
            method: "GET",
            cache: "no-store",
            headers: {
              "Content-type": "application/json",
            },
          }
        );
        const result = await res.json();
        if (result.data) {
          setData(result.data);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  // Calculate total pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Get current page data
  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
    {/* <Suspense fallback={<div>Loading...</div>}> */}
      <div className="bg-white w-full py-5">
        <div className="mt-10 w-full">
          <h1 className="flex justify-center font-bold text-4xl text-blue-950">
            Temukan Advokat Pilihanmu
          </h1>
        </div>
        {/* -----search---- */}
        <div className="flex mt-4 justify-center bg-white ">
          <form className="flex gap-3 mt-3" onSubmit={handleSearch}>
            <div>
              <input
                onChange={(event) => setInputSearch(event.target.value)}
                style={{ width: 535 }}
                className="h-10 px-3 outline outline-1 outline-blue-950 rounded-md"
                type="text"
              />
            </div>
            <button type="submit" className="bg-blue-950 px-3 py-1 rounded-md text-white">
              Search
            </button>
          </form>
        </div>
      </div>

      <div className="w-full">
        {/* --------Card--------- */}
        <div className="w-full justify-center flex ">
          <div className="">
            {currentData.map((item, index) => (
              <Link href={`/advokat/${item._id}`} key={index}>
                <div className="hover:scale-110 hover:duration-200 z-0">
                  <div className="mt-5 gap-3 px-6 py-6 bg-blue-100 rounded-t-md flex border-b-2 border-slate-300  ">
                    <div>
                      <img
                        className="w-24 rounded-md"
                        src={item.imgUrl}
                        alt=""
                      />
                    </div>
                    <div>
                      <p className="font-bold text-md">{item.name}</p>
                      <div className="flex gap-4 mt-2">
                        <p>{item.city}</p>
                        <p>Pengalaman {item.experience}</p>
                      </div>
                      <div className="flex gap-2 text-sm font-light mt-5">
                        {item.category
                          .split(", ", 3)
                          .map((category, index) => (
                            <div key={index}>
                              <p className="bg-slate-300 px-2 py-1 rounded-sm">
                                {category}
                              </p>
                            </div>
                          ))}
                      </div>
                      <div className="mt-5 flex">
                        <p className="font-bold">Pendidikan :</p>
                        <p>{item.education}</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue-100 w-full h-16 py-2 text-end px-4 rounded-b-md">
                    <Link href={`/chats/${item._id}`}>
                      <button className="ml-2 bg-blue-800 rounded-md w-64 py-2 text-white px-4 hover:bg-blue-950">
                        Konsultasikan
                      </button>
                    </Link>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        {/* Pagination Controls */}
        <div className="flex justify-center mt-10">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`px-3 py-1 mx-1 rounded ${
                currentPage === index + 1
                  ? "bg-blue-950 text-white"
                  : "bg-gray-300"
              }`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
      {/* </Suspense> */}
    </>
  );
};

export default Page;
