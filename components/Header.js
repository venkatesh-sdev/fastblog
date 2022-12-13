import Link from "next/link";
import React from "react";

import { motion } from "framer-motion";



const Header = () => {
  return (
    <div className="bg-gray-800  w-screen z-50 select-none ">
      <header
        className="flex items-center justify-between max-w-7xl mx-auto p-2 md:p-5 uppercase overflow-hidden"
      >
        <div>
          <Link href="/" className="flex">

            <h1 className="text-2xl font-bold text-gray-100 hover:animate-pulse hover:scale-105 transition duration-75">
              MaxBlog
            </h1>
          </Link>
        </div>
        <div className="space-x-5 items-center text-gray-300 hidden md:inline-flex gap-5">
          <Link
            href="/"
            className="text-sm uppercase hover:text-skin-textColor hover:scale-105 cursor-pointer  font-medium transition ease-in duration-75"
          >
            Articles
          </Link>
          <Link
            href="/"
            className="text-sm uppercase hover:text-skin-textColor hover:scale-105 cursor-pointer font-medium transition ease-in duration-75"
          >
            Categories
          </Link>
          <Link
            href="/"
            className="text-sm uppercase rounded-full text-white bg-skin-bgColor px-3 py-1 hover:scale-105 cursor-pointer font-medium transition ease-in duration-75"
          >
            Follow
          </Link>
        </div>
        <div className="flex items-center  md:space-x-5 text-skin-textColor transition-all">
          <Link
            href="/"
            className=" cursor-pointer hover:text-white hover:bg-skin-bgColor px-4 py-1 rounded-full transition ease-in duration-75 text-xs sm:text-[15px]"
          >
            Sign-In
          </Link>
          <Link
            href="/"
            className="border rounded-full border-green-600 px-4 py-1  items-center flex justify- cursor-pointer hover:text-white hover:bg-skin-bgColor transition ease-in duration-75 text-xs sm:text-[15px]"
          >
            Get Started
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
