import React, { useState } from 'react';
import { MapPin, Navigation, Search, Phone, Clock, Car, Bus } from 'lucide-react';

interface Building {
  id: string;
  name: string;
  type: string;
  description: string;
  coordinates: { x: number; y: number };
  facilities: string[];
  contact?: string;
  hours?: string;
}

const CollegeMap: React.FC = () => {
  const [selectedBuilding, setSelectedBuilding] = useState<Building | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const buildings: Building[] = [
    {
      id: '1',
      name: 'Computer Science Building',
      type: 'Academic',
      description: 'Main building for Computer Science department with state-of-the-art labs.',
      coordinates: { x: 30, y: 25 },
      facilities: ['Computer Labs', 'Lecture Halls', 'Faculty Offices', 'WiFi'],
      contact: '+1 (555) 123-4567',
      hours: '7:00 AM - 10:00 PM'
    },
    {
      id: '2',
      name: 'Central Library',
      type: 'Academic',
      description: 'The main campus library with extensive digital and physical collections.',
      coordinates: { x: 50, y: 40 },
      facilities: ['Study Rooms', 'Digital Resources', 'Printing Services', 'Café'],
      contact: '+1 (555) 123-4568',
      hours: '6:00 AM - 12:00 AM'
    },
    {
      id: '3',
      name: 'Student Center',
      type: 'Student Services',
      description: 'Hub for student activities, dining, and administrative services.',
      coordinates: { x: 40, y: 60 },
      facilities: ['Food Court', 'Student Organizations', 'Auditorium', 'ATM'],
      contact: '+1 (555) 123-4569',
      hours: '24/7'
    },
    {
      id: '4',
      name: 'Engineering Complex',
      type: 'Academic',
      description: 'Modern facility housing all engineering departments and labs.',
      coordinates: { x: 70, y: 30 },
      facilities: ['Engineering Labs', 'Workshop', 'Research Centers', 'Parking'],
      contact: '+1 (555) 123-4570',
      hours: '7:00 AM - 11:00 PM'
    },
    {
      id: '5',
      name: 'Sports Complex',
      type: 'Recreation',
      description: 'Complete sports and recreation facility for students and faculty.',
      coordinates: { x: 20, y: 70 },
      facilities: ['Gym', 'Pool', 'Basketball Courts', 'Tennis Courts'],
      contact: '+1 (555) 123-4571',
      hours: '5:00 AM - 11:00 PM'
    },
    {
      id: '6',
      name: 'Main Auditorium',
      type: 'Events',
      description: 'Large venue for conferences, graduations, and special events.',
      coordinates: { x: 60, y: 50 },
      facilities: ['Seating 1000+', 'AV Equipment', 'Stage', 'Parking'],
      contact: '+1 (555) 123-4572',
      hours: 'Event Schedule'
    }
  ];

  const filteredBuildings = buildings.filter(building =>
    building.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    building.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
    building.facilities.some(facility => 
      facility.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const getBuildingColor = (type: string) => {
    switch (type) {
      case 'Academic': return 'bg-blue-500';
      case 'Student Services': return 'bg-green-500';
      case 'Recreation': return 'bg-orange-500';
      case 'Events': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  const handleBuildingClick = (building: Building) => {
    setSelectedBuilding(building);
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Campus Map</h1>
          <p className="text-lg text-gray-600">Navigate your way around our beautiful campus</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Area */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <div className="mb-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search buildings, facilities..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>

              {/* Campus Map */}
              <div className="relative bg-green-100 rounded-xl overflow-hidden h-96 md:h-[500px]">
                {/* Background elements */}
                <div className="absolute inset-4">
                  {/* Paths */}
                  <div className="absolute top-1/2 left-0 right-0 h-2 bg-gray-300 rounded transform -translate-y-1/2"></div>
                  <div className="absolute top-0 bottom-0 left-1/2 w-2 bg-gray-300 rounded transform -translate-x-1/2"></div>
                  
                  {/* Green areas */}
                  <div className="absolute top-2 left-2 w-16 h-16 bg-green-200 rounded-lg opacity-60"></div>
                  <div className="absolute bottom-2 right-2 w-20 h-12 bg-green-200 rounded-lg opacity-60"></div>
                  
                  {/* Parking areas */}
                  <div className="absolute top-2 right-2 w-12 h-8 bg-gray-400 rounded opacity-60"></div>
                  <div className="absolute bottom-2 left-2 w-8 h-12 bg-gray-400 rounded opacity-60"></div>
                </div>

                {/* Buildings */}
                {filteredBuildings.map((building) => (
                  <button
                    key={building.id}
                    onClick={() => handleBuildingClick(building)}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 ${getBuildingColor(building.type)} rounded-lg shadow-lg hover:scale-110 transition-transform duration-200 flex items-center justify-center text-white font-bold text-xs ${
                      selectedBuilding?.id === building.id ? 'ring-4 ring-yellow-400' : ''
                    }`}
                    style={{
                      left: `${building.coordinates.x}%`,
                      top: `${building.coordinates.y}%`
                    }}
                    title={building.name}
                  >
                    {building.name.charAt(0)}
                  </button>
                ))}
              </div>

              {/* Legend */}
              <div className="mt-4 flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-blue-500 rounded"></div>
                  <span className="text-sm text-gray-600">Academic</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-green-500 rounded"></div>
                  <span className="text-sm text-gray-600">Student Services</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-orange-500 rounded"></div>
                  <span className="text-sm text-gray-600">Recreation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-purple-500 rounded"></div>
                  <span className="text-sm text-gray-600">Events</span>
                </div>
              </div>
            </div>
          </div>

          {/* Building Details */}
          <div className="space-y-6">
            {/* Selected Building Info */}
            {selectedBuilding && (
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {selectedBuilding.name}
                    </h3>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-white ${getBuildingColor(selectedBuilding.type)}`}>
                      {selectedBuilding.type}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedBuilding(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    ✕
                  </button>
                </div>
                
                <p className="text-gray-600 mb-4">{selectedBuilding.description}</p>
                
                <div className="space-y-3">
                  {selectedBuilding.contact && (
                    <div className="flex items-center space-x-2 text-sm">
                      <Phone className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-600">{selectedBuilding.contact}</span>
                    </div>
                  )}
                  
                  {selectedBuilding.hours && (
                    <div className="flex items-center space-x-2 text-sm">
                      <Clock className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-600">{selectedBuilding.hours}</span>
                    </div>
                  )}
                </div>
                
                <div className="mt-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Facilities</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedBuilding.facilities.map((facility, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                        {facility}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-medium">
                    <Navigation className="h-4 w-4" />
                    <span>Get Directions</span>
                  </button>
                </div>
              </div>
            )}

            {/* Quick Info */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Campus Information</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Address</h4>
                  <p className="text-gray-600 text-sm">
                    123 University Avenue<br />
                    Smart City, SC 12345<br />
                    United States
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Transportation</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm">
                      <Car className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-600">Parking available</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Bus className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-600">Bus routes 12, 45, 67</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Emergency</h4>
                  <p className="text-red-600 font-medium text-sm">Campus Security: 911</p>
                </div>
              </div>
            </div>

            {/* Building List */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">All Buildings</h3>
              <div className="space-y-2">
                {filteredBuildings.map((building) => (
                  <button
                    key={building.id}
                    onClick={() => handleBuildingClick(building)}
                    className={`w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors ${
                      selectedBuilding?.id === building.id ? 'bg-blue-50 border border-blue-200' : ''
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 ${getBuildingColor(building.type)} rounded-full`}></div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 text-sm">{building.name}</h4>
                        <p className="text-xs text-gray-500">{building.type}</p>
                      </div>
                      <MapPin className="h-4 w-4 text-gray-400" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeMap;