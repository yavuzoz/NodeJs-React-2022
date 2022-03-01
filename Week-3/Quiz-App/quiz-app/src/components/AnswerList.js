
import FalseScore from "./FalseScore";
import TrueScore from "./TrueScore";

function AnswerList({
  checkAnswer,
  answer,
  answerOption,
  trueScore,
  falseScore,
}) {
  console.log(answerOption);
  console.log(answer);
  const opt = answerOption.map((choice) => (
    <div class="p-3 m-1 bg-primary border border-dark w-25">
        <button name="answer" className={answer} onClick={checkAnswer}>
          {choice}
        </button>
      </div>
  ));
  return (
    <>
      
      {opt}
      <div class="container-fluid">
        <TrueScore trueScore={trueScore} />
        <FalseScore falseScore={falseScore} />
      </div>
    </>
  );
}

export default AnswerList;
