import React from "react";

const AboutCard = ({aboutText, img}) => {
  // Card is rendered in Profile.js
  return (
    <div className="about-card ">
      {/* <img
        className="h-96 w-full rounded-lg object-cover object-center"
        src={img}
        alt="nature image"
      /> */}
      <p className="mt-2 text-gray-800 text-base">
        {aboutText}
      </p>
    </div>
  );
};

export default AboutCard;
