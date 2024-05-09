import React from "react";
import NavbarTop from "../../components/navbar/Navbar";
import HomeBlogCard from "../../components/cards/HomeBlogCard";
import Tag from "../../components/tags/Tag";
import ProfileBlogCard from "../../components/cards/ProfileBlogCard";
import AboutCard from "../../components/cards/AboutCard";
import { Button } from "@material-tailwind/react";
import { Avatar } from "@mui/material";

const Home = () => {
  return (
    <>
      <NavbarTop />
      <div className="home-page-hero w-full flex flex-col items-center">
        <div className="w-full flex flex-col items-center gap-1 lg:gap-3 pt-24 mb-8 px-2 lg:px-0">
          <h5 className="font-semibold text-2xl lg:text-4xl md:text-3xl">
            Home
          </h5>
          <p className="text-gray-800 text-wrap text-center text-sm lg:text-base md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, sunt.
          </p>
        </div>
        <div className="home-main-bot flex justify-center px-4 lg:px-0">
          <div className="container flex lg:flex-row flex-col-reverse justify-between gap-0 lg:gap-8">
            <div className="blog-sec w-full lg:w-2/3">
              <p className="text-gray-800 text-lg font-medium">
                All Blogs
              </p>
              <div className="flex justify-center">
                <div className="home-blog-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-x-8 lg:gap-x-20 lg:gap-y-6">
                  <HomeBlogCard cardWidth={"max-w-[24rem]"} />
                  <HomeBlogCard cardWidth={"max-w-[24rem]"} />
                  <HomeBlogCard cardWidth={"max-w-[24rem]"} />
                  <HomeBlogCard cardWidth={"max-w-[24rem]"} />
                  <HomeBlogCard cardWidth={"max-w-[24rem]"} />
                  <HomeBlogCard cardWidth={"max-w-[24rem]"} />
                  <HomeBlogCard cardWidth={"max-w-[24rem]"} />
                  <HomeBlogCard cardWidth={"max-w-[24rem]"} />
                  <HomeBlogCard cardWidth={"max-w-[24rem]"} />
                  <HomeBlogCard cardWidth={"max-w-[24rem]"} />
                  <HomeBlogCard cardWidth={"max-w-[24rem]"} />
                  <HomeBlogCard cardWidth={"max-w-[24rem]"} />
                  <HomeBlogCard cardWidth={"max-w-[24rem]"} />
                  <HomeBlogCard cardWidth={"max-w-[24rem]"} />
                </div>
              </div>
            </div>
            <div className="right-home-sec h-screen lg:sticky top-20 w-full lg:w-1/3 lg:border-l border-gray-300 lg:px-5">
              <div className="flex flex-col gap-2">
                <div className="about-dev flex flex-col gap-2 justify-center items-center rounded-xl bg-white border border-gray-300 p-2 py-4">
                  <Avatar
                    alt="Remy Sharp"
                    src="https://img.freepik.com/free-photo/medium-shot-male-flight-attendant-posing_23-2150312701.jpg"
                    sx={{
                      width: 48,
                      height: 48,
                    }}
                  />
                  <div className="flex flex-col items-center justify-center">
                    <h3 className="text-lg font-medium">Full Name</h3>
                    <p className="text-center text-sm text-gray-500 font-medium">
                      MERN Stack developer
                    </p>
                  </div>
                  <p className="text-base text-gray-700 text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Exercitationem commodi, voluptate excepturi praesentium
                    aliquid debitis aspernatur consequatur aliquam dolore quo
                    minima sapiente, ab aut nam eius ea voluptas velit in?
                  </p>
                  <Button className="capitalize w-max">Connect with me</Button>
                </div>
                <p className="text-gray-800 text-lg font-medium mt-4 ">
                  Recommended topics
                </p>
                <div className="flex flex-wrap gap-2">
                  <Tag tagContent={"MongoDB"} fontSize={"text-sm"} />
                  <Tag tagContent={"React.js"} fontSize={"text-sm"} />
                  <Tag tagContent={"Next.js"} fontSize={"text-sm"} />
                  <Tag tagContent={"SQL"} fontSize={"text-sm"} />
                  <Tag tagContent={"MongoDB"} fontSize={"text-sm"} />
                  <Tag tagContent={"React.js"} fontSize={"text-sm"} />
                  <Tag tagContent={"Next.js"} fontSize={"text-sm"} />
                  <Tag tagContent={"SQL"} fontSize={"text-sm"} />
                  <Tag tagContent={"MongoDB"} fontSize={"text-sm"} />
                  <Tag tagContent={"React.js"} fontSize={"text-sm"} />
                  <Tag tagContent={"Next.js"} fontSize={"text-sm"} />
                  <Tag tagContent={"SQL"} fontSize={"text-sm"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
