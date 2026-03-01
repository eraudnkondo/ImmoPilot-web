import React from "react";
import Hero from "../components/hero";
import WhyUs from "../components/whyus";
import Testimonials from "../components/testimonials";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-16">
      <Hero />
      <WhyUs />
      <Testimonials />
    </div>
  );
};

export default HomePage;