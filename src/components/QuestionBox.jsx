import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './QuestionBox.css';
import questions from './questions';

const QuestionBox = ({ onQuestionsCompleted, onScoreUpdate }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [numberOfQuestions, setNumberOfQuestions] = useState(0);

  const getCurrentQuestion = () => questions[currentQuestionIndex];
  let navigate = useNavigate();

  const handleOptionClick = (isCorrect) => {
    setNumberOfQuestions((previousNumber)=> previousNumber += 1);
    if (isCorrect) {
      setScore((preScore)=>preScore += 1);
      alert('Correct Answer');
    }
    else{
      alert('Wrong Answer');
    }
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  if (numberOfQuestions == questions.length) {
    localStorage.setItem('finalScore', JSON.stringify(score))
  }

  const renderOptions = () => {
    const currentQuestion = getCurrentQuestion();
    return currentQuestion.options.map((option) => (
      <div
        key={option.id}
        className="options"
        onClick={() => handleOptionClick(option.isCorrect)}
      >
        {option.text}
      </div>
    ));
  };

  const handleRedirect = () => {
    navigate('/Result');
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleQuit = () => {
    navigate('/');
  };

  return (
    <div>
      <div className='content'>
        <h2>Question: {currentQuestionIndex + 1} out of {questions.length}</h2>
        {currentQuestionIndex < questions.length && (
          <>
            <h1>{getCurrentQuestion().text}</h1>
            {renderOptions()}
          </>
        )}
        <div className='buttons'>
          <button onClick={handlePrevious}>Previous</button>
          <button onClick={handleNext}>Next</button>
          <button onClick={handleQuit}>Quit</button>
          <button onClick={handleRedirect}>Finish</button>
        </div>
      </div>
    </div>
  );
};

export default QuestionBox;