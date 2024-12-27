import React from "react";
import "./IntroPage.css";
import Navbar from "../Navbar/Navbar";
import SectionPage from "../SectionPage/SectionPage";
import { INTROPAGE_Data } from "../../Utils/constants";

const IntroPage = () => {
  return (
    <section className="relative min-h-screen">
      <Navbar />
      <SectionPage data={INTROPAGE_Data} />
      <section className="absolute top-0 left-0 w-8/12 h-full linear-color z-0"></section>
    </section>
  );
};

export default IntroPage;
