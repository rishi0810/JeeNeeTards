import React, { useEffect, useState } from "react";
import { Botany, Chemistry, Zoology, Physics } from "./data/neet.json";
import Calculate from "./Calculate";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Neet() {
  const [botany_marks, updatebotanymarks] = useState(0);
  const [chemistry_marks, updatechemistrymarks] = useState(0);
  const [zoology_marks, updatezoologymarks] = useState(0);
  const [physics_marks, updatephysicsmarks] = useState(0);
  const [total_marks, updatetotalmarks] = useState(0);
  const [activeTab, setActiveTab] = useState("Botany");
  
  useEffect(() => {
    updatetotalmarks(
      Math.round((botany_marks/100)*180) +
      Math.round((chemistry_marks/100)*180) +
      Math.round((zoology_marks/100)*180) +
      Math.round((physics_marks/100)*180)
    );
  }, [botany_marks, chemistry_marks, zoology_marks, physics_marks]);

  return (
    <div className="w-full bg-gradient-to-b from-zinc-950 to-zinc-900 min-h-screen flex flex-col md:flex-row justify-evenly items-start gap-6 md:gap-8 p-4 md:p-5">
      <div className="flex flex-col gap-4 w-full md:w-1/2 p-4 md:p-6 items-center backdrop-blur-sm bg-white/5 rounded-3xl border border-white/10 shadow-xl transition-all duration-300 hover:bg-white/[0.07]">
        <div className="w-full flex items-center justify-between mb-4">
          <div className="space-y-1">
            <span className="text-3xl font-semibold text-blue-600 bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              NEET
            </span>
            <p className="text-slate-400 text-sm">Track your preparation progress</p>
          </div>
          <div className="text-right">
            <div className="text-slate-300 text-sm font-medium">Maximum Score</div>
            <div className="text-blue-500 font-semibold">720</div>
          </div>
        </div>  
        
        <div className="flex flex-wrap justify-start gap-2 md:gap-4 w-full border-b border-white/10 mb-4">
          {["Botany", "Chemistry", "Zoology", "Physics"].map((subject) => (
            <button
              key={subject}
              onClick={() => setActiveTab(subject)}
              className={`px-4 py-2 font-medium transition-all duration-200 ${
                activeTab === subject
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              {subject}
            </button>
          ))}
        </div>
        
        <div className="space-y-6 w-full [&>*]:animate-slideDown rounded-xl">
          {activeTab === "Botany" && (
            <div className="space-y-2 rounded-xl">
              <Calculate
                topics={Botany}
                name="Botany"
                onProgressChange={updatebotanymarks}
                color="bg-blue-700"
                className="rounded-xl"
                alwaysExpanded={true}
              />
            </div>
          )}

          {activeTab === "Chemistry" && (
            <div className="space-y-2">
              <Calculate
                topics={Chemistry}
                name="Chemistry"
                onProgressChange={updatechemistrymarks}
                color="bg-blue-700"
                alwaysExpanded={true}
              />
            </div>
          )}

          {activeTab === "Zoology" && (
            <div className="space-y-2">
              <Calculate
                topics={Zoology}
                name="Zoology"
                onProgressChange={updatezoologymarks}
                color="bg-blue-700"
                alwaysExpanded={true}
              />
            </div>
          )}

          {activeTab === "Physics" && (
            <div className="space-y-2">
              <Calculate
                topics={Physics}
                name="Physics"
                onProgressChange={updatephysicsmarks}
                color="bg-blue-700"
                alwaysExpanded={true}
              />
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-6 p-4 md:p-6 w-full md:w-auto backdrop-blur-sm bg-white/5 rounded-3xl border border-white/10 shadow-xl transition-all duration-300 hover:bg-white/[0.07]">
        <div className="space-y-1">
          <h2 className="text-3xl font-semibold bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">
            Subject Details
          </h2>
          <p className="text-slate-400 text-sm">Your current progress status</p>
        </div>
        
        <div className="flex flex-col gap-6 bg-white/5 p-6 rounded-2xl">
          <div className="flex items-center justify-between bg-white/10 px-6 py-4 rounded-xl shadow-lg">
            <span className="text-slate-300">Maximum Marks</span>
            <span className="text-white font-semibold text-lg">720</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 p-4 md:p-6 bg-white/10 rounded-xl">
            <div className="transition-all duration-300 hover:scale-105 hover:-rotate-6">
              <CircularProgressbar
                className="w-24 h-24 md:w-36 md:h-36"
                styles={buildStyles({
                  textColor: "#f0f9ff",
                  pathColor: "#2563eb",
                  trailColor: "rgba(255,255,255,0.1)",
                  textSize: 12,
                  rotation: 0.25,
                })}
                value={botany_marks}
                text={`Botany: ${Math.round((botany_marks/100)*180)}`}
              />
            </div>
            <div className="transition-all duration-300 hover:scale-105 hover:rotate-6">
              <CircularProgressbar
                className="w-24 h-24 md:w-36 md:h-36"
                styles={buildStyles({
                  textColor: "#f0f9ff",
                  pathColor: "#2563eb",
                  trailColor: "rgba(255,255,255,0.1)",
                  textSize: 12,
                  rotation: 0.25,
                })}
                value={chemistry_marks}
                text={`Chem: ${Math.round((chemistry_marks/100)*180)}`}
              />
            </div>
            <div className="transition-all duration-300 hover:scale-105 hover:-rotate-6">
              <CircularProgressbar
                className="w-24 h-24 md:w-36 md:h-36"
                styles={buildStyles({
                  textColor: "#f0f9ff",
                  pathColor: "#2563eb",
                  trailColor: "rgba(255,255,255,0.1)",
                  textSize: 12,
                  rotation: 0.25,
                })}
                value={zoology_marks}
                text={`Zoo: ${Math.round((zoology_marks/100)*180)}`}
              />
            </div>
            <div className="transition-all duration-300 hover:scale-105 hover:rotate-6">
              <CircularProgressbar
                className="w-24 h-24 md:w-36 md:h-36"
                styles={buildStyles({
                  textColor: "#f0f9ff",
                  pathColor: "#2563eb",
                  trailColor: "rgba(255,255,255,0.1)",
                  textSize: 12,
                  rotation: 0.25,
                })}
                value={physics_marks}
                text={`Phy: ${Math.round((physics_marks/100)*180)}`}
              />
            </div>
          </div>

          <div className="flex items-center justify-between bg-white/10 px-6 py-4 rounded-xl shadow-lg">
            <span className="text-slate-300">Current Score</span>
            <span className="text-white font-semibold text-lg">{total_marks}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Neet;