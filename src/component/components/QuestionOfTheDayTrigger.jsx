import React from 'react';
import { Lightbulb } from 'lucide-react';

export default function QuestionOfTheDayTrigger() {
  const open = () => window.dispatchEvent(new Event('openQOTD'));
  return (
    <>

      <div className="hidden md:flex fixed bottom-6 right-6 group">
        <button
          className="text-yellow-400 border border-white p-3 rounded-full shadow-lg transition-transform hover:text-yellow-300 hover:border-yellow-300 z-10"
          onClick={open}
          aria-label="Open Question of the Day"
        >
          <Lightbulb size={28} />
        </button>
        <div className="absolute bottom-full w-16 right-0 mb-1 hidden group-hover:block bg-black text-white text-xs rounded px-2 py-1 z-100">
          Question of the Day
        </div>
      </div>
    </>
  );
} 