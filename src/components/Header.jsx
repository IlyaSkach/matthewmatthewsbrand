

import React, { useState } from "react";
import { ReactComponent as Logo } from "../assets/svg/logo.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  const handleLinkClick = () => {
    setIsOpen(false);
  };
  

  return (
    <header className="bg-black text-white">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo Section */}
        <div className="flex items-center space-x-3 text-center">
          <Logo />
          <span className="text-xl font-bold">Matthew Matthews Brand</span>
        </div>

        {/* Navigation Links for Desktop */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium">
         
          <a href="/Replic Public" onClick={handleLinkClick} className="hover:text-gray-400">
            Replic Public
          </a>
          <a href="/" onClick={handleLinkClick} className="hover:text-gray-400">
            United Virtual State
          </a>
          <a href="/" onClick={handleLinkClick} className="hover:text-gray-400">
            Online Distribution
          </a>
          <a href="/" onClick={handleLinkClick} className="hover:text-gray-400">
            History
          </a>
          <a href="/" onClick={handleLinkClick} className="hover:text-gray-400">
            About Us
          </a>
          <a href="/" onClick={handleLinkClick} className="hover:text-gray-400">
            Account
          </a>
          <a href="/" onClick={handleLinkClick} className="hover:text-gray-400">
            Contact
          </a>
        </nav>

        {/* Hamburger Menu Button for Mobile */}
        <button
          className="block md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Dropdown Menu for Mobile */}
      {isOpen && (
        <div className="md:hidden bg-black text-white px-6 py-4">
          <nav className="flex flex-col space-y-4">
            <a href="/" className="hover:text-gray-400">
              Replic Public
            </a>
            <a href="/" className="hover:text-gray-400">
              United Virtual State
            </a>
            <a href="/" className="hover:text-gray-400">
              Music Distribution
            </a>
            <a href="/" className="hover:text-gray-400">
              History
            </a>
            <a href="/" className="hover:text-gray-400">
              About Us
            </a>
            <a href="/" className="hover:text-gray-400">
              Account
            </a>
            <a href="/" className="hover:text-gray-400">
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;



