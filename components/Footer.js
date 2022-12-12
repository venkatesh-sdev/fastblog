import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer class="p-4 bg-white  shadow md:px-6 md:py-8 dark:bg-gray-900">
      <div class="sm:flex sm:items-center sm:justify-between">
        <Link href="/" class="flex items-center mb-4 sm:mb-0">
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            MaxBlog
          </span>
        </Link>
        <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <Link href="/" class="mr-4 hover:underline md:mr-6 ">
              About
            </Link>
          </li>
          <li>
            <a href="/" class="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <Link href="/" class="mr-4 hover:underline md:mr-6 ">
              Licensing
            </Link>
          </li>
          <li>
            <Link href="/" class="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022{" "}
        <a href="https://flowbite.com/" class="hover:underline">
         VENKAT@
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
