import React from "react";
import { ReactComponent as Logo } from "../assets/svg/logo.svg";
import "./Footer.scss"; // Импортируем файл стилей

const Footer = () => {
  return (
    <footer className="bg-black text-white relative">
      <div className="container mx-auto px-6 py-10 footer-container">
        <div className="footer-row">
          {/* Website Pages */}
          <div>
            <h3 className="text-lg font-bold mb-4">PRODUCTION</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Mix and Master
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Online Artist
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Distribution
                </a>
              </li>
            </ul>

            {/* Hardware */}
            <div>
              <h3 className="text-lg font-bold mb-4">HARDWARE</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:underline">
                    SoloStudio Pro
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    SoloStudio Mini
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    VALVEX AMP
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    OldChannel
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-row">
          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">USEFUL LINKS</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Store
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  WNS
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
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
                <a href="#" className="hover:underline">
                  Политика приватности
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Юридическая Информация
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  О кампании
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Branding and Copyright */}
        <div className="flex flex-col items-center justify-center space-y-4 relative mt-8 md:mt-0 footer-logo">
          <div className="flex items-center space-x-3">
            <Logo />
            <div>
              <h3 className="text-xl font-bold">Matthew Matthews Brand</h3>
              <p className="text-base">
                Create your vision with music and be happy!
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="text-xs text-gray-500 absolute bottom-0 right-0 w-full text-right p-0 whitespace-nowrap">
        Copyright © 2025 Matthew Matthews Brand. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
