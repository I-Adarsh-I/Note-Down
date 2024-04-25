import React from "react";

const Tag = ({tagContent}) => {
  return (
      <span className="border rounded-full border-gray-300 px-3 py-1 w-max">
        {tagContent}
      </span>
  );
};

export default Tag;
