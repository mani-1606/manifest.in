import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Home from './pages/Home';
import Internships from './pages/Internships';
import HiringOffCampus from './pages/HiringOffCampus';
import About from './pages/About';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import CompanyDetail from './pages/CompanyDetail';
import Footer from './components/Footer';
import './index.css';

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [showRefreshNotification, setShowRefreshNotification] = useState(false);

  useEffect(() => {
    // Check if user is logged in as admin
    const adminStatus = localStorage.getItem('isAdmin');
    if (adminStatus === 'true') {
      setIsAdmin(true);
    }

    // Daily refresh notification at 10 PM
    const checkTime = () => {
      const now = new Date();
      const hour = now.getHours();
      const minute = now.getMinutes();
      
      if (hour === 22 && minute === 0) {
        setShowRefreshNotification(true);
        setTimeout(() => setShowRefreshNotification(false), 10000);
      }
    };

    const interval = setInterval(checkTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
        
        <AnimatePresence>
          {showRefreshNotification && (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg z-50"
            >
              <p className="text-sm font-medium">
                🔄 Daily update time! Website will refresh - Check for new opportunities!
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/internships" element={<Internships />} />
            <Route path="/hiring-off-campus" element={<HiringOffCampus />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login setIsAdmin={setIsAdmin} />} />
            <Route path="/admin" element={isAdmin ? <AdminDashboard /> : <Login setIsAdmin={setIsAdmin} />} />
            <Route path="/company/:id" element={<CompanyDetail />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;