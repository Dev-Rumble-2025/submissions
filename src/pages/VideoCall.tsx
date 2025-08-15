import React, { useState, useRef, useEffect } from 'react';
import { 
  Video, 
  VideoOff, 
  Mic, 
  MicOff, 
  Phone, 
  PhoneOff, 
  
  MessageSquare, 
  Settings,
  Monitor,
  Camera,
  Volume2,
  VolumeX,
  MoreHorizontal
} from 'lucide-react';

const VideoCall: React.FC = () => {
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isAudioOn, setIsAudioOn] = useState(true);
  const [isCallActive, setIsCallActive] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [participants] = useState([
    { id: 1, name: 'Dr. Sarah Johnson', isVideo: true, isMuted: false, avatar: 'https://ui-avatars.com/api/?name=Dr.+Sarah+Johnson&background=3B82F6&color=fff' },
    { id: 2, name: 'Michael Chen', isVideo: true, isMuted: true, avatar: 'https://ui-avatars.com/api/?name=Michael+Chen&background=10B981&color=fff' },
    { id: 3, name: 'Emily Rodriguez', isVideo: false, isMuted: false, avatar: 'https://ui-avatars.com/api/?name=Emily+Rodriguez&background=F97316&color=fff' },
    { id: 4, name: 'You', isVideo: true, isMuted: false, avatar: 'https://ui-avatars.com/api/?name=You&background=8B5CF6&color=fff' },
  ]);
  
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Simulate getting user media
    if (isCallActive && videoRef.current) {
      // In a real implementation, you would use:
      // navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      // For demo purposes, we'll just show a placeholder
    }
  }, [isCallActive]);

  const startCall = async () => {
    setIsCallActive(true);
    // In a real implementation, you would initialize WebRTC connection here
  };

  const endCall = () => {
    setIsCallActive(false);
    // In a real implementation, you would close WebRTC connections here
  };

  const toggleVideo = () => {
    setIsVideoOn(!isVideoOn);
    // In a real implementation, you would enable/disable video track
  };

  const toggleAudio = () => {
    setIsAudioOn(!isAudioOn);
    // In a real implementation, you would enable/disable audio track
  };

  const toggleScreenShare = () => {
    setIsScreenSharing(!isScreenSharing);
    // In a real implementation, you would start/stop screen sharing
  };

  const ParticipantVideo = ({ participant, isMain = false }: { participant: any, isMain?: boolean }) => (
    <div className={`relative bg-gray-900 rounded-lg overflow-hidden ${
      isMain ? 'aspect-video' : 'aspect-square'
    }`}>
      {participant.isVideo ? (
        <div className={`w-full h-full bg-gradient-to-br from-blue-600 to-green-600 flex items-center justify-center ${
          isMain ? 'min-h-[300px]' : 'min-h-[100px]'
        }`}>
          <div className="text-white text-center">
            <div className={`${isMain ? 'w-20 h-20' : 'w-12 h-12'} mx-auto mb-2 rounded-full bg-white/20 flex items-center justify-center`}>
              <Video className={`${isMain ? 'h-10 w-10' : 'h-6 w-6'} text-white`} />
            </div>
            <p className={`${isMain ? 'text-lg' : 'text-sm'} font-medium`}>Camera Active</p>
            <p className={`${isMain ? 'text-sm' : 'text-xs'} opacity-75`}>{participant.name}</p>
          </div>
        </div>
      ) : (
        <div className={`w-full h-full bg-gray-700 flex items-center justify-center ${
          isMain ? 'min-h-[300px]' : 'min-h-[100px]'
        }`}>
          <div className="text-center">
            <img
              src={participant.avatar}
              alt={participant.name}
              className={`${isMain ? 'w-20 h-20' : 'w-12 h-12'} mx-auto mb-2 rounded-full`}
            />
            <p className={`text-white ${isMain ? 'text-lg' : 'text-sm'} font-medium`}>{participant.name}</p>
          </div>
        </div>
      )}
      
      {/* Audio indicator */}
      <div className="absolute top-2 right-2">
        {participant.isMuted ? (
          <div className="bg-red-500 p-1 rounded-full">
            <MicOff className="h-3 w-3 text-white" />
          </div>
        ) : (
          <div className="bg-green-500 p-1 rounded-full">
            <Mic className="h-3 w-3 text-white" />
          </div>
        )}
      </div>

      {/* Name label */}
      <div className="absolute bottom-2 left-2">
        <div className="bg-black/50 backdrop-blur-sm px-2 py-1 rounded text-white text-xs">
          {participant.name}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-full mb-4">
            <Video className="h-8 w-8" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Video Conferencing</h1>
          <p className="text-gray-600">Connect with classmates and faculty through high-quality video calls</p>
        </div>

        {!isCallActive ? (
          /* Pre-call screen */
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-blue-100 p-8">
              <div className="text-center mb-8">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg aspect-video mb-6 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Camera className="h-16 w-16 mx-auto mb-4" />
                    <p className="text-lg font-medium">Camera Preview</p>
                    <p className="text-sm opacity-75">Your video will appear here</p>
                  </div>
                </div>

                <div className="flex items-center justify-center space-x-4 mb-8">
                  <button
                    onClick={toggleVideo}
                    className={`p-3 rounded-full transition-colors duration-200 ${
                      isVideoOn 
                        ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' 
                        : 'bg-red-100 text-red-600 hover:bg-red-200'
                    }`}
                  >
                    {isVideoOn ? <Video className="h-6 w-6" /> : <VideoOff className="h-6 w-6" />}
                  </button>

                  <button
                    onClick={toggleAudio}
                    className={`p-3 rounded-full transition-colors duration-200 ${
                      isAudioOn 
                        ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' 
                        : 'bg-red-100 text-red-600 hover:bg-red-200'
                    }`}
                  >
                    {isAudioOn ? <Volume2 className="h-6 w-6" /> : <MicOff className="h-6 w-6" />}
                  </button>
                </div>

                <button
                  onClick={startCall}
                  className="flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-xl hover:from-green-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg mx-auto"
                >
                  <Phone className="h-5 w-5" />
                  <span>Join Call</span>
                </button>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Meeting Details</h3>
                <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-600">Meeting ID:</span>
                    <span className="text-sm text-gray-900 font-mono">SC-2024-001</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-600">Subject:</span>
                    <span className="text-sm text-gray-900">Computer Science Study Group</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-600">Host:</span>
                    <span className="text-sm text-gray-900">Dr. Sarah Johnson</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-600">Participants:</span>
                    <span className="text-sm text-gray-900">4 joined</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* In-call interface */
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Main video area */}
            <div className="lg:col-span-3">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-blue-100 p-4">
                {/* Main participant */}
                <div className="mb-4">
                  <ParticipantVideo participant={participants[0]} isMain={true} />
                </div>

                {/* Other participants */}
                <div className="grid grid-cols-3 gap-4">
                  {participants.slice(1).map((participant) => (
                    <ParticipantVideo key={participant.id} participant={participant} />
                  ))}
                </div>

                {/* Call controls */}
                <div className="flex items-center justify-center space-x-4 mt-6 pt-6 border-t border-gray-200">
                  <button
                    onClick={toggleAudio}
                    className={`p-3 rounded-full transition-colors duration-200 ${
                      isAudioOn 
                        ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' 
                        : 'bg-red-500 text-white hover:bg-red-600'
                    }`}
                    title="Toggle microphone"
                  >
                    {isAudioOn ? < VolumeX className="h-6 w-6" /> : <MicOff className="h-6 w-6" />}
                  </button>

                  <button
                    onClick={toggleVideo}
                    className={`p-3 rounded-full transition-colors duration-200 ${
                      isVideoOn 
                        ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' 
                        : 'bg-red-500 text-white hover:bg-red-600'
                    }`}
                    title="Toggle camera"
                  >
                    {isVideoOn ? <Video className="h-6 w-6" /> : <VideoOff className="h-6 w-6" />}
                  </button>

                  <button
                    onClick={toggleScreenShare}
                    className={`p-3 rounded-full transition-colors duration-200 ${
                      isScreenSharing 
                        ? 'bg-blue-500 text-white hover:bg-blue-600' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    title="Share screen"
                  >
                    <Monitor className="h-6 w-6" />
                  </button>

                  <button
                    onClick={() => setIsChatOpen(!isChatOpen)}
                    className="p-3 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-200"
                    title="Toggle chat"
                  >
                    <MessageSquare className="h-6 w-6" />
                  </button>

                  <button
                    className="p-3 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-200"
                    title="Settings"
                  >
                    <Settings className="h-6 w-6" />
                  </button>

                  <button
                    className="p-3 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-200"
                    title="More options"
                  >
                    <MoreHorizontal className="h-6 w-6" />
                  </button>

                  <button
                    onClick={endCall}
                    className="p-3 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors duration-200"
                    title="End call"
                  >
                    <PhoneOff className="h-6 w-6" />
                  </button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Participants list */}
              <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-blue-100 p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900">Participants</h3>
                  <span className="text-sm text-gray-600">{participants.length}</span>
                </div>
                
                <div className="space-y-3">
                  {participants.map((participant) => (
                    <div key={participant.id} className="flex items-center space-x-3">
                      <img
                        src={participant.avatar}
                        alt={participant.name}
                        className="w-8 h-8 rounded-full"
                      />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">{participant.name}</p>
                      </div>
                      <div className="flex items-center space-x-1">
                        {participant.isMuted ? (
                          <MicOff className="h-4 w-4 text-red-500" />
                        ) : (
                          <Mic className="h-4 w-4 text-green-500" />
                        )}
                        {participant.isVideo ? (
                          <Video className="h-4 w-4 text-blue-500" />
                        ) : (
                          <VideoOff className="h-4 w-4 text-gray-400" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chat panel */}
              {isChatOpen && (
              
                <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-blue-100 p-4">
                  <h3 className="font-semibold text-gray-900 mb-4">Chat</h3>
                  
                  <div className="h-48 bg-gray-50 rounded-lg p-3 mb-3 overflow-y-auto">
                    <div className="space-y-2">
                      <div className="text-xs">
                        <span className="text-blue-600 font-medium">Dr. Johnson:</span>
                        <span className="text-gray-600 ml-1">Welcome everyone!</span>
                      </div>
                      <div className="text-xs">
                        <span className="text-green-600 font-medium">Michael:</span>
                        <span className="text-gray-600 ml-1">Thanks for organizing this session</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <input
                      type="text"
                      placeholder="Type a message..."
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    />
                    <button className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                      <MessageSquare className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Call info */}
              <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-green-100 p-4">
                <h3 className="font-semibold text-gray-900 mb-4">Call Info</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="text-gray-900">15:32</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Quality:</span>
                    <span className="text-green-600">HD</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Network:</span>
                    <span className="text-green-600">Excellent</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoCall;