import React from "react";
import { ListCheck, User, Library, BookOpenCheck, Github, Users } from "lucide-react";
import Courses from "./Courses";
import { NavLink } from "react-router-dom";
import QuestionOfTheDay from '../components/QuestionOfTheDay';

function Home() {
  return (
    <>
      <QuestionOfTheDay />
      <div className="bg-gradient-to-b from-zinc-950 to-zinc-900 flex flex-col justify-evenly items-center gap-40 w-full py-40">
        <section className="flex flex-col gap-3 items-center">
          <p className="text-4xl w-4/6 text-white text-center font-poppins font-bold">
            <span className="text-yellow-500">Jee</span>
            <span className="text-blue-700">NeeT</span>
            <span className="text-white mr-2">ards</span>
            is a vibrant community dedicated to{" "}
            <span className="text-yellow-500">JEE</span> and{" "}
            <span className="text-blue-700">NEET</span> aspirants.
          </p>
          <div className="text-lg w-4/6 text-white font-thin text-center font-poppins ">
            Here, the syllabus is in the form of an intuitive to-do-list, progress
            is trackable and there are content at your fingertips related to notes
            and PYQs
          </div>
        </section>

        <NavLink 
        to ="/courses"
        className="px-4 py-3 text-lg rounded-md shadow-md hover:shadow-slate-500 bg-white text-black hover:bg-slate-200 ">
          Select Courses
        </NavLink>
        
        <section className="flex flex-col gap-10 px-10 md:px-20 justify-center items-stretch md:items-center w-full">
          <h1 className="text-white font-poppins font-semibold text-3xl text-center">
            Let us handle the complications
          </h1>

          <div className="flex flex-col gap-5 items-stretch md:grid md:grid-cols-3 md:gap-x-20 md:gap-y-10 text-white md:items-center ">
            <div className="flex py-3 px-3 gap-3 bg-opacity-5 bg-white rounded-md shadow-lg">
              <ListCheck className="size-9 mt-1" />
              <div className="flex flex-col gap-1 bg-opacity-5pl-3">
                <p className="text-md font-normal">
                  Intuitive To-Do-List Interface
                </p>
                <p className="text-sm font-light text-slate-300">
                  Provides a feeling of accomplishment
                </p>
              </div>
            </div>
            <div className="flex py-3 px-3 gap-3 bg-opacity-5 bg-white rounded-md shadow-lg">
              <User className="size-9 mt-1"/>
              <div className="flex flex-col gap-1 bg-opacity-5pl-3">
              <p className="text-md font-normal">Seamless User Experience</p>
              <p className="text-sm font-light text-slate-300">
                Smooth and minimal frustation-fueled UI
                </p>
              </div>
            </div>
            <div className="flex py-3 px-3 gap-3 bg-opacity-5 bg-white rounded-md shadow-lg">
              <Library className="size-9 mt-1"/>
              <div className="flex flex-col gap-1 bg-opacity-5pl-3">
              <p className="text-md font-normal">
                Access to vast amount of materials
              </p>
              <p className="text-sm font-light text-slate-300">
                Verified sources for PYQs and Notes
              </p>
              </div>
            </div>
            <div className="flex py-3 px-3 gap-3 bg-opacity-5 bg-white rounded-md shadow-lg">
              <BookOpenCheck className="size-9 mt-1"/>
              <div className="flex flex-col gap-1 bg-opacity-5pl-3">
              <p className="text-md font-normal">Up to Date and Trustworthy</p>
              <p className="text-sm font-light text-slate-300">
                Active efforts to provide latest information
              </p>
              </div>
            </div>
            <div className="flex py-3 px-3 gap-3 bg-opacity-5 bg-white rounded-md shadow-lg">
              <Github className="size-9 mt-1"/>
              <div className="flex flex-col gap-1 bg-opacity-5pl-3">
              <p className="text-md font-normal">Open Source</p>
              <p className="text-sm font-light text-slate-300">
                All technical jargon is open source on Github
              </p>
              </div>
            </div>
            <div className="flex py-2 px-3 gap-3 bg-opacity-5 bg-white rounded-md shadow-lg">
              <Users className="size-9 md:mt-1 mt-5"/>
              <div className="flex flex-col gap-1 bg-opacity-5pl-3">
              <p className="text-md font-normal">
                Free Materials and Collaborative Approach
              </p>
              <p className="text-sm font-light text-slate-300">
                Built and maintained by an enthusiastic community
              </p>
              </div>
            </div>
           
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
