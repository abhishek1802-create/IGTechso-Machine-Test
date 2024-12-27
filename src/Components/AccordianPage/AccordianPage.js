import React from "react";
import { FAQ_Data } from "../../Utils/constants";
import AccordianCard from "./AccordianCard";
import SectionHeader from "../SectionHeader/SectionHeader";
import { FAQ_Header } from "../../Utils/constants";

const AccordianPage = () => {
  return (
    <div className="flex flex-col justify-center text-center">
      <SectionHeader header={FAQ_Header.header} tagLine={FAQ_Header.tagLine} />
      {FAQ_Data &&
        FAQ_Data.map((card, index) => (
          <AccordianCard key={index} card={card} />
        ))}
    </div>
  );
};

export default AccordianPage;
