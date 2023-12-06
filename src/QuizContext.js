import React, { createContext, useContext, useState } from 'react';

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [marks, setMarks] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);

  return (
    <QuizContext.Provider value={{ marks, setMarks, totalQuestions, setTotalQuestions }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuizContext = () => {
  return useContext(QuizContext);
};