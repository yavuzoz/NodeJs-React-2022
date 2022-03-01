import React, { useState } from "react";
import QuestionsList from "../data/QuestionsList";
import AnswerList from "./AnswerList";
import Question from "./Question";
import QuestionAmount from "./QuestionAmount";
import NextQuestion from "./NextQuestion";

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
        <AnswerList checkAnswer={checkAnswer} trueScore={trueScore} falseScore={falseScore} answerOption={questions[currentQuestion].options} answer={questions[currentQuestion].answer}/>
      </div>
    </>
  );
};

export default QuestionArea;
