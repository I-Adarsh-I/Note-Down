import React from "react";

const CountCard = ({bgColor, title, count, countColor}) => {
  return (
    <div className={`h-20 md:h-24 w-32 md:w-40 ${bgColor} rounded flex flex-col items-center justify-center`}>
      <div>
        <p className={`font-medium text-2xl md:text-3xl ${countColor}`}>{count}</p>
        <p className="text-lg md:text-xl">{title}</p>
      </div>
    </div>
  );
};

export default CountCard;
