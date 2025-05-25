import React, { useState, useEffect } from 'react';
import jeeData from '../Pages/data/jee.json';
import neetData from '../Pages/data/neet.json';

function QuestionOfTheDay() {
  const [show, setShow] = useState(false);
  const [questionData, setQuestionData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selected, setSelected] = useState(null);
  const todayKey = new Date().toISOString().split('T')[0];

  useEffect(() => {
    const openHandler = () => setShow(true);
    window.addEventListener('openQOTD', openHandler);
    return () => window.removeEventListener('openQOTD', openHandler);
  }, []);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('questionOfTheDay') || 'null');
    if (stored && stored.date === todayKey) {
      setQuestionData(stored);
      const savedAnswer = JSON.parse(localStorage.getItem(`answer_${todayKey}`) || 'null');
      if (typeof savedAnswer === 'number') {
        setSelected(savedAnswer);
      }
      return;
    }

    const completedTopics = [];
    ['Mathematics', 'Chemistry', 'Physics'].forEach((subject) => {
      const indices = JSON.parse(localStorage.getItem(`completed_${subject}`) || '[]');
      (jeeData[subject] || []).forEach((topicObj, idx) => {
        if (indices.includes(idx)) completedTopics.push(topicObj.topic);
      });
    });
    ['Botany', 'Chemistry', 'Zoology', 'Physics'].forEach((subject) => {
      const indices = JSON.parse(localStorage.getItem(`completed_${subject}`) || '[]');
      (neetData[subject] || []).forEach((topicObj, idx) => {
        if (indices.includes(idx)) completedTopics.push(topicObj.topic);
      });
    });

    if (completedTopics.length === 0) {
      setError('Complete at least one topic to unlock the Question of the Day');
      return;
    }
    const randomTopic = completedTopics[Math.floor(Math.random() * completedTopics.length)];

    const generateQuestion = async () => {
      setLoading(true);
      setError('');
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      const modelId = import.meta.env.VITE_GEMINI_MODEL_ID || 'gemini-2.0-flash-exp-image-generation';
      if (!apiKey) {
        setError('AI API key not configured.');
        setLoading(false);
        return;
      }
      const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${modelId}:generateContent?key=${apiKey}`;
      const prompt = `Generate a multiple-choice question on the topic "${randomTopic}", this is question will be used for JEE/NEET students - question of the day so maintain the relevency and difficulty accordingly. Provide only a JSON object with keys: question, options (array of 4 strings), correctIndex (0-3).`; 
      try {
        const res = await fetch(API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }]
          })
        });
        if (!res.ok) {
          const err = await res.json();
          throw new Error(err?.error?.message || 'AI request failed');
        }
        const data = await res.json();
        const raw = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';
        let jsonString = raw;
        const match = raw.match(/```json\s*([\s\S]*?)```/i);
        if (match && match[1]) {
          jsonString = match[1];
        }
        jsonString = jsonString.replace(/```/g, '').trim();
        let parsed;
        try {
          parsed = JSON.parse(jsonString);
        } catch (parseError) {
          console.error('Error parsing AI JSON:', parseError, jsonString);
          throw new Error('Failed to parse AI question response');
        }
        const result = { ...parsed, date: todayKey };
        localStorage.setItem('questionOfTheDay', JSON.stringify(result));
        setQuestionData(result);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    generateQuestion();
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex justify-center items-center z-[9999] p-4">
      <div className="bg-gradient-to-b from-zinc-950 to-zinc-900 rounded-3xl border border-white/10 shadow-2xl w-full max-w-md p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Question of the Day</h2>
        {loading && <p className="text-white">Loading question...</p>}
        {error && <p className="text-red-400">{error}</p>}
        {!loading && !error && questionData && (
          <>
            <p className="text-white mb-4">{questionData.question}</p>
            <ul className="space-y-2 mb-4">
              {questionData.options.map((opt, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => {
                      if (selected === null) {
                        setSelected(idx);
                        localStorage.setItem(`answer_${todayKey}`, JSON.stringify(idx));
                      }
                    }}
                    disabled={selected !== null}
                    className={`w-full text-white text-left px-4 py-2 border rounded ${
                      selected === idx
                        ? (idx === questionData.correctIndex ? 'bg-green-600' : 'bg-red-600')
                        : 'bg-white/10 hover:bg-white/20'
                    } transition${selected !== null ? ' cursor-not-allowed opacity-70' : ''}`}
                  >
                    {opt}
                  </button>
                </li>
              ))}
            </ul>
            {selected !== null && (
              <p className="text-white font-medium mb-4">
                {selected === questionData.correctIndex
                  ? 'Correct!'
                  : `Incorrect. Answer: ${questionData.options[questionData.correctIndex]}`}
              </p>
            )}
          </>
        )}
        <button
          onClick={() => setShow(false)}
          className="mt-2 w-full py-2 bg-yellow-500 text-black rounded hover:bg-yellow-400 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default QuestionOfTheDay;
