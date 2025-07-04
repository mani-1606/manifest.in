import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Clock, ExternalLink, Star } from 'lucide-react';

const Internships = () => {
  const [filter, setFilter] = useState('all');
  
  const companies = [
    // International Companies
    {
      id: 1,
      name: 'Google',
      logo: '🔍',
      type: 'Tech Giant',
      location: 'Mountain View, CA',
      hiringMonth: 'September 2025',
      languages: ['Python', 'Java', 'C++', 'JavaScript'],
      description: 'Software Engineering Internship',
      difficulty: 'Hard',
      applications: 15000,
      color: 'from-red-500 to-yellow-500',
      officialLink: 'https://careers.google.com/jobs/results/?category=SOFTWARE_ENGINEERING&employment_type=INTERN'
    },
    {
      id: 2,
      name: 'Microsoft',
      logo: '🪟',
      type: 'Tech Giant',
      location: 'Redmond, WA',
      hiringMonth: 'October 2025',
      languages: ['C#', 'Python', 'Java', 'TypeScript'],
      description: 'Software Development Internship',
      difficulty: 'Medium',
      applications: 12000,
      color: 'from-blue-500 to-cyan-500',
      officialLink: 'https://careers.microsoft.com/students/us/en/search-results?keywords=internship'
    },
    {
      id: 3,
      name: 'Apple',
      logo: '🍎',
      type: 'Tech Giant',
      location: 'Cupertino, CA',
      hiringMonth: 'November 2025',
      languages: ['Swift', 'Objective-C', 'Python', 'C++'],
      description: 'iOS Development Internship',
      difficulty: 'Hard',
      applications: 8000,
      color: 'from-gray-700 to-gray-900',
      officialLink: 'https://jobs.apple.com/en-us/search?location=united-states-USA&team=internships-STDNT-INTRN'
    },
    {
      id: 4,
      name: 'Amazon',
      logo: '📦',
      type: 'E-commerce',
      location: 'Seattle, WA',
      hiringMonth: 'December 2025',
      languages: ['Java', 'Python', 'C++', 'JavaScript'],
      description: 'Software Development Engineer Internship',
      difficulty: 'Medium',
      applications: 20000,
      color: 'from-orange-500 to-yellow-500',
      officialLink: 'https://www.amazon.jobs/en/search?offset=0&result_limit=10&sort=relevant&category=internships-student-programs'
    },
    {
      id: 5,
      name: 'Meta',
      logo: '👥',
      type: 'Social Media',
      location: 'Menlo Park, CA',
      hiringMonth: 'September 2025',
      languages: ['Python', 'JavaScript', 'PHP', 'React'],
      description: 'Software Engineer Internship',
      difficulty: 'Hard',
      applications: 18000,
      color: 'from-blue-600 to-purple-600',
      officialLink: 'https://www.metacareers.com/careerprograms/pathways/'
    },
    {
      id: 6,
      name: 'Netflix',
      logo: '🎬',
      type: 'Entertainment',
      location: 'Los Gatos, CA',
      hiringMonth: 'October 2025',
      languages: ['Java', 'Python', 'JavaScript', 'Scala'],
      description: 'Software Engineering Internship',
      difficulty: 'Medium',
      applications: 5000,
      color: 'from-red-600 to-black',
      officialLink: 'https://jobs.netflix.com/search?q=internship'
    },
    {
      id: 7,
      name: 'Tesla',
      logo: '⚡',
      type: 'Automotive',
      location: 'Palo Alto, CA',
      hiringMonth: 'November 2025',
      languages: ['Python', 'C++', 'MATLAB', 'JavaScript'],
      description: 'Software Engineering Internship',
      difficulty: 'Hard',
      applications: 7000,
      color: 'from-red-500 to-gray-800',
      officialLink: 'https://www.tesla.com/careers/search/?query=internship'
    },
    {
      id: 8,
      name: 'Spotify',
      logo: '🎵',
      type: 'Music Streaming',
      location: 'Stockholm, Sweden',
      hiringMonth: 'December 2025',
      languages: ['Java', 'Python', 'JavaScript', 'Scala'],
      description: 'Backend Engineering Internship',
      difficulty: 'Medium',
      applications: 4000,
      color: 'from-green-500 to-black',
      officialLink: 'https://www.lifeatspotify.com/jobs?l=internship'
    },
    // Financial Services
    {
      id: 26,
      name: 'JP Morgan Chase',
      logo: '🏦',
      type: 'Financial Services',
      location: 'New York, NY',
      hiringMonth: 'September 2025',
      languages: ['Java', 'Python', 'C++', 'SQL'],
      description: 'Software Engineering Internship',
      difficulty: 'Hard',
      applications: 25000,
      color: 'from-blue-800 to-gray-800',
      officialLink: 'https://careers.jpmorgan.com/global/en/students/programs'
    },
    {
      id: 27,
      name: 'Goldman Sachs',
      logo: '💼',
      type: 'Financial Services',
      location: 'New York, NY',
      hiringMonth: 'October 2025',
      languages: ['Java', 'Python', 'C++', 'JavaScript'],
      description: 'Technology Analyst Internship',
      difficulty: 'Hard',
      applications: 20000,
      color: 'from-yellow-600 to-blue-800',
      officialLink: 'https://www.goldmansachs.com/careers/students/programs/'
    },
    {
      id: 28,
      name: 'Morgan Stanley',
      logo: '📈',
      type: 'Financial Services',
      location: 'New York, NY',
      hiringMonth: 'November 2025',
      languages: ['Java', 'Python', 'C#', 'SQL'],
      description: 'Technology Summer Analyst',
      difficulty: 'Hard',
      applications: 18000,
      color: 'from-blue-700 to-green-700',
      officialLink: 'https://www.morganstanley.com/careers/career-opportunities-search'
    },
    // Indian Companies
    {
      id: 9,
      name: 'Tata Consultancy Services',
      logo: '🏢',
      type: 'Indian IT Services',
      location: 'Mumbai, India',
      hiringMonth: 'September 2025',
      languages: ['Java', 'Python', 'JavaScript', 'SQL'],
      description: 'Software Developer Internship',
      difficulty: 'Easy',
      applications: 25000,
      color: 'from-blue-600 to-purple-600',
      officialLink: 'https://www.tcs.com/careers'
    },
    {
      id: 10,
      name: 'Infosys',
      logo: '💼',
      type: 'Indian IT Services',
      location: 'Bangalore, India',
      hiringMonth: 'October 2025',
      languages: ['Java', 'Python', 'C++', 'JavaScript'],
      description: 'Systems Engineer Internship',
      difficulty: 'Easy',
      applications: 22000,
      color: 'from-green-600 to-blue-600',
      officialLink: 'https://www.infosys.com/careers/'
    },
    {
      id: 11,
      name: 'Wipro',
      logo: '⚡',
      type: 'Indian IT Services',
      location: 'Hyderabad, India',
      hiringMonth: 'November 2025',
      languages: ['Java', 'Python', 'C#', 'JavaScript'],
      description: 'Project Engineer Internship',
      difficulty: 'Easy',
      applications: 20000,
      color: 'from-purple-600 to-pink-600',
      officialLink: 'https://careers.wipro.com/'
    },
    {
      id: 12,
      name: 'HCL Technologies',
      logo: '🚀',
      type: 'Indian IT Services',
      location: 'Noida, India',
      hiringMonth: 'December 2025',
      languages: ['Java', 'Python', 'C++', 'JavaScript'],
      description: 'Software Engineer Internship',
      difficulty: 'Medium',
      applications: 18000,
      color: 'from-red-500 to-orange-500',
      officialLink: 'https://www.hcltech.com/careers'
    },
    {
      id: 13,
      name: 'Tech Mahindra',
      logo: '🔧',
      type: 'Indian IT Services',
      location: 'Pune, India',
      hiringMonth: 'September 2025',
      languages: ['Java', 'Python', 'JavaScript', 'Angular'],
      description: 'Software Engineer Internship',
      difficulty: 'Medium',
      applications: 15000,
      color: 'from-orange-600 to-red-600',
      officialLink: 'https://careers.techmahindra.com/'
    },
    {
      id: 14,
      name: 'Flipkart',
      logo: '🛒',
      type: 'Indian E-commerce',
      location: 'Bangalore, India',
      hiringMonth: 'October 2025',
      languages: ['Java', 'Python', 'JavaScript', 'React'],
      description: 'Software Development Internship',
      difficulty: 'Medium',
      applications: 12000,
      color: 'from-blue-500 to-yellow-500',
      officialLink: 'https://www.flipkartcareers.com/'
    },
    {
      id: 15,
      name: 'Zomato',
      logo: '🍽️',
      type: 'Indian Food Tech',
      location: 'Gurgaon, India',
      hiringMonth: 'November 2025',
      languages: ['Python', 'JavaScript', 'React', 'Node.js'],
      description: 'Full Stack Developer Internship',
      difficulty: 'Medium',
      applications: 8000,
      color: 'from-red-500 to-pink-500',
      officialLink: 'https://www.zomato.com/careers'
    },
    {
      id: 16,
      name: 'Paytm',
      logo: '💳',
      type: 'Indian Fintech',
      location: 'Noida, India',
      hiringMonth: 'December 2025',
      languages: ['Java', 'Python', 'JavaScript', 'Go'],
      description: 'Software Engineer Internship',
      difficulty: 'Medium',
      applications: 10000,
      color: 'from-blue-600 to-cyan-600',
      officialLink: 'https://jobs.paytm.com/'
    },
    {
      id: 17,
      name: 'Ola',
      logo: '🚗',
      type: 'Indian Mobility',
      location: 'Bangalore, India',
      hiringMonth: 'September 2025',
      languages: ['Python', 'Java', 'JavaScript', 'React'],
      description: 'Software Development Internship',
      difficulty: 'Medium',
      applications: 7000,
      color: 'from-green-500 to-yellow-500',
      officialLink: 'https://www.olacabs.com/careers'
    },
    {
      id: 18,
      name: 'Swiggy',
      logo: '🍕',
      type: 'Indian Food Tech',
      location: 'Bangalore, India',
      hiringMonth: 'October 2025',
      languages: ['Python', 'JavaScript', 'React', 'Node.js'],
      description: 'Backend Developer Internship',
      difficulty: 'Medium',
      applications: 9000,
      color: 'from-orange-500 to-red-500',
      officialLink: 'https://careers.swiggy.com/'
    },
    {
      id: 19,
      name: 'BYJU\'S',
      logo: '📚',
      type: 'Indian EdTech',
      location: 'Bangalore, India',
      hiringMonth: 'November 2025',
      languages: ['JavaScript', 'React', 'Node.js', 'Python'],
      description: 'Frontend Developer Internship',
      difficulty: 'Easy',
      applications: 15000,
      color: 'from-purple-500 to-blue-500',
      officialLink: 'https://byjus.com/careers/'
    },
    {
      id: 20,
      name: 'Razorpay',
      logo: '💰',
      type: 'Indian Fintech',
      location: 'Bangalore, India',
      hiringMonth: 'December 2025',
      languages: ['Python', 'JavaScript', 'Go', 'Java'],
      description: 'Software Engineer Internship',
      difficulty: 'Medium',
      applications: 6000,
      color: 'from-blue-600 to-purple-600',
      officialLink: 'https://razorpay.com/jobs/'
    },
    {
      id: 21,
      name: 'Freshworks',
      logo: '🌱',
      type: 'Indian SaaS',
      location: 'Chennai, India',
      hiringMonth: 'September 2025',
      languages: ['Ruby', 'JavaScript', 'Python', 'React'],
      description: 'Software Development Internship',
      difficulty: 'Medium',
      applications: 5000,
      color: 'from-green-600 to-teal-600',
      officialLink: 'https://www.freshworks.com/company/careers/'
    },
    {
      id: 22,
      name: 'Zoho',
      logo: '🔧',
      type: 'Indian SaaS',
      location: 'Chennai, India',
      hiringMonth: 'October 2025',
      languages: ['Java', 'JavaScript', 'Python', 'C++'],
      description: 'Software Engineer Internship',
      difficulty: 'Medium',
      applications: 8000,
      color: 'from-red-600 to-orange-600',
      officialLink: 'https://careers.zohocorp.com/'
    },
    {
      id: 23,
      name: 'Myntra',
      logo: '👗',
      type: 'Indian E-commerce',
      location: 'Bangalore, India',
      hiringMonth: 'November 2025',
      languages: ['Java', 'Python', 'JavaScript', 'React'],
      description: 'Software Development Internship',
      difficulty: 'Medium',
      applications: 7000,
      color: 'from-pink-500 to-purple-500',
      officialLink: 'https://careers.myntra.com/'
    },
    {
      id: 24,
      name: 'PhonePe',
      logo: '📱',
      type: 'Indian Fintech',
      location: 'Bangalore, India',
      hiringMonth: 'December 2025',
      languages: ['Java', 'Python', 'JavaScript', 'Kotlin'],
      description: 'Mobile App Developer Internship',
      difficulty: 'Medium',
      applications: 6000,
      color: 'from-purple-600 to-indigo-600',
      officialLink: 'https://www.phonepe.com/careers/'
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
    { key: 'e-commerce', label: 'E-commerce' },
    { key: 'fintech', label: 'Fintech' },
    { key: 'food', label: 'Food Tech' },
    { key: 'saas', label: 'SaaS' },
    { key: 'edtech', label: 'EdTech' }
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
            Global & Indian Internship Opportunities
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore internship opportunities from top tech companies worldwide and leading Indian companies. Get complete preparation resources and apply with confidence.
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
                    View Important Questions (50 DSA)
                  </Link>
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
      </div>
    </div>
  );
};

export default Internships;