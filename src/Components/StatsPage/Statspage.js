import React from "react";
import StatsGrid from "./StatsGrid";
import CardSection from "../CardSection/CardSection";
import { CARD1_Data } from "../../Utils/constants";

const StatsPage = () => {
  return (
    <section className="bg-white min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
          <div className="md:w-[400px]">
            <StatsGrid />
          </div>

          <CardSection data={CARD1_Data} />
        </div>
      </div>
    </section>
  );
};

export default StatsPage;
