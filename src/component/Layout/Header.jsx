import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SquareLibrary, Menu, X } from 'lucide-react';
import logo from '../../assets/logo.svg';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const NavLink = ({ to, children }) => {
    const isActive = location.pathname === to;

    return (
      <Link
        to={to}
        onClick={closeMenu}
        className={`text-slate-300 text-lg font-bold p-2 rounded-lg transition-colors duration-200 ${
          isActive ? 'bg-white/10 text-white' : 'hover:bg-white/5 hover:text-white'
        }`}
      >
        {children}
      </Link>
    );
  };

  return (
    <>
      <div className="h-32 bg-zinc-950" />

      <header className="fixed top-6 left-0 right-0 mx-auto max-w-7xl z-50 px-4">
        <div className="backdrop-blur-md bg-white/5 rounded-2xl shadow-lg border border-white/10 flex flex-row justify-between py-4 px-8 hover:shadow-xl hover:bg-white/[0.07] transition-all duration-300">
          <div className="flex flex-row items-center gap-2">
            <img src={logo} alt="logo" className="text-slate-300 w-9 h-9" />
            <Link
              to="/"
              className="text-xl font-bold p-1"
              onClick={closeMenu}
            >
              <span className="text-yellow-500">Jee</span>
              <span className="text-blue-700">NeeT</span>
              <span className="text-white">ards</span>
            </Link>
          </div>

          {/* Hamburger Menu Button */}
          <button
            className="md:hidden text-slate-300 text-lg p-2 rounded-lg hover:bg-white/5 hover:text-white transition-colors duration-200"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-row items-center gap-3">
            <NavLink to="/courses">Courses</NavLink>
            <a
              href="https://www.linkedin.com/in/rishiraj2003/"
              onClick={closeMenu}
              className="text-slate-300 text-lg font-bold p-2 rounded-lg hover:bg-white/5 hover:text-white transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact
            </a>
            <a
              href="https://github.com/rishi0810"
              onClick={closeMenu}
              className="text-slate-300 text-lg font-bold p-2 rounded-lg hover:bg-white/5 hover:text-white transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </nav>

          {/* Mobile Dropdown Navigation */}
          {isMenuOpen && (
            <div className="absolute top-full right-0 mt-2 bg-zinc-900 rounded-lg shadow-lg border border-white/10 md:hidden w-2/5">
              <nav className="flex flex-col items-start gap-3 p-4 w-full">
                <NavLink to="/courses">Courses</NavLink>
                <a
                  href="https://www.linkedin.com/in/rishiraj2003/"
                  onClick={closeMenu}
                  className="text-slate-300 text-lg font-bold p-2 rounded-lg hover:bg-white/5 hover:text-white transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact
                </a>
                <a
                  href="https://github.com/rishi0810"
                  onClick={closeMenu}
                  className="text-slate-300 text-lg font-bold p-2 rounded-lg hover:bg-white/5 hover:text-white transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
