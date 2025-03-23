import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="mb-6">
            <Logo variant="footer" />
          </div>
          <p className="text-gray-400 text-sm mb-6">
            Elevating tennis excellence through innovative training programs, 
            world-class facilities, and personalized coaching.
          </p>
          <div className="flex space-x-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors" aria-label="Twitter">
              <Twitter size={20} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-6">Programs</h3>
          <ul className="space-y-3">
            <li><Link to="/programs/junior" className="text-gray-400 hover:text-white text-sm transition-colors">Junior Academy</Link></li>
            <li><Link to="/programs/elite" className="text-gray-400 hover:text-white text-sm transition-colors">Elite Program</Link></li>
            <li><Link to="/programs/adult" className="text-gray-400 hover:text-white text-sm transition-colors">Adult Training</Link></li>
            <li><Link to="/programs/camps" className="text-gray-400 hover:text-white text-sm transition-colors">Summer Camps</Link></li>
            <li><Link to="/programs/private" className="text-gray-400 hover:text-white text-sm transition-colors">Private Lessons</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-6">Quick Links</h3>
          <ul className="space-y-3">
            <li><Link to="/about" className="text-gray-400 hover:text-white text-sm transition-colors">About Us</Link></li>
            <li><Link to="/facilities" className="text-gray-400 hover:text-white text-sm transition-colors">Our Facilities</Link></li>
            <li><Link to="/coaches" className="text-gray-400 hover:text-white text-sm transition-colors">Coaching Team</Link></li>
            <li><Link to="/testimonials" className="text-gray-400 hover:text-white text-sm transition-colors">Success Stories</Link></li>
            <li><Link to="/news" className="text-gray-400 hover:text-white text-sm transition-colors">News & Events</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-6">Contact Us</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <MapPin size={18} className="mr-3 mt-0.5 text-gray-400" />
              <span className="text-gray-400 text-sm">123 Tennis Court Avenue, Tennis City, 10001</span>
            </li>
            <li className="flex items-center">
              <Phone size={18} className="mr-3 text-gray-400" />
              <a href="tel:+1234567890" className="text-gray-400 hover:text-white text-sm transition-colors">+1 (234) 567-890</a>
            </li>
            <li className="flex items-center">
              <Mail size={18} className="mr-3 text-gray-400" />
              <a href="mailto:info@ath-tennis.com" className="text-gray-400 hover:text-white text-sm transition-colors">info@ath-tennis.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} ATH - Advanced Tennis Hub. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</Link>
            <Link to="/sitemap" className="text-gray-500 hover:text-white text-sm transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
