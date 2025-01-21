import React from "react";
import { ReactComponent as Logo } from "../assets/svg/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Website Pages */}
          <div>
            <h3 className="text-lg font-bold mb-4">WEBSITE PAGES</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Music Distribution
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Account
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  History
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Hardware */}
          <div>
            <h3 className="text-lg font-bold mb-4">HARDWARE</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-gray-400">
                  DeskDAW
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  HybridConsole
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  ValveX
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  TapeX
                </a>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">USEFUL LINKS</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-gray-400">
                  DeskDAW Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Replic Public Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Online Artist Access
                </a>
              </li>
            </ul>
          </div>

          {/* Branding and Copyright */}
          <div className="flex flex-col items-start md:items-end space-y-4">
            <div className="flex items-center space-x-3">
              <Logo />
              <div>
                <h3 className="text-lg font-bold">Matthew Matthews Brand</h3>
                <p className="text-sm">Create your vision with music and be happy!</p>
              </div>
            </div>
            <p className="text-xs text-gray-500">
              Copyright © 2025 Matthew Matthews Brand. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


