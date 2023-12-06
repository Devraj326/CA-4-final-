import React from 'react';
import { QuizProvider } from './QuizContext';
import QuestionBox from './components/QuestionBox';
import Navbar from './components/Navbar';
import "./App.css";

const App = () => {
  return ( 
    <QuizProvider>
      <Navbar/>
      <QuestionBox />
    </QuizProvider>
  );
};

export default App;

