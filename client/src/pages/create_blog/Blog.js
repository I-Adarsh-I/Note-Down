import React, { useCallback, useEffect, useState } from "react";
import NavbarTop from "../../components/navbar/Navbar";
import { Avatar, Typography } from "@material-tailwind/react";
import Tag from "../../components/tags/Tag";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./QuillEditor.module.css";
import Author from "../../components/cards/Author";
import moment from "moment";

const Blog = () => {
  const { _id } = useParams();
  const [blog, setBlog] = useState(null);
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");

  const token = localStorage.getItem("Auth token");

  const fetchBlogData = useCallback(async () => {
    try {
      const resp = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/blog/${_id}`
      );
      const fetchedBlog = resp.data.blog[0];
      setBlog(fetchedBlog);
      setLikes(fetchedBlog.likes.length);
      setComments(fetchedBlog.comments);
    } catch (err) {
      console.error(err);
    }
  }, [_id]);

  useEffect(() => {
    fetchBlogData();
  }, [fetchBlogData]);

  const handleLike = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.put(
        `${process.env.REACT_APP_BASE_URL}/like`,
        { blogId: blog._id },
        config
      );
      // console.log(response);
      if (response.status === 200) {
        setLikes(response.data.likes);
      } else {
        console.error("Failed to like the post");
      }
    } catch (err) {
      console.error("Error liking the post:", err);
    }
  };

  const handleComment = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/comment`,
        {
          blogId: blog._id,
          commentText,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setComments(response.data.comments);
      setCommentText("");
    } catch (err) {
      console.error("Error adding comment:", err);
    }
  };

  if (!blog) {
    return <p></p>;
  }

  return (
    <>
      <NavbarTop />
      <div className="pt-20 flex justify-center">
        <div className="container flex gap-3">
          <div className="l-con flex flex-col gap-6 w-full lg:w-8/12 bg-white rounded-none sm:rounded-lg overflow-hidden">
            <div className="blog-cover-img object-cover object-fit overflow-hidden lg:h-96">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt="ui/ux review check"
              />
            </div>
            <div className="flex justify-between items-center px-2 md:px-3">
              <div className="flex gap-2">
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
              <div className="reactions">
                <div className="flex items-center gap-2">
                  <div className="applauds cursor-pointer" onClick={handleLike}>
                    <p className="text-sm text-center">
                      <i className="fa-solid fa-hands-clapping fa-lg pe-1 text-gray-600 cursor-pointer"></i>
                      {likes}
                    </p>
                  </div>
                  <div className="comments">
                    <p className="text-sm">
                      <i className="fa-regular fa-comment fa-lg pe-1 text-gray-600 cursor-pointer"></i>
                      {comments.length}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="description-box flex flex-col gap-4 break-words px-2 md:px-4">
              <h2 className="text-4xl lg:text-4xl font-bold">
                {blog.blogTitle}
              </h2>
              <div className="tags flex gap-2">
                <Tag tagContent={"tag-1"} fontSize={"text-xs md:text-base"} />
                <Tag tagContent={"tag-1"} fontSize={"text-xs md:text-base"} />
                <Tag tagContent={"tag-1"} fontSize={"text-xs md:text-base"} />
              </div>
              <p
                className={`quill-content ${styles["quill-content"]} selection:bg-blue-200 selection:text-black`}
                dangerouslySetInnerHTML={{ __html: blog.blogContent }}
              ></p>
            </div>
          </div>
          <div className="r-con hidden lg:block lg:w-4/12">
            <Author aboutAuthor={blog.author} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
