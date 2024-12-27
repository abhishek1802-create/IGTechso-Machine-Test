import React from "react";
import VideoSlider from "../VideoSlider/VideoSlider";
import { slider2_detail } from "../../Utils/constants";
import CardSection from "../CardSection/CardSection";
import { CARD2_Data } from "../../Utils/constants";

const TutorialPage = () => {
  return (
    <section className="bg-white min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
          <div className="md:w-[400px]">
            <VideoSlider slider_detail={slider2_detail} sliderHeight={400} />
          </div>

          <CardSection data={CARD2_Data} />
        </div>
      </div>
    </section>
  );
};

export default TutorialPage;
