import Image from "next/image";
import Link from "next/link";
import React from "react";
import { urlBuilder } from "../santiy";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
// bg-gradient-to-tr from-green-600 via-green-400 to-green-300
const BlogCard = ({ post }) => {
  const image = urlBuilder(post.mainImage).url();
  return (
    <React.Fragment>
      <div class="max-w-sm  rounded-lg shadow-md bg-gray-800 border-gray-700">
        <Link href="/">
          <img class="rounded-t-lg" src={image} alt="" />
        </Link>
        <div class="p-5">
          <Link href="/">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">
              {post.title}
            </h5>
          </Link>
          <p class="mb-3 font-normal text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <Link
            href="/"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-skin-bgColor rounded-lg hover:bg-skin-hoverColor focus:ring-4 focus:outline-none hover:bg-skin-hoverColor focus:ring-blue-800"
          >
            Read more
            <svg
              aria-hidden="true"
              class="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BlogCard;
