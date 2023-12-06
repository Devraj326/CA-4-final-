import React from 'react';
import { useQuizContext } from '../QuizContext';
import './Result.css';

const Result = ({ restartQuiz }) => {
  const { marks, totalQuestions } = useQuizContext();

const percentage = (marks / 5) * 100;

  return (
    <div className='result'>
      <h2>Quiz Completed!</h2>
      <p>Your score: {marks} out of 5 correct - {percentage}% </p>
      <button class="custom-btn btn-15" onClick={restartQuiz}><span>Restart Quiz</span></button>
    </div>
  );
};

export default Result;