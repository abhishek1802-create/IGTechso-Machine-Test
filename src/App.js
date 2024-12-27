import "./App.css";
import AccordianPage from "./Components/AccordianPage/AccordianPage";
import FeaturesPage from "./Components/FeaturesPage/FeaturesPage";
import FunctionPage from "./Components/FunctionPage/FunctionPage";
import LearningPage from "./Components/LearningPage/LearningPage";
import TutorialPage from "./Components/TutorialPage/TutorialPage";
import Pricingcard from "./Components/Pricingcard/Pricingcard";
import FooterSection from "./Components/FooterSection/FooterSection";
import VideoSlider from "./Components/VideoSlider/VideoSlider";
import { slider1_Detail } from "./Utils/constants";
import IntroPage from "./Components/IntroPage/IntroPage";
import StatsPage from "./Components/StatsPage/Statspage";

function App() {
  return (
    <div className="mx-auto min-h-screen">
      <IntroPage />
      <VideoSlider slider_detail={slider1_Detail} />
      <StatsPage />
      <FeaturesPage />
      <FunctionPage />
      <Pricingcard />
      <TutorialPage />
      <AccordianPage />
      <LearningPage />
      <FooterSection />
    </div>
  );
}

export default App;
