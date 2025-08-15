import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import { GraduationCap, User, LogOut } from 'lucide-react';

const Header: React.FC = () => {
  const { user, logout } = useUser();

  const handleLogout = () => {
    logout();
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-blue-100 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/dashboard" className="flex items-center space-x-2 group">
            <div className="bg-gradient-to-br from-blue-600 to-green-600 p-2 rounded-xl group-hover:scale-110 transition-transform duration-300">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Smart Campus
              </h1>
              <p className="text-xs text-gray-500">Learning Platform</p>
            </div>
          </Link>

          <div className="flex items-center space-x-4">
            {user && (
              <div className="flex items-center space-x-3 bg-blue-50 px-4 py-2 rounded-full">
                <User className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-800">{user.name}</span>
              </div>
            )}
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 px-4 py-2 bg-red-100 hover:bg-red-200 text-red-700 rounded-full transition-colors duration-200"
            >
              <LogOut className="h-4 w-4" />
              <span className="text-sm font-medium">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;