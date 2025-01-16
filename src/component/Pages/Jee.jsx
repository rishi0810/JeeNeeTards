import React, { useEffect, useState } from "react";
import { Mathematics,Chemistry,Physics } from "./data/jee.json";
import Calculate from "./Calculate";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Neet() {
  
  const [physics_marks, updatephysicsmarks] = useState(0);
  const [chemistry_marks, updatechemistrymarks] = useState(0);
  const [math_marks, updatemathmarks] = useState(0);  
  const [total_marks, updatetotalmarks] = useState(0);
  
  
  useEffect(()=>{
    
    updatetotalmarks(physics_marks+chemistry_marks+math_marks);

  }, [math_marks,chemistry_marks,physics_marks])

  return (
    <div className="w-full bg-gray-950 min-h-screen flex flex-row justify-evenly items-baseline gap-20 p-5">
      <div className="flex flex-col gap-2 w-1/2 p-3 items-center bg-white bg-opacity-10 rounded">
        <span className="text-2xl p-3 font-poppins font-semibold text-yellow-500 self-start">
          JEE
        </span>
        <Calculate
          topics={Mathematics}
          name="Mathematics"
          onProgressChange={updatemathmarks}
          color = "bg-yellow-500"
        />
        <Calculate
          topics={Chemistry}
          name="Chemistry"
          onProgressChange={updatechemistrymarks}
          color = "bg-yellow-500"
        />
        <Calculate
          topics={Physics}
          name="Physics"
          onProgressChange={updatephysicsmarks}
          color = "bg-yellow-500"
        />
      </div>
      <div className="flex flex-col gap-5 p-5 text-white bg-white bg-opacity-10 rounded ">
        <span className="text-3xl">Subject Details</span>
        <div className="flex flex-col gap-4 mt-5 bg-white bg-opacity-15 p-3 rounded">
          <span className="bg-white bg-opacity-20 text-lg py-2 px-5 rounded shadow">
            Total Marks: 300
          </span>
          
          <div className="flex flex-col gap-3 p-3 bg-white bg-opacity-20 rounded">
          <span className="flex flex-row gap-5 p-2">
          <CircularProgressbar
              className="size-36"
              styles={buildStyles({
                textColor: "#f0f9ff",
                pathColor : "#f59e0b",
                trailColor : "#d4d4d6",
                textSize : 12
                
              })}
              value={math_marks}
              text={`Maths : ${Math.round(math_marks)}`}
            />
            <CircularProgressbar
            className="size-32"
              styles={buildStyles({
                textColor: "#f0f9ff",
                pathColor : "#f59e0b",
                trailColor : "#d4d4d6",
                textSize : 12
              })}
              value={chemistry_marks}
              text={`Chemistry ${Math.round(chemistry_marks)}`}
            />
          </span>
            <CircularProgressbar
            className="size-32"
              styles={buildStyles({
                textColor: "#f0f9ff",
                pathColor : "#f59e0b",
                trailColor : "#d4d4d6", 
                textSize : 12               
              })}
              value={physics_marks}
              text={`Physics : ${Math.round(physics_marks)}`}
            />
          </div>

          <span className="px-5 py-2 text-lg bg-white bg-opacity-20 rounded shadow">Current Marks : {Math.round(total_marks)}</span>
            
        </div>
      </div>
    </div>
  );
}

export default Neet;
