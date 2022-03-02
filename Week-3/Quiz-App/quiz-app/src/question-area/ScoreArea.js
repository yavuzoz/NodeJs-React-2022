import React from 'react';
import TrueScore from './TrueScore';
import FalseScore from './FalseScore';

function ScoreArea({trueScore,
    falseScore}) {
  return (
    <div class="container-fluid">
        <TrueScore trueScore={trueScore} />
        <FalseScore falseScore={falseScore} />
      </div>
  )
}

export default ScoreArea