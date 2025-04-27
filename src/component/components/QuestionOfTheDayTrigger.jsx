import React from 'react';
import { Lightbulb } from 'lucide-react';

export default function QuestionOfTheDayTrigger() {
  const open = () => window.dispatchEvent(new Event('openQOTD'));
  return (
    <>

      <div className="hidden md:flex fixed bottom-6 right-6 group z-[9999]">
        <button
          className="text-yellow-400 border border-white p-3 rounded-full shadow-lg transition-transform hover:text-yellow-300 hover:border-yellow-300"
          onClick={open}
          aria-label="Open Question of the Day"
        >
          <Lightbulb size={28} />
        </button>
        <div className="absolute border border-yellow-300 w-44 right-0 mr-16 hidden group-hover:block bg-black text-white text-s rounded px-2 py-1 z-9999">
          Question of the Day
        </div>
      </div>
    </>
  );
} 