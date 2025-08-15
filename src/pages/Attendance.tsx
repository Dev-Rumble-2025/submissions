import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import { QrCode, Scan, Calendar, Clock, Users, CheckCircle, XCircle } from 'lucide-react';

interface AttendanceRecord {
  id: string;
  subject: string;
  date: Date;
  time: string;
  status: 'present' | 'absent' | 'late';
  location: string;
}

const Attendance: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'scan' | 'records' | 'generate'>('scan');
  const [scannedCode, setScannedCode] = useState('');
  const [isScanning, setIsScanning] = useState(false);

  const attendanceRecords: AttendanceRecord[] = [
    {
      id: '1',
      subject: 'Database Systems',
      date: new Date(2024, 2, 15),
      time: '10:00 AM',
      status: 'present',
      location: 'Room 101'
    },
    {
      id: '2',
      subject: 'Computer Networks',
      date: new Date(2024, 2, 14),
      time: '2:00 PM',
      status: 'present',
      location: 'Room 205'
    },
    {
      id: '3',
      subject: 'Software Engineering',
      date: new Date(2024, 2, 13),
      time: '11:00 AM',
      status: 'late',
      location: 'Room 303'
    },
    {
      id: '4',
      subject: 'Artificial Intelligence',
      date: new Date(2024, 2, 12),
      time: '9:00 AM',
      status: 'absent',
      location: 'Room 402'
    },
    {
      id: '5',
      subject: 'Database Systems',
      date: new Date(2024, 2, 11),
      time: '10:00 AM',
      status: 'present',
      location: 'Room 101'
    }
  ];

  // Calculate attendance stats
  const totalClasses = attendanceRecords.length;
  const presentCount = attendanceRecords.filter(record => record.status === 'present').length;
  const lateCount = attendanceRecords.filter(record => record.status === 'late').length;
  const absentCount = attendanceRecords.filter(record => record.status === 'absent').length;
  const attendancePercentage = Math.round(((presentCount + lateCount) / totalClasses) * 100);

  const handleScan = () => {
    setIsScanning(true);
    // Simulate QR code scanning
    setTimeout(() => {
      setScannedCode('DB_SYSTEMS_20240315_1000');
      setIsScanning(false);
      alert('Attendance marked successfully!');
    }, 2000);
  };

  const generateQRCode = () => {
    const timestamp = new Date().toISOString();
    return `ATTENDANCE_${timestamp}_ROOM_101`;
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'present':
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case 'late':
        return <Clock className="h-5 w-5 text-yellow-600" />;
      case 'absent':
        return <XCircle className="h-5 w-5 text-red-600" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'present':
        return 'bg-green-100 text-green-800';
      case 'late':
        return 'bg-yellow-100 text-yellow-800';
      case 'absent':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Attendance System</h1>
          <p className="text-lg text-gray-600">Track your attendance with QR code scanning</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">{attendancePercentage}%</div>
            <p className="text-sm text-gray-600">Overall Attendance</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">{presentCount}</div>
            <p className="text-sm text-gray-600">Present</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-yellow-600 mb-2">{lateCount}</div>
            <p className="text-sm text-gray-600">Late</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">{absentCount}</div>
            <p className="text-sm text-gray-600">Absent</p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="border-b border-gray-200">
            <div className="flex">
              {[
                { key: 'scan', label: 'Scan QR Code', icon: Scan },
                { key: 'records', label: 'Attendance Records', icon: Calendar },
                { key: 'generate', label: 'Generate QR', icon: QrCode }
              ].map(({ key, label, icon: Icon }) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key as any)}
                  className={`flex-1 flex items-center justify-center space-x-2 px-6 py-4 font-medium transition-colors ${
                    activeTab === key
                      ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="p-8">
            {/* QR Code Scanner */}
            {activeTab === 'scan' && (
              <div className="text-center">
                <div className="max-w-md mx-auto">
                  <div className="bg-gray-100 rounded-2xl p-8 mb-6">
                    {isScanning ? (
                      <div className="space-y-4">
                        <div className="animate-pulse">
                          <div className="w-32 h-32 bg-gray-300 rounded-lg mx-auto mb-4"></div>
                        </div>
                        <p className="text-gray-600">Scanning QR Code...</p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <QrCode className="h-32 w-32 text-gray-400 mx-auto" />
                        <p className="text-gray-600">Position QR code within the frame</p>
                      </div>
                    )}
                  </div>
                  
                  <button
                    onClick={handleScan}
                    disabled={isScanning}
                    className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                  >
                    {isScanning ? 'Scanning...' : 'Start Scanning'}
                  </button>
                  
                  {scannedCode && (
                    <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl">
                      <p className="text-sm text-green-800">
                        <strong>Scanned:</strong> {scannedCode}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Attendance Records */}
            {activeTab === 'records' && (
              <div>
                <div className="space-y-4">
                  {attendanceRecords.map((record) => (
                    <div key={record.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                      <div className="flex items-center space-x-4">
                        {getStatusIcon(record.status)}
                        <div>
                          <h3 className="font-semibold text-gray-900">{record.subject}</h3>
                          <p className="text-sm text-gray-600">
                            {record.date.toLocaleDateString()} at {record.time} • {record.location}
                          </p>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(record.status)}`}>
                        {record.status.charAt(0).toUpperCase() + record.status.slice(1)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* QR Code Generator (Faculty) */}
            {activeTab === 'generate' && (
              <div className="text-center">
                <div className="max-w-md mx-auto">
                  <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 mb-6">
                    <QRCode
                      size={200}
                      style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                      value={generateQRCode()}
                      viewBox={`0 0 256 256`}
                    />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Class QR Code</h3>
                  <p className="text-gray-600 mb-6">Students can scan this code to mark their attendance</p>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-blue-800 font-medium">Subject:</span>
                      <span className="text-blue-600">Database Systems</span>
                    </div>
                    <div className="flex items-center justify-between text-sm mt-2">
                      <span className="text-blue-800 font-medium">Time:</span>
                      <span className="text-blue-600">10:00 AM - 11:30 AM</span>
                    </div>
                    <div className="flex items-center justify-between text-sm mt-2">
                      <span className="text-blue-800 font-medium">Location:</span>
                      <span className="text-blue-600">Room 101</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-green-700 transition-all duration-200">
                    Generate New Code
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attendance;