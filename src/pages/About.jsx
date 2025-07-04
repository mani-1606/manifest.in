import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Linkedin, Instagram, Target } from 'lucide-react';

const About = () => {
  const profileImage = "/src/assets/MANIFEST IMAGE.jpg";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Manifest.in</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connecting students with opportunities and empowering careers through comprehensive preparation resources.
          </p>
        </motion.div>

        {/* Profile Section */}
        <motion.div 
          className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <motion.img
                src={profileImage}
                alt="Mani Panchadi - Founder of Manifest.in"
                className="w-48 h-48 rounded-full object-cover border-4 border-blue-500 shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Mani Panchadi
              </h2>
              <p className="text-lg text-gray-600 mb-2">
                Founder & Admin of Manifest.in
              </p>
              <p className="text-lg text-blue-600 mb-6 font-medium">
                Student of GIET UNIVERSITY<br />
                3RD YEAR, CES(AI-ML)
              </p>
              <div className="space-y-4">
                <div className="flex items-center justify-center md:justify-start space-x-3">
                  <Target className="text-blue-600" size={20} />
                  <span className="text-gray-700">
                    <strong>Mission:</strong> To bridge the gap between students and career opportunities by providing comprehensive preparation resources and curated job listings.
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  My aim is to create a platform that goes beyond traditional job boards by offering complete preparation materials, 
                  from DSA questions to resume tips, helping students succeed in their career journey. I believe every student deserves 
                  access to quality opportunities and the resources to prepare for them effectively.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  As a 3rd-year Computer Engineering student specializing in AI-ML at GIET University, I understand the challenges 
                  students face in finding the right opportunities and preparing for them. Manifest.in is my contribution to making 
                  career preparation more accessible and comprehensive for students across India and globally.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div 
          className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Contact Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Phone className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Phone</h3>
                  <p className="text-gray-600">+91-9040862759</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Mail className="text-green-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">mpanchadi@gmail.com</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Linkedin className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">LinkedIn</h3>
                  <a 
                    href="https://www.linkedin.com/in/mani-panchadi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    linkedin.com/in/mani-panchadi
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                  <Instagram className="text-pink-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Instagram</h3>
                  <a 
                    href="https://www.instagram.com/manifest_1606?igsh=czRhYWhzbmEwMHg1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-600 hover:text-pink-800 transition-colors"
                  >
                    @manifest_1606
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Location */}
        <motion.div 
          className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Headquarters Location
          </h2>
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <MapPin className="text-red-500" size={24} />
              <span className="text-lg text-gray-700">GIET University, Odisha, India</span>
            </div>
            <p className="text-gray-600 mb-6">
              Operating from GIET University campus, serving students globally with opportunities from companies worldwide.
            </p>
            
            {/* Google Maps Embed */}
            <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.8234567890123!2d83.8348732!3d19.0488259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3c966565794719%3A0xc26dc00e59401dde!2sNRI%20Students%20Hostel%2C%20GIET%20Rd%2C%20Odisha%20765022!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="GIET University Location"
              ></iframe>
            </div>
            
            <div className="mt-4">
              <a
                href="https://www.google.com/maps/place/NRI+Students+Hostel,+GIET+Rd,+Odisha+765022/@19.0482251,83.835422,17.81z/data=!4m6!3m5!1s0x3a3c966565794719:0xc26dc00e59401dde!8m2!3d19.0488259!4d83.8348732!16s%2Fg%2F11gzbz0ds?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                <MapPin size={20} />
                <span>View on Google Maps</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;