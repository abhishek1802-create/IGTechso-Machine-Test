import React from "react";
import PricingInfo from "./PricingInfo";
import SectionHeader from "../SectionHeader/SectionHeader";
import { PRICING_Header } from "../../Utils/constants";
import { PRICING_Data } from "../../Utils/constants";

const Pricingcard = () => {
  return (
    <div className="flex flex-col justify-center text-center gap-2 mb-36">
      <SectionHeader
        header={PRICING_Header.header}
        tagLine={PRICING_Header.tagLine}
      />
      <div className=" mx-auto flex justify-center text-center gap-1 mb-16">
        <button className="px-2 py-2 shadow rounded-md">Monthly plan</button>
        <button className="px-2 py-2 bg-slate-100 rounded-md">
          Annual plan
        </button>
      </div>
      <div className="flex justify-center align-center gap-16">
        {PRICING_Data &&
          PRICING_Data.map((card, index) => {
            return <PricingInfo key={index} card={card} />;
          })}
        {/* <PricingInfo />
        <PricingInfo /> */}
      </div>
    </div>
  );
};

export default Pricingcard;
