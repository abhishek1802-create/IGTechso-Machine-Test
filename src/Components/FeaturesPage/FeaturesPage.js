import React from "react";
import CourseCard from "./CourseCard";
import { FEATURES_Header } from "../../Utils/constants";
import SectionHeader from "../SectionHeader/SectionHeader";
import { Feature_card_Data } from "../../Utils/constants";

const FeaturesPage = () => {
  return (
    <div className="mt-4 flex flex-col justify-center text-center pb-20">
      <SectionHeader
        header={FEATURES_Header.header}
        tagLine={FEATURES_Header.tagLine}
      />
      <div className="w-full flex-col flex-wrap justify-center text-center gap-2">
        {Feature_card_Data &&
          Feature_card_Data.map((card, index) => (
            <CourseCard key={card.index} card={card} />
          ))}
        <CourseCard />
      </div>
    </div>
  );
};

export default FeaturesPage;
