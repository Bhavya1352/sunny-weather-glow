
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'support@weathernow.com',
      description: 'Send us an email anytime'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+1 (555) 123-4567',
      description: 'Mon-Fri 9AM-6PM EST'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: '123 Weather St, Cloud City',
      description: 'Our headquarters'
    }
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
            <MessageCircle className="h-8 w-8 text-yellow-600" />
            <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
          </div>
          <p className="text-xl text-gray-600">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white p-6 rounded-xl shadow-lg border-2 border-yellow-100 text-center"
              >
                <div className="bg-yellow-100 p-4 rounded-full w-fit mx-auto mb-4">
                  <Icon className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {info.title}
                </h3>
                <p className="text-lg font-medium text-yellow-600 mb-1">
                  {info.content}
                </p>
                <p className="text-gray-600">
                  {info.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl p-8 shadow-lg border-2 border-yellow-100"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Send us a Message
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="border-yellow-200 focus:border-yellow-400 focus:ring-yellow-400"
                  placeholder="Your full name"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="border-yellow-200 focus:border-yellow-400 focus:ring-yellow-400"
                  placeholder="your@email.com"
                />
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Subject
              </label>
              <Input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="border-yellow-200 focus:border-yellow-400 focus:ring-yellow-400"
                placeholder="What's this about?"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="border-yellow-200 focus:border-yellow-400 focus:ring-yellow-400"
                placeholder="Tell us more about your message..."
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="text-center"
            >
              <Button
                type="submit"
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3"
              >
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </Button>
            </motion.div>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Need Immediate Help?</h3>
            <p className="text-lg mb-6">
              Check out our FAQ section or browse our help center for quick answers to common questions.
            </p>
            <div className="flex justify-center space-x-4">
              <Button variant="secondary" className="bg-white text-yellow-600 hover:bg-gray-100">
                Visit FAQ
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-yellow-600">
                Help Center
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
