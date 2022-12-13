import React from "react";
import { BlogCard } from "../components";

const LinkedBlogCardContainer = ({ posts, heading }) => {
  return (
    <React.Fragment>
      {" "}
      <h1 className="text-center text-gray-800 font-serif font-bold text-2xl sm:text-4xl my-5 items-center">
        {heading}
      </h1>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center">
        {posts.map((post) => (
          <div key={post._id}>
            <BlogCard post={post} />
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default LinkedBlogCardContainer;
