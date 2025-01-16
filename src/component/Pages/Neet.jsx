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
  
  
  useEffect(()=>{
    
    updatetotalmarks(Math.round((botany_marks/100)*180)+Math.round((chemistry_marks/100)*180)+Math.round((zoology_marks/100)*180)+Math.round((physics_marks/100)*180));

  }, [botany_marks,chemistry_marks,zoology_marks,physics_marks])

  return (
    <div className="w-full bg-gray-950 min-h-screen flex flex-row justify-evenly items-baseline gap-20 p-5">
      <div className="flex flex-col gap-2 w-1/2 p-3 items-center bg-white bg-opacity-10 rounded">
        <span className="text-2xl p-3 font-poppins font-semibold text-blue-700 self-start">
          NEET
        </span>
        <Calculate
          topics={Botany}
          name="Botany"
          onProgressChange={updatebotanymarks}
          color = "bg-blue-700"
        />
        <Calculate
          topics={Chemistry}
          name="Chemistry"
          onProgressChange={updatechemistrymarks}
          color = "bg-blue-700"
        />
        <Calculate
          topics={Zoology}
          name="Zoology"
          onProgressChange={updatezoologymarks}
          color = "bg-blue-700"
        />
        <Calculate
          topics={Physics}
          name="Physics"
          onProgressChange={updatephysicsmarks}
          color = "bg-blue-700"
        />
      </div>
      {/* 600 white */}
      <div className="flex flex-col gap-5 p-5 text-white bg-white bg-opacity-10 rounded ">
        <span className="text-3xl">Subject Details</span>
        <div className="flex flex-col gap-4 mt-5 bg-white bg-opacity-15 p-3 rounded">
          <span className="bg-white bg-opacity-20 text-lg py-2 px-5 rounded shadow">
            Total Marks: 720
          </span>
          
          <div className="grid grid-cols-2 gap-3 p-3 bg-white bg-opacity-20 rounded">
          <CircularProgressbar
              className="size-36"
              styles={buildStyles({
                textColor: "#f0f9ff",
                pathColor : "#2d37ed",
                trailColor : "#d4d4d6",
                textSize : 12
                
              })}
              value={botany_marks}
              text={`Botany : ${Math.round((botany_marks/100)*180)}`}
            />
            <CircularProgressbar
            className="size-32"
              styles={buildStyles({
                textColor: "#f0f9ff",
                pathColor : "#2d37ed",
                trailColor : "#d4d4d6",
                textSize : 12
              })}
              value={chemistry_marks}
              text={`Chemistry ${Math.round((chemistry_marks/100)*180)}`}
            />
            <CircularProgressbar
            className="size-32"
              styles={buildStyles({
                textColor: "#f0f9ff",
                pathColor : "#2d37ed",
                trailColor : "#d4d4d6", 
                textSize : 12               
              })}
              value={zoology_marks}
              text={`Zoology : ${Math.round((zoology_marks/100)*180)}`}
            />
            <CircularProgressbar
            className="size-32"
              styles={buildStyles({
                textColor: "#f0f9ff",
                pathColor : "#2d37ed",
                trailColor : "#d4d4d6",   
                textSize : 12             
              })}
              value={physics_marks}
              text={`Physics : ${Math.round((physics_marks/100)*180)}`}
            />
          </div>

          <span className="px-5 py-2 text-lg bg-white bg-opacity-20 rounded shadow">Current Marks : {total_marks}</span>
            
        </div>
      </div>
    </div>
  );
}

export default Neet;
