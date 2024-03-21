import React from "react";
import NavbarTop from "../../components/navbar/Navbar";
import { Typography } from "@mui/material";

const Home = () => {
  return (
    <div className="">
      <NavbarTop />
      <div className="flex justify-center">
        <div className="container w-full ">
          <Typography variant="h3" mt={"100px"}>
            Home
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Home;
