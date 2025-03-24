
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import Logo from './Logo';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-black text-white py-16 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="mb-6 flex justify-center md:justify-start">
            <Logo variant="footer" onDarkBackground={true} />
          </div>
          <p className="text-gray-400 text-sm mb-6">
            {t('footer.description')}
          </p>
          <div className="flex space-x-4 mb-4">
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
          <h3 className="text-lg font-medium mb-6">{t('footer.programs')}</h3>
          <ul className="space-y-3">
            <li><Link to="/programs/junior" className="text-gray-400 hover:text-white text-sm transition-colors">{t('footer.junior')}</Link></li>
            <li><Link to="/programs/elite" className="text-gray-400 hover:text-white text-sm transition-colors">{t('footer.elite')}</Link></li>
            <li><Link to="/programs/adult" className="text-gray-400 hover:text-white text-sm transition-colors">{t('footer.adult')}</Link></li>
            <li><Link to="/programs/camps" className="text-gray-400 hover:text-white text-sm transition-colors">{t('footer.camps')}</Link></li>
            <li><Link to="/programs/private" className="text-gray-400 hover:text-white text-sm transition-colors">{t('footer.private')}</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-6">{t('footer.links')}</h3>
          <ul className="space-y-3">
            <li><Link to="/about" className="text-gray-400 hover:text-white text-sm transition-colors">{t('footer.about')}</Link></li>
            <li><Link to="/facilities" className="text-gray-400 hover:text-white text-sm transition-colors">{t('footer.facilities')}</Link></li>
            <li><Link to="/coaches" className="text-gray-400 hover:text-white text-sm transition-colors">{t('footer.coaches')}</Link></li>
            <li><Link to="/method" className="text-gray-400 hover:text-white text-sm transition-colors">{t('footer.method')}</Link></li>
            <li><Link to="/technology" className="text-gray-400 hover:text-white text-sm transition-colors">{t('footer.technology')}</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-6">{t('footer.contact')}</h3>
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
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} ATH - Advanced Tennis Hub. {t('footer.rights')}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-500 hover:text-white text-sm transition-colors">{t('footer.privacy')}</Link>
            <Link to="/terms" className="text-gray-500 hover:text-white text-sm transition-colors">{t('footer.terms')}</Link>
            <Link to="/contact" className="text-gray-500 hover:text-white text-sm transition-colors">{t('footer.contact')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
