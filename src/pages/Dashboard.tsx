import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import { 
  Users, MessageCircle, Video, Calendar, BookOpen, 
  QrCode, PlusCircle, MapPin, Brain, CreditCard,
  TrendingUp, Clock, Bell
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const { user } = useUser();

  const quickActions = [
    { icon: MessageCircle, label: 'AI Chat', path: '/chat', color: 'from-blue-500 to-blue-600' },
    { icon: Video, label: 'Video Call', path: '/video-call', color: 'from-green-500 to-green-600' },
    { icon: Calendar, label: 'Calendar', path: '/calendar', color: 'from-purple-500 to-purple-600' },
    { icon: BookOpen, label: 'Library', path: '/library', color: 'from-orange-500 to-orange-600' },
    { icon: Brain, label: 'Quiz', path: '/quiz', color: 'from-red-500 to-red-600' },
    { icon: CreditCard, label: 'ID Card', path: '/id-card', color: 'from-indigo-500 to-indigo-600' },
  ];

  const recentActivities = [
    { type: 'quiz', title: 'Completed Database Management Quiz', time: '2 hours ago', score: '85%' },
    { type: 'attendance', title: 'Marked attendance for Computer Networks', time: '4 hours ago' },
    { type: 'event', title: 'Registered for Tech Conference 2024', time: '1 day ago' },
    { type: 'library', title: 'Downloaded "Advanced Algorithms" PDF', time: '2 days ago' },
  ];

  const upcomingEvents = [
    { title: 'Database Systems Exam', date: 'Tomorrow', time: '10:00 AM' },
    { title: 'Tech Workshop', date: 'March 15', time: '2:00 PM' },
    { title: 'Career Fair', date: 'March 18', time: '9:00 AM' },
  ];

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Welcome Section */}
      <div className="mb-8">
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Start your day with learning, {user?.name}! 
          </h1>
          <p className="text-blue-100 text-lg">
            Ready to continue your learning journey today.
          </p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {quickActions.map((action, index) => (
            <Link
              key={index}
              to={action.path}
              className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`bg-gradient-to-br ${action.color} p-3 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <action.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 text-sm">{action.label}</h3>
            </Link>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Stats Cards */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Stats</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Attendance</p>
                  <p className="text-3xl font-bold text-green-600">94%</p>
                </div>
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Avg. Quiz Score</p>
                  <p className="text-3xl font-bold text-blue-600">87%</p>
                </div>
                <Brain className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Hours Studied</p>
                  <p className="text-3xl font-bold text-purple-600">42</p>
                </div>
                <Clock className="h-8 w-8 text-purple-600" />
              </div>
            </div>
          </div>

          {/* Recent Activities */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Activities</h3>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{activity.title}</p>
                    <p className="text-sm text-gray-600">{activity.time}</p>
                  </div>
                  {activity.score && (
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                      {activity.score}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Upcoming Events */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Bell className="h-5 w-5 text-orange-600" />
              <h3 className="text-xl font-bold text-gray-900">Upcoming</h3>
            </div>
            <div className="space-y-3">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="border-l-4 border-blue-600 pl-4 py-2">
                  <h4 className="font-semibold text-gray-900 text-sm">{event.title}</h4>
                  <p className="text-xs text-gray-600">{event.date} at {event.time}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Access</h3>
            <div className="space-y-2">
              <Link to="/enrollment" className="block w-full text-left px-4 py-3 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                <Users className="h-4 w-4 inline mr-2" />
                Student Enrollment
              </Link>
              <Link to="/attendance" className="block w-full text-left px-4 py-3 text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                <QrCode className="h-4 w-4 inline mr-2" />
                Mark Attendance
              </Link>
              <Link to="/events" className="block w-full text-left px-4 py-3 text-purple-600 hover:bg-purple-50 rounded-lg transition-colors">
                <PlusCircle className="h-4 w-4 inline mr-2" />
                Create Event
              </Link>
              <Link to="/map" className="block w-full text-left px-4 py-3 text-orange-600 hover:bg-orange-50 rounded-lg transition-colors">
                <MapPin className="h-4 w-4 inline mr-2" />
                Campus Map
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;