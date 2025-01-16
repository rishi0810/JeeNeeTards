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
              <span>
                <input
                  type="checkbox"
                  checked={completedWeightage.includes(index)}
                  onChange={() => handleCheckboxChange(index)}
                />
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
