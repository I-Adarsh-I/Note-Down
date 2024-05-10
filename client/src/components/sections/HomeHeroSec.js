import React from "react";
import { Button } from "@material-tailwind/react";

const HomeHeroSec = () => {
  return (
    <>
      <div className="container w-full lg:h-screen flex flex-col items-center justify-center gap-3 lg:gap-5 pt-24 mb-8 px-2 lg:px-0 bg-custom-background">
        <p className="text sm bg-blue-100 p-2 px-4 rounded-full border border-cyan-500 text-sm">
          Lorem ipsum dolor sit amet.
        </p>
        <div className="hero-home flex flex-col justify-center items-center gap-4">
          <h1 className="font-semibold text-center text-3xl lg:text-6xl md:text-4xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit - Ratione,
            quidem.
          </h1>
          <p className="text-gray-800 text-wrap text-center text-sm lg:text-lg md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, sunt.
          </p>
        </div>
        <div className="home-buttons flex gap-4">
          <Button className="capitalize text-xs lg:text-sm font-normal">
            Write Blog
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
