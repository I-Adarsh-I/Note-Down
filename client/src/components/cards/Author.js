import React from "react";
import { Avatar, Button } from "@material-tailwind/react";
import { useSelector } from "react-redux";


const Author = ({fullname, profileImg, description, joinedOn, work, location}) => {
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
        <h3 className="text-lg font-medium">{fullname}</h3>
      </div>
      {userInfo.user.fullname === fullname ? (
        <Button className="capitalize tracking-wide">
          Profile
        </Button>
      ) : (
        <Button className="capitalize tracking-wide">
          Follow
        </Button>
      )}
      {/* <Button className="capitalize">{userInfo.user.fullname === fullname? 'Profile': "Follow"}</Button> */}
      <p className="text-base text-gray-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        commodi,
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
  );
};

export default Author;
