import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Save, Edit, Trash2, Plus, Building, MapPin } from 'lucide-react';

const AdminDashboard = () => {
  const [companies, setCompanies] = useState([]);
  const [editingCompany, setEditingCompany] = useState(null);
  const [newCompany, setNewCompany] = useState({
    name: '',
    type: 'internship',
    hiringDate: '',
    location: '',
    isCurrentlyHiring: false
  });
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    // Load companies from localStorage
    const savedCompanies = localStorage.getItem('adminCompanies');
    if (savedCompanies) {
      setCompanies(JSON.parse(savedCompanies));
    } else {
      // Initialize with some default companies
      const defaultCompanies = [
        {
          id: 1,
          name: 'Google',
          type: 'internship',
          hiringDate: 'September 2025',
          location: 'Mountain View, CA',
          isCurrentlyHiring: true
        },
        {
          id: 2,
          name: 'Microsoft',
          type: 'internship',
          hiringDate: 'October 2025',
          location: 'Redmond, WA',
          isCurrentlyHiring: false
        },
        {
          id: 3,
          name: 'TCS',
          type: 'hiring',
          hiringDate: 'September 2025',
          location: 'Mumbai, India',
          isCurrentlyHiring: true
        },
        {
          id: 4,
          name: 'Infosys',
          type: 'hiring',
          hiringDate: 'October 2025',
          location: 'Bangalore, India',
          isCurrentlyHiring: true
        }
      ];
      setCompanies(defaultCompanies);
      localStorage.setItem('adminCompanies', JSON.stringify(defaultCompanies));
    }
  }, []);

  const saveCompanies = (updatedCompanies) => {
    setCompanies(updatedCompanies);
    localStorage.setItem('adminCompanies', JSON.stringify(updatedCompanies));
  };

  const handleEdit = (company) => {
    setEditingCompany({ ...company });
  };

  const handleSave = (companyId) => {
    const updatedCompanies = companies.map(company =>
      company.id === companyId ? editingCompany : company
    );
    saveCompanies(updatedCompanies);
    setEditingCompany(null);
  };

  const handleDelete = (companyId) => {
    const updatedCompanies = companies.filter(company => company.id !== companyId);
    saveCompanies(updatedCompanies);
  };

  const handleAddCompany = () => {
    if (newCompany.name && newCompany.hiringDate) {
      const company = {
        ...newCompany,
        id: Date.now()
      };
      const updatedCompanies = [...companies, company];
      saveCompanies(updatedCompanies);
      setNewCompany({
        name: '',
        type: 'internship',
        hiringDate: '',
        location: '',
        isCurrentlyHiring: false
      });
      setShowAddForm(false);
    }
  };

  const toggleCurrentlyHiring = (companyId) => {
    const updatedCompanies = companies.map(company =>
      company.id === companyId 
        ? { ...company, isCurrentlyHiring: !company.isCurrentlyHiring }
        : company
    );
    saveCompanies(updatedCompanies);
  };

  const internshipCompanies = companies.filter(c => c.type === 'internship');
  const hiringCompanies = companies.filter(c => c.type === 'hiring');

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
            Admin Dashboard
          </h1>
          <p className="text-xl text-gray-600">
            Manage hiring dates and company information
          </p>
        </motion.div>

        {/* Add New Company Button */}
        <motion.div 
          className="mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center space-x-2 mx-auto"
          >
            <Plus size={20} />
            <span>Add New Company</span>
          </button>
        </motion.div>

        {/* Add Company Form */}
        {showAddForm && (
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-lg mb-8"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-4">Add New Company</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Company Name"
                value={newCompany.name}
                onChange={(e) => setNewCompany({ ...newCompany, name: e.target.value })}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <select
                value={newCompany.type}
                onChange={(e) => setNewCompany({ ...newCompany, type: e.target.value })}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="internship">Internship</option>
                <option value="hiring">Hiring Off-Campus</option>
              </select>
              <input
                type="text"
                placeholder="Hiring Date (e.g., September 2025)"
                value={newCompany.hiringDate}
                onChange={(e) => setNewCompany({ ...newCompany, hiringDate: e.target.value })}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <input
                type="text"
                placeholder="Location"
                value={newCompany.location}
                onChange={(e) => setNewCompany({ ...newCompany, location: e.target.value })}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mt-4 flex items-center space-x-2">
              <input
                type="checkbox"
                id="currentlyHiring"
                checked={newCompany.isCurrentlyHiring}
                onChange={(e) => setNewCompany({ ...newCompany, isCurrentlyHiring: e.target.checked })}
                className="rounded"
              />
              <label htmlFor="currentlyHiring" className="text-gray-700">Currently Hiring</label>
            </div>
            <div className="mt-4 flex space-x-4">
              <button
                onClick={handleAddCompany}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Add Company
              </button>
              <button
                onClick={() => setShowAddForm(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors duration-200"
              >
                Cancel
              </button>
            </div>
          </motion.div>
        )}

        {/* Internships Section */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Internship Companies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {internshipCompanies.map((company) => (
              <div key={company.id} className="bg-white p-6 rounded-lg shadow-lg">
                {editingCompany && editingCompany.id === company.id ? (
                  <div className="space-y-4">
                    <input
                      type="text"
                      value={editingCompany.name}
                      onChange={(e) => setEditingCompany({ ...editingCompany, name: e.target.value })}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <input
                      type="text"
                      placeholder="Hiring Date (e.g., September 2025)"
                      value={editingCompany.hiringDate}
                      onChange={(e) => setEditingCompany({ ...editingCompany, hiringDate: e.target.value })}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <input
                      type="text"
                      value={editingCompany.location}
                      onChange={(e) => setEditingCompany({ ...editingCompany, location: e.target.value })}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={editingCompany.isCurrentlyHiring}
                        onChange={(e) => setEditingCompany({ ...editingCompany, isCurrentlyHiring: e.target.checked })}
                        className="rounded"
                      />
                      <label className="text-gray-700">Currently Hiring</label>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleSave(company.id)}
                        className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition-colors duration-200 flex items-center space-x-1"
                      >
                        <Save size={16} />
                        <span>Save</span>
                      </button>
                      <button
                        onClick={() => setEditingCompany(null)}
                        className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600 transition-colors duration-200"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-800">{company.name}</h3>
                      <div className="flex items-center space-x-2">
                        {company.isCurrentlyHiring && (
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                            Currently Hiring
                          </span>
                        )}
                      </div>
                    </div>
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
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEdit(company)}
                        className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-1"
                      >
                        <Edit size={16} />
                        <span>Edit</span>
                      </button>
                      <button
                        onClick={() => toggleCurrentlyHiring(company.id)}
                        className={`px-3 py-1 rounded transition-colors duration-200 flex items-center space-x-1 ${
                          company.isCurrentlyHiring 
                            ? 'bg-red-600 text-white hover:bg-red-700' 
                            : 'bg-green-600 text-white hover:bg-green-700'
                        }`}
                      >
                        <Building size={16} />
                        <span>{company.isCurrentlyHiring ? 'Stop Hiring' : 'Start Hiring'}</span>
                      </button>
                      <button
                        onClick={() => handleDelete(company.id)}
                        className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition-colors duration-200 flex items-center space-x-1"
                      >
                        <Trash2 size={16} />
                        <span>Delete</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Hiring Off-Campus Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Hiring Off-Campus Companies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hiringCompanies.map((company) => (
              <div key={company.id} className="bg-white p-6 rounded-lg shadow-lg">
                {editingCompany && editingCompany.id === company.id ? (
                  <div className="space-y-4">
                    <input
                      type="text"
                      value={editingCompany.name}
                      onChange={(e) => setEditingCompany({ ...editingCompany, name: e.target.value })}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <input
                      type="text"
                      placeholder="Hiring Date (e.g., September 2025)"
                      value={editingCompany.hiringDate}
                      onChange={(e) => setEditingCompany({ ...editingCompany, hiringDate: e.target.value })}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <input
                      type="text"
                      value={editingCompany.location}
                      onChange={(e) => setEditingCompany({ ...editingCompany, location: e.target.value })}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={editingCompany.isCurrentlyHiring}
                        onChange={(e) => setEditingCompany({ ...editingCompany, isCurrentlyHiring: e.target.checked })}
                        className="rounded"
                      />
                      <label className="text-gray-700">Currently Hiring</label>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleSave(company.id)}
                        className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition-colors duration-200 flex items-center space-x-1"
                      >
                        <Save size={16} />
                        <span>Save</span>
                      </button>
                      <button
                        onClick={() => setEditingCompany(null)}
                        className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600 transition-colors duration-200"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-800">{company.name}</h3>
                      <div className="flex items-center space-x-2">
                        {company.isCurrentlyHiring && (
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                            Currently Hiring
                          </span>
                        )}
                      </div>
                    </div>
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
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEdit(company)}
                        className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-1"
                      >
                        <Edit size={16} />
                        <span>Edit</span>
                      </button>
                      <button
                        onClick={() => toggleCurrentlyHiring(company.id)}
                        className={`px-3 py-1 rounded transition-colors duration-200 flex items-center space-x-1 ${
                          company.isCurrentlyHiring 
                            ? 'bg-red-600 text-white hover:bg-red-700' 
                            : 'bg-green-600 text-white hover:bg-green-700'
                        }`}
                      >
                        <Building size={16} />
                        <span>{company.isCurrentlyHiring ? 'Stop Hiring' : 'Start Hiring'}</span>
                      </button>
                      <button
                        onClick={() => handleDelete(company.id)}
                        className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition-colors duration-200 flex items-center space-x-1"
                      >
                        <Trash2 size={16} />
                        <span>Delete</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminDashboard;