import React from 'react';
import { FaFacebookF, FaXTwitter, FaCheck } from 'react-icons/fa6';
import { FaGooglePlay, FaApple } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0f0f0f] text-gray-300 py-8 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* View Website Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">View Website in</h3>
            <div className="flex items-center gap-2 text-gray-400">
              <FaCheck className="text-white" />
              <span>English</span>
            </div>
          </div>

          {/* Need Help Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Need Help?</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Visit Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Share Feedback
                </a>
              </li>
            </ul>
          </div>

          {/* Connect with Us Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Connect with Us</h3>
            <div className="flex gap-4 mb-6">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-gray-700 rounded transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF className="text-white text-lg" />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-gray-700 rounded transition-colors"
                aria-label="Twitter"
              >
                <FaXTwitter className="text-white text-lg" />
              </a>
            </div>

            {/* App Store Badges */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#"
                className="flex items-center gap-2 bg-black border border-gray-700 hover:border-gray-500 rounded-lg px-3 py-2 transition-colors"
              >
                <FaGooglePlay className="text-white text-2xl" />
                <div className="text-left">
                  <p className="text-[10px] text-gray-400 leading-tight">GET IT ON</p>
                  <p className="text-sm text-white font-semibold leading-tight">Google Play</p>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 bg-black border border-gray-700 hover:border-gray-500 rounded-lg px-3 py-2 transition-colors"
              >
                <FaApple className="text-white text-3xl" />
                <div className="text-left">
                  <p className="text-[10px] text-gray-400 leading-tight">Download on the</p>
                  <p className="text-sm text-white font-semibold leading-tight">App Store</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2026 STAR. All Rights Reserved.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                Terms Of Use
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                FAQ
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;