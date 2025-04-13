import React, { createContext, useState, useContext } from 'react';

const AiContext = createContext();

export const useAi = () => useContext(AiContext);

export const AiProvider = ({ children }) => {
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [explanation, setExplanation] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const openAiModal = (topic) => {
    setSelectedTopic(topic);
    setExplanation(''); // Clear previous explanation
    setError(null); // Clear previous error
    setLoading(true); // Set loading state immediately
    setIsAiModalOpen(true);
    // API call will be triggered in Ai.jsx based on selectedTopic
  };

  const closeAiModal = () => {
    setIsAiModalOpen(false);
    setSelectedTopic(null);
    setExplanation('');
    setLoading(false);
    setError(null);
  };

  const value = {
    isAiModalOpen,
    selectedTopic,
    explanation,
    loading,
    error,
    openAiModal,
    closeAiModal,
    setExplanation, 
    setLoading,
    setError,
  };

  return <AiContext.Provider value={value}>{children}</AiContext.Provider>;
}; 