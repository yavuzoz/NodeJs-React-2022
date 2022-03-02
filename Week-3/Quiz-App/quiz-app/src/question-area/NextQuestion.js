import React from "react";


function NextQuestion({ nextQuestion }) {
 
  return (
    <div class="container navbar-dark bg-primary m-3 p-2 w-25">
      <button onClick={nextQuestion}>Next Question</button>
    </div>
  );
}

export default NextQuestion;
