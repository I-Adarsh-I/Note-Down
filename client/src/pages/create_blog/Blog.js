import React, { useEffect, useState } from "react";
import NavbarTop from "../../components/navbar/Navbar";
import { Avatar, Button, Typography } from "@material-tailwind/react";
import Tag from "../../components/tags/Tag";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from './QuillEditor.module.css'

const Blog = () => {
  const content = {
    title: `UI/UX Review Check`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsam quas sequi nemo veritatis dolorem quidem pariatur tempore cumque. Beatae enim voluptatem eum nisi? Cum doloribus, dignissimos asperiores dicta maxime voluptate at beatae delectus veritatis debitis maiores molestiae. Cupiditate inventore expedita a quod deserunt ipsam error aperiam. Enim, dolor error. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum inventore eligendi cupiditate voluptates non quia, dolore accusamus? Accusamus ipsum numquam ratione eligendi vel odit id, unde mollitia recusandae placeat nam dolorem nobis officiis ab ad in esse officia aspernatur quae optio tempore cupiditate? Assumenda, voluptas! Voluptates possimus enim ab tempore eum id fugiat quibusdam, ratione in ipsam, delectus reprehenderit! Velit quia eligendi libero modi, sequi sit fugiat excepturi officia nisi impedit non ipsum tempora tenetur ad illo. Quae modi repudiandae error nemo! Omnis aspernatur quidem cumque optio reiciendis distinctio repellendus? Commodi, sapiente. Unde, ut eos quam facilis, totam odio fuga distinctio molestiae explicabo illo rem delectus velit voluptatem aliquam quibusdam reiciendis similique adipisci non! Veritatis dolorem quasi explicabo fuga mollitia reprehenderit aperiam est! Aliquam odio ducimus in! Inventore iusto nesciunt voluptatem facilis? Aspernatur aut ipsa doloremque eligendi nisi fuga aliquid minima animi corrupti. Officiis autem fugit accusamus perferendis laborum, suscipit sit mollitia eaque impedit similique, qui voluptas excepturi nulla tempore quia quod nihil magni explicabo sapiente, cum cumque dolor dolore! Delectus fugiat sunt minus minima, at nisi, dolores ad dolorum, omnis expedita totam? Aspernatur suscipit amet praesentium porro neque id vero harum voluptatum voluptate non ex repellendus, molestias explicabo ut. Ipsam laboriosam tempore accusantium provident, nisi cum? Unde libero, delectus commodi quod minima ipsa pariatur placeat illum ipsam nesciunt numquam, et officia est nobis eligendi nisi voluptates. Harum, nam consequuntur! Nostrum adipisci saepe cum qui sit officia maxime soluta in facilis. Dolor recusandae quaerat tempore amet asperiores rem suscipit, inventore vitae voluptate nemo neque accusantium labore porro reprehenderit ipsam officiis doloremque distinctio officia vel praesentium pariatur at itaque nesciunt dolores. A facere explicabo incidunt placeat tempore nisi voluptates, reiciendis distinctio quae debitis, saepe animi vero velit laborum sapiente earum rem! Excepturi est illo doloremque voluptatibus vitae voluptatum recusandae, maiores porro nostrum illum repellat consequuntur maxime quod tempore animi similique a id neque facilis delectus nihil ab totam? Eligendi atque impedit illum nobis, laboriosam dolores suscipit veniam mollitia possimus, dolorem minima accusantium aspernatur nostrum ea itaque corporis consequuntur, quos quo corrupti doloribus voluptate! Voluptatem dolores deserunt quod tempore eum, officiis nobis aliquid, laudantium, in repudiandae quibusdam dolorem culpa! Excepturi, cum aut consectetur voluptates dicta sequi in facilis neque quos praesentium necessitatibus illum ab quisquam repellat. Obcaecati, cum culpa totam sed temporibus fuga debitis qui necessitatibus laudantium, quos ducimus, expedita deleniti voluptatum porro quis libero reprehenderit beatae minima? Ex quibusdam, vitae provident reprehenderit officiis repellat saepe natus qui consequuntur eligendi. Eaque alias laudantium veritatis impedit nulla sed obcaecati assumenda dolores eius, voluptas sapiente accusamus enim architecto nobis quod unde at, ipsum laborum porro. Sit architecto enim eius aliquam molestias voluptatem ut quam fugiat. Quidem, laboriosam ea saepe tempore culpa dolorem eligendi doloribus provident debitis numquam corporis, nobis, ipsa inventore doloremque officiis recusandae dolores minima! Voluptatem libero fugiat itaque quas illo quis nulla magni odio veritatis soluta voluptates aperiam sapiente, corporis aliquid quaerat praesentium sequi accusantium numquam, minus mollitia. Excepturi consectetur placeat, nulla hic provident natus libero blanditiis totam nisi eos accusamus dolorum.`,
  };

  const { _id } = useParams();
  const [blog, setBlog] = useState(null);

  const fetchBlogData = async() => {
    try {
      const resp = await axios.get(`${process.env.REACT_APP_BASE_URL}/blog/${_id}`)
      setBlog(resp.data.blog[0])
      // console.log(resp.data.blog[0]);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchBlogData();
  },[_id]);

  if(!blog){
    return <p>Loading...</p>
  }
  
  return (
    <>
      <NavbarTop />
      <div className="pt-20 flex justify-center">
        <div className="container flex gap-3">
          <div className="l-con flex flex-col gap-6 w-full lg:w-8/12 bg-white rounded-lg overflow-hidden">
            <div className="blog-cover-img object-cover object-fit overflow-hidden lg:h-96">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt="ui/ux review check"
              />
            </div>
            <div className="flex justify-between items-center px-3">
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
                    Full Name
                  </Typography>
                  <Typography variant="small" color="gray" className="text-xs">
                    Apr, 20
                  </Typography>
                </div>
              </div>
              <div className="reactions">
                <div className="flex items-center gap-2">
                  <div className="applauds">
                    <p className="text-sm text-center">
                      <i className="fa-solid fa-hands-clapping fa-lg pe-1 text-gray-600 cursor-pointer"></i>
                      11
                    </p>
                  </div>
                  <div className="comments">
                    <p className="text-sm">
                      <i className="fa-regular fa-comment fa-lg pe-1 text-gray-600 cursor-pointer"></i>
                      12
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="description-box flex flex-col gap-4 break-words px-4">
              <h2 className="text-2xl lg:text-4xl font-bold">
                {content.title}
              </h2>
              <div className="tags flex gap-2">
                <Tag tagContent={"tag-1"} fontSize={"text-xs"} />
                <Tag tagContent={"tag-1"} fontSize={"text-xs"} />
                <Tag tagContent={"tag-1"} fontSize={"text-xs"} />
              </div>
              {/* <p className="text-base text-gray-700">{content.description}</p> */}
              <p className={`quill-content ${styles["quill-content"]} selection:bg-blue-200 selection:text-black`} dangerouslySetInnerHTML={{ __html: blog.blogContent }}></p>
              {/* <p>{blog?.blogContent}</p> */}
            </div>
          </div>
          <div className="r-con hidden lg:block lg:w-4/12">
            <div className="about-dev hidden lg:flex flex-col gap-2 justify-center rounded-xl bg-white border border-gray-300 p-2 py-4">
              <div className="flex items-center gap-2">
                <Avatar
                  alt="Remy Sharp"
                  src="https://img.freepik.com/free-photo/medium-shot-male-flight-attendant-posing_23-2150312701.jpg"
                  sx={{
                    width: 48,
                    height: 48,
                  }}
                />
                <h3 className="text-lg font-medium">Full Name</h3>
              </div>
              <Button className="capitalize">Follow</Button>
              <p className="text-base text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem commodi,
              </p>
              <p className="text-base text-gray-700">
                <b>Joined: </b> DD/MM/YYYY
              </p>
              <p className="text-base text-gray-700">
                <b>Work: </b> MERN Stack developer
              </p>
              <p className="text-base text-gray-700">
                <b>Location: </b> XYZ-50 ABC
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
