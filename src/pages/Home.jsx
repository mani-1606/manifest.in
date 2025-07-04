import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, Users, TrendingUp, Globe } from 'lucide-react';
import CurrentHiring from '../components/CurrentHiring';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const topCompanies = [
    // International Companies
    { name: 'Google', logo: '🔍', color: 'from-red-500 to-yellow-500' },
    { name: 'Microsoft', logo: '🪟', color: 'from-blue-500 to-cyan-500' },
    { name: 'Apple', logo: '🍎', color: 'from-gray-700 to-gray-900' },
    { name: 'Amazon', logo: '📦', color: 'from-orange-500 to-yellow-500' },
    { name: 'Meta', logo: '👥', color: 'from-blue-600 to-purple-600' },
    { name: 'Netflix', logo: '🎬', color: 'from-red-600 to-black' },
    { name: 'Tesla', logo: '⚡', color: 'from-red-500 to-gray-800' },
    { name: 'Spotify', logo: '🎵', color: 'from-green-500 to-black' },
    // Financial Services
    { name: 'JP Morgan', logo: '🏦', color: 'from-blue-800 to-gray-800' },
    { name: 'Goldman Sachs', logo: '💼', color: 'from-yellow-600 to-blue-800' },
    { name: 'Morgan Stanley', logo: '📈', color: 'from-blue-700 to-green-700' },
    // Indian Companies
    { name: 'TCS', logo: '🏢', color: 'from-blue-600 to-purple-600' },
    { name: 'Infosys', logo: '💼', color: 'from-green-600 to-blue-600' },
    { name: 'Wipro', logo: '⚡', color: 'from-purple-600 to-pink-600' },
    { name: 'Flipkart', logo: '🛒', color: 'from-blue-500 to-yellow-500' },
    { name: 'Zomato', logo: '🍽️', color: 'from-red-500 to-pink-500' },
    { name: 'Paytm', logo: '💳', color: 'from-blue-600 to-cyan-600' },
    { name: 'Ola', logo: '🚗', color: 'from-green-500 to-yellow-500' },
    { name: 'Swiggy', logo: '🍕', color: 'from-orange-500 to-red-500' },
    { name: 'BYJU\'S', logo: '📚', color: 'from-purple-500 to-blue-500' },
    { name: 'Razorpay', logo: '💰', color: 'from-blue-600 to-purple-600' },
    { name: 'Freshworks', logo: '🌱', color: 'from-green-600 to-teal-600' },
    { name: 'Zoho', logo: '🔧', color: 'from-red-600 to-orange-600' },
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Real-time Updates',
      description: 'Get the latest internship and hiring opportunities updated daily'
    },
    {
      icon: Globe,
      title: 'Global & Indian Reach',
      description: 'Access opportunities from companies worldwide and leading Indian tech companies'
    },
    {
      icon: Briefcase,
      title: 'Comprehensive Resources',
      description: 'Complete preparation materials including DSA questions and resume tips'
    },
    {
      icon: Users,
      title: 'Curated Quality',
      description: 'Hand-picked opportunities from top MNC companies and Indian tech giants'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % topCompanies.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Welcome to <span className="bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">Manifest.in</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-8 opacity-90"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Your ultimate destination for internships and off-campus hiring opportunities from top MNC companies worldwide and leading Indian tech companies
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link
                to="/internships"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Briefcase size={20} />
                <span>Explore Internships</span>
                <ArrowRight size={20} />
              </Link>
              
              <Link
                to="/hiring-off-campus"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Users size={20} />
                <span>Browse Hiring Opportunities</span>
                <ArrowRight size={20} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Daily Update Notification */}
      <motion.section 
        className="bg-gradient-to-r from-green-500 to-blue-500 text-white py-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-lg font-medium">
              🔄 Every day after 10:00 PM website will refresh - Check for daily updates and prepare well. All the best! 🚀
            </p>
          </div>
        </div>
      </motion.section>

      {/* Current Hiring Section */}
      <CurrentHiring />

      {/* Company Logos Slider */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold text-center mb-12 text-gray-800"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Top Global & Indian Companies We Feature
          </motion.h2>
          
          <div className="relative overflow-hidden">
            <motion.div 
              className="flex space-x-8"
              animate={{ x: -currentSlide * 200 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {topCompanies.map((company, index) => (
                <motion.div
                  key={company.name}
                  className={`flex-shrink-0 w-48 h-32 bg-gradient-to-r ${company.color} rounded-lg flex flex-col items-center justify-center text-white shadow-lg`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-4xl mb-2">{company.logo}</div>
                  <p className="font-semibold text-lg">{company.name}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          <div className="flex justify-center mt-6 space-x-2">
            {topCompanies.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold text-center mb-4 text-gray-800"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Why Manifest.in is Better Than LinkedIn
          </motion.h2>
          
          <motion.p 
            className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We don't just list jobs - we provide complete preparation resources and curated opportunities specifically for students and fresh graduates from both global and Indian companies
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-4xl font-bold mb-2">500+</h3>
              <p className="text-xl">Global Companies</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-4xl font-bold mb-2">200+</h3>
              <p className="text-xl">Indian Companies</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-4xl font-bold mb-2">1000+</h3>
              <p className="text-xl">DSA Questions</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-4xl font-bold mb-2">Daily</h3>
              <p className="text-xl">Fresh Updates</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;