import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook,Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>001 Street, City, Tanzania</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>+255 613 004 338</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span>info@aboveaveraagetz.edu</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-indigo-400">About Us</Link>
              </li>
              <li>
                <Link to="/admissions" className="hover:text-indigo-400">Admissions</Link>
              </li>
              <li>
                <Link to="/academics" className="hover:text-indigo-400">Academics</Link>
              </li>
              <li>
                <Link to="/student-life" className="hover:text-indigo-400">Student Life</Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/parent-portal" className="hover:text-indigo-400">Parent Portal</Link>
              </li>
              <li>
                <Link to="/teacher-portal" className="hover:text-indigo-400">Teacher Portal</Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-indigo-400">Careers</Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-indigo-400">News & Events</Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
               {/* facebook account ya shule */}
              <a href="#" className="hover:text-indigo-400">
                <Facebook className="h-6 w-6" />
              </a>
              {/* Twitter account ya shule */}
              <a href="#" className="hover:text-indigo-400">
                <Twitter className="h-6 w-6" />
              </a>
              {/* instagram account ya shule */}
              <a href="#" className="hover:text-indigo-400">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Above Average Academy. All rights reserved.</p>
          <p>Designed by <a href='https://samw3l.github.io/portifolio/'>SAMU3L</a></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
