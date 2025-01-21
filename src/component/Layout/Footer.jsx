import React from 'react'
function Footer() {
  return (
    <footer className="relative bottom-0 bg-zinc-900 text-white border-t border-slate-800 py-4 px-15 w-full">
      <div className="flex px-5 justify-center">
      <span className="material-symbols-outlined mr-1">
            copyright
          </span>
        <p className='text-slate-300 text-lg font-poppins font-bold'>
          {new Date().getFullYear()} JeeNeeTards</p>
      </div>
    </footer>
  )
}

export default Footer
