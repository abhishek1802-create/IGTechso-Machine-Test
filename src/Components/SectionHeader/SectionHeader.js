import React from "react";

const SectionHeader = ({ header, tagLine }) => {
  return (
    <div>
      <h5 className="text-orange-600 font-semibold mt-8 mb-4">{header}</h5>
      <p className="text-2xl font-semibold mb-8">{tagLine}</p>
    </div>
  );
};

export default SectionHeader;
