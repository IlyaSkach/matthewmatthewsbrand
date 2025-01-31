import React, { useState, useRef } from "react";
import { ReactComponent as Logo } from "../assets/svg/logo.svg";
import "./styles.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [currentSubMenu, setCurrentSubMenu] = useState(null);
  const closeTimeoutRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setCurrentSubMenu(null);
  };

  const handleLinkClick = () => {
    setOpenMenu(null);
    setCurrentSubMenu(null);
  };

  const openSubMenu = (menuName) => {
    setCurrentSubMenu(menuName);
  };

  const goBack = () => {
    setCurrentSubMenu(null);
  };

  const handleMouseEnter = (menuName) => {
    clearTimeout(closeTimeoutRef.current);
    setOpenMenu(menuName);
  };

  const handleMouseLeave = (menuName) => {
    closeTimeoutRef.current = setTimeout(() => {
      if (openMenu === menuName) {
        setOpenMenu(null);
      }
    }, 500);
  };

  return (
    <header className="bg-black text-white fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 cont">
        {/* Logo Section */}
        <div className="flex items-center space-x-3 text-center">
          <a href="/">
            {" "}
            <Logo />{" "}
          </a>
          <span className="text-xl font-bold hidden lg:block logo-text">
            <a className="logo-text" href="/">Matthew Matthews Brand</a>
          </span>
        </div>
        {/* Navigation Links for Desktop */}
        <nav className="hidden md:flex space-x-8 text-sm font-bold relative">
          {/* Replic Public Menu */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("replic")}
            onMouseLeave={() => handleMouseLeave("replic")}
          >
            <a
              href="/"
              onClick={(e) => e.preventDefault()}
              className="cursor-pointer flex items-center space-x-1 "
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
              <div
                className={`absolute top-[50px] left-0 bg-black text-sm shadow-md border border-none z-50 fade-in`}
                onMouseEnter={() => handleMouseEnter("replic")}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href="/product"
                  onClick={handleLinkClick}
                  className="block px-4 py-2 hover:underline "
                >
                  Solo Studio Pro
                </a>
                <a
                  href="/product"
                  onClick={handleLinkClick}
                  className="block px-4 py-2 hover:underline "
                >
                  Solo Studio Mini
                </a>
                <a
                  href="/product"
                  onClick={handleLinkClick}
                  className="block px-4 py-2 hover:underline "
                >
                  VALVEX AMP
                </a>
                <a
                  href="/product"
                  onClick={handleLinkClick}
                  className="block px-4 py-2 hover:underline "
                >
                  OldChannel
                </a>
              </div>
            )}
          </div>

          {/* Music Production Menu */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("music")}
            onMouseLeave={() => handleMouseLeave("music")}
          >
            <a
              href="/"
              onClick={(e) => e.preventDefault()}
              className="cursor-pointer flex items-center space-x-1 "
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
              <div
                className="absolute top-[50px] left-0 bg-black text-sm  shadow-md border border-none z-50 fade-in"
                onMouseEnter={() => handleMouseEnter("music")}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href="/"
                  onClick={handleLinkClick}
                  className="block px-4 py-2 hover:underline "
                >
                  Mixing & Mastering
                </a>
                <a
                  href="/"
                  onClick={handleLinkClick}
                  className="block px-4 py-2 hover:underline "
                >
                  Online Artist
                </a>
                <a
                  href="/distribution"
                  onClick={handleLinkClick}
                  className="block px-4 py-2 hover:underline "
                >
                  Distribution
                </a>
              </div>
            )}
          </div>

          <a href="/" onClick={handleLinkClick} className="">
            World Net States
          </a>
          <a href="/history" onClick={handleLinkClick} className="">
            Магазин
          </a>
          <a href="/history" onClick={handleLinkClick} className="">
            О нас
          </a>
          <a href="/about" onClick={handleLinkClick} className="">
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
            className="h-10 w-10"
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
      {isOpen && (
        <div className="fixed inset-0 bg-black text-white h-screen flex flex-col transition-all duration-300 ease-in-out">
          {/* Фиксированный хедер с логотипом и кнопкой закрытия */}
          <div className="flex justify-between items-center px-6 py-4">
            {/* Логотип */}
            <a href="/">
              <Logo />
            </a>
            {/* Кнопка закрытия */}
            <button
              onClick={() => setIsOpen(false)}
              className="hover:shadow-[0_0_10px_0_rgба(255,255,255,0.5)]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
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
                  className="flex justify-end items-center hover:shadow-[0_0_10px_0_rgба(255,255,255,0.5)] font-bold"
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
                  className="flex justify-end items-center hover:shadow-[0_0_10px_0_rgба(255,255,255,0.5)] font-bold "
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
                <a href="/" className="font-bold">
                  World Net States
                </a>
                <a href="/" className="font-bold">
                  Магазин
                </a>
                <a href="/history" className="font-bold">
                  О нас
                </a>
                <a href="/about" className="font-bold">
                  Контакты
                </a>
              </nav>
            ) : (
              <div>
                <button
                  onClick={goBack}
                  className="flex items-center space-x-2 mb-4 hover:shadow-[0_0_10px_0_rgба(255,255,255,0.5)]"
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
                    <a href="/product" className="font-bold">
                      Solo Studio Pro
                    </a>
                    <a href="/product" className="font-bold">
                      Solo Studio Mini
                    </a>
                    <a href="/product" className="font-bold">
                      VALVEX AMP
                    </a>
                    <a href="/product" className="font-bold">
                      OldChannel
                    </a>
                  </nav>
                )}
                {currentSubMenu === "music" && (
                  <nav className="flex flex-col items-end space-y-4">
                    <a href="/" className="font-bold">
                      Mixing & Mastering
                    </a>
                    <a href="/" className="font-bold">
                      Online Artist
                    </a>
                    <a href="/distribution" className="font-bold">
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
