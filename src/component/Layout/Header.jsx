import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SquareLibrary } from 'lucide-react';

const Header = () => {
  const location = useLocation();

  const NavLink = ({ to, children }) => {
    const isActive = location.pathname === to;

    return (
      <Link
        to={to}
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
            <SquareLibrary className="text-slate-300" size={32} />
            <Link
              to="/"
              className="text-xl font-bold p-1"
            >
              <span className="text-yellow-500">Jee</span>
              <span className="text-blue-700">NeeT</span>
              <span className="text-white">ards</span>
            </Link>
          </div>

          <nav className="flex flex-row items-center gap-3">
            <NavLink to="/courses">
              Courses
            </NavLink>
            <a
              href="https://www.linkedin.com/in/rishiraj2003/"
              className="text-slate-300 text-lg font-bold p-2 rounded-lg hover:bg-white/5 hover:text-white transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact
            </a>
            <a
              href="https://github.com/rishi0810"
              className="text-slate-300 text-lg font-bold p-2 rounded-lg hover:bg-white/5 hover:text-white transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;