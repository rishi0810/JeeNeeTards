import React, { useEffect, useState } from "react";
import { Mathematics, Chemistry, Physics } from "./data/jee.json";
import Calculate from "./Calculate";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Neet() {
  const [physics_marks, updatephysicsmarks] = useState(0);
  const [chemistry_marks, updatechemistrymarks] = useState(0);
  const [math_marks, updatemathmarks] = useState(0);
  const [total_marks, updatetotalmarks] = useState(0);

  useEffect(() => {
    updatetotalmarks(physics_marks + chemistry_marks + math_marks);
  }, [math_marks, chemistry_marks, physics_marks]);

  return (
    <div className="w-full bg-gradient-to-b from-zinc-950 to-zinc-900 min-h-screen flex flex-col md:flex-row justify-evenly items-start gap-8 p-5">
      {/* Subjects Section */}
      <div className="flex flex-col gap-4 w-full md:w-1/2 p-6 items-center backdrop-blur-sm bg-white/5 rounded-3xl border border-white/10 shadow-xl transition-all duration-300 hover:bg-white/[0.07]">
        <div className="w-full flex items-center justify-between mb-4">
          <div className="space-y-1">
            <span className="text-3xl font-semibold text-yellow-500 bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              JEE
            </span>
            <p className="text-slate-400 text-sm">Track your preparation progress</p>
          </div>
          <div className="text-right">
            <div className="text-slate-300 text-sm font-medium">Total Weightage</div>
            <div className="text-yellow-500 font-semibold">100%</div>
          </div>
        </div>
        
        <div className="space-y-6 w-full [&>*]:animate-slideDown ">
          <div className="space-y-2 ">
           
            <Calculate
              topics={Mathematics}
              name="Mathematics" 
              onProgressChange={updatemathmarks}
              color="bg-yellow-500"
            />
          </div>

          <div className="space-y-2">
         
            <Calculate
              topics={Chemistry}
              name="Chemistry"
              onProgressChange={updatechemistrymarks}
              color="bg-yellow-500"
            />
          </div>

          <div className="space-y-2">
            <Calculate
              topics={Physics}
              name="Physics"
              onProgressChange={updatephysicsmarks}
              color="bg-yellow-500"
            />
          </div>
        </div>
      </div>

      {/* Progress Section */}
      <div className="flex flex-col gap-6 p-6 w-full md:w-auto backdrop-blur-sm bg-white/5 rounded-3xl border border-white/10 shadow-xl transition-all duration-300 hover:bg-white/[0.07]">
        <div className="space-y-1">
          <h2 className="text-3xl font-semibold bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">
            Subject Details
          </h2>
          <p className="text-slate-400 text-sm">Your current progress status</p>
        </div>
        
        <div className="flex flex-col gap-6 bg-white/5 p-6 rounded-2xl">
          <div className="flex items-center justify-between bg-white/10 px-6 py-4 rounded-xl shadow-lg">
            <span className="text-slate-300">Maximum Marks</span>
            <span className="text-white font-semibold text-lg">300</span>
          </div>

          <div className="grid grid-cols-2 gap-8 p-6 bg-white/10 rounded-xl">
            <div className="transition-all duration-300 hover:scale-105 hover:-rotate-12">
              <CircularProgressbar
                className="w-36 h-36"
                styles={buildStyles({
                  textColor: "#f0f9ff",
                  pathColor: "#f59e0b",
                  trailColor: "rgba(255,255,255,0.1)",
                  textSize: 12,
                  rotation: 0.25,
                })}
                value={math_marks}
                text={`Maths: ${Math.round(math_marks)}`}
              />
            </div>
            <div className="transition-all duration-300 hover:scale-105 hover:rotate-12">
              <CircularProgressbar
                className="w-36 h-36"
                styles={buildStyles({
                  textColor: "#f0f9ff",
                  pathColor: "#f59e0b",
                  trailColor: "rgba(255,255,255,0.1)",
                  textSize: 12,
                  rotation: 0.25,
                })}
                value={chemistry_marks}
                text={`Chem: ${Math.round(chemistry_marks)}`}
              />
            </div>
            <div className="transition-all duration-300 hover:scale-105 col-span-2 mx-auto hover:-translate-y-2">
              <CircularProgressbar
                className="w-36 h-36"
                styles={buildStyles({
                  textColor: "#f0f9ff",
                  pathColor: "#f59e0b",
                  trailColor: "rgba(255,255,255,0.1)",
                  textSize: 12,
                  rotation: 0.25,
                })}
                value={physics_marks}
                text={`Physics: ${Math.round(physics_marks)}`}
              />
            </div>
          </div>

          <div className="flex items-center justify-between bg-white/10 px-6 py-4 rounded-xl shadow-lg">
            <span className="text-slate-300">Current Score</span>
            <span className="text-white font-semibold text-lg">{Math.round(total_marks)}</span>
          </div>
        </div>
      </div>

    
    </div>
  );
}

export default Neet;