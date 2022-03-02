/*
biraz zorlandim ama nihayetinde yaptim, selamlar.
*/


import React, { useState } from "react";
import QuestionsList from "../data/QuestionsList";
import AnswerList from "../question-area/AnswerList";
import Question from "../question-area/Question";
import QuestionAmount from "../question-area/QuestionAmount";
import NextQuestion from "../question-area/NextQuestion";
import ScoreArea from "../question-area/ScoreArea";


const QuestionArea = () => {
  const NUMMERSQUIZ = QuestionsList.length-1;
  const [questions] = useState(QuestionsList);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [trueScore, setTrueScore] = useState(0);
  const [falseScore, setFalseScore] = useState(0);

  const nextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      alert("the end");
    }
  };

  const checkAnswer = (e) => {
    if (e.target.className === e.target.innerHTML) {
      setTrueScore(trueScore + 1);
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setFalseScore(falseScore + 1);
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <>
      <div class="d-flex flex-column m-3">
        <NextQuestion nextQuestion={nextQuestion} />
        <QuestionAmount
          QuestionAmount={currentQuestion + 1}
          totalQuestion={NUMMERSQUIZ}
        />
      </div>
      <div class="d-flex flex-row m-3">
        <Question Question={questions[currentQuestion].question} />
        <AnswerList checkAnswer={checkAnswer}  answerOption={questions[currentQuestion].options} answer={questions[currentQuestion].answer}/>
      </div>
      <ScoreArea falseScore={falseScore} trueScore={trueScore} />
    </>
  );
};

export default QuestionArea;
