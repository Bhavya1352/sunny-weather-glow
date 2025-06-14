
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <motion.footer 
      className="bg-white border-t-2 border-yellow-200 mt-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">WeatherNow</h3>
            <p className="text-gray-600">
              Your reliable companion for accurate weather forecasts and updates.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-600 hover:text-yellow-600 transition-colors">Home</a></li>
              <li><a href="/forecast" className="text-gray-600 hover:text-yellow-600 transition-colors">Forecast</a></li>
              <li><a href="/about" className="text-gray-600 hover:text-yellow-600 transition-colors">About</a></li>
              <li><a href="/contact" className="text-gray-600 hover:text-yellow-600 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {[Github, Twitter, Linkedin].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="bg-yellow-100 p-2 rounded-full text-yellow-600 hover:bg-yellow-200 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        
        <motion.div 
          className="border-t border-yellow-200 mt-8 pt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-gray-600 flex items-center justify-center">
            Made with <Heart className="h-4 w-4 text-red-500 mx-1" fill="currentColor" /> by WeatherNow Team
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
