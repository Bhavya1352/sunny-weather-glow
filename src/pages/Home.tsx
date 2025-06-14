
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Loader } from 'lucide-react';
import WeatherCard from '../components/WeatherCard';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';

const Home = () => {
  const [city, setCity] = useState('London');
  const [searchInput, setSearchInput] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  // Mock weather data - In a real app, you'd use a weather API
  const mockWeatherData = {
    temperature: 22,
    condition: 'Partly Cloudy',
    location: city,
    humidity: 65,
    windSpeed: 3.2,
    visibility: 10,
    feelsLike: 25
  };

  useEffect(() => {
    // Simulate API call
    setIsLoading(true);
    const timer = setTimeout(() => {
      setWeatherData(mockWeatherData);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [city]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      setCity(searchInput.trim());
      setSearchInput('');
    }
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // In a real app, you'd reverse geocode these coordinates
          setCity('Current Location');
        },
        (error) => {
          setError('Unable to get your location');
        }
      );
    } else {
      setError('Geolocation is not supported by this browser');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Weather<span className="text-yellow-600">Now</span>
          </h1>
          <p className="text-xl text-gray-600">
            Get accurate weather information for any city worldwide
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSearch}
          className="mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex gap-4 max-w-md mx-auto">
            <div className="flex-1">
              <Input
                type="text"
                placeholder="Enter city name..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="border-yellow-200 focus:border-yellow-400 focus:ring-yellow-400"
              />
            </div>
            <Button 
              type="submit" 
              className="bg-yellow-500 hover:bg-yellow-600 text-white"
            >
              <Search className="h-4 w-4" />
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={getCurrentLocation}
              className="border-yellow-300 text-yellow-600 hover:bg-yellow-50"
            >
              <MapPin className="h-4 w-4" />
            </Button>
          </div>
        </motion.form>

        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-500 text-center mb-4"
          >
            {error}
          </motion.div>
        )}

        <div className="flex justify-center">
          {isLoading ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center justify-center space-x-2 text-yellow-600"
            >
              <Loader className="h-6 w-6 animate-spin" />
              <span>Loading weather data...</span>
            </motion.div>
          ) : weatherData ? (
            <WeatherCard {...weatherData} />
          ) : null}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-4">
            Explore more features to get detailed weather insights
          </p>
          <div className="flex justify-center space-x-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-4 rounded-lg shadow-md border-2 border-yellow-100"
            >
              <h3 className="font-semibold text-gray-800">7-Day Forecast</h3>
              <p className="text-sm text-gray-600">Plan your week ahead</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-4 rounded-lg shadow-md border-2 border-yellow-100"
            >
              <h3 className="font-semibold text-gray-800">Weather Alerts</h3>
              <p className="text-sm text-gray-600">Stay informed about severe weather</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
