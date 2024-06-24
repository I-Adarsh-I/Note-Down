import React, { useRef, useState } from "react";
import NavbarTop from "../../components/navbar/Navbar";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
// import styles from "./QuillEditor.module.css";
import { Button } from "@material-tailwind/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./writeBlog.css";

const Write = () => {
  const [blogContent, setBlogContent] = useState("");
  const [blogTitle, setBlogTitle] = useState("");
  const quillRef = useRef(null);
  const token = localStorage.getItem("Auth token");
  const navigate = useNavigate();

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
  ];

  const handleChange = (content) => {
    setBlogContent(content);
  };

  // const handleGetHTML = () => {
  //   if (value) {
  //     console.log(value);
  //   }
  // };

  const handeBlogSubmit = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "Application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const request = {
      blogTitle,
      blogContent
    };
    try {
      const resp = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/newblog`,
        request,
        config
      );
      console.log(resp);
      if (resp.status === 201) {
        toast.success(resp.data.message);
        return navigate("/profile");
      }
    } catch (err) {
      toast.error(err.response.data.error);
      console.error(err);
    }
  };

  return (
    <>
      <NavbarTop />
      <div className="flex flex-col items-center justify-center gap-4 pt-20 min-h-screen w-full">
        <form
          method="POST"
          onSubmit={handeBlogSubmit}
          className="container flex flex-col gap-5 bg-white rounded-lg mb-2"
        >
          <div className="image-area px-4 py-4">
            <input
              type="file"
              name="Cover image"
              id="cover-image"
              className="z-10 opacity-0 cursor-pointer py-2 absolute"
            />
            <Button
              variant="outlined"
              size="sm"
              className="cursor-pointer mb-3"
            >
              Add a cover image
            </Button>
            {/* <img
                className="h-80 w-full object-cover object-center rounded-lg"
                src="https://images.unsplash.com/photo-1718027808460-7069cf0ca9ae?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="random"
              /> */}
          </div>
          <div className="header-section">
            <input
              type="text"
              placeholder="Your blog's heading"
              className="px-4 py-2 text-4xl font-semibold placeholder:text-4xl placeholder:font-bold w-full mb-3 selection:bg-blue-200"
              value={blogTitle}
              onChange={(e) => setBlogTitle(e.target.value)}
            />
          </div>
          <div className="text-editor-section">
            <ReactQuill
              ref={quillRef}
              theme="snow"
              modules={modules}
              formats={formats}
              placeholder="Start writing your blog here..."
              value={blogContent}
              onChange={handleChange}
              className="selection:bg-blue-200"
            />
            {/* <div className="mt-4">
                <h3>HTML Content:</h3>
                <div
                  className={`quill-content ${styles["quill-content"]}`}
                  dangerouslySetInnerHTML={{ __html: value }}
                />
              </div> */}
          </div>
          <div className="submit-btn px-4 pb-4">
            <Button variant="gradient" size="sm" type="submit">
              Create Blog
            </Button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default Write;
