import React from "react";
import { NavLink, Link } from "react-router-dom";
import {
  Home,
  BookOpen,
  ClipboardList,
  CheckSquare,
  User,
  CreditCard,
  HelpCircle,
  Settings,
  X,
  LogOut,
} from "lucide-react";
import Notice from "../Layout/Notice";
import Timetable from "../Layout/Timetable";

const Sidebar = ({ username, sidebarOpen, closeSidebar, handleLogout }) => {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-md transition-colors duration-200 ${
      isActive
        ? "bg-[#63C5DA] text-[#003347] font-semibold shadow-md"
        : "hover:bg-[#003347]/10 text-[#003347]"
    }`;

  const handleLinkClick = () => {
    if (window.innerWidth < 1024) {
      closeSidebar();
    }
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-64 bg-[#63C5DA]/10 text-[#003347] min-h-screen border-r border-[#003347]/20 flex-col shadow-xl">
        {/* Profile */}
        <Link
          to="/profile"
          className="px-6 py-5 border-b border-[#003347]/20 flex items-center gap-3 bg-[#003347]/10 hover:bg-[#003347]/20 transition"
        >
          <div className="w-8 h-8 bg-[#003347] rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-white" />
          </div>
          <span className="font-semibold text-lg truncate">
            {username || "User"}
          </span>
        </Link>

        {/* Links */}
        <nav className="flex-1 flex flex-col mt-4 gap-1 px-2">
          <NavLink to="/dashboard" className={linkClass}>
            <Home className="w-5 h-5" />
            Dashboard
          </NavLink>
          <NavLink to="/notice" className={linkClass}>
            <BookOpen className="w-5 h-5" />
            Notice
          </NavLink>
          <NavLink to="/timetable" className={linkClass}>
            <BookOpen className="w-5 h-5" />
            Timetable
          </NavLink>
          <NavLink to="/tasks" className={linkClass}>
            <BookOpen className="w-5 h-5" />
            Tasks
          </NavLink>
          <NavLink to="/tutorial" className={linkClass}>
            <BookOpen className="w-5 h-5" />
            Tutorials
          </NavLink>
          <NavLink to="/exam" className={linkClass}>
            <ClipboardList className="w-5 h-5" />
            Exams
          </NavLink>
          <NavLink to="/results" className={linkClass}>
            <CheckSquare className="w-5 h-5" />
            Results
          </NavLink>
          <NavLink to="/courses" className={linkClass}>
            <CreditCard className="w-5 h-5" />
            Courses
          </NavLink>
          <NavLink to="/support" className={linkClass}>
            <HelpCircle className="w-5 h-5" />
            Support
          </NavLink>
          <NavLink to="/settings" className={linkClass}>
            <Settings className="w-5 h-5" />
            Settings
          </NavLink>
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-[#003347]/20 mt-auto">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-md bg-red-100 hover:bg-red-200 text-red-700 font-medium border border-red-300"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </aside>

      {/* Mobile Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 w-64 bg-[#63C5DA]/10 text-[#003347] h-full border-r border-[#003347]/20 flex flex-col shadow-xl transform transition-transform duration-300 lg:hidden ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Mobile Header */}
        <div className="px-6 py-5 border-b border-[#003347]/20 flex items-center justify-between bg-[#003347]/10">
          <Link
            to="/profile"
            className="flex items-center gap-3 hover:bg-[#003347]/20 rounded-lg p-2 transition"
            onClick={handleLinkClick}
          >
            <div className="w-8 h-8 bg-[#003347] rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-lg truncate">
              {username || "User"}
            </span>
          </Link>

          <button
            onClick={closeSidebar}
            className="text-[#003347] hover:text-[#002233] transition-colors p-1"
            aria-label="Close sidebar"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Links */}
        <nav className="flex-1 flex flex-col mt-4 gap-1 px-2">
          <NavLink
            to="/dashboard"
            className={linkClass}
            onClick={handleLinkClick}
          >
            <Home className="w-5 h-5" />
            Dashboard
          </NavLink>
          <div className="mt-2">
            <Notice />
            <Timetable />
          </div>
          <NavLink
            to="/tutorial"
            className={linkClass}
            onClick={handleLinkClick}
          >
            <BookOpen className="w-5 h-5" />
            Tutorials
          </NavLink>
          <NavLink to="/exam" className={linkClass} onClick={handleLinkClick}>
            <ClipboardList className="w-5 h-5" />
            Exams
          </NavLink>
          <NavLink
            to="/results"
            className={linkClass}
            onClick={handleLinkClick}
          >
            <CheckSquare className="w-5 h-5" />
            Results
          </NavLink>
          <NavLink
            to="/courses"
            className={linkClass}
            onClick={handleLinkClick}
          >
            <CreditCard className="w-5 h-5" />
            Courses
          </NavLink>
          <NavLink
            to="/support"
            className={linkClass}
            onClick={handleLinkClick}
          >
            <HelpCircle className="w-5 h-5" />
            Support
          </NavLink>
          <NavLink
            to="/settings"
            className={linkClass}
            onClick={handleLinkClick}
          >
            <Settings className="w-5 h-5" />
            Settings
          </NavLink>
        </nav>

        {/* Mobile Logout */}
        <div className="p-4 border-t border-[#003347]/20">
          <button
            onClick={() => {
              handleLogout();
              closeSidebar();
            }}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-md bg-red-100 hover:bg-red-200 text-red-700 font-medium border border-red-300"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
