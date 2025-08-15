import React, { useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { Menu, X, LogIn, UserPlus, LogOut, Home, Sparkles, Info, Phone, UserCheck } from "lucide-react";
import Button from "../UI/Button";
import logo from "../../assets/vedantalogo.png";

const Navbar = ({ isAuthenticated, handleLogout, openLoginModal, openSignupModal, toggleSidebar }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleMobileNavClick = (path) => {
    console.log('Mobile nav clicked:', path); // Debug log
    setIsMenuOpen(false);
    setTimeout(() => {
      navigate(path);
    }, 100); // Small delay to ensure menu closes first
  };

  const isActiveRoute = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname === path;
  };

  return (
    <>
      <nav className="bg-slate-900 shadow-md sticky top-0 z-50">
        <div className="absolute inset-0 bg-[#003347]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex justify-between items-center relative z-10">
          {isAuthenticated && (
            <button
              onClick={toggleSidebar}
              className="lg:hidden text-[#1E3A8A] focus:outline-none mr-3"
              aria-label="Toggle sidebar"
            >
              <Menu size={24} />
            </button>
          )}
          
<NavLink to="/" className="flex items-center gap-2 sm:gap-3">
  <span className="text-1xl sm:text-3xl md:text-4xl font-bold text-white">
    SmartLearn
  </span>
</NavLink>


          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {!isAuthenticated && (
              <>
                <NavLink to="/" end className={({ isActive }) => 
                  `font-semibold transition-colors ${isActive ? 'text-[#63C5DA] underline decoration-2 decoration-[#63C5DA]' : 'text-white hover:text-[#63C5DA]'}`
                }>
                  Home
                </NavLink>
                <NavLink to="/features" className={({ isActive }) => 
                  `font-semibold transition-colors ${isActive ? 'text-[#63C5DA] underline decoration-2 decoration-[#63C5DA]' : 'text-white hover:text-[#63C5DA]'}`
                }>
                  Features
                </NavLink>
                <NavLink to="/events" className={({ isActive }) => 
                  `font-semibold transition-colors ${isActive ? 'text-[#63C5DA] underline decoration-2 decoration-[#63C5DA]' : 'text-white hover:text-[#63C5DA]'}`
                }>
                  Events
                </NavLink>
                <NavLink to="/learning" className={({ isActive }) => 
                  `font-semibold transition-colors ${isActive ? 'text-[#63C5DA] underline decoration-2 decoration-[#63C5DA]' : 'text-white hover:text-[#63C5DA]'}`
                }>
                  Learning
                </NavLink>
                
              </>
            )}
          </div>

          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            {!isAuthenticated ? (
              <>
                <Button variant="secondary" onClick={openLoginModal}>
                  Login
                </Button>
                <Button variant="primary" onClick={openSignupModal} className="border border-white">
                  Signup
                </Button>
              </>
            ) : (
              <Button variant="primary" onClick={handleLogout}>
                Logout
              </Button>
            )}
          </div>

          {!isAuthenticated && (
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-[#1E3A8A] focus:outline-none"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          )}
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-[#0B1F3A] px-4 pb-4 flex flex-col gap-1 text-white relative z-60">
            {!isAuthenticated ? (
              <>
                <button 
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleMobileNavClick('/');
                  }}
                  className={`font-semibold transition-colors py-3 px-2 text-left rounded-lg w-full touch-manipulation ${
                    isActiveRoute('/') 
                      ? 'text-[#63C5DA] underline decoration-2 decoration-[#63C5DA] bg-slate-800/50' 
                      : 'text-white hover:text-[#75E6DA] hover:bg-slate-800/30 active:bg-slate-700/50'
                  }`}
                >
                  Home
                </button>
                <button 
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleMobileNavClick('/features');
                  }}
                  className={`font-semibold transition-colors py-3 px-2 text-left rounded-lg w-full touch-manipulation ${
                    isActiveRoute('/features') 
                      ? 'text-blue-500 underline decoration-2 decoration-blue-500 bg-slate-800/50' 
                      : 'text-white hover:text-[#75E6DA] hover:bg-slate-800/30 active:bg-slate-700/50'
                  }`}
                >
                  Features
                </button>
                <button 
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleMobileNavClick('/about');
                  }}
                  className={`font-semibold transition-colors py-3 px-2 text-left rounded-lg w-full touch-manipulation ${
                    isActiveRoute('/about') 
                      ? 'text-[#63C5DA] underline decoration-2 decoration-[#63C5DA] bg-slate-800/50' 
                      : 'text-white hover:text-[#75E6DA] hover:bg-slate-800/30 active:bg-slate-700/50'
                  }`}
                >
                  About
                </button>
                <button 
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleMobileNavClick('/contact');
                  }}
                  className={`font-semibold transition-colors py-3 px-2 text-left rounded-lg w-full touch-manipulation ${
                    isActiveRoute('/contact') 
                      ? 'text-orange-200 underline decoration-2 decoration-orange-200 bg-slate-800/50' 
                      : 'text-white hover:text-[#75E6DA] hover:bg-slate-800/30 active:bg-slate-700/50'
                  }`}
                >
                  Contact
                </button>
                <button 
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleMobileNavClick('/guide');
                  }}
                  className={`font-semibold transition-colors py-3 px-2 text-left rounded-lg w-full touch-manipulation ${
                    isActiveRoute('/guide') 
                      ? 'text-blue-500 underline decoration-2 decoration-blue-500 bg-slate-800/50' 
                      : 'text-white hover:text-blue-500 hover:bg-slate-800/30 active:bg-slate-700/50'
                  }`}
                >
                  Guide
                </button>

                <div className="pt-3 space-y-2">
                  <Button variant="secondary" onClick={() => { setIsMenuOpen(false); openLoginModal(); }} className="w-full justify-center">
                    Login
                  </Button>
                  <Button variant="primary" onClick={() => { setIsMenuOpen(false); openSignupModal(); }} className="w-full justify-center">
                    Signup
                  </Button>
                </div>
              </>
            ) : (
              <Button variant="primary" onClick={() => { setIsMenuOpen(false); handleLogout(); }} className="w-full justify-center">
                Logout
              </Button>
            )}
          </div>
        )}
      </nav>

      <div className="w-full h-[4px] bg-[#63C5DA]"></div>
    </>
  );
};

export default Navbar;