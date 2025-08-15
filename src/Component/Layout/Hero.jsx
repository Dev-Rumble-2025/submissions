import React from "react";
import HeroSection from "./HeroSections/Hero";
import StatsSection from "./HeroSections/StatsSection";
import FeaturePage from "../../Pages/FeaturePage";
import EventsPage from "../../Pages/EventsPage";
import { motion } from "framer-motion";
import Carosuel from "../UI/Carosuel";

const Hero = () => {
  return (
    <div className="min-h-screen">
      <motion.div>
        <HeroSection />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <StatsSection />
      </motion.div>
      <Carosuel />
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <FeaturePage />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <EventsPage />
      </motion.div>
    </div>
  );
};

export default Hero;
