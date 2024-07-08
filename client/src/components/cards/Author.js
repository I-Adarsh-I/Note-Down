import React from "react";
import { Avatar, Button } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import moment from "moment";


const Author = ({aboutAuthor}) => {
  const userInfo = useSelector(state => state.auth)
  return (
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
        <h3 className="text-lg font-medium">{aboutAuthor.fullname}</h3>
      </div>
      {userInfo.user.fullname === aboutAuthor.fullname ? (
        <Button className="capitalize tracking-wide">
          Profile
        </Button>
      ) : (
        <Button className="capitalize tracking-wide">
          Follow
        </Button>
      )}
      <p className="text-base text-gray-700">
        {aboutAuthor.about}
      </p>
      <p className="text-base text-gray-700">
        <b>Joined: </b> {moment(aboutAuthor.joinedOn).format('ll')}
      </p>
      <p className="text-base text-gray-700">
        <b>Work: </b> MERN Stack developer
      </p>
      <p className="text-base text-gray-700">
        <b>Location: </b> XYZ-50 ABC
      </p>
    </div>
  );
};

export default Author;
