import React from "react";

const FunctionPageCard = ({ index, title, info }) => {
  return (
    <div className="max-w-[230px] bg-white rounded-lg  p-2 flex flex-col justify-center text-start cursor-pointer">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 flex items-center shadow justify-center rounded-full text-lg font-semibold">
          {index}
        </div>
      </div>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600 mt-2">{info}</p>
    </div>
  );
};

export default FunctionPageCard;
