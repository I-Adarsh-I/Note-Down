import React, { useEffect, useState } from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
  Avatar,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavbarTop = () => {
  const [openNav, setOpenNav] = useState(false);
  const userInfo = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

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
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to={"/profile"} className="flex items-center">
          Profile
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
              {userInfo ? (
                <>
                  <Link to={"/profile"}>
                    <Avatar
                      size="sm"
                      variant="circular"
                      alt="natali craig"
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                      className="hidden lg:inline-block border-2 border-white cursor-pointer"
                    />
                  </Link>
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
            {userInfo ? (
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
          {userInfo ? (
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
