"use client";

import MainLayout from "@/shared/mainLayout";
import Hero from "./components/hero";
import HowItWorks from "./components/howItWorks";
import VideoTimeline from "./components/videoTimeline";
import ExploreAllStays from "./components/exploreAllStays";
import ExploreBenefits from "./components/exploreBenefits";
import ExploreAlliance from "./components/exploreAlliance";
import HotelJourney from "./components/hotelJourney";
import CTA from "./components/cta";

const Homepage = () => {
  return (
    <MainLayout>
      <Hero />
      <HowItWorks />
      <VideoTimeline />
      <ExploreAllStays />
      <ExploreBenefits />
      <ExploreAlliance />
      <HotelJourney />
      <CTA />
    </MainLayout>
  );
};

export default Homepage;
