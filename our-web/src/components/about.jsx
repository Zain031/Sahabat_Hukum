import React from "react";

const About = () => {
  return (
    <>
      <div className="  mx-20  flex justify-center mt-20 gap-10 bg-white">
        <div>
          <img
            className="rounded-lg mr-10"
            style={{ width: 800 }}
            src="../../10.jpg"
            alt=""
          />
        </div>
        <div>
          <div>
            <img
              className="mb-10 ml-10"
              style={{ width: 500 }}
              src="../../8.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

{
  /* <div className="ml-10  ">
          <p className=" text-slate-700 leading-[4rem] text-5xl font-bold font-sans bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text ">
            Layanan hukum profesional  menjadi lancar melalui layanan
            sahabat hukum 
          </p>
          <p className="text-4xl font-semibold text-slate-500 leading-[3rem]">
          Semua layanan di Sahabat Hukum <br /> ditangani oleh tim yang tersertifikasi dan ahli di bidangnya
          </p>
        </div> */
}
