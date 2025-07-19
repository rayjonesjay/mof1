import React from 'react';
import { Building2, Facebook, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-red-700 p-2 rounded">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-red-400">ROBCON</h3>
                <p className="text-sm text-gray-300">ENGINEERS AND ASSOCIATES</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Delivering exceptional engineering, environmental, and project management services with a commitment to excellence and innovation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-200">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-red-400 transition-colors duration-200">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-red-400 transition-colors duration-200">About Us</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-red-400 transition-colors duration-200">Services</a></li>
              <li><a href="#projects" className="text-gray-300 hover:text-red-400 transition-colors duration-200">Projects</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-red-400 transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-red-400 transition-colors duration-200">Structural Engineering</a></li>
              <li><a href="#" className="text-gray-300 hover:text-red-400 transition-colors duration-200">Water Management</a></li>
              <li><a href="#" className="text-gray-300 hover:text-red-400 transition-colors duration-200">Project Management</a></li>
              <li><a href="#" className="text-gray-300 hover:text-red-400 transition-colors duration-200">Environmental Consulting</a></li>
              <li><a href="#" className="text-gray-300 hover:text-red-400 transition-colors duration-200">Construction Management</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} ROBCON Engineers and Associates Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;