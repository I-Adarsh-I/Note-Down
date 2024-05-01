import React from "react";
import Tag from "../tags/Tag";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Avatar } from "@mui/material";

const ProfileBlogCard = () => {
  return (
    <div className="blog-card-1 bg-white h-max p-3 flex flex-col gap-3 rounded-md border border-gray-300">
      <div className="card-head flex gap-2">
        <div className="avatar">
          <Avatar
            alt="Remy Sharp"
            src="https://img.freepik.com/free-photo/medium-shot-male-flight-attendant-posing_23-2150312701.jpg"
            sx={{
              width: 36,
              height: 36,
              cursor: "pointer",
            }}
          />
        </div>
        <div className="flex justify-between w-full">
          <div className="flex items-center gap-2">
            <div className="name-sec">
              <p>Full name</p>
              <p className="text-xs text-gray-700">Apr 29</p>
            </div>
          </div>
          <div className="more-icons">
            <MoreVertIcon sx={{ color: "gray" }} />
          </div>
        </div>
      </div>
      <div className="card-body flex flex-col gap-2 ps-11">
        <div className="card-title">
          <h3 className="text-2xl font-semibold hover:text-indigo-800 cursor-pointer">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
        </div>
        <div className="tags flex gap-1">
          <Tag tagContent={"tag-1"} fontSize={"text-xs"} />
          <Tag tagContent={"tag-2"} fontSize={"text-xs"} />
          <Tag tagContent={"tag-3"} fontSize={"text-xs"} />
        </div>
      </div>
      <div className="card-foot flex gap-3 ps-11">
        <div className="applauds">
          <p className="text-sm text-center">
            <i className="fa-solid fa-hands-clapping fa-lg pe-1 text-gray-600 cursor-pointer"></i>
            11 Applauds
          </p>
        </div>
        <div className="comments">
          <p className="text-sm">
            <i class="fa-regular fa-comment fa-lg pe-1 text-gray-600 cursor-pointer"></i>
            12 Comments
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileBlogCard;
