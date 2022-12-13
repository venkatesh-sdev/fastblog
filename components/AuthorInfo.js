import React from "react";
import { urlBuilder } from "../santiy";

import { SocialIcon } from "react-social-icons";

const AuthorInfo = ({ post }) => {
  return (
    <div className="py-5 sm:flex justify-between">
      <div className="flex items-center space-x-4 px-5">
        <img
          className="w-14 h-14 rounded-full"
          src={urlBuilder(post.author.image).url()}
          alt=""
        />
        <div className="font-medium text-gray-800">
          <div><h1 className="inline px-2">{post.author.name}</h1>
            <button className="bg-skin-bgColor text-white px-3 py-1 rounded-full">follow</button>
          </div>
          <div className="text-xs text-gray-500 py-2">
            Published at: {post.publishedAt.slice(0, 10)}
          </div>
        </div>
      </div>
      <div className="px-5">
            <SocialIcon url="https://www.instagram.com" bgColor="transparent" fgColor="gray"/>
            <SocialIcon url="https://www.youtube.com" bgColor="transparent" fgColor="gray"/>
            <SocialIcon url="https://www.twitter.com" bgColor="transparent" fgColor="gray"/>
            <SocialIcon url="https://www.linkedin.com" bgColor="transparent" fgColor="gray"/>
      </div>
    </div>
  );
};

export default AuthorInfo;
