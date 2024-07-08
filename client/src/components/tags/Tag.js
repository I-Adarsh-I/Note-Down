import React from "react";

const Tag = ({tagContent, fontSize}) => {
  return (
      <span className={` border rounded-full border-blue-200 px-3 py-1 w-max ${fontSize}`}>
        {tagContent}
      </span>
  );
};

export default Tag;
