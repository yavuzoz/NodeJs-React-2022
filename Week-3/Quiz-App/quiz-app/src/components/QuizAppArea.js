import React from "react";
import NavComp from "../quiz-area/NavComp";
import QuestionArea from "../quiz-area/QuestionArea";
import FooterComp from "../quiz-area/FooterComp";

function QuizAppArea() {
  return (
    <main class="container w-100 h-50">
      <NavComp />
      <div className="question-area">
        <QuestionArea />
      </div>
      <FooterComp />
    </main>
  );
}

export default QuizAppArea;
