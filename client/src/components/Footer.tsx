import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-orange-50 text-gray-700 py-10 mt-10 border-t border-orange-100">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold text-orange-600">pateEast</h2>
          <p className="mt-4 text-sm text-gray-600">
            Your favorite place for fast & fresh food. Order from anywhere, anytime.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-orange-500">Home</Link></li>
            <li><Link to="/menu" className="hover:text-orange-500">Menu</Link></li>
            <li><Link to="/orders" className="hover:text-orange-500">My Orders</Link></li>
            <li><Link to="/profile" className="hover:text-orange-500">Profile</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" /> support@pateeast.com
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> +1 234 567 890
            </li>
            <li>123 Pizza Street, Flavor Town</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-orange-500"><Facebook /></a>
            <a href="#" className="hover:text-orange-500"><Instagram /></a>
            <a href="#" className="hover:text-orange-500"><Twitter /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} pateEast. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
