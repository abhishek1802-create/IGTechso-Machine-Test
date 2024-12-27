import React from "react";
import FunctionPageCard from "./FunctionPageCard";
import SectionHeader from "../SectionHeader/SectionHeader";
import { FUNCTION_Header } from "../../Utils/constants";
import { Function_card_Data } from "../../Utils/constants";

const FunctionPage = () => {
  return (
    <div className="mt-4 flex flex-col justify-center text-center pb-20">
      <SectionHeader
        header={FUNCTION_Header.header}
        tagLine={FUNCTION_Header.tagLine}
      />
      <div className="w-full flex flex-wrap justify-center text-center gap-2">
        {Function_card_Data &&
          Function_card_Data.map((card, index) => (
            <FunctionPageCard
              key={card.index}
              index={card.id}
              title={card.title}
              info={card.info}
            />
          ))}
        {/* <FunctionPageCard />
        <FunctionPageCard />
        <FunctionPageCard />
        <FunctionPageCard /> */}
      </div>
    </div>
  );
};

export default FunctionPage;
