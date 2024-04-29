import React from "react";

const CountCard = ({bgColor, title, count, countColor}) => {
  return (
    <div className={`h-24 w-40 ${bgColor} rounded flex flex-col items-center justify-center`}>
      <div>
        <p className={`font-medium text-3xl ${countColor}`}>{count}</p>
        <p className="text-xl">{title}</p>
      </div>
    </div>
  );
};

export default CountCard;
