import React from 'react'
import NavbarTop from "../../components/navbar/Navbar";
import HomeBlogCard from "../../components/cards/HomeBlogCard";

const AllBlogs = () => {
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
        <div className="container flex gap-6">
          <div className="r-sec w-full lg:px-0 px-2 lg:px-0">
            <div className="head py-2">
              <p className="text-lg lg:text-xl md:text-xl font-medium w-max text-gray-900">
                Recents
              </p>
              <div className="flex justify-center">
                <div className="home-blog-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-8 lg:gap-x-20 lg:gap-y-6">
                  <HomeBlogCard />
                  <HomeBlogCard />
                  <HomeBlogCard />
                </div>
              </div>
            </div>
            <div className="featured-blogs"></div>
          </div>
          <div className="l-sec hidden">
            <p>Left</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AllBlogs
