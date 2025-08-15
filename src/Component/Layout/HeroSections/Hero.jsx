import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "../../UI/Button";
import hero from "../../../assets/aboutt.jpg";

const Hero = () => {
  const { scrollY } = useScroll();
  // Parallax effect: background moves slower than scroll
  const y = useTransform(scrollY, [0, 500], [0, 100]);

  const navigate = (path) => {
    console.log(`Navigating to: ${path}`);
  };

  return (
    <div className="relative h-screen overflow-hidden flex justify-center items-center text-center">
      {/* Parallax background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${hero})`,
          y, // framer-motion will animate y on scroll
        }}
      />

      {/* Overlay to darken the background */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-xl p-6 bg-white/10 backdrop-blur-md rounded-xl shadow-lg">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight text-white">
          Connect, Learn,
          <span className="block text-white">and Collaborate</span>
        </h1>
        <p className="text-white/90 text-base sm:text-lg mb-6 leading-relaxed">
          Empower your campus experience with smart learning tools, seamless
          collaboration, and community engagement. Share ideas, track progress,
          and grow together with your peers.
        </p>
        <Button
          variant="primary"
          onClick={() => navigate("/signup")}
          className="hero-btn bg-[#63C5DA] text-white px-6 py-3 rounded-4xl font-semibold shadow-md hover:bg-[#e65b4e] transition-colors"
        >
          Join Now
        </Button>
      </div>
    </div>
  );
};

export default Hero;
