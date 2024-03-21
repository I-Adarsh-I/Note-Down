import React from "react";
import NavbarTop from "../../components/navbar/Navbar";

const Wait = () => {
  return (
    <div>
    <NavbarTop />
      <div className="h-auto flex align-center flex-col">
        <h4 className="mt-24">
          Welcome to
          <em> Note Down</em>
        </h4>
        <p>
          Know about author -{" "}
          <a
            href="https://adarshsingh.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="underline text-blue-600"
          >
            Adarsh Singh
          </a>
        </p>
      </div>
    </div>
  );
};

export default Wait;
