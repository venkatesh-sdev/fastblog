import Head from "next/head";
import React from "react";
import BlogCard from "../components/BlogCard";
import BlogCardContainer from "../components/BlogCardContainer";
import Header from "../components/Header";
import WelcomeCard from "../components/WelcomeCard";

import { sanityClient } from "../santiy";

const index = ({ posts }) => {
  console.log(posts);
  return (
    <div className="overflow-x-hidden">
      <Head>
        <title>Max-Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="sticky top-0 z-50"><Header /></div>
      <WelcomeCard />
      <BlogCardContainer posts={posts}/>
      <BlogCardContainer posts={posts}/>
      <BlogCardContainer posts={posts}/>
      <BlogCardContainer posts={posts}/>
      
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
