import React from 'react'
import { SquareLibrary } from 'lucide-react';
import {NavLink, Link } from 'react-router-dom'

function Header() {
  return (
    <header className="sticky top-0 bg-gray-950 flex flex-row justify-between py-3 px-24 mx-auto z-50 border-b border-slate-800">
      <div className='flex flex-row gap-2'> 
        <SquareLibrary className='text-slate-300 size-8'/>
        <NavLink to={'/'} className="text-xl font-poppins text-slate-300 p-1 pb-2 font-semibold">
        <span className="text-yellow-500">Jee</span>
            <span className="text-blue-700">NeeT</span>
            <span className="text-white">ards</span>
        </NavLink>
      </div>

      <div className="flex flex-row gap-3">
            <NavLink 
            to="courses"
           className = {`text-slate-300 text-lg font-sans p-1 hover:text-slate-500`}>
            Courses
            </NavLink>

          <NavLink
          className = {`text-slate-300 text-lg font-sans p-1 hover:text-slate-500`}>
            Contact Us
          </NavLink>
          <Link
          to = "https://github.com/rishi0810"
           className = {`text-slate-300 text-lg font-sans p-1 hover:text-slate-500`}
           rel="noopener noreferrer"
           >
            Github
          </Link>
          
      </div>

    </header>
  )   
}

export default Header
