import React, { useState, useRef } from "react";
import NavbarTop from "../../components/navbar/Navbar";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Button } from "@material-tailwind/react";

const Write = () => {
  const [editorHtml, setEditorHtml] = useState("");
  const quillRef = useRef(null);

  const toolbarOptions = [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image"],
    ["clean"],
  ];

  return (
    <>
      <NavbarTop />
      <div className="container mt-56">
        <div className="w-screen flex flex-col items-center">
          <ReactQuill
            ref={quillRef}
            theme="snow"
            value={editorHtml}
            onChange={setEditorHtml}
            modules={{
              toolbar: toolbarOptions,
            }}
          />
          <Button onClick={() => console.log(editorHtml)} color="black">
            Save
          </Button>
        </div>
      </div>
    </>
  );
};

export default Write;
