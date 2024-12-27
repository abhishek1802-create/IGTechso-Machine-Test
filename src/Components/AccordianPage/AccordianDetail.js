import React from "react";

const AccordianDetail = ({ cardDetail }) => {
  return (
    <div className="px-10 py-3 flex flex-col animate-fadeIn">
      <span className="text-sm text-gray-600 leading-relaxed flex items-start tracking-wide">
        <div className="prose max-w-none mx-auto w-full text-justify">
          {cardDetail}
        </div>
      </span>
    </div>
  );
};

export default AccordianDetail;
