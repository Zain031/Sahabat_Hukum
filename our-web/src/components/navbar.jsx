"use client";
import { logoutAction } from "@/actions/logout";
import Cookies from "js-cookie";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const isLogIn = Cookies.get("Authorization");
  return (
    <>
      <div className="border-b-2 sticky top-0 z-100 ">
        <div className="lg:mx-20 bg-base-100   ">
          <div className="navbar">
            <div className="navbar-start ">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link
                      href="/diskusi"
                      className="hover:text-blue-950 font-medium"
                    >
                      {" "}
                      Diskusi
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/advokat"
                      className="hover:text-blue-950 font-medium"
                    >
                      {" "}
                      Advokat
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/chat-list"
                      className="hover:text-blue-950 font-medium"
                    >
                      {" "}
                      Chat
                    </Link>
                  </li>
                </ul>
              </div>
              <Link href="/">
                <div className="flex">
                  <div>
                    <img className="w-10 p-1" src="../../sahabat.png" alt="" />
                  </div>
                  <div className="flex items-center">
                    <img className="h-10" src="../../sahabat1.png" alt="" />
                  </div>
                </div>
              </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1 gap-3">
                <li>
                  <Link
                    href="/diskusi"
                    className="hover:text-blue-950 font-medium"
                  >
                    {" "}
                    Diskusi
                  </Link>
                </li>
                <li>
                  <Link
                    href="/advokat"
                    className="hover:text-blue-950 font-medium"
                  >
                    {" "}
                    Advokat
                  </Link>
                </li>
                <li>
                  <Link
                    href="/chat-list"
                    className="hover:text-blue-950 font-medium"
                  >
                    {" "}
                    Chat
                  </Link>
                </li>
              </ul>
            </div>
            <div className="navbar-end">
              {!isLogIn ? (
                <Link
                  href="/login"
                  className="btn font-bold hover:text-blue-950"
                >
                  {" "}
                  Login
                </Link>
              ) : (
                <div>
                  <button
                    onClick={() => {
                      logoutAction();
                    }}
                    className="btn font-bold hover:text-blue-950"
                  >
                    {" "}
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
