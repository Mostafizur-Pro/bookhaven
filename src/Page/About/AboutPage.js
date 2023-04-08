import React from "react";
import AboutBanner from "./AboutBanner";
import KnowMore from "./KnowMore";
import Template from "./Template";
import JourneyOfSuccess from "./JourneyOfSuccess";
import MeetOurPro from "./MeetOurPro";
import useTitle from "../../hooks/useTitle";

const AboutPage = () => {
  useTitle("About");
  return (
    <div>
      <AboutBanner />
      <KnowMore />
      <Template />
      <JourneyOfSuccess />
      <MeetOurPro />
    </div>
  );
};

export default AboutPage;
