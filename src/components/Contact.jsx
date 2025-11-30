import React from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            <span className="border-b-4 border-blue-500 pb-2">Get In Touch</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-gray-300 leading-relaxed">
                I'm currently open to new opportunities and collaborations. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4 text-gray-300">
                  <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                    <Mail size={20} />
                  </div>
                  <span>dipanjan.sadhukhan.1885@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4 text-gray-300">
                  <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                    <MapPin size={20} />
                  </div>
                  <span>Kolkata, West Bengal, Bharat</span>
                </div>
                
              </div>
            </div>

            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name"
                  className="w-full px-4 py-3 bg-space-light/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email"
                  className="w-full px-4 py-3 bg-space-light/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-500"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea 
                  id="message"
                  rows="4"
                  className="w-full px-4 py-3 bg-space-light/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-500"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
