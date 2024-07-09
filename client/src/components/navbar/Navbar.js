import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Spinner,
} from "@material-tailwind/react";
import {
  logoutRequested,
  logoutSuccessull,
} from "../../redux/slices/UserSlice";
import { Avatar } from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';

const NavbarTop = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [openNav, setOpenNav] = useState(false);
  const userInfo = useSelector((state) => state.auth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const profileMenuItems = [
    {
      label: "My Profile",
      link: `/profile/${userInfo.user._id}`,
    },
    {
      label: "Edit Profile",
      link: `/addinfo`,
    },
    {
      label: "Sign Out",
      link: "",
    },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const logoutHandler = () => {
    dispatch(logoutRequested());
    localStorage.removeItem("persist:root");
    navigate("/login");
    dispatch(logoutSuccessull());
  };
  useEffect(() => {
    if (!userInfo.isLoggedIn) {
      navigate("/login");
    }
  }, [userInfo.isLoggedIn, navigate]);

  const navList = (
    <ul className="mt-2 px-3 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to={"/createblog"} className="flex items-center">
          Write
        </Link>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to={"/home"} className="flex items-center">
          All blogs
        </Link>
      </Typography>
    </ul>
  );

  //Side navbar
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 300 }} role="presentation" onClick={toggleDrawer(false)}>
      <div className="flex items-center justify-between px-2 py-2">
        <p>Note down</p>
        <Button variant="text" size="sm">
          <svg
            fill="none"
            className="h-5 w-5"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </Button>
      </div>
      <Divider />
      {userInfo && userInfo.isLoading ? 
      (
        <>
        <div className="flex flex-col justify-center gap-2 px-3 py-2">
        <p className="text-md font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
          laudantium?
        </p>
        <p className="text-sm text-blue-gray-500 font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, nobis?
        </p>
        <div className="flex flex-col gap-1">
          <Button
            variant="outlined"
            size="sm"
            className="normal-case font-normal"
          >
            Create account
          </Button>
          <Button variant="text" size="sm" className="normal-case font-normal">
            Log in
          </Button>
        </div>
      </div>
      <Divider />
        </>
      ):
      (
        <>
        </>
      )}
      
      <List>{navList}</List>
      <div className="flex flex-col gap-1 absolute bottom-3 px-3">
        <p className="text-sm font-normal text-blue-gray-700">
          Connect with developer:
        </p>
        <div className="links flex gap-2 items-center">
          <XIcon fontSize="small" className="text-gray-800"/>
          <GitHubIcon fontSize="small" className="text-gray-800"/>
        </div>
      </div>
    </Box>
  );

  return (
    <>
      <Navbar className="fixed top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <div className="flex items-center gap-2">
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={toggleDrawer(true)}
            >
              {openNav ? (
                <svg
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
            <Typography className="mr-4 cursor-pointer py-1.5 font-medium">
              <Link to={"/home"}>Note Down</Link>
            </Typography>
          </div>

          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1">
              {userInfo.isLoggedIn ? (
                <>
                  <Menu
                    open={isMenuOpen}
                    handler={setIsMenuOpen}
                    placement="bottom-end"
                  >
                    <MenuHandler>
                      <Button
                        variant="text"
                        color="blue-gray"
                        className="flex items-center rounded-full p-0"
                      >
                        <Avatar
                          variant="circular"
                          size="sm"
                          alt={userInfo.user.fullname}
                          className="p-0"
                          src={userInfo.user.profileImg}
                        />
                      </Button>
                    </MenuHandler>
                    <MenuList className="p-1">
                      {profileMenuItems.map(({ label, link }, key) => {
                        const isLastItem = key === profileMenuItems.length - 1;
                        return (
                          <Link
                            to={link}
                            key={label}
                            className="flex gap-2 items-center"
                          >
                            <MenuItem
                              onClick={closeMenu}
                              className={`flex items-center gap-2 rounded w-full ${
                                isLastItem
                                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                                  : ""
                              }`}
                            >
                              <Typography
                                as="span"
                                variant="small"
                                className="font-normal"
                                color={isLastItem ? "red" : "inherit"}
                                onClick={isLastItem ? logoutHandler : () => {}}
                              >
                                {label}
                              </Typography>
                              {isLastItem && userInfo.isLoading ? (
                                <Spinner className="h-4 w-4" color="red" />
                              ) : (
                                ""
                              )}
                            </MenuItem>
                          </Link>
                        );
                      })}
                    </MenuList>
                  </Menu>
                </>
              ) : (
                <>
                  <Link to={"/login"}>
                    <Button
                      variant="text"
                      size="md"
                      className="hidden lg:inline-block"
                    >
                      Sign In
                    </Button>
                  </Link>
                  <Link to={"/register"}>
                    <Button
                      variant="gradient"
                      size="md"
                      className="hidden lg:inline-block"
                    >
                      Register
                    </Button>
                  </Link>
                </>
              )}
            </div>
            {userInfo.isLoggedIn ? (
              <></>
            ) : (
              <>
                <Link to={"/login"} className="capitalize font-normal">
                  <Button
                    variant="gradient"
                    size="md"
                    className="inline-block lg:hidden"
                  >
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </Navbar>
      {/* <div className="side-nav-bar">
        <div className="w-full h-screen absolute z-10 bg-black opacity-50"></div>
        <div className="h-screen w-3/4 bg-white z-20 absolute bottom-0"></div>
      </div> */}
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  );
};

export default NavbarTop;
