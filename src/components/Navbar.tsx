
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Cloud, Sun, Navigation, Info, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: Sun },
    { path: '/forecast', label: 'Forecast', icon: Cloud },
    { path: '/about', label: 'About', icon: Info },
    { path: '/contact', label: 'Contact', icon: Phone },
  ];

  return (
    <motion.nav 
      className="bg-white shadow-md border-b-2 border-yellow-200"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-yellow-400 p-2 rounded-full">
                <Sun className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-800">WeatherNow</span>
            </Link>
          </motion.div>
          
          <div className="flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <motion.div
                  key={item.path}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'text-gray-600 hover:text-yellow-600 hover:bg-yellow-50'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
