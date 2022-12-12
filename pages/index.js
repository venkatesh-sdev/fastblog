import Head from "next/head";
import React from "react";
import {Header,WelcomeCard,BlogCardContainer} from '../components'

import { sanityClient } from "../santiy";

const index = ({ posts }) => {
  console.log(posts);
  return (
    <div className="overflow-x-hidden">
      <Head>
        <title>Max-Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
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
