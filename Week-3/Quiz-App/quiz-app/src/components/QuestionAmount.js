import React from 'react'

function QuestionAmount({QuestionAmount, totalQuestion}) {
  return (
    <div class="container navbar-secondary bg-secondary p-2 m-3 p-2 w-25" >
        <h1>
          Question: {QuestionAmount} of {totalQuestion}
        </h1>
      </div>
  )
}

export default QuestionAmount