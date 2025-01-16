import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <footer className="relative bottom-0 bg-zinc-900 text-white border-t border-slate-800 py-4 px-24 w-full text-center">
      <div className="flex items-center justify-center px-10">
      <span class="material-symbols-outlined">
            copyright
          </span>
        <p className='text-slate-300 text-lg font-poppins font-bold'>
        
          {new Date().getFullYear()} JeeNeeTards. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
