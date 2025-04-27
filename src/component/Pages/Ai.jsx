import React, { useEffect, useState } from 'react';
import { useAi } from '../../context/AiContext';
import { X, Loader, Sparkles, Brain } from 'lucide-react'; 
import ReactMarkdown from 'react-markdown'; 

function Ai() {
  const {
    isAiModalOpen,
    closeAiModal,
    selectedTopic,
    explanation,
    setExplanation,
    loading,
    setLoading,
    error,
    setError,
  } = useAi();

  const [apiKey, setApiKey] = useState('');
  const [modelId, setModelId] = useState('gemini-1.5-flash-latest'); 
  const [loadingMessage, setLoadingMessage] = useState('Analyzing your topic...');

  useEffect(() => {
    if (!loading) return;
    
    const messages = [
      "Analyzing your topic...",
      "Gathering key concepts...",
      "Preparing detailed explanation...",
      "Simplifying complex ideas...",
      "Connecting relevant concepts...",
      "Creating visual examples...",
    ];
    
    let index = 0;
    const intervalId = setInterval(() => {
      setLoadingMessage(messages[index]);
      index = (index + 1) % messages.length;
    }, 2500);
    
    return () => clearInterval(intervalId);
  }, [loading]);

  useEffect(() => {
    setApiKey(import.meta.env.VITE_GEMINI_API_KEY || '');
    setModelId(import.meta.env.VITE_GEMINI_MODEL_ID || 'gemini-1.5-flash-latest');

    if (!import.meta.env.VITE_GEMINI_API_KEY) {
        console.warn("VITE_GEMINI_API_KEY environment variable not set. AI functionality will not work.");
        setError("API Key not configured. Please set VITE_GEMINI_API_KEY in your .env file.");
    }
  }, []);

  useEffect(() => {
    if (isAiModalOpen && selectedTopic && !explanation && apiKey) {
      const fetchExplanation = async () => {
        setLoading(true);
        setError(null); 

        const GENERATE_CONTENT_API = 'generateContent';
        const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${modelId}:${GENERATE_CONTENT_API}?key=${apiKey}`;

        const requestBody = {
          contents: [{
            parts: [{ 
              text: `Explain the JEE/NEET topic "${selectedTopic}" in detail for a student. Summarize the key concepts clearly.`
            }]
          }],
          // Optional: Add generationConfig if needed
          // generationConfig: {
          //   temperature: 0.7,
          //   topK: 40,
          //   topP: 0.95,
          //   maxOutputTokens: 1024,
          // }
        };

        try {
          const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
          });

          if (!response.ok) {
            const errorData = await response.json();
            console.error('API Error:', errorData);
            throw new Error(`API request failed with status ${response.status}: ${errorData?.error?.message || 'Unknown error'}`);
          }

          const data = await response.json();

          const generatedText = data?.candidates?.[0]?.content?.parts?.[0]?.text;

          if (generatedText) {
            setExplanation(generatedText);
          } else {
             console.error('Unexpected API response structure:', data);
             throw new Error("Could not extract explanation from the API response.");
          }

        } catch (err) {
          console.error("Failed to fetch explanation:", err);
          setError(`Failed to fetch explanation: ${err.message}`);
        } finally {
          setLoading(false);
        }
      };

      fetchExplanation();
    } else if (isAiModalOpen && !apiKey) {
        setError("API Key is missing. Cannot fetch explanation.");
        setLoading(false);
    }
    else if (!isAiModalOpen || (isAiModalOpen && !apiKey)) {
        setExplanation(''); 
        setError(null);
    }
  }, [isAiModalOpen, selectedTopic, apiKey, modelId, setExplanation, setLoading, setError, explanation]); 

  if (!isAiModalOpen) {
    return null; 
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex justify-center items-center z-50 p-4">
      <div className="bg-gradient-to-b from-zinc-950 to-zinc-900 rounded-3xl border border-white/10 shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden">
        <div className="flex justify-between items-center p-6 border-b border-white/10 bg-white/5">
          <h2 className="text-2xl font-semibold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-blue-400" />
            <span>{selectedTopic}</span>
          </h2>
          <button
            onClick={closeAiModal}
            className="text-slate-400 hover:text-white transition-all duration-300 hover:rotate-90 p-1"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-8 overflow-y-auto flex-grow">
          {loading && (
            <div className="flex flex-col items-center justify-center h-80 text-white space-y-6">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-xl opacity-30 animate-pulse"></div>
                <Brain className="relative z-10 animate-pulse text-blue-400 h-20 w-20" />
              </div>
              <div className="text-center">
                <p className="text-xl font-medium text-blue-400 mb-2">{loadingMessage}</p>
                <p className="text-slate-400 text-sm">This may take a few moments</p>
              </div>
            </div>
          )}
          {error && (
            <div className="text-red-400 bg-red-500/10 p-6 rounded-xl border border-red-500/30 shadow-inner">
              <p className="font-semibold mb-2">Error:</p>
              <p>{error}</p>
            </div>
          )}
          {!loading && !error && explanation && (
            <div className="prose prose-invert prose-lg max-w-none text-slate-300 prose-headings:text-blue-400 prose-strong:text-white prose-a:text-blue-400 prose-table:border-white/20 prose-th:border-white/20 prose-td:border-white/20 prose-th:bg-white/5 prose-td:p-4 prose-th:p-4 prose-table:w-full prose-table:border-collapse">
              {/* Use ReactMarkdown to render the response */}
              <ReactMarkdown>{explanation}</ReactMarkdown>
            </div>
          )}
           {!loading && !error && !explanation && !apiKey && (
             <div className="text-yellow-400 bg-yellow-500/10 p-6 rounded-xl border border-yellow-500/30 shadow-inner">
               <p className="font-semibold mb-2">Configuration Needed:</p>
               <p>Please set the VITE_GEMINI_API_KEY in your .env file to enable AI explanations.</p>
             </div>
           )}
        </div>

        <div className="p-5 border-t border-white/10 bg-white/5 flex justify-between items-center">
          <span className="text-xs text-slate-400"></span>
          <button
            onClick={closeAiModal}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-500 hover:to-blue-600 transition-all duration-300 shadow-md hover:shadow-blue-500/20 text-sm font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Ai; 