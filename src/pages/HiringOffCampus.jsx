import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Clock, ExternalLink, Star, FileText } from 'lucide-react';

const HiringOffCampus = () => {
  const [filter, setFilter] = useState('all');
  
  const companies = [
    // International Companies
    {
      id: 101,
      name: 'Google',
      logo: '🔍',
      type: 'Tech Giant',
      location: 'Multiple Locations',
      hiringMonth: 'September 2025',
      languages: ['Python', 'Java', 'C++', 'JavaScript'],
      description: 'Software Engineer - Off Campus',
      difficulty: 'Hard',
      applications: 50000,
      color: 'from-red-500 to-yellow-500',
      officialLink: 'https://careers.google.com/',
      experience: '0-2 years',
      package: '15-25 LPA'
    },
    {
      id: 102,
      name: 'Microsoft',
      logo: '🪟',
      type: 'Tech Giant',
      location: 'Multiple Locations',
      hiringMonth: 'October 2025',
      languages: ['C#', 'Python', 'Java', 'TypeScript'],
      description: 'Software Development Engineer',
      difficulty: 'Hard',
      applications: 45000,
      color: 'from-blue-500 to-cyan-500',
      officialLink: 'https://careers.microsoft.com/',
      experience: '0-2 years',
      package: '12-20 LPA'
    },
    {
      id: 103,
      name: 'Amazon',
      logo: '📦',
      type: 'E-commerce',
      location: 'Multiple Locations',
      hiringMonth: 'November 2025',
      languages: ['Java', 'Python', 'C++', 'JavaScript'],
      description: 'Software Development Engineer',
      difficulty: 'Medium',
      applications: 60000,
      color: 'from-orange-500 to-yellow-500',
      officialLink: 'https://www.amazon.jobs/',
      experience: '0-2 years',
      package: '10-18 LPA'
    },
    {
      id: 104,
      name: 'Meta',
      logo: '👥',
      type: 'Social Media',
      location: 'Multiple Locations',
      hiringMonth: 'December 2025',
      languages: ['Python', 'JavaScript', 'PHP', 'React'],
      description: 'Software Engineer - Off Campus',
      difficulty: 'Hard',
      applications: 40000,
      color: 'from-blue-600 to-purple-600',
      officialLink: 'https://www.metacareers.com/',
      experience: '0-2 years',
      package: '18-28 LPA'
    },
    // Financial Services
    {
      id: 126,
      name: 'JP Morgan Chase',
      logo: '🏦',
      type: 'Financial Services',
      location: 'New York, NY',
      hiringMonth: 'September 2025',
      languages: ['Java', 'Python', 'C++', 'SQL'],
      description: 'Software Engineer - Off Campus',
      difficulty: 'Hard',
      applications: 35000,
      color: 'from-blue-800 to-gray-800',
      officialLink: 'https://careers.jpmorgan.com/',
      experience: '0-2 years',
      package: '20-35 LPA'
    },
    {
      id: 127,
      name: 'Goldman Sachs',
      logo: '💼',
      type: 'Financial Services',
      location: 'New York, NY',
      hiringMonth: 'October 2025',
      languages: ['Java', 'Python', 'C++', 'JavaScript'],
      description: 'Technology Analyst',
      difficulty: 'Hard',
      applications: 30000,
      color: 'from-yellow-600 to-blue-800',
      officialLink: 'https://www.goldmansachs.com/careers/',
      experience: '0-2 years',
      package: '25-40 LPA'
    },
    {
      id: 128,
      name: 'Morgan Stanley',
      logo: '📈',
      type: 'Financial Services',
      location: 'New York, NY',
      hiringMonth: 'November 2025',
      languages: ['Java', 'Python', 'C#', 'SQL'],
      description: 'Technology Associate',
      difficulty: 'Hard',
      applications: 28000,
      color: 'from-blue-700 to-green-700',
      officialLink: 'https://www.morganstanley.com/careers/',
      experience: '0-2 years',
      package: '22-38 LPA'
    },
    // Indian IT Services
    {
      id: 105,
      name: 'Tata Consultancy Services',
      logo: '🏢',
      type: 'Indian IT Services',
      location: 'Mumbai, India',
      hiringMonth: 'September 2025',
      languages: ['Java', 'Python', 'JavaScript', 'SQL'],
      description: 'Software Developer - Off Campus',
      difficulty: 'Easy',
      applications: 50000,
      color: 'from-blue-600 to-purple-600',
      officialLink: 'https://www.tcs.com/careers',
      experience: '0-2 years',
      package: '3.5-4.5 LPA'
    },
    {
      id: 106,
      name: 'Infosys',
      logo: '💼',
      type: 'Indian IT Services',
      location: 'Bangalore, India',
      hiringMonth: 'October 2025',
      languages: ['Java', 'Python', 'C++', 'JavaScript'],
      description: 'Systems Engineer - Off Campus',
      difficulty: 'Easy',
      applications: 45000,
      color: 'from-green-600 to-blue-600',
      officialLink: 'https://www.infosys.com/careers/',
      experience: '0-1 years',
      package: '3.2-4.0 LPA'
    },
    {
      id: 107,
      name: 'Wipro',
      logo: '⚡',
      type: 'Indian IT Services',
      location: 'Hyderabad, India',
      hiringMonth: 'November 2025',
      languages: ['Java', 'Python', 'C#', 'JavaScript'],
      description: 'Project Engineer - Off Campus',
      difficulty: 'Easy',
      applications: 40000,
      color: 'from-purple-600 to-pink-600',
      officialLink: 'https://careers.wipro.com/',
      experience: '0-2 years',
      package: '3.0-4.2 LPA'
    },
    {
      id: 108,
      name: 'HCL Technologies',
      logo: '🚀',
      type: 'Indian IT Services',
      location: 'Noida, India',
      hiringMonth: 'December 2025',
      languages: ['Java', 'Python', 'C++', 'JavaScript'],
      description: 'Software Engineer - Off Campus',
      difficulty: 'Medium',
      applications: 42000,
      color: 'from-red-500 to-orange-500',
      officialLink: 'https://www.hcltech.com/careers',
      experience: '0-1 years',
      package: '3.5-4.5 LPA'
    },
    {
      id: 109,
      name: 'Tech Mahindra',
      logo: '🔧',
      type: 'Indian IT Services',
      location: 'Bangalore, India',
      hiringMonth: 'September 2025',
      languages: ['Java', 'Python', 'JavaScript', 'Angular'],
      description: 'Software Engineer - Off Campus',
      difficulty: 'Medium',
      applications: 30000,
      color: 'from-orange-600 to-red-600',
      officialLink: 'https://careers.techmahindra.com/',
      experience: '0-1 years',
      package: '3.6-4.6 LPA'
    },
    // Indian Product Companies
    {
      id: 110,
      name: 'Flipkart',
      logo: '🛒',
      type: 'Indian E-commerce',
      location: 'Bangalore, India',
      hiringMonth: 'October 2025',
      languages: ['Java', 'Python', 'JavaScript', 'React'],
      description: 'Software Development Engineer',
      difficulty: 'Medium',
      applications: 25000,
      color: 'from-blue-500 to-yellow-500',
      officialLink: 'https://www.flipkartcareers.com/',
      experience: '0-2 years',
      package: '8-15 LPA'
    },
    {
      id: 111,
      name: 'Zomato',
      logo: '🍽️',
      type: 'Indian Food Tech',
      location: 'Gurgaon, India',
      hiringMonth: 'November 2025',
      languages: ['Python', 'JavaScript', 'React', 'Node.js'],
      description: 'Software Development Engineer',
      difficulty: 'Medium',
      applications: 15000,
      color: 'from-red-500 to-pink-500',
      officialLink: 'https://www.zomato.com/careers',
      experience: '0-2 years',
      package: '6-12 LPA'
    },
    {
      id: 112,
      name: 'Paytm',
      logo: '💳',
      type: 'Indian Fintech',
      location: 'Noida, India',
      hiringMonth: 'December 2025',
      languages: ['Java', 'Python', 'JavaScript', 'Go'],
      description: 'Software Engineer - Off Campus',
      difficulty: 'Medium',
      applications: 20000,
      color: 'from-blue-600 to-cyan-600',
      officialLink: 'https://jobs.paytm.com/',
      experience: '0-2 years',
      package: '7-14 LPA'
    },
    {
      id: 113,
      name: 'Ola',
      logo: '🚗',
      type: 'Indian Mobility',
      location: 'Bangalore, India',
      hiringMonth: 'September 2025',
      languages: ['Python', 'Java', 'JavaScript', 'React'],
      description: 'Software Development Engineer',
      difficulty: 'Medium',
      applications: 12000,
      color: 'from-green-500 to-yellow-500',
      officialLink: 'https://www.olacabs.com/careers',
      experience: '0-2 years',
      package: '8-16 LPA'
    },
    {
      id: 114,
      name: 'Swiggy',
      logo: '🍕',
      type: 'Indian Food Tech',
      location: 'Bangalore, India',
      hiringMonth: 'October 2025',
      languages: ['Python', 'JavaScript', 'React', 'Node.js'],
      description: 'Software Development Engineer',
      difficulty: 'Medium',
      applications: 18000,
      color: 'from-orange-500 to-red-500',
      officialLink: 'https://careers.swiggy.com/',
      experience: '0-2 years',
      package: '9-17 LPA'
    },
    {
      id: 115,
      name: 'BYJU\'S',
      logo: '📚',
      type: 'Indian EdTech',
      location: 'Bangalore, India',
      hiringMonth: 'November 2025',
      languages: ['JavaScript', 'React', 'Node.js', 'Python'],
      description: 'Software Development Engineer',
      difficulty: 'Easy',
      applications: 25000,
      color: 'from-purple-500 to-blue-500',
      officialLink: 'https://byjus.com/careers/',
      experience: '0-2 years',
      package: '5-10 LPA'
    },
    {
      id: 116,
      name: 'Razorpay',
      logo: '💰',
      type: 'Indian Fintech',
      location: 'Bangalore, India',
      hiringMonth: 'December 2025',
      languages: ['Python', 'JavaScript', 'Go', 'Java'],
      description: 'Software Development Engineer',
      difficulty: 'Medium',
      applications: 10000,
      color: 'from-blue-600 to-purple-600',
      officialLink: 'https://razorpay.com/jobs/',
      experience: '0-2 years',
      package: '12-22 LPA'
    },
    {
      id: 117,
      name: 'Freshworks',
      logo: '🌱',
      type: 'Indian SaaS',
      location: 'Chennai, India',
      hiringMonth: 'September 2025',
      languages: ['Ruby', 'JavaScript', 'Python', 'React'],
      description: 'Software Development Engineer',
      difficulty: 'Medium',
      applications: 8000,
      color: 'from-green-600 to-teal-600',
      officialLink: 'https://www.freshworks.com/company/careers/',
      experience: '0-2 years',
      package: '10-18 LPA'
    },
    {
      id: 118,
      name: 'Zoho',
      logo: '🔧',
      type: 'Indian SaaS',
      location: 'Chennai, India',
      hiringMonth: 'October 2025',
      languages: ['Java', 'JavaScript', 'Python', 'C++'],
      description: 'Software Development Engineer',
      difficulty: 'Medium',
      applications: 15000,
      color: 'from-red-600 to-orange-600',
      officialLink: 'https://careers.zohocorp.com/',
      experience: '0-2 years',
      package: '6-12 LPA'
    },
    {
      id: 119,
      name: 'Myntra',
      logo: '👗',
      type: 'Indian E-commerce',
      location: 'Bangalore, India',
      hiringMonth: 'November 2025',
      languages: ['Java', 'Python', 'JavaScript', 'React'],
      description: 'Software Development Engineer',
      difficulty: 'Medium',
      applications: 12000,
      color: 'from-pink-500 to-purple-500',
      officialLink: 'https://careers.myntra.com/',
      experience: '0-2 years',
      package: '8-15 LPA'
    },
    {
      id: 120,
      name: 'PhonePe',
      logo: '📱',
      type: 'Indian Fintech',
      location: 'Bangalore, India',
      hiringMonth: 'December 2025',
      languages: ['Java', 'Python', 'JavaScript', 'Kotlin'],
      description: 'Software Development Engineer',
      difficulty: 'Medium',
      applications: 10000,
      color: 'from-purple-600 to-indigo-600',
      officialLink: 'https://www.phonepe.com/careers/',
      experience: '0-2 years',
      package: '10-20 LPA'
    },
    // Consulting Companies
    {
      id: 121,
      name: 'Accenture',
      logo: '🔷',
      type: 'Consulting',
      location: 'Pune, India',
      hiringMonth: 'September 2025',
      languages: ['Java', 'Python', 'JavaScript', 'SQL'],
      description: 'Application Development Associate',
      difficulty: 'Medium',
      applications: 35000,
      color: 'from-indigo-600 to-purple-600',
      officialLink: 'https://www.accenture.com/in-en/careers',
      experience: '0-1 years',
      package: '4.0-5.0 LPA'
    },
    {
      id: 122,
      name: 'Cognizant',
      logo: '🎯',
      type: 'Consulting',
      location: 'Chennai, India',
      hiringMonth: 'October 2025',
      languages: ['Java', 'Python', 'JavaScript', 'React'],
      description: 'Programmer Analyst - Off Campus',
      difficulty: 'Medium',
      applications: 38000,
      color: 'from-blue-500 to-cyan-500',
      officialLink: 'https://careers.cognizant.com/',
      experience: '0-2 years',
      package: '3.8-4.8 LPA'
    },
    {
      id: 123,
      name: 'Capgemini',
      logo: '🌟',
      type: 'Consulting',
      location: 'Mumbai, India',
      hiringMonth: 'November 2025',
      languages: ['Java', 'Python', 'JavaScript', 'SQL'],
      description: 'Analyst - Off Campus',
      difficulty: 'Medium',
      applications: 25000,
      color: 'from-teal-600 to-blue-600',
      officialLink: 'https://www.capgemini.com/careers/',
      experience: '0-2 years',
      package: '4.2-5.2 LPA'
    },
    // Startups
    {
      id: 124,
      name: 'Unacademy',
      logo: '🎓',
      type: 'Indian EdTech',
      location: 'Bangalore, India',
      hiringMonth: 'December 2025',
      languages: ['Python', 'JavaScript', 'React', 'Node.js'],
      description: 'Software Development Engineer',
      difficulty: 'Medium',
      applications: 8000,
      color: 'from-green-500 to-blue-500',
      officialLink: 'https://unacademy.com/careers/',
      experience: '0-2 years',
      package: '8-15 LPA'
    },
    {
      id: 125,
      name: 'Meesho',
      logo: '🛍️',
      type: 'Indian E-commerce',
      location: 'Bangalore, India',
      hiringMonth: 'September 2025',
      languages: ['Python', 'JavaScript', 'React', 'Java'],
      description: 'Software Development Engineer',
      difficulty: 'Medium',
      applications: 6000,
      color: 'from-pink-500 to-red-500',
      officialLink: 'https://www.meesho.com/careers',
      experience: '0-2 years',
      package: '12-25 LPA'
    }
  ];

  const filteredCompanies = filter === 'all' 
    ? companies 
    : companies.filter(company => company.type.toLowerCase().includes(filter));

  const filters = [
    { key: 'all', label: 'All Companies' },
    { key: 'tech', label: 'Tech Giants' },
    { key: 'financial', label: 'Financial Services' },
    { key: 'indian', label: 'Indian Companies' },
    { key: 'it services', label: 'IT Services' },
    { key: 'consulting', label: 'Consulting' },
    { key: 'fintech', label: 'Fintech' },
    { key: 'e-commerce', label: 'E-commerce' },
    { key: 'food', label: 'Food Tech' },
    { key: 'edtech', label: 'EdTech' },
    { key: 'saas', label: 'SaaS' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Off-Campus Hiring Opportunities
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover off-campus hiring opportunities from top MNC companies in India and internationally. Get complete preparation resources including 100 DSA questions and resume tips.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {filters.map((filterItem) => (
            <button
              key={filterItem.key}
              onClick={() => setFilter(filterItem.key)}
              className={`px-6 py-2 rounded-full transition-colors duration-200 ${
                filter === filterItem.key
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              } shadow-md`}
            >
              {filterItem.label}
            </button>
          ))}
        </motion.div>

        {/* Companies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCompanies.map((company, index) => (
            <motion.div
              key={company.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Company Header */}
              <div className={`bg-gradient-to-r ${company.color} p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{company.logo}</div>
                  <div className="flex items-center space-x-1">
                    <Star className="text-yellow-300 fill-current" size={16} />
                    <span className="text-sm font-medium">
                      {company.difficulty}
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">{company.name}</h3>
                <p className="text-lg opacity-90">{company.description}</p>
              </div>

              {/* Company Info */}
              <div className="p-6">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <MapPin size={16} />
                    <span>{company.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-orange-600">
                    <Calendar size={16} />
                    <span className="font-semibold">Hiring Soon</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Clock size={16} />
                    <span>{company.applications.toLocaleString()} applications</span>
                  </div>
                  <div className="flex items-center space-x-2 text-green-600">
                    <span className="font-medium">💰 {company.package}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-blue-600">
                    <span className="font-medium">📅 {company.experience}</span>
                  </div>
                </div>

                {/* Required Languages */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2">Required Languages:</h4>
                  <div className="flex flex-wrap gap-2">
                    {company.languages.map((lang) => (
                      <span
                        key={lang}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col space-y-3">
                  <Link
                    to={`/company/${company.id}`}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg text-center hover:bg-blue-700 transition-colors duration-200 font-medium"
                  >
                    View 100 DSA Questions
                  </Link>
                  <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-200 font-medium flex items-center justify-center space-x-2">
                    <FileText size={16} />
                    <span>Resume Tips</span>
                  </button>
                  <a
                    href={company.officialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white px-4 py-2 rounded-lg text-center hover:bg-green-700 transition-colors duration-200 font-medium flex items-center justify-center space-x-2"
                  >
                    <ExternalLink size={16} />
                    <span>Apply Now</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Resume Tips Section */}
        <motion.div 
          className="mt-16 bg-white p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Resume Tips for Off-Campus Hiring
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-600">For IT Service Companies:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Highlight your technical skills prominently</li>
                <li>• Include relevant projects and coursework</li>
                <li>• Show problem-solving abilities</li>
                <li>• Mention any internships or part-time work</li>
                <li>• Keep it concise - 1-2 pages maximum</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-purple-600">For Product Companies:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Focus on coding skills and algorithms</li>
                <li>• Include GitHub profile and projects</li>
                <li>• Show impact with quantifiable results</li>
                <li>• Mention competitive programming achievements</li>
                <li>• Highlight system design knowledge</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-600">For Financial Services:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Emphasize mathematical and analytical skills</li>
                <li>• Include knowledge of financial markets</li>
                <li>• Show proficiency in data structures</li>
                <li>• Mention any finance-related projects</li>
                <li>• Highlight low-latency programming experience</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HiringOffCampus;