import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, Bot, User, Lightbulb, BookOpen, Calculator, Globe } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: string;
}

const ChatBox = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your AI assistant for Smart Campus. How can I help you today? You can ask me about courses, assignments, campus facilities, or any academic questions!",
      isBot: true,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const getAIResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();

    // Course-related questions
    if (message.includes('course') || message.includes('subject')) {
      return "I can help you with course information! We offer various programs including Computer Science, Data Science, Business Administration, and Engineering. Would you like specific details about any particular course?";
    }

    // Assignment help
    if (message.includes('assignment') || message.includes('homework')) {
      return "For assignment help, I recommend checking your course materials first. You can also visit the Library section for additional resources, or schedule time with your professors during office hours. What specific subject do you need help with?";
    }

    // Campus facilities
    if (message.includes('library') || message.includes('book')) {
      return "Our digital library has thousands of resources available 24/7! You can access textbooks, research papers, and multimedia content. Use the Library section in the platform to search and download materials.";
    }

    // Technical support
    if (message.includes('technical') || message.includes('login') || message.includes('access')) {
      return "For technical issues, try refreshing your browser first. If you're still having trouble accessing any features, please contact our IT support team at support@smartcampus.edu or use the help section in your dashboard.";
    }

    // Schedule and calendar
    if (message.includes('schedule') || message.includes('calendar') || message.includes('class')) {
      return "You can view your complete schedule in the Calendar section. It shows all your classes, assignments, and events. You can also set reminders for important deadlines!";
    }

    // Grades and progress
    if (message.includes('grade') || message.includes('score') || message.includes('progress')) {
      return "Check your academic progress in the Dashboard. Your grades, attendance, and assignment scores are all tracked there. You can also see your GPA and overall performance analytics.";
    }

    // Study tips
    if (message.includes('study') || message.includes('exam') || message.includes('test')) {
      return "Here are some study tips: 1) Create a study schedule, 2) Use active learning techniques, 3) Form study groups, 4) Take regular breaks, 5) Use our quiz section to practice! What subject are you preparing for?";
    }

    // Math and calculations
    if (message.includes('math') || message.includes('calculate') || message.includes('equation')) {
      return "I can help with basic math concepts! For complex calculations, I recommend using online calculators or math software. Our Computer Science and Mathematics courses also cover various computational topics.";
    }

    // General questions
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! Great to see you're using Smart Campus. I'm here to assist with any questions about your academic journey. What can I help you with today?";
    }

    // Default responses
    const defaultResponses = [
      "That's an interesting question! Could you provide more details so I can give you a more specific answer?",
      "I'd be happy to help! For detailed information about this topic, you might also want to check with your professors or the student support services.",
      "Thanks for asking! While I can provide general guidance, for specific academic or administrative questions, I recommend contacting the relevant department directly.",
      "I understand you're looking for information about this. Have you checked the resources in your Dashboard or Library section? They might have what you need!",
      "Great question! I'm here to help with academic and campus-related queries. Is there a specific aspect of this topic you'd like me to focus on?",
    ];

    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const newMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      isBot: false,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages(prev => [...prev, newMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse: Message = {
        id: messages.length + 2,
        text: getAIResponse(inputMessage),
        isBot: true,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickQuestions = [
    { icon: BookOpen, text: "What courses are available?", query: "What courses and programs do you offer?" },
    { icon: Calculator, text: "Help with assignments", query: "I need help with my assignments" },
    { icon: Globe, text: "Campus facilities", query: "Tell me about campus facilities" },
    { icon: Lightbulb, text: "Study tips", query: "Can you give me some study tips?" },
  ];

  const handleQuickQuestion = (query: string) => {
    setInputMessage(query);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-full mb-4">
            <MessageCircle className="h-8 w-8" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">AI Assistant</h1>
          <p className="text-gray-600">Get instant help with your academic questions 24/7</p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-blue-100 overflow-hidden">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-blue-600 to-green-600 px-6 py-4">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <div className="text-white">
                <h3 className="font-semibold">Smart Campus AI</h3>
                <p className="text-sm text-blue-100">Online • Ready to help</p>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div className="h-96 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start space-x-3 ${
                  message.isBot ? 'justify-start' : 'justify-end'
                }`}
              >
                {message.isBot && (
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                      <Bot className="h-5 w-5 text-white" />
                    </div>
                  </div>
                )}

                <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                  message.isBot
                    ? 'bg-gray-100 text-gray-900'
                    : 'bg-gradient-to-r from-blue-600 to-green-600 text-white'
                }`}>
                  <p className="text-sm">{message.text}</p>
                  <p className={`text-xs mt-1 ${
                    message.isBot ? 'text-gray-500' : 'text-blue-100'
                  }`}>
                    {message.timestamp}
                  </p>
                </div>

                {!message.isBot && (
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                      <User className="h-5 w-5 text-gray-600" />
                    </div>
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-start space-x-3 justify-start">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                    <Bot className="h-5 w-5 text-white" />
                  </div>
                </div>
                <div className="max-w-xs lg:max-w-md px-4 py-3 rounded-2xl bg-gray-100">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          <div className="px-6 py-4 border-t border-gray-200 bg-gray-50/50">
            <p className="text-sm text-gray-600 mb-3">Quick questions:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {quickQuestions.map((question, index) => {
                const Icon = question.icon;
                return (
                  <button
                    key={index}
                    onClick={() => handleQuickQuestion(question.query)}
                    className="flex items-center space-x-2 px-3 py-2 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 text-sm"
                  >
                    <Icon className="h-4 w-4 text-blue-600" />
                    <span className="text-gray-700 truncate">{question.text}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Message Input */}
          <div className="px-6 py-4 border-t border-gray-200 bg-white">
            <div className="flex space-x-4">
              <div className="flex-1">
                <textarea
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything about courses, assignments, campus life..."
                  rows={1}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                  style={{ minHeight: '48px', maxHeight: '120px' }}
                />
              </div>
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isTyping}
                className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-xl hover:from-blue-700 hover:to-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* AI Capabilities */}
        <div className="mt-8 bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-blue-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">What I can help you with:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-gray-700">Course information and enrollment</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-gray-700">Assignment and study guidance</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-gray-700">Campus facilities and services</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span className="text-gray-700">Technical support</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span className="text-gray-700">Academic planning</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
              <span className="text-gray-700">General campus questions</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;