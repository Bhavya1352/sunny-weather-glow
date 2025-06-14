import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, TrendingUp, Cloud, Sun, CloudRain, Snowflake } from 'lucide-react';

const Forecast = () => {
  const forecastData = [
    { day: 'Today', high: 25, low: 18, condition: 'Sunny', icon: Sun },
    { day: 'Tomorrow', high: 23, low: 16, condition: 'Cloudy', icon: Cloud },
    { day: 'Wednesday', high: 21, low: 14, condition: 'Rainy', icon: CloudRain },
    { day: 'Thursday', high: 26, low: 19, condition: 'Sunny', icon: Sun },
    { day: 'Friday', high: 24, low: 17, condition: 'Cloudy', icon: Cloud },
    { day: 'Saturday', high: 22, low: 15, condition: 'Rainy', icon: CloudRain },
    { day: 'Sunday', high: 27, low: 20, condition: 'Sunny', icon: Sun },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Calendar className="h-8 w-8 text-yellow-600" />
            <h1 className="text-4xl font-bold text-gray-800">7-Day Forecast</h1>
          </div>
          <p className="text-xl text-gray-600">
            Plan ahead with our detailed weather forecast
          </p>
        </motion.div>

        <div className="grid gap-4">
          {forecastData.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.day}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="bg-white rounded-xl p-6 shadow-lg border-2 border-yellow-100 hover:border-yellow-200 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6">
                    <div className="bg-yellow-100 p-3 rounded-full">
                      <Icon className="h-8 w-8 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        {item.day}
                      </h3>
                      <p className="text-gray-600 capitalize">{item.condition}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-8">
                    <div className="text-center">
                      <p className="text-sm text-gray-500">High</p>
                      <p className="text-2xl font-bold text-gray-800">{item.high}°</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-500">Low</p>
                      <p className="text-2xl font-bold text-gray-600">{item.low}°</p>
                    </div>
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${(item.high / 30) * 100}%` }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 bg-white rounded-2xl p-8 shadow-lg border-2 border-yellow-100"
        >
          <div className="flex items-center space-x-3 mb-6">
            <TrendingUp className="h-6 w-6 text-yellow-600" />
            <h2 className="text-2xl font-bold text-gray-800">Weather Trends</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <p className="text-3xl font-bold text-yellow-600">24°C</p>
              <p className="text-gray-600">Average Temperature</p>
            </div>
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <p className="text-3xl font-bold text-yellow-600">3</p>
              <p className="text-gray-600">Rainy Days</p>
            </div>
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <p className="text-3xl font-bold text-yellow-600">UV 6</p>
              <p className="text-gray-600">Peak UV Index</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Forecast;
