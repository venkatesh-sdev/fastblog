import Image from "next/image";
import Link from "next/link";
import React from "react";
import { urlBuilder } from "../santiy";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const BlogCard = ({ post }) => {
  const image = urlBuilder(post.mainImage).url();
  return (
    <React.Fragment>
      <Link
        href="/"
        className="flex flex-col items-center bg-gradient-to-tr from-green-600 via-green-400 to-green-300 border rounded-lg shadow-md md:flex-row md:max-w-xl transition-all duration-500 hover:bg-gradient-to-tr hover:shadow-gray-600  hover:from-green-400 hover:to-green-600 hover:box-shadow-2xl p-2 "
      >
        <img
          className="object-cover w-full rounded-t-lg h-[180px] sm:h-[250px] md:h-auto md:w-48 md:rounded-lg "
          alt="no Image found"
          src={image}
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
