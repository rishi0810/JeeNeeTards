import React from 'react'
import { NavLink } from "react-router-dom";
function Courses() {
  return (
    <section className="flex flex-col gap-10 items-center justify-center min-h-screen bg-zinc-950">
      
    <h4 className="text-white text-center text-5xl font-poppins font-bold">
      Pick your course. 
    </h4>
    <div className="flex justify-center items-center gap-20 w-4/6 py-10">
  
      <NavLink to= {"/jee"} className="text-center font-bold font-poppins text-lg rounded-md shadow-md bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 p-4 w-32 min-w-20">JEE</NavLink>
      <NavLink to={"/neet"}className="text-center font-bold font-poppins text-lg rounded-md shadow-md bg-blue-500 hover:bg-blue-600 active:bg-blue-700 p-4 w-32 min-w-20">NEET</NavLink>     
      
    </div>
    </section>
  )
}

export default Courses
