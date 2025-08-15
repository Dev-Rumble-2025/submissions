import React from 'react';
import QRCode from 'react-qr-code';
import { useUser } from '../contexts/UserContext';
import { Download, Printer as Print, Share, Calendar, MapPin, Mail, Phone } from 'lucide-react';

const IDCard: React.FC = () => {
  const { user } = useUser();

  // Generate QR code data with student information
  const qrCodeData = JSON.stringify({
    studentId: user?.studentId || 'ST2024001',
    name: user?.name || 'John Doe',
    email: user?.email || 'john.doe@university.edu',
    role: user?.role || 'student',
    issueDate: new Date().toISOString(),
    validUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString() // Valid for 1 year
  });

  const cardInfo = {
    studentId: user?.studentId || 'ST2024001',
    name: user?.name || 'John Doe',
    email: user?.email || 'john.doe@university.edu',
    program: 'Computer Science',
    year: '3rd Year',
    issueDate: new Date().toLocaleDateString(),
    validUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toLocaleDateString(),
    emergencyContact: '+1 (555) 123-4567',
    bloodType: 'O+',
    address: '123 University Ave, Smart City, SC 12345'
  };

  const handleDownload = () => {
    // This would typically generate a PDF or image of the ID card
    alert('ID Card download initiated!');
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'My Student ID Card',
        text: `Student ID: ${cardInfo.studentId}`,
        url: window.location.href
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Digital Student ID Card</h1>
          <p className="text-lg text-gray-600">Your official university identification</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* ID Card Front */}
          <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 rounded-2xl shadow-2xl overflow-hidden">
            <div className="p-8 text-white">
              {/* University Header */}
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold mb-1">Smart Campus University</h2>
                <p className="text-blue-100 text-sm">Student Identification Card</p>
              </div>

              {/* Student Photo Placeholder */}
              <div className="flex justify-center mb-6">
                <div className="w-32 h-40 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border-2 border-white/30">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-white/30 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">
                        {cardInfo.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <p className="text-xs text-white/80">Photo</p>
                  </div>
                </div>
              </div>

              {/* Student Information */}
              <div className="space-y-3">
                <div>
                  <h3 className="text-xl font-bold">{cardInfo.name}</h3>
                  <p className="text-blue-100 text-sm">Student ID: {cardInfo.studentId}</p>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-blue-200 font-medium">Program</p>
                    <p className="text-white">{cardInfo.program}</p>
                  </div>
                  <div>
                    <p className="text-blue-200 font-medium">Year</p>
                    <p className="text-white">{cardInfo.year}</p>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-6 pt-4 border-t border-white/30">
                <div className="flex justify-between text-xs text-blue-100">
                  <span>Issued: {cardInfo.issueDate}</span>
                  <span>Valid Until: {cardInfo.validUntil}</span>
                </div>
              </div>
            </div>
          </div>

          {/* ID Card Back */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border">
            <div className="p-8">
              {/* QR Code */}
              <div className="text-center mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Verification Code</h3>
                <div className="bg-white p-4 rounded-xl border-2 border-gray-200 inline-block">
                  <QRCode
                    size={180}
                    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                    value={qrCodeData}
                    viewBox={`0 0 256 256`}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-2">Scan for verification</p>
              </div>

              {/* Emergency Information */}
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Contact Information</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4" />
                      <span>{cardInfo.email}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4" />
                      <span>{cardInfo.emergencyContact}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Emergency Info</h4>
                  <div className="text-sm text-gray-600">
                    <p><strong>Blood Type:</strong> {cardInfo.bloodType}</p>
                    <p><strong>Emergency Contact:</strong> {cardInfo.emergencyContact}</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Address</h4>
                  <p className="text-sm text-gray-600">{cardInfo.address}</p>
                </div>
              </div>

              {/* Terms */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-500 text-center">
                  This card remains the property of Smart Campus University. 
                  If found, please return to Student Services.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleDownload}
            className="flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-200"
          >
            <Download className="h-5 w-5" />
            <span>Download ID Card</span>
          </button>
          
          <button
            onClick={handlePrint}
            className="flex items-center justify-center space-x-2 border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
          >
            <Print className="h-5 w-5" />
            <span>Print Card</span>
          </button>
          
          <button
            onClick={handleShare}
            className="flex items-center justify-center space-x-2 border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
          >
            <Share className="h-5 w-5" />
            <span>Share</span>
          </button>
        </div>

        {/* Additional Information */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Card Usage</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span>Library access and book borrowing</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span>Campus facility entry</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                <span>Event registration and attendance</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                <span>Exam hall verification</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                <span>Campus dining and services</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Important Notes</h3>
            <div className="space-y-3 text-gray-600 text-sm">
              <div className="flex items-start space-x-2">
                <Calendar className="h-4 w-4 text-blue-600 mt-0.5" />
                <div>
                  <p className="font-medium">Validity Period</p>
                  <p>This card is valid until {cardInfo.validUntil}</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-green-600 mt-0.5" />
                <div>
                  <p className="font-medium">Campus Access</p>
                  <p>Required for all campus facilities and services</p>
                </div>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mt-4">
                <p className="text-yellow-800 font-medium text-sm">
                  ⚠️ Report lost cards immediately to Student Services
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IDCard;