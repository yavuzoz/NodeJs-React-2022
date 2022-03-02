import React from "react";
import NavComp from "../quizApp-nav-main-footer/NavComp";
import QuestionArea from "../quizApp-nav-main-footer/QuestionArea";
import FooterComp from "../quizApp-nav-main-footer/FooterComp";

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
