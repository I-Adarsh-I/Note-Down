import React from "react";
import NavbarTop from "../../components/navbar/Navbar";
import Avatar from "@mui/material/Avatar";
import { Button } from "@material-tailwind/react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import RoomIcon from "@mui/icons-material/Room";
import TodayIcon from "@mui/icons-material/Today";
import CountCard from "../../components/cards/CountCard";
import Tag from "../../components/tags/Tag";
import AboutCard from "../../components/cards/AboutCard";

const Profile = () => {
  return (
    <div className="mt-20">
      <NavbarTop />
      <div className="profile-main">
        <div className="profile-main-top h-max flex flex-col items-center">
          <div className="avatar-bg w-full bg-gradient-to-r from-orange-100 to-purple-300 h-48"></div>
          <div className="container flex flex-col px-4 lg:px-0">
            <div className="avatar flex justify-between w-full h-16">
              <div>
                <Avatar
                  alt="Remy Sharp"
                  src="https://img.freepik.com/free-photo/medium-shot-male-flight-attendant-posing_23-2150312701.jpg"
                  // variant="circle"
                  sx={{
                    width: 108,
                    height: 108,
                    position: "relative",
                    top: -56,
                  }}
                />
              </div>
              <div className="flex justify-center items-center gap-3">
                <Button
                  variant="outlined"
                  size="sm"
                  className="p-1 border-gray-300"
                >
                  <MoreVertIcon />
                </Button>
                <Button
                  variant="gradient"
                  size="sm"
                  className="capitalize px-5"
                >
                  <span>Follow</span>
                </Button>
              </div>
            </div>
            <div className="user-info-sec pb-5 border-b flex flex-col lg:flex-row md:flex-row lg:justify-between">
              <div className="lg:w-1/2">
                <h4 className="text-2xl font-semibold">Full name</h4>
                <p className="font-base text-wrap text-gray-800 w-full">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt ratione ab odio.
                </p>
                <div className="flex gap-3">
                  <p className="text-sm text-gray-700 font-normal">
                    <span>@</span>Username
                  </p>
                  <div className="flex gap-1 items-center">
                    <RoomIcon sx={{ color: "gray", fontSize: "18px" }} />
                    <p className="text-sm text-gray-700 font-normal">
                      Location
                    </p>
                  </div>
                  <div className="flex gap-1 items-center">
                    <TodayIcon sx={{ color: "gray", fontSize: "18px" }} />
                    <p className="text-sm text-gray-700 font-normal">
                      Joining date
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 flex lg:justify-end gap-4 mt-3 lg:mt-0">
                <CountCard
                  bgColor={"bg-blue-50"}
                  title={"Blogs"}
                  count={"32"}
                  countColor={"text-blue-900"}
                />
                <CountCard
                  bgColor={"bg-purple-50"}
                  title={"Featured"}
                  count={"5+"}
                  countColor={"text-pink-900"}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="profile-main-bot flex justify-center px-4 lg:px-0">
          <div className="container flex lg:flex-row flex-col justify-between gap-0 lg:gap-8">
            <div className="blog-sec w-full lg:w-3/5">
              <p className="text-gray-800 text-lg font-medium mt-4">
                All Blogs
              </p>
              
            </div>
            <div className="interest-sec w-full lg:w-1/3 border-l px-5">
              <p className="text-gray-800 text-lg font-medium mt-4 ">
                About
              </p>
              <div className="flex flex-col gap-2">
                <AboutCard
                  aboutText={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
                  consequuntur quisquam, harum quae eum doloribus quo fugiat eaque veniam
                  repellendus consectetur quas, ducimus minima, quidem optio corrupti
                  pariatur excepturi tempore.`}
                  img={
                    "https://images.unsplash.com/photo-1598770220477-cec551a23f53?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                />
                <div className="flex flex-wrap gap-2">
                  <Tag tagContent={"MongoDB"} />
                  <Tag tagContent={"React.js"} />
                  <Tag tagContent={"Next.js"} />
                  <Tag tagContent={"SQL"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
