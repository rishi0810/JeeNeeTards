import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

function Calculate({ topics, name, onProgressChange, color }) {
  const totalWeightage = topics.reduce((sum, topic) => sum + topic.weightage, 0);
  const [completedWeightage, setCompletedWeightage] = useState(() => {
    const savedState = localStorage.getItem(`completed_${name}`);
    return savedState ? JSON.parse(savedState) : [];
  });
  const [expand, setExpand] = useState(false);

  const handleCheckboxChange = (index) => {
    setCompletedWeightage((prev) => {
      const updated = [...prev];
      if (updated.includes(index)) {
        updated.splice(updated.indexOf(index), 1);
      } else {
        updated.push(index);
      }
      return updated;
    });
  };

  const calculateProgress = () => {
    const completedSum = completedWeightage.reduce(
      (sum, index) => sum + topics[index].weightage,
      0
    );
    return Math.round((completedSum / totalWeightage) * 100);
  };

  useEffect(() => {
    const completedSum = completedWeightage.reduce(
      (sum, index) => sum + topics[index].weightage,
      0
    );
    onProgressChange(completedSum);

    localStorage.setItem(`completed_${name}`, JSON.stringify(completedWeightage));
  }, [completedWeightage, onProgressChange, topics, totalWeightage, name]);

  return (
    <>
      <div className="flex flex-col gap-0 w-full">
        <h3
          className="w-full text-lg flex justify-between px-3 cursor-pointer text-white bg-white bg-opacity-15 hover:bg-opacity-20 rounded-md rounded-b-none shadow-lg py-3"
          onClick={() => {
            setExpand(!expand);
          }}
        >
          <span className="flex gap-1 pr-2">{name}</span>
          <span><ChevronDown /></span>
        </h3>
        <div className="w-full bg-white bg-opacity-30 rounded-full h-1">
          <div
            className={`${color} h-1 rounded-full transition-all duration-500 ease-in-out`}
            style={{ width: `${calculateProgress()}%` }}
          ></div>
        </div>
      </div>

      {expand && (
        <div className="flex flex-col gap-2 w-full rounded p-3">
          {topics.map((topic, index) => (
            <div
              className={`flex justify-between w-full items-center rounded-lg p-2 bg-white ${
                completedWeightage.includes(index)
                  ? "bg-opacity-5 line-through decoration-white"
                  : "bg-opacity-25"
              }`}
              key={index}
            >
              <span className="flex items-center">
                <label className="relative flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={completedWeightage.includes(index)}
                    onChange={() => handleCheckboxChange(index)}
                  />
                  <div className={`w-5 h-5 border-2 rounded-sm transition-all duration-200 ease-in-out ${
                    completedWeightage.includes(index) 
                      ? 'border-white bg-white' 
                      : 'border-white'
                  }`}>
                    {completedWeightage.includes(index) && (
                      <svg className="w-4 h-4 text-black" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                </label>
                <span className="text-white font-poppins text-sm pl-4 px-2">{topic.topic}</span>
              </span>
              <span className="text-white font-poppins text-sm pr-5">{topic.weightage}</span>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Calculate;
