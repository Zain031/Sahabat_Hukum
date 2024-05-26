import React from "react";
const Tambah = () => {
  return (
    <>
    <div>
      <button
        data-ripple-light="true"
        data-dialog-target="dialog"
        style={{ marginRight: 400 }}
        class="middle none center mr-4 rounded-lg bg-blue-950 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md"
      >
        Tambah Pertanyaan
      </button>
      </div>



      <div
        data-dialog-backdrop="dialog"
        data-dialog-backdrop-close="true"
        class="pointer-events-none fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 opacity-0 backdrop-blur-sm transition-opacity duration-300"
      >
        <div
          data-dialog="dialog"
          class="relative m-4 w-2/5 min-w-[40%] max-w-[40%] rounded-lg bg-white font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased shadow-2xl"
        >
          <div class="flex shrink-0 items-center p-4 font-sans text-2xl font-semibold leading-snug text-blue-gray-900 antialiased">
            Tambah Pertanyaan
          </div>
          <div className="my-5 mr-5 ml-5 flex justify-center">
            <form>
              <div className="">
                <div className="">
                  <input
                    type="text"
                    id="id_number"
                    autoComplete="off"
                    name="description"
                    className="h-3 p-6 w-full border-2 border-gray-300 mb-5 rounded-md"
                    placeholder="Judul"
                  />
                </div>
                <div className="flex gap-4">
                  <div>
                    <div></div>
                    <div className="">
                      <textarea
                        className="pt-2 pl-4 border-2 border-slate-200"
                        name=""
                        id=""
                        rows="5"
                        cols="70"
                        placeholder="Masukan Pertanyaan "
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="flex shrink-0 flex-wrap items-center justify-end p-4 text-blue-gray-500">
            <button
              data-ripple-dark="true"
              data-dialog-close="true"
              class="middle none center mr-1 rounded-lg py-3 px-6 font-sans text-xs font-bold uppercase text-blue-950 transition-all"
            >
              Kembali
            </button>
            <button
              data-ripple-light="true"
              data-dialog-close="true"
              class="middle none center rounded-lg bg-blue-950 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md"
            >
              Kirim
            </button>
          </div>
        </div>
      </div>

      <script src="https://unpkg.com/@material-tailwind/html@latest/scripts/dialog.js"></script>

      <link
        rel="stylesheet"
        href="https://unpkg.com/@material-tailwind/html@latest/styles/material-tailwind.css"
      />

    </>
  );
};

export default Tambah;
