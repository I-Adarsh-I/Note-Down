import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
  Avatar,
} from "@material-tailwind/react";
import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { Spinner } from "@material-tailwind/react";
import {
  logoutRequested,
  logoutSuccessull,
} from "../../redux/slices/UserSlice";

const profileMenuItems = [
  {
    label: "My Profile",
    link: "/profile",
  },
  {
    label: "Edit Profile",
    link: "/profile",
  },
  {
    label: "Sign Out",
    link: "",
  },
];

const NavbarTop = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [openNav, setOpenNav] = useState(false);
  const userInfo = useSelector((state) => state.auth);

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

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
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
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

  return (
    <div>
      <Navbar className="fixed top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography className="mr-4 cursor-pointer py-1.5 font-medium">
            <Link to={"/home"}>Note Down</Link>
          </Typography>
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
                          alt={userInfo.fullname}
                          className="p-0"
                          src={userInfo.profileImg}
                        />
                      </Button>
                    </MenuHandler>
                    <MenuList className="p-1">
                      {profileMenuItems.map(({ label, link }, key) => {
                        const isLastItem = key === profileMenuItems.length - 1;
                        return (
                          <Link to={link} key={label} className="flex gap-2 items-center">
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
              <>
                <IconButton
                  variant="text"
                  className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                  ripple={false}
                  onClick={() => setOpenNav(!openNav)}
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
              </>
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
        <Collapse open={openNav}>
          {userInfo.isLoggedIn ? (
            <>{navList}</>
          ) : (
            <>
              <div className="flex items-center gap-x-1">
                <Link to={"/login"}>
                  <Button fullWidth variant="text" size="sm" className="">
                    <span>Sign In</span>
                  </Button>
                </Link>
                <Link to={"/register"}>
                  <Button fullWidth variant="gradient" size="sm" className="">
                    <span>Register</span>
                  </Button>
                </Link>
              </div>
            </>
          )}
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarTop;
