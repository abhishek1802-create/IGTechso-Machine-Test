import React from "react";

const StatsGrid = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl relative">
        {/* Left side cards */}
        <div className="bg-white h-[150px] shadow-md flex flex-col justify-center rounded-lg p-6 text-center">
          <h2 className="text-4xl font-bold text-orange-500">80K+</h2>
          <p className="text-gray-600 mt-2">We have more than students</p>
        </div>

        {/* Right side card - moved up */}
        <div className="bg-white shadow-md h-[150px] flex flex-col justify-center rounded-lg p-6 text-center md:-mt-5">
          <h2 className="text-4xl font-bold text-orange-500">150+</h2>
          <p className="text-gray-600 mt-2">
            Free online tutorials videos available
          </p>
        </div>

        {/* Left side cards */}
        <div className="bg-white shadow-md h-[150px] flex flex-col justify-center rounded-lg p-6 text-center">
          <h2 className="text-4xl font-bold text-pink-500">90+</h2>
          <p className="text-gray-600 mt-2">Daily updated blog post maintain</p>
        </div>

        {/* Right side card - moved up */}
        <div className="bg-white shadow-md h-[150px] flex flex-col justify-center rounded-lg p-6 text-center md:-mt-5">
          <h2 className="text-4xl font-bold text-purple-500">& 3M</h2>
          <p className="text-gray-600 mt-2">
            Job posted everydays with qualification
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatsGrid;
