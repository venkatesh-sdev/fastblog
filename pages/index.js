import Head from "next/head";
import React from "react";
import Header from "../components/Header";
import WelcomeCard from "../components/WelcomeCard";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Max-Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Header/>
        <WelcomeCard/>
      </div>
  );
}
