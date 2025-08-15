import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#002A3B] text-white py-10 sm:py-16 border-t-2 border-[#0E5F77] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Branding */}
          <div className="text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-white">
              SmartLearn
            </h2>
            <p className="text-white text-sm leading-relaxed max-w-xs mx-auto sm:mx-0">
              Empowering campus learning with AI-driven tools, collaborative projects, and smart insights.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-base sm:text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <div className="space-y-2">
              <a href="/" className="block text-white hover:text-[#0E5F77] transition duration-300 text-sm">
                Home
              </a>
              <a href="/features" className="block text-white hover:text-[#0E5F77] transition duration-300 text-sm">
                Features
              </a>
              <a href="/about" className="block text-white hover:text-[#0E5F77] transition duration-300 text-sm">
                Events
              </a>
              <a href="/contact" className="block text-white hover:text-[#0E5F77] transition duration-300 text-sm">
                Learning
              </a>
            </div>
          </div>

          {/* Support Links */}
          <div className="text-center sm:text-center lg:text-right">
            <h3 className="text-base sm:text-lg font-semibold mb-4 text-white">Support</h3>
            <div className="space-y-2">
              <a href="/guide" className="block text-white hover:text-[#0E5F77] transition duration-300 text-sm">
                Guide
              </a>
              <a href="/privacy" className="block text-white hover:text-[#0E5F77] transition duration-300 text-sm">
                Privacy Policy
              </a>
              <a href="/terms" className="block text-white hover:text-[#0E5F77] transition duration-300 text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-[#0E5F77] pt-4 sm:pt-6 text-center">
          <p className="text-white text-xs sm:text-sm px-4">
            &copy; {new Date().getFullYear()} SmartLearn. All rights reserved. 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
