import React from "react";

const CardSection = ({ data }) => {
  return (
    <div className="md:w-[400px] md:h-[400px] bg-white p-4">
      <div className="space-y-6">
        <div className="text-orange-500 font-medium">{data.title}</div>
        <h2 className="text-3xl md:text-3xl font-semibold text-gray-900 leading-tight">
          {data.subTitle}
        </h2>
        <p className="text-gray-600 leading-relaxed">{data.description}</p>
        <button
          type="button"
          variant="ghost"
          className="text-orange-500 bg-orange-100 hover:text-orange-600 hover:bg-orange-50 px-6 py-2 rounded-md transition-colors duration-200 font-medium"
        >
          {data.buttonText}
        </button>
      </div>
    </div>
  );
};

export default CardSection;
