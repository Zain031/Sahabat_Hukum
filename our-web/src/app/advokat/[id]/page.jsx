import Navbar from "@/components/navbar";
import React from "react";
import Link from "next/link";
import Advocate from "../../../../database/models/advocate";

const page = async ({ params }) => {
  const advokat = await Advocate.getAdvocateById(params.id);
  return (
    <>
      <div>
        <div className="w-full mt-10 justify-center flex px-36">
          <div className=" ">
            <div>
              <div className="flex flex-col gap-8 lg:gap-4 lg:flex-row p-12 bg-blue-100 rounded-t-md border-b-2 border-slate-300 ">
                <div className="basis-1/3">
                  <img
                    className="rounded-md"
                    src={advokat.imgUrl}
                    alt={advokat.name}
                  />
                </div>
                <div className="flex flex-col gap-4 lg:gap-2 xl:gap-3 basis-2/3">
                  <p className="xl:mt-8 font-bold text-3xl">{advokat.name}</p>
                  <div className="flex gap-4">
                    <p>{advokat.city}</p>I<p>Pengalaman {advokat.experience}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 text-sm font-light">
                    {advokat.category.split(", ").map((category, index) => {
                      return (
                        <>
                          <div key={index}>
                            <p className=" bg-slate-300 px-2 py-1 rounded-sm">
                              {category}
                            </p>
                          </div>
                        </>
                      );
                    })}
                  </div>
                  <div>
                    <p className="font-bold">Pendidikan :</p>
                    <p>{advokat.education}</p>
                  </div>
                  <p className="font-bold">Tentang Advokat</p>
                  <p>{advokat.about}</p>
                </div>
              </div>
              <div className="bg-blue-100 w-full py-8 px-12 flex justify-between rounded-b-md">
                <Link href={"/chats/" + advokat._id}>
                  <button className="btn bg-blue-800 px-8 text-white hover:bg-blue-950 text-md">
                    Konsultasikan
                  </button>
                </Link>
                <Link href="/advokat">
                  {" "}
                  <button className="btn bg-slate-500 text-white px-8 hover:bg-slate-600 text-md">
                    Kembali
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
