import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Users, MessageCircle, Calendar, BookOpen, Brain, ArrowRight } from 'lucide-react';

const HomePage: React.FC = () => {
  const features = [
    {
      icon: Users,
      title: 'Student Engagement',
      description: 'Connect with peers and faculty through collaborative tools'
    },
    {
      icon: MessageCircle,
      title: 'AI Chat',
      description: 'Instant messaging with emoji support and group chats'
    },
    {
      icon: Calendar,
      title: 'Smart Scheduling',
      description: 'Manage classes, events, and academic calendar efficiently'
    },
    {
      icon: BookOpen,
      title: 'Digital Library',
      description: 'Access thousands of resources and academic materials'
    },
    {
      icon: Brain,
      title: 'Interactive Quizzes',
      description: 'Engaging assessments across multiple subjects'
    },
    {
      icon: GraduationCap,
      title: 'Academic Records',
      description: 'Track attendance, grades, and academic progress'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-6 py-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
                <GraduationCap className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Smart Campus
            </h1>
            <p className="text-2xl md:text-3xl font-semibold mb-4">
              Empowering Education through Smart Collaboration
            </p>
            <p className="text-lg md:text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
              Transform your campus experience with our comprehensive learning and collaboration platform designed for modern education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="group bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/login"
                className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-50 to-transparent"></div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Platform Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the comprehensive tools designed to enhance your educational journey and campus experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="bg-gradient-to-br from-blue-600 to-green-600 p-3 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Campus Experience?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join thousands of students and faculty already using Smart Campus to enhance their educational journey
          </p>
          <Link
            to="/signup"
            className="inline-flex items-center space-x-2 bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300 group"
          >
            <span>Start Your Journey</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;