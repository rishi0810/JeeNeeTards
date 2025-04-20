import React from 'react'
function Footer() {
  return (
    <footer className="relative bottom-0 bg-zinc-900 text-white border-t border-slate-800 py-4 px-15 w-full">
      <div className="flex px-5 justify-center">
      <span className="material-symbols-outlined mr-1">
            copyright
          </span>
        <p className='text-slate-300 text-sm md:text-lg font-poppins font-bold whitespace-nowrap'>
          {new Date().getFullYear()} JeeNeeTards- <a href="https://www.linkedin.com/in/rishiraj2003/" className='text-blue-500'>Rishi Raj</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
