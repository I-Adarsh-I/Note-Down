import React, { useCallback, useEffect, useState } from "react";
import NavbarTop from "../../components/navbar/Navbar";
import Avatar from "@mui/material/Avatar";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import RoomIcon from "@mui/icons-material/Room";
import TodayIcon from "@mui/icons-material/Today";
import CountCard from "../../components/cards/CountCard";
import Tag from "../../components/tags/Tag";
import ProfileBlogCard from "../../components/cards/ProfileBlogCard";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useMediaQuery, useTheme } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import moment from "moment/moment";

const Profile = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const userInfo = useSelector((state) => state.auth.user);

  const [user, setUser] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const { _id } = useParams();

  const profileHandler = useCallback(async () => {
    try {
      const resp = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/user/${_id}`
      );
      setUser(resp.data.userDetails);
    } catch (err) {
      toast.error(err.response.data.error);
      console.error(err);
    }
  }, [_id]);

  const userBlogs = useCallback(async () => {
    try {
      const resp = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/allblogsbyuser/${_id}`
      );
      setBlogs(resp.data.blogs);
    } catch (err) {
      console.error(err);
    }
  }, [_id]);

  useEffect(() => {
    profileHandler();
    userBlogs();
  }, [profileHandler, userBlogs]);

  return (
    <div className="mt-20">
      <NavbarTop />
      <div className="profile-main">
        <div className="profile-main-top h-max flex flex-col items-center">
          <div className="avatar-bg w-full bg-gradient-to-r from-orange-100 to-purple-300 h-48"></div>
          <div className="container flex flex-col px-2 md:px-0">
            <div className="avatar flex justify-between w-full h-16">
              <div>
                <Avatar
                  alt={
                    user._id === userInfo._id
                      ? userInfo.fullname
                      : user.fullname
                  }
                  src={
                    user._id === userInfo._id
                      ? userInfo.profileImg
                      : user.profileImg
                  }
                  sx={{
                    width: 108,
                    height: 108,
                    position: "relative",
                    top: -56,
                  }}
                />
              </div>
              <div className="flex justify-center items-center gap-3">
                {user._id === userInfo._id ? (
                  <>
                    <Button
                      variant="outlined"
                      size="sm"
                      className="normal-case px-3 py-1 md:px-4 md:py-2 text-xs md:text-xs rounded-full"
                      onClick={() => navigate("/addInfo")}
                    >
                      <span>Edit profile</span>
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      variant="gradient"
                      size="sm"
                      className="capitalize px-5"
                    >
                      <span>Follow</span>
                    </Button>
                  </>
                )}
              </div>
            </div>
            <div className="user-info-sec pb-5 border-b border-gray-300 flex flex-col lg:flex-row md:flex-row lg:justify-between">
              <div className="lg:w-1/2">
                <h4 className="text-2xl font-semibold">
                  {user._id === userInfo._id
                    ? userInfo.fullname
                    : user.fullname}
                </h4>
                <p className="text-xs md:text-sm text-gray-700 font-normal md:hidden">
                  <span>@</span>
                  {user._id === userInfo._id
                    ? userInfo.username
                    : user.username}
                </p>
                <p className="text-sm md:text-base text-wrap text-gray-800 w-full mt-3 md:mb-2 md:mt-0">
                  {user.bio
                    ? user._id === userInfo._id
                      ? userInfo.bio
                      : user.bio
                    : ""}
                </p>
                <div className="flex gap-3 flex-wrap py-2 md:py-0">
                  <p className="text-xs md:text-sm text-gray-700 font-normal hidden md:block">
                    <span>@</span>
                    {user._id === userInfo._id
                      ? userInfo.username
                      : user.username}
                  </p>
                  <div className="flex md:gap-1 items-center">
                    <RoomIcon
                      sx={{
                        color: "gray",
                        fontSize: isMobile ? "16px" : "18px",
                      }}
                    />
                    <p className="text-xs md:text-sm text-gray-700 font-normal">
                      Location
                    </p>
                  </div>
                  <div className="flex gap-1 items-center">
                    <TodayIcon
                      sx={{
                        color: "gray",
                        fontSize: isMobile ? "16px" : "18px",
                      }}
                    />
                    <p className="text-xs md:text-sm text-gray-700 font-normal">
                      {user.joinedOn
                        ? user._id === userInfo._id
                          ? moment(userInfo.joinedOn).format("MMM Do YY")
                          : moment(user.joinedOn).format("MMM Do YY")
                        : ""}
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex justify-start md:justify-end gap-4 mt-3 lg:mt-0">
                <CountCard
                  bgColor={"bg-purple-100"}
                  title={"Blogs"}
                  count={blogs.length}
                  countColor={"text-pink-900"}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="profile-main-bot flex justify-center px-2 md:px-0">
          <div className="container flex lg:flex-row flex-col-reverse justify-between gap-0 lg:gap-8">
            <div className="blog-sec w-full lg:w-2/3">
              <p className="text-gray-800 text-lg font-medium mt-4">
                All Blogs
              </p>
              {blogs.length === 0 ? (
                <>
                  <Card className="my-3 w-96 rounded-lg">
                    <CardBody className="pb-2">
                      <img src="/rocket.gif" alt="Get started now" />
                      <Typography
                        variant="h5"
                        color="blue-gray"
                        className="mb-2"
                      >
                        Create Blog
                      </Typography>
                      <Typography>
                        Haven't started yet🤔? <br /> Start writing your blog
                        now
                      </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                      <Link to={"/createblog"} className="inline-block">
                        <button className="bg-black no-underline group cursor-pointer relative shadow-2xl shadow-blue-900 rounded-md p-px text-xs font-semibold leading-6 text-white inline-block">
                          <span className="absolute inset-0 overflow-hidden rounded-full">
                            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                          </span>
                          <div className="relative flex space-x-2 items-center z-10 rounded-md bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
                            <span>{`Create blog`}</span>
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M10.75 8.75L14.25 12L10.75 15.25"
                              ></path>
                            </svg>
                          </div>
                          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
                        </button>
                      </Link>
                    </CardFooter>
                  </Card>
                </>
              ) : (
                <div className="flex gap-2 flex-col pb-2">
                  {blogs.map((blog, index) => {
                    return <ProfileBlogCard blog={blog} key={blog._id} />;
                  })}
                </div>
              )}
            </div>
            <div className="about-sec w-full lg:w-1/3 lg:border-l border-gray-300 lg:px-5">
              <p className="text-gray-800 text-lg font-medium mt-4 ">About</p>
              <div className="flex flex-col gap-2">
                <p className="mt-0 md:mt-2 text-gray-800 text-base">
                  {user.about
                    ? user._id === userInfo._id
                      ? userInfo.about
                      : user.about
                    : ""}
                </p>
                <div className="flex flex-wrap gap-2">
                  <Tag tagContent={"MongoDB"} fontSize={"text-xs md:text-base"} />
                  <Tag tagContent={"React.js"} fontSize={"text-xs md:text-base"} />
                  <Tag tagContent={"Next.js"} fontSize={"text-xs md:text-base"} />
                  <Tag tagContent={"SQL"} fontSize={"text-xs md:text-base"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Profile;
