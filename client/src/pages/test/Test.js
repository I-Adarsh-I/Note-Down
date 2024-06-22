import React, { useState } from "react";
import "./test.css";
import NavbarTop from "../../components/navbar/Navbar";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styles from "./QuillEditor.module.css";
import { Button } from "@material-tailwind/react";

const Test = () => {
  const [value, setValue] = useState("");

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

  const handleChange = (content, delta, source, editor) => {
    setValue(content);
  };

  const handleGetHTML = () => {
    if (value) {
      console.log(value);
    }
  };

  return (
    <>
      <NavbarTop />
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="w-full container h-3/4">
          <ReactQuill
            theme="snow"
            modules={modules}
            formats={formats}
            placeholder="Write your blog here"
            value={value}
            onChange={handleChange}
          />
          <Button onClick={handleGetHTML}>Get HTML Content</Button>
          <div className="mt-4">
            <h3>HTML Content:</h3>
            <div
              className={`quill-content ${styles["quill-content"]}`}
              dangerouslySetInnerHTML={{ __html: value }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Test;
