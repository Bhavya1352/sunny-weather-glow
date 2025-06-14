
import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Sun, CloudRain, Snow, Wind, Droplets, Thermometer, Eye } from 'lucide-react';

interface WeatherCardProps {
  temperature: number;
  condition: string;
  location: string;
  humidity: number;
  windSpeed: number;
  visibility: number;
  feelsLike: number;
}

const WeatherCard: React.FC<WeatherCardProps> = ({
  temperature,
  condition,
  location,
  humidity,
  windSpeed,
  visibility,
  feelsLike
}) => {
  const getWeatherIcon = (condition: string) => {
    const lowerCondition = condition.toLowerCase();
    if (lowerCondition.includes('sun') || lowerCondition.includes('clear')) {
      return Sun;
    } else if (lowerCondition.includes('rain')) {
      return CloudRain;
    } else if (lowerCondition.includes('snow')) {
      return Snow;
    } else {
      return Cloud;
    }
  };

  const WeatherIcon = getWeatherIcon(condition);

  return (
    <motion.div 
      className="bg-white rounded-2xl shadow-lg p-8 border-2 border-yellow-100"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5, shadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
    >
      <div className="text-center mb-6">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="inline-block bg-yellow-100 p-4 rounded-full mb-4"
        >
          <WeatherIcon className="h-16 w-16 text-yellow-600" />
        </motion.div>
        <h2 className="text-3xl font-bold text-gray-800">{temperature}°C</h2>
        <p className="text-gray-600 text-lg capitalize">{condition}</p>
        <p className="text-yellow-600 font-semibold">{location}</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <motion.div 
          className="bg-yellow-50 p-4 rounded-lg"
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex items-center space-x-2">
            <Thermometer className="h-5 w-5 text-yellow-600" />
            <span className="text-sm text-gray-600">Feels like</span>
          </div>
          <p className="text-xl font-semibold text-gray-800">{feelsLike}°C</p>
        </motion.div>

        <motion.div 
          className="bg-yellow-50 p-4 rounded-lg"
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex items-center space-x-2">
            <Droplets className="h-5 w-5 text-yellow-600" />
            <span className="text-sm text-gray-600">Humidity</span>
          </div>
          <p className="text-xl font-semibold text-gray-800">{humidity}%</p>
        </motion.div>

        <motion.div 
          className="bg-yellow-50 p-4 rounded-lg"
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex items-center space-x-2">
            <Wind className="h-5 w-5 text-yellow-600" />
            <span className="text-sm text-gray-600">Wind Speed</span>
          </div>
          <p className="text-xl font-semibold text-gray-800">{windSpeed} m/s</p>
        </motion.div>

        <motion.div 
          className="bg-yellow-50 p-4 rounded-lg"
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex items-center space-x-2">
            <Eye className="h-5 w-5 text-yellow-600" />
            <span className="text-sm text-gray-600">Visibility</span>
          </div>
          <p className="text-xl font-semibold text-gray-800">{visibility} km</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WeatherCard;
