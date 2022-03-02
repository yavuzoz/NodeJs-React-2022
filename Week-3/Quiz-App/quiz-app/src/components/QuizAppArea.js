import React from "react";
import NavComp from "./NavComp";
import QuestionArea from "./QuestionArea";
import FooterComp from "./FooterComp";

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
