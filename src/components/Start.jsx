import React from 'react';
import './Start.css';
import { Link } from 'react-router-dom';

export default function Start({ onStartClick }) {
  return (
    <div>
      <div className='start-div'>
        <h1 className='heading'>Quiz app</h1>
        <Link to="/QuestionBox">
          <button className='start-btn'>Start</button>
        </Link>
      </div>
    </div>
  );
}