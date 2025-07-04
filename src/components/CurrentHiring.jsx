import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, ExternalLink, Briefcase, Users, TrendingUp } from 'lucide-react';

const CurrentHiring = () => {
  const [currentlyHiring, setCurrentlyHiring] = useState([]);

  useEffect(() => {
    // Load companies from localStorage
    const savedCompanies = localStorage.getItem('adminCompanies');
    if (savedCompanies) {
      const companies = JSON.parse(savedCompanies);
      const hiring = companies.filter(company => company.isCurrentlyHiring);
      setCurrentlyHiring(hiring);
    } else {
      // Default currently hiring companies
      const defaultHiring = [
        {
          id: 1,
          name: 'Google',
          type: 'internship',
          hiringDate: 'September 2025',
          location: 'Mountain View, CA',
          logo: '🔍',
          color: 'from-red-500 to-yellow-500'
        },
        {
          id: 3,
          name: 'TCS',
          type: 'hiring',
          hiringDate: 'September 2025',
          location: 'Mumbai, India',
          logo: '🏢',
          color: 'from-blue-600 to-purple-600'
        },
        {
          id: 4,
          name: 'Infosys',
          type: 'hiring',
          hiringDate: 'October 2025',
          location: 'Bangalore, India',
          logo: '💼',
          color: 'from-green-600 to-blue-600'
        }
      ];
      setCurrentlyHiring(defaultHiring);
    }
  }, []);

  if (currentlyHiring.length === 0) {
    return null;
  }

  const internships = currentlyHiring.filter(c => c.type === 'internship');
  const hiring = currentlyHiring.filter(c => c.type === 'hiring');

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <TrendingUp className="text-green-600" size={32} />
            <h2 className="text-4xl font-bold text-gray-800">Currently Hiring</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't miss out! These companies are actively hiring right now. Apply today!
          </p>
        </motion.div>

        {/* Currently Hiring Stats */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">{currentlyHiring.length}</div>
            <div className="text-gray-600">Companies Hiring Now</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">{internships.length}</div>
            <div className="text-gray-600">Internship Opportunities</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">{hiring.length}</div>
            <div className="text-gray-600">Full-time Positions</div>
          </div>
        </motion.div>

        {/* Internships Currently Hiring */}
        {internships.length > 0 && (
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-800 flex items-center space-x-2">
                <Briefcase className="text-blue-600" size={24} />
                <span>Internships - Apply Now!</span>
              </h3>
              <Link
                to="/internships"
                className="text-blue-600 hover:text-blue-800 font-medium flex items-center space-x-1"
              >
                <span>View All</span>
                <ExternalLink size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {internships.map((company, index) => (
                <motion.div
                  key={company.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className={`bg-gradient-to-r ${company.color || 'from-blue-500 to-purple-500'} p-4 text-white`}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-3xl">{company.logo || '🏢'}</div>
                      <span className="bg-green-400 text-green-900 px-2 py-1 rounded-full text-xs font-bold animate-pulse">
                        HIRING SOON
                      </span>
                    </div>
                    <h4 className="text-xl font-bold">{company.name}</h4>
                  </div>
                  <div className="p-4">
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center space-x-2 text-orange-600">
                        <Calendar size={16} />
                        <span className="font-semibold">Hiring Soon</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <MapPin size={16} />
                        <span>{company.location}</span>
                      </div>
                    </div>
                    <Link
                      to="/internships"
                      className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg text-center hover:bg-blue-700 transition-colors duration-200 font-medium block"
                    >
                      Apply Now
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Full-time Hiring Currently Active */}
        {hiring.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-800 flex items-center space-x-2">
                <Users className="text-purple-600" size={24} />
                <span>Off-Campus Hiring - Apply Now!</span>
              </h3>
              <Link
                to="/hiring-off-campus"
                className="text-purple-600 hover:text-purple-800 font-medium flex items-center space-x-1"
              >
                <span>View All</span>
                <ExternalLink size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hiring.map((company, index) => (
                <motion.div
                  key={company.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className={`bg-gradient-to-r ${company.color || 'from-purple-500 to-pink-500'} p-4 text-white`}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-3xl">{company.logo || '🏢'}</div>
                      <span className="bg-green-400 text-green-900 px-2 py-1 rounded-full text-xs font-bold animate-pulse">
                        HIRING SOON
                      </span>
                    </div>
                    <h4 className="text-xl font-bold">{company.name}</h4>
                  </div>
                  <div className="p-4">
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center space-x-2 text-orange-600">
                        <Calendar size={16} />
                        <span className="font-semibold">Hiring Soon</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <MapPin size={16} />
                        <span>{company.location}</span>
                      </div>
                    </div>
                    <Link
                      to="/hiring-off-campus"
                      className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg text-center hover:bg-purple-700 transition-colors duration-200 font-medium block"
                    >
                      Apply Now
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Don't Wait - Apply Today!</h3>
            <p className="text-lg mb-6">
              These opportunities won't last long. Get your resume ready and apply now!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/internships"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Browse All Internships
              </Link>
              <Link
                to="/hiring-off-campus"
                className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Browse All Hiring
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CurrentHiring;