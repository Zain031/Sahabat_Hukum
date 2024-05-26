"use client";
import About from "@/components/about";
import Navbar from "@/components/navbar";
import Modal from "@/components/modal";
import React, { Suspense } from "react";

const page = () => {
  return (
    <div className="bg-white">
      <Suspense>
      <About />
      <Modal />
      </Suspense>
    </div>
  );
};
export default page;
