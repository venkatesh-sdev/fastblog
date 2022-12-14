import React from "react";
import {BlogCard} from '../components'

const BlogCardContainer = ({posts,heading}) => {
  return (
    <div className="grid gap-5 justify-center">
    <h1 className="text-center text-gray-800 font-serif font-bold text-2xl sm:text-4xl my-5 items-center">{heading}</h1>
      {posts.map((post) => (
        <div key={post._id}>
          <BlogCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogCardContainer;
