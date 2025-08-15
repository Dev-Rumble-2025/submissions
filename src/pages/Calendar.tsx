import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus, Clock, MapPin, Users } from 'lucide-react';

interface Event {
  id: string;
  title: string;
  date: Date;
  time: string;
  location?: string;
  type: 'class' | 'exam' | 'event' | 'assignment';
  color: string;
}

const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState<'month' | 'week' | 'day'>('month');

  const events: Event[] = [
    {
      id: '1',
      title: 'Database Systems Lecture',
      date: new Date(2024, 2, 15),
      time: '10:00 AM',
      location: 'Room 101',
      type: 'class',
      color: 'bg-blue-500'
    },
    {
      id: '2',
      title: 'Computer Networks Exam',
      date: new Date(2024, 2, 18),
      time: '2:00 PM',
      location: 'Exam Hall A',
      type: 'exam',
      color: 'bg-red-500'
    },
    {
      id: '3',
      title: 'AI Workshop',
      date: new Date(2024, 2, 20),
      time: '11:00 AM',
      location: 'Conference Room',
      type: 'event',
      color: 'bg-green-500'
    },
    {
      id: '4',
      title: 'Project Submission',
      date: new Date(2024, 2, 22),
      time: '11:59 PM',
      type: 'assignment',
      color: 'bg-purple-500'
    }
  ];

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    
    return days;
  };

  const getEventsForDate = (date: Date) => {
    return events.filter(event => 
      event.date.toDateString() === date.toDateString()
    );
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      if (direction === 'prev') {
        newDate.setMonth(prev.getMonth() - 1);
      } else {
        newDate.setMonth(prev.getMonth() + 1);
      }
      return newDate;
    });
  };

  const isToday = (day: number) => {
    const today = new Date();
    return (
      day === today.getDate() &&
      currentDate.getMonth() === today.getMonth() &&
      currentDate.getFullYear() === today.getFullYear()
    );
  };

  const days = getDaysInMonth(currentDate);

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Academic Calendar</h1>
          <button className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-3 rounded-xl font-medium hover:from-blue-700 hover:to-green-700 transition-all duration-200">
            <Plus className="h-4 w-4" />
            <span>Add Event</span>
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6">
          {/* Calendar Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigateMonth('prev')}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <ChevronLeft className="h-5 w-5 text-gray-600" />
              </button>
              <h2 className="text-2xl font-bold text-gray-900">
                {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
              </h2>
              <button
                onClick={() => navigateMonth('next')}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <ChevronRight className="h-5 w-5 text-gray-600" />
              </button>
            </div>

            <div className="flex items-center space-x-2">
              {['month', 'week', 'day'].map((viewType) => (
                <button
                  key={viewType}
                  onClick={() => setView(viewType as 'month' | 'week' | 'day')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    view === viewType
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {viewType.charAt(0).toUpperCase() + viewType.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-1 mb-4">
            {weekDays.map((day) => (
              <div key={day} className="p-3 text-center text-sm font-semibold text-gray-600 bg-gray-50 rounded-lg">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {days.map((day, index) => (
              <div
                key={index}
                className={`min-h-[120px] p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors ${
                  day && isToday(day) ? 'bg-blue-50 border-blue-300' : ''
                }`}
              >
                {day && (
                  <>
                    <div className={`text-sm font-semibold mb-2 ${
                      isToday(day) ? 'text-blue-600' : 'text-gray-900'
                    }`}>
                      {day}
                    </div>
                    <div className="space-y-1">
                      {getEventsForDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day)).map((event) => (
                        <div
                          key={event.id}
                          className={`${event.color} text-white text-xs p-1 rounded truncate`}
                          title={`${event.title} at ${event.time}`}
                        >
                          {event.title}
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="mt-8 bg-white rounded-2xl shadow-xl p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Upcoming Events</h3>
          <div className="space-y-4">
            {events.map((event) => (
              <div key={event.id} className="flex items-center space-x-4 p-4 hover:bg-gray-50 rounded-xl transition-colors">
                <div className={`w-4 h-4 ${event.color} rounded-full`}></div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{event.title}</h4>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{event.date.toLocaleDateString()} at {event.time}</span>
                    </div>
                    {event.location && (
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{event.location}</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    event.type === 'class' ? 'bg-blue-100 text-blue-800' :
                    event.type === 'exam' ? 'bg-red-100 text-red-800' :
                    event.type === 'event' ? 'bg-green-100 text-green-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {event.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;