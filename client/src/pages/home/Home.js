import React from "react";
import NavbarTop from "../../components/navbar/Navbar";
import HomeBlogCard from "../../components/cards/HomeBlogCard";

const Home = () => {
  return (
    <>
      <NavbarTop />
      <div className="home-page-hero w-full flex flex-col items-center">
        <div className="w-full flex flex-col items-center gap-1 lg:gap-3 pt-24 mb-8 px-2 lg:px-0 bg-gradient-to-b from-blue-50 via-purple-50 to-transparent">
          <h5 className="font-semibold text-2xl lg:text-4xl md:text-3xl">
            Explore All Blogs
          </h5>
          <p className="text-gray-800 text-wrap text-center text-sm lg:text-base md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, sunt.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
