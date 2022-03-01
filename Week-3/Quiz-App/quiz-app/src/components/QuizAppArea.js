import React from 'react';
import NavComp from './NavComp';
import QuestionArea from './QuestionArea';


function QuizAppArea() {
  return (
    <main class="container w-100 h-50">
        <div className='navbar'>
            <NavComp/>
        </div>
        <div className='question-area'>
            <QuestionArea/>
        </div>
      </main>
  )
}

export default QuizAppArea