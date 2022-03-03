import React from "react";

function AnswerList({ checkAnswer, answer, answerOption }) {
  
  const opt = answerOption.map((choice) => (
    <div class="p-3 m-1 bg-primary border border-dark w-25 " >
      <button
        class="border border-dark w-auto h-auto"
        name="answer"
        className={answer}
        onClick={checkAnswer}
      >
        {choice}
      </button>
    </div>
  ));
  return <>{opt}</>;
}

export default AnswerList;
