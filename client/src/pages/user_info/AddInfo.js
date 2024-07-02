import React, { useState } from "react";
// import NavbarTop from "../../components/navbar/Navbar";
import { Avatar, Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material";

const AddInfo = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      {/* <NavbarTop /> */}
      <div className="info-main h-max w-full flex justify-center items-center sm:my-4 md:my-4 lg:my-4">
        <div className="container h-max w-full flex items-center justify-center">
          <form
            className="bg-white p-3 lg:p-4 rounded-none sm:rounded-md md:rounded-lg lg:rounded-lg w-full lg:w-5/6"
            method="post"
          >
            <div className="header pb-2 border-b-2">
              <h3 className="text-2xl lg:text-3xl">About you</h3>
              <p className="text-xs lg:text-sm text-blue-gray-400 font-semibold">
                This information will be displayed publicly so be careful what
                you share.
              </p>
            </div>
            <div className="body flex flex-col gap-3 py-4">
              <div className="col-span-full">
                <label
                  for="photo"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Photo
                </label>
                <div className="mt-1 flex items-center gap-x-3">
                  <Avatar
                    src="https://docs.material-tailwind.com/img/face-2.jpg"
                    size="sm"
                    alt="Name_of_user"
                  />
                  <button
                    type="button"
                    className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  >
                    Change
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="" className="text-sm font-semibold">
                  Username <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="@your_username"
                  className="border border-slate-500 p-1 rounded-md text-sm focus:ring-1"
                  required
                />
                <p className="text-xs lg:text-sm text-gray-500">
                  Your username will make you a new personality. People will be
                  able to search you with your username.
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="" className="text-sm font-semibold">
                  Bio <span className="text-red-500">*</span>
                </label>
                <textarea
                  type="text"
                  placeholder=""
                  className="border border-slate-500 p-1 rounded-md h-36 text-sm focus:ring-1"
                />
                <p className="text-xs lg:text-sm text-gray-500 text-wrap">
                  Write a unique bio that can make a strong impression on
                  people.
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="" className="text-sm font-semibold">
                  URLs
                </label>
                <p className="text-xs lg:text-sm text-gray-500">
                  Add links to your website or blogs
                </p>
                <input
                  type="url"
                  placeholder="Portfolio: https://example.com"
                  className="text-xs lg:text-sm border border-slate-500 p-1 rounded-md text-sm focus:ring-1"
                />
                <input
                  type="url"
                  placeholder="Blog: https://example.com"
                  className="text-xs lg:text-sm border border-slate-500 p-1 rounded-md text-sm focus:ring-1 my-1"
                />
                <Button
                  variant="outlined"
                  size="sm"
                  className="w-max px-2 py-1 capitalize text-xs border-gray-700"
                  disabled
                >
                  + Add URL
                </Button>
              </div>
            </div>
            <div className="buttons flex gap-2">
              <Button
                size="sm"
                variant="gradient"
                color="blue"
                className="normal-case text-sm"
              >
                Save
              </Button>
              <Button
                size="sm"
                variant="text"
                className="normal-case text-sm text-gray-700"
                onClick={handleClickOpen}
              >
                Add later
              </Button>
            </div>
          </form>
        </div>
      </div>
      {/* modal */}
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        className="rounded-lg"
      >
        <DialogTitle id="responsive-dialog-title" className="flex items-center gap-2">
          <div className="w-max p-2 rounded-full bg-yellow-400">
            <svg
              className="h-5 w-5 text-orange-800"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
              />
            </svg>
          </div>
          {"Sure you don't want to add details now?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            size="sm"
            variant="text"
            autoFocus
            onClick={() => navigate("/home")}
            className="normal-case"
          >
            I'll add later
          </Button>
          <Button
            size="sm"
            onClick={handleClose}
            autoFocus
            className="normal-case"
            
          >
            Add now
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddInfo;
