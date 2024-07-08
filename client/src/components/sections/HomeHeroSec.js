import React from "react";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const HomeHeroSec = () => {
  return (
    <>
      <div className="container w-full lg:h-screen flex flex-col items-center justify-center gap-3 lg:gap-5 pt-24 mb-8 px-2 lg:px-0 bg-custom-background">
        <p className="text-xs md:text-base bg-blue-100 p-2 py-1 md:py-inherit px-4 rounded-full border border-cyan-500 text-sm">
          Lorem ipsum dolor sit amet.
        </p>
        <div className="hero-home flex flex-col justify-center items-center gap-4">
          <h1 className="font-semibold text-center text-3xl md:text-4xl lg:text-6xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit - Ratione,
            quidem.
          </h1>
          <p className="text-gray-800 text-wrap text-center text-sm md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, sunt.
          </p>
        </div>
        <div className="home-buttons flex gap-4">
          <Button className="capitalize text-xs lg:text-sm font-normal">
            <Link to={'/createblog'}>
              Write Blog
            </Link>
          </Button>
          <Button
            variant="outlined"
            className="capitalize bg-white border border-gray-300 text-xs lg:text-sm font-normal"
          >
            Show all blogs
          </Button>
        </div>
      </div>
    </>
  );
};

export default HomeHeroSec;
