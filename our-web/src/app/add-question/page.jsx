import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import Swal from "sweetalert2";


const AddQuestion = async () => {

  const handleSubmit = async (formData) => {
    "use server"
    try {
 
      const input = {
        title: formData.get("title"),
        content: formData.get("content"),
      };
  
      const res = await fetch(
        process.env.NEXT_PUBLIC_BASE_URL + "/api/add-post",
        {
          method: "POST",
          cache: "no-store",
          headers: {
            "Content-type": "application/json",
            "Cookie" : cookies().toString()
          },
          body: JSON.stringify(input),
        }
      );
  
  
  
  
      if (!res.ok) throw new Error("Failed to Add Post");
    
  
      
    } catch (error) {
      throw new Error(error+"<<<<<<<<<<<<<<<<<<<<")
    }
    redirect("/diskusi");
  };
  
  return (
    <div>
      <div
        className="main-modal fixed w-full inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster"
        style={{ background: "rgba(0,0,0,.7)" }}
      >
        <div className="border border-blue-500  modal-container bg-white w-4/12 md:max-w-11/12 mx-auto rounded-xl shadow-lg z-50 overflow-y-auto">
          <div className="modal-content py-4 text-left px-6">
            <div className="flex justify-between items-center pb-3">
              <p className="text-2xl font-bold text-gray-500">
                Tambah Pertanyaan
              </p>
            </div>
            <div className="my-5 mr-5 ml-5 flex justify-center">
              <form action={handleSubmit}>
                <div className="">
                  <div className="">
                    <label htmlFor="title" className="text-md text-gray-600">
                      Judul
                    </label>
                  </div>
                  <div className="">
                    <input
                      type="text"
                      id="title"
                      autoComplete="off"
                      name="title"
                      className="h-3 p-6 w-full border-2 border-gray-300 mb-5 rounded-md"
                      placeholder="Judul"
                    />
                  </div>
                  <div className="">
                    <label htmlFor="content" className="text-md text-gray-600">
                      Content
                    </label>
                  </div>
                  <div className="">
                    <textarea
                      id="content"
                      rows="4"
                      cols="50"
                      name="content"
                      className="p-4 w-full border-2 border-gray-300 mb-5 rounded-md"
                    />
                  </div>
                  <div className="justify-between flex">
                    <button
                      type="submit"
                      className="bg-blue-700 px-6 py-3 text-white rounded-md hover:bg-blue-800"
                    >
                      Tambahkan
                    </button>
                    <Link href="/diskusi">
                      {" "}
                      <button className="bg-slate-500 px-6 py-3 text-white rounded-md hover:bg-slate-600">
                        Kembali
                      </button>{" "}
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddQuestion;
