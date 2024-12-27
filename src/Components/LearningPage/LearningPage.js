import React from "react";

const LearningPage = () => {
  return (
    <div className="h-[250px] w-4/12 mx-auto flex flex-col justify-center text-center">
      <h1 className="text-2xl font-semibold px-12">
        Ready to learn design with Nia Matos
      </h1>

      <span
        type="button"
        variant="ghost"
        className="w-[180px] text-orange-500  bg-orange-100 hover:text-orange-600 hover:bg-orange-50 mt-4 px-5 py-1 rounded-md transition-colors duration-200 font-medium mx-auto cursor-pointer"
      >
        Start free trial
      </span>
    </div>
  );
};

export default LearningPage;
