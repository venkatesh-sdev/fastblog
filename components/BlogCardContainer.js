import React from "react";
import {BlogCard} from '../components'

const BlogCardContainer = ({posts}) => {
  return (
    <div className="grid max-w-7xl mx-auto gap-5 py-5">
      {posts.map((post) => (
        <div key={post._id}>
          <BlogCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogCardContainer;
