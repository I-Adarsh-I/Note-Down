import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import Tag from "../tags/Tag";
import { useNavigate } from "react-router-dom";
import moment from "moment/moment";

const HomeBlogCard = ({ cardWidth, blog }) => {
  const navigate = useNavigate();
  // console.log(userInfo);

  return (
    <div>
      <Card
        className={`w-full lg:${cardWidth} overflow-hidden my-4 rounded-lg cursor-pointer hover:drop-shadow`}
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none"
        >
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            alt="ui/ux review check"
            className="pb-4"
          />
        </CardHeader>
        <CardBody className="pt-0 pb-4 px-4">
          <div
            className="flex gap-2 pb-2"
            onClick={() => {
              navigate(`/profile/${blog.author._id}`);
            }}
          >
            <Avatar
              size="sm"
              variant="circular"
              alt="natali craig"
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
              className="border-2 border-white hover:z-10"
            />
            <div className="flex flex-col justify-start">
              <Typography variant="small" color="black">
                {blog.author.fullname}
              </Typography>
              <Typography variant="small" color="gray" className="text-xs">
                {moment(blog.postedAt).format("ll")}
              </Typography>
            </div>
          </div>
          <Typography
            variant="h4"
            color="blue-gray"
            onClick={() => navigate(`/blogpost/${blog._id}`)}
          >
            {blog.blogTitle ? blog.blogTitle : "Untitled Blog"}
          </Typography>
          <Typography
            color="gray"
            className="mt-1 font-sm font-normal leading-tight truncate-by-height max-h-32 text-pretty overflow-hidden"
            dangerouslySetInnerHTML={{ __html: blog.blogContent }}
            onClick={() => navigate(`/blogpost/${blog._id}`)}
          />
          <div className="w-full flex gap-2 flex-wrap pt-2">
            <Tag fontSize={"text-xs"} tagContent={"Sample"} />
            <Tag fontSize={"text-xs"} tagContent={"Sample"} />
            <Tag fontSize={"text-xs"} tagContent={"Sample"} />
          </div>
        </CardBody>
        <CardFooter className="flex items-center justify-between pb-4 pt-0">
          <div className="flex items-center gap-2">
            <div className="applauds">
              <p className="text-sm text-center">
                <i className="fa-solid fa-hands-clapping fa-lg pe-1 text-gray-600 cursor-pointer"></i>
                {blog.likes.length}
              </p>
            </div>
            <div className="comments">
              <p className="text-sm">
                <i className="fa-regular fa-comment fa-lg pe-1 text-gray-600 cursor-pointer"></i>
                {blog.comments.length}
              </p>
            </div>
          </div>
          <Typography className="text-sm md:text-base font-normal">
            <span className="px-1 text-sm md:text-base">&#9679;</span>4 min
          </Typography>
        </CardFooter>
      </Card>
    </div>
  );
};

export default HomeBlogCard;
