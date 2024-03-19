// import React from 'react';
// import './Result.css';

// const Result = () => {
//   const totalQuestions = 15;

//   return (
//     <div>
//       <div className='result-div'>
//         <h1>Final Results</h1>
//         <h2>{score}out of {totalQuestions} correct - ({percentage}%)</h2>
//         <button>Restart game</button>
//       </div>
//     </div>
//   );
// };

// export default Result;




import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Result.css';

const Result = () => {
  const totalQuestions = 15;
  const [score, setScore] = useState(0);

  useEffect(() => {
    const savedScore = localStorage.getItem('finalScore');
    if (savedScore) {
      setScore(savedScore);
    }
  }, []);

  const percentage = ((score/totalQuestions)*100).toFixed(2);

  return (
    <div>
      <div className='result-div'>
        <h1>Final Results</h1>
        <h2>{score} out of {totalQuestions} correct - ({percentage}%)</h2>
        <Link to='/'>
          <button className='restart-btn'>Restart game</button>
        </Link>
      </div>
    </div>
  );
};

export default Result;