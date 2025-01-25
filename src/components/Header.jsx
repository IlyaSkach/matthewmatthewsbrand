import React, { useState } from "react";
import { ReactComponent as Logo } from "../assets/svg/logo.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setCurrentSubMenu(null); // Закрыть подменю при открытии/закрытии основного меню
  };

  const toggleSubMenu = (menuName) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  const handleLinkClick = () => {
    setOpenMenu(null);
    setCurrentSubMenu(null);
  };

  const [currentSubMenu, setCurrentSubMenu] = useState(null);

  const openSubMenu = (menuName) => {
    setCurrentSubMenu(menuName);
  };

  const goBack = () => {
    setCurrentSubMenu(null);
  };

  return (
    <header className="bg-black text-white relative z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo Section */}
        <div className="flex items-center space-x-3 text-center">
          <Logo />
          <span className="text-xl font-bold hidden lg:block">
            Matthew Matthews Brand
          </span>
        </div>

        {/* Navigation Links for Desktop */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium relative">
          {/* Replic Public Menu */}
          <div className="relative">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                toggleSubMenu("replic");
              }}
              className="hover:text-gray-400 cursor-pointer flex items-center space-x-1"
            >
              <span>Replic Public</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 transform transition-transform ${
                  openMenu === "replic" ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
            {openMenu === "replic" && (
              <div className="absolute top-full left-0 bg-black text-sm mt-2 shadow-md border border-gray-700 z-50">
                <a
                  href="/"
                  onClick={handleLinkClick}
                  className="block px-4 py-2 hover:text-gray-400"
                >
                  Solo Studio Pro
                </a>
                <a
                  href="/"
                  onClick={handleLinkClick}
                  className="block px-4 py-2 hover:text-gray-400"
                >
                  Solo Studio Mini
                </a>
                <a
                  href="/"
                  onClick={handleLinkClick}
                  className="block px-4 py-2 hover:text-gray-400"
                >
                  VALVEX AMP
                </a>
                <a
                  href="/"
                  onClick={handleLinkClick}
                  className="block px-4 py-2 hover:text-gray-400"
                >
                  OldChannel
                </a>
              </div>
            )}
          </div>

          {/* Music Production Menu */}
          <div className="relative">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                toggleSubMenu("music");
              }}
              className="hover:text-gray-400 cursor-pointer flex items-center space-x-1"
            >
              <span>Music Production</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 transform transition-transform ${
                  openMenu === "music" ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
            {openMenu === "music" && (
              <div className="absolute top-full left-0 bg-black text-sm mt-2 shadow-md border border-gray-700 z-50">
                <a
                  href="/"
                  onClick={handleLinkClick}
                  className="block px-4 py-2 hover:text-gray-400"
                >
                  Mixing & Mastering
                </a>
                <a
                  href="/"
                  onClick={handleLinkClick}
                  className="block px-4 py-2 hover:text-gray-400"
                >
                  Online Artist
                </a>
                <a
                  href="/"
                  onClick={handleLinkClick}
                  className="block px-4 py-2 hover:text-gray-400"
                >
                  Distribution
                </a>
              </div>
            )}
          </div>

          <a href="/" onClick={handleLinkClick} className="hover:text-gray-400">
            World Net States
          </a>
          <a
            href="/history"
            onClick={handleLinkClick}
            className="hover:text-gray-400"
          >
            Магазин
          </a>
          <a
            href="/about"
            onClick={handleLinkClick}
            className="hover:text-gray-400"
          >
            О нас
          </a>
          <a
            href="/product"
            onClick={handleLinkClick}
            className="hover:text-gray-400"
          >
            Контакты
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
      {/* {isOpen && (
        <div className="md:hidden bg-black text-white px-6 py-4">
          <nav className="flex flex-col space-y-4">
            <a href="/" className="hover:text-gray-400">
              Replic Public
            </a>
            <a href="/" className="hover:text-gray-400">
              Music Production
            </a>
            <a href="/" className="hover:text-gray-400">
            World Net States
            </a>
            <a href="/" className="hover:text-gray-400">
            Магазин
            </a>
            <a href="/about" className="hover:text-gray-400">
            О нас
            </a>
            <a href="/" className="hover:text-gray-400">
            Контакты
            </a>
          </nav>
        </div>
      )} */}
      {isOpen && (
        <div className="fixed inset-0 bg-black text-white h-screen flex flex-col">
          {/* Фиксированный хедер с логотипом и кнопкой закрытия */}
          <div className="flex justify-between items-center px-6 py-4">
            {/* Логотип */}
            <Logo />
            {/* Кнопка закрытия */}
            <button
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Контент меню */}
          <div className="flex-1 overflow-y-auto px-6 py-4 mt-12">
            {currentSubMenu === null ? (
              <nav className="flex flex-col items-end space-y-4">
                <button
                  onClick={() => openSubMenu("replic")}
                  className="flex justify-end items-center hover:text-gray-400"
                >
                  <span>Replic Public</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 transform transition-transform ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => openSubMenu("music")}
                  className="flex justify-end items-center hover:text-gray-400"
                >
                  <span>Music Production</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 transform transition-transform ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
                <a href="/" className="hover:text-gray-400">
                  World Net States
                </a>
                <a href="/history" className="hover:text-gray-400">
                  Магазин
                </a>
                <a href="/about" className="hover:text-gray-400">
                  О нас
                </a>
                <a href="/product" className="hover:text-gray-400">
                  Контакты
                </a>
              </nav>
            ) : (
              <div>
                <button
                  onClick={goBack}
                  className="flex items-center space-x-2 mb-4 hover:text-gray-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 transform transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                {currentSubMenu === "replic" && (
                  <nav className="flex flex-col items-end space-y-4">
                    <a href="/" className="hover:text-gray-400">
                      Solo Studio Pro
                    </a>
                    <a href="/" className="hover:text-gray-400">
                      Solo Studio Mini
                    </a>
                    <a href="/" className="hover:text-gray-400">
                      VALVEX AMP
                    </a>
                    <a href="/" className="hover:text-gray-400">
                      OldChannel
                    </a>
                  </nav>
                )}
                {currentSubMenu === "music" && (
                  <nav className="flex flex-col items-end space-y-4">
                    <a href="/" className="hover:text-gray-400">
                      Mixing & Mastering
                    </a>
                    <a href="/" className="hover:text-gray-400">
                      Online Artist
                    </a>
                    <a href="/" className="hover:text-gray-400">
                      Distribution
                    </a>
                  </nav>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
