import React from "react";
import { FaChevronRight } from "react-icons/fa";

const CourseCardDescription = () => {
  const features = [
    "Create vector files from raster layer styles",
    "Export designs into multiple formats",
    "Create custom illustrations and graphics",
    "Design responsive layouts and components",
  ];

  return (
    <div className="p-4">
      <div className="grid grid-cols-2 gap-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 flex-shrink-0">
              <FaChevronRight className="w-3 h-3 text-gray-500" />
            </div>
            <p className="text-sm text-gray-700">{feature}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCardDescription;
