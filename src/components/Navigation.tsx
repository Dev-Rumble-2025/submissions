import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, Users, MessageCircle, Video, Calendar, BookOpen, 
  QrCode, PlusCircle, Mail, MapPin, Brain, CreditCard 
} from 'lucide-react';

const Navigation: React.FC = () => {
  const navItems = [
    { path: '/dashboard', icon: Home, label: 'Dashboard' },
    { path: '/enrollment', icon: Users, label: 'Enrollment' },
    { path: '/chat', icon: MessageCircle, label: 'Chat' },
    { path: '/video-call', icon: Video, label: 'Video Call' },
    { path: '/calendar', icon: Calendar, label: 'Calendar' },
    { path: '/library', icon: BookOpen, label: 'Library' },
    { path: '/attendance', icon: QrCode, label: 'Attendance' },
    { path: '/events', icon: PlusCircle, label: 'Events' },
    { path: '/email', icon: Mail, label: 'Email' },
    { path: '/map', icon: MapPin, label: 'Campus Map' },
    { path: '/quiz', icon: Brain, label: 'Quiz' },
    { path: '/id-card', icon: CreditCard, label: 'ID Card' },
  ];

  return (
    <nav className="fixed top-20 left-0 right-0 bg-white/90 backdrop-blur-sm border-b border-blue-100 z-40">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center overflow-x-auto py-3">
          <div className="flex space-x-1">
            {navItems.map(({ path, icon: Icon, label }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `flex items-center space-x-2 px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-lg'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }`
                }
              >
                <Icon className="h-4 w-4" />
                <span>{label}</span>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;