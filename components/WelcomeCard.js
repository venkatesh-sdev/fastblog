import React from "react";

const WelcomeCard = () => {
  return (
    <div className="bg-gradient-to-r to-green-500 via-green-400  from-green-300 text-gray-800 w-screen">
    <div className="flex flex-col md:flex-row items-center justify-between  max-w-7xl mx-auto ">
        <div className="">
            <h1 className="text-[8rem] md:text-[14rem] font-serif px-5">M<span className="text-5xl uppercase">ax</span></h1>
            
        </div>

        <div className=" p-2  flex flex-col">
            <h1 className="text-6xl text-center p-5 font-bold font-serif">MaxBlog</h1>
            <p className="w-[90%] mx-auto text-xl font-medium text-center sm:text-2xl">MaxBlog is a Place to Create, Read, Publish a Wonderful Blogs </p>
            <p className="w-[90%] mx-auto text-center  my-5 text-xs sm:text-md uppercase ">Post your Blogs and Read others find the mistakes and comment it out.</p>
        </div>
    </div>
    </div>
    
    
  );
};

export default WelcomeCard;