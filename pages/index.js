import Head from "next/head";
import React from "react";
import Header from "../components/Header";

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Magic-Blogs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      
      
    </React.Fragment>
  );
}
