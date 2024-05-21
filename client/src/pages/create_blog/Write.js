import React from "react";
import NavbarTop from "../../components/navbar/Navbar";
import "react-quill/dist/quill.snow.css";
import { Button } from "@material-tailwind/react";

const Write = () => {
  return (
    <>
      <NavbarTop />
      <div className="w-full flex justify-center">
        <div className="container pt-20 h-screen flex items-center">
          <form className="w-full flex bg-white p-4 rounded-lg items-center">
            <div className="flex flex-col gap-3 w-full">
              <input type="file" name="Cover image" id="" className="z-10 opacity-0 cursor-pointer py-2"/>
              <p className="w-max absolute px-4 py-2 rounded-md border-2 border-gray-500 cursor-pointer font-medium">Add a cover image</p>
              <input
                type="text"
                placeholder="New post title here..."
                className="bg-transparent text-5xl font-bold"
              />
              <input
                type="text"
                placeholder="Add upto 3 tags"
                className="bg-transparent"
              />
              <textarea
                name=""
                id=""
                className="bg-transparent h-72"
                placeholder="Write your post content here"
              ></textarea>
              <Button size="sm" className="w-max">
                Create blog
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Write;
