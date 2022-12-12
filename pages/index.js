import Head from "next/head";
import React from "react";
import { Header, WelcomeCard, BlogCardContainer } from "../components";

import { sanityClient } from "../santiy";

const index = ({ posts }) => {
  console.log(posts);
  return (
    <div className="overflow-x-hidden">
      <Head>
        <title>Max-Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WelcomeCard />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 p-5 gap-5 mx-auto max-w-7xl justify-center items-center">
          <BlogCardContainer posts={posts} heading="Recently Updated" />
          <BlogCardContainer posts={posts} heading="Most popular" />
          <BlogCardContainer posts={posts} heading="Recommended" />
          <BlogCardContainer posts={posts} heading="Others" />
        </div>
    </div>
  );
};

export default index;

//get the data from the sanity api

export const getServerSideProps = async () => {
  try {
    // query the data
    const query = `*[_type=="post"]{
    _id,
      title,
      slug,
      author->{
        name,
        image
      },
      mainImage,
      publishedAt,
      body
  }`;

    // fetch the data from the sanity client

    const posts = await sanityClient.fetch(query);
    return {
      props: {
        posts,
      },
    };
  } catch (error) {
    console.log(error);
  }
};
