
import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Users, Award, Target, Zap, Shield } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Zap,
      title: 'Real-time Updates',
      description: 'Get the latest weather information updated every minute'
    },
    {
      icon: Shield,
      title: 'Accurate Data',
      description: 'Reliable weather data from trusted meteorological sources'
    },
    {
      icon: Users,
      title: 'User Friendly',
      description: 'Simple and intuitive interface designed for everyone'
    }
  ];

  const stats = [
    { number: '1M+', label: 'Active Users' },
    { number: '99.9%', label: 'Uptime' },
    { number: '50+', label: 'Countries' },
    { number: '24/7', label: 'Support' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Cloud className="h-8 w-8 text-yellow-600" />
            <h1 className="text-4xl font-bold text-gray-800">About WeatherNow</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're passionate about providing accurate, reliable weather information 
            to help you make informed decisions every day.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl p-8 shadow-lg border-2 border-yellow-100 mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                At WeatherNow, we believe that everyone deserves access to accurate, 
                up-to-date weather information. Our mission is to provide comprehensive 
                weather data in a simple, beautiful, and accessible format.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Whether you're planning your daily commute, preparing for a weekend trip, 
                or making important business decisions, we're here to help you stay ahead 
                of the weather.
              </p>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-yellow-100 to-yellow-200 p-8 rounded-xl"
            >
              <Target className="h-16 w-16 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">
                Precision & Reliability
              </h3>
              <p className="text-gray-600 text-center">
                We strive for accuracy in every forecast, helping millions make better decisions daily.
              </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Why Choose WeatherNow?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white p-6 rounded-xl shadow-lg border-2 border-yellow-100 text-center"
                >
                  <div className="bg-yellow-100 p-4 rounded-full w-fit mx-auto mb-4">
                    <Icon className="h-8 w-8 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-8 text-white"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl font-bold mb-2">{stat.number}</p>
                <p className="text-yellow-100">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-12 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-yellow-100">
            <Award className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Awards & Recognition</h3>
            <p className="text-gray-600 text-lg">
              WeatherNow has been recognized as one of the top weather applications, 
              winning multiple awards for innovation, accuracy, and user experience.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
