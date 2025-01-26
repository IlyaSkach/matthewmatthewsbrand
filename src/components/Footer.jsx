import React from "react";
import { ReactComponent as Logo } from "../assets/svg/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-black text-white relative">
      <div className="container mx-auto px-6 py-10 flex justify-between">
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
          {/* Website Pages */}
          <div>
            <h3 className="text-lg font-bold mb-4">PRODUCTION</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Mix and Master
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Online Artist
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Distribution
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
                  SoloStudio Pro
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  SoloStudio Mini
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  VALVEX AMP
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  OldChannel
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
                  Store
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  WNS
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>


          

           {/* COMMERCIAL */}
           <div>
            <h3 className="text-lg font-bold mb-4">COMMERCIAL</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-gray-400">
                Политика приватности
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                Юридическая Информация
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                О кампании
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Branding and Copyright */}
        <div className="flex flex-col items-start md:items-end space-y-4 relative">
          <div className="flex items-center space-x-3">
            <Logo />
            <div>
              <h3 className="text-lg font-bold">Matthew Matthews Brand</h3>
              <p className="text-sm">
                Create your vision with music and be happy!
              </p>
            </div>
          </div>
          <p className="text-xs text-gray-500 absolute bottom-0 right-0 w-full text-right p-0 whitespace-nowrap">
            Copyright © 2025 Matthew Matthews Brand. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
