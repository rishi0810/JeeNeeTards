import React, { useState, useEffect } from "react";
import { ChevronDown, Sparkles } from "lucide-react";
import { useAi } from "../../context/AiContext";

function Calculate({ topics, name, onProgressChange, color, alwaysExpanded = false }) {
  const { openAiModal } = useAi();
  const totalWeightage = topics.reduce((sum, topic) => sum + topic.weightage, 0);
  const [completedWeightage, setCompletedWeightage] = useState(() => {
    const savedState = localStorage.getItem(`completed_${name}`);
    return savedState ? JSON.parse(savedState) : [];
  });
  const [expand, setExpand] = useState(alwaysExpanded);

  useEffect(() => {
    if (alwaysExpanded) {
      setExpand(true);
    }
  }, [alwaysExpanded]);

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
      {!alwaysExpanded && (
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
      )}

      {alwaysExpanded && (
        <div className="w-full bg-white bg-opacity-30 rounded-full h-2 mb-6">
          <div
            className={`${color} h-2 rounded-full transition-all duration-500 ease-in-out`}
            style={{ width: `${calculateProgress()}%` }}
          ></div>
        </div>
      )}

      {expand && (
        <div className="flex flex-col gap-4 w-full rounded p-4">
          {topics.map((topic, index) => (
            <div
              className={`flex justify-between w-full items-center rounded-lg py-3 px-4 bg-white shadow-md transition-all duration-200 ${
                completedWeightage.includes(index)
                  ? "bg-opacity-5 line-through decoration-white"
                  : "bg-opacity-20 hover:bg-opacity-25"
              }`}
              key={index}
            >
              <span className="flex items-center flex-wrap">
                <label className="relative flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={completedWeightage.includes(index)}
                    onChange={() => handleCheckboxChange(index)}
                  />
                  <div className={`w-6 h-6 border-2 rounded-sm transition-all duration-200 ease-in-out ${
                    completedWeightage.includes(index) 
                      ? 'border-white bg-white' 
                      : 'border-white'
                  }`}>
                    {completedWeightage.includes(index) && (
                      <svg className="w-5 h-5 text-black" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                </label>
                <span className="text-white font-poppins text-base font-medium pl-5 pr-2">{topic.topic}</span>
              </span>
              <div className="flex items-center">
                {!completedWeightage.includes(index) && (
                  <button
                    className="bg-yellow-500 hover:bg-yellow-400 text-black px-3 py-1.5 rounded-md flex items-center gap-1.5 text-sm font-medium transition-colors mr-4"
                    onClick={() => openAiModal(topic.topic)}
                    aria-label={`Get AI explanation for ${topic.topic}`}
                  >
                    <Sparkles className="w-4 h-4" />
                    AI
                  </button>
                )}
                <span className="text-white font-poppins text-base font-semibold bg-white/10 px-3 py-1 rounded-full">{topic.weightage}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Calculate;
