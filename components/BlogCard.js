import Image from "next/image";
import Link from "next/link";
import React from "react";
import { urlBuilder } from "../santiy";

const BlogCard = ({post}) => {
   const image =  urlBuilder(post.mainImage).url()
  return (
    <React.Fragment>
      <Link
        href="/"
        className="flex flex-col items-center bg-green-200 border rounded-lg shadow-md md:flex-row md:max-w-xl transition duration-500 ease-in-out hover:bg-green-500 "
      >
        <Image
          className="object-cover w-full rounded-t-lg h-80 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={image}
          alt=""
         
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 font-serif">
            {post.title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 ">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          
        </div>
      </Link>
    </React.Fragment>
  );
};

export default BlogCard;
