import { Instagram, Facebook, Twitter, Youtube, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-3xl font-bold text-emerald-400 mb-4">
              MURTAZA<span className="text-white">.LIFTS</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Transforming lives through personalized fitness training, nutrition guidance, and unwavering support. 
              Your journey to a stronger, healthier you starts here.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/murtaza.lifts"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://facebook.com/murtaza.lifts"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://twitter.com/murtaza_lifts"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://youtube.com/@murtaza.lifts"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <Youtube className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-emerald-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#programs" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300">
                  Programs
                </a>
              </li>
              <li>
                <a href="#transformations" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300">
                  Transformations
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-emerald-400">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-emerald-400" />
                <span className="text-gray-300">+92 318-0601-365</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-emerald-400" />
                <span className="text-gray-300">murtazasaleem2004@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span className="text-gray-300">Available Online & In-Person</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Murtaza.Lifts. All rights reserved. | 
            <span className="text-emerald-400"> Transform Your Life, One Rep at a Time</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;