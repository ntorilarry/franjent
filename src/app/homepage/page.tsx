"use client";

import MainLayout from "@/shared/mainLayout";
import Hero from "./components/hero";
import HowItWorks from "./components/howItWorks";
import VideoTimeline from "./components/videoTimeline";

const Homepage = () => {
  return (
    <MainLayout>
      <Hero />
      <HowItWorks />
      <VideoTimeline />
    </MainLayout>
  );
};

export default Homepage;
