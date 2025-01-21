import React from 'react'
function Footer() {
  return (
    <footer className="relative bottom-0 bg-zinc-900 text-white border-t border-slate-800 py-4 px-24 w-full">
      <div className="flex px-5 text-center">
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
