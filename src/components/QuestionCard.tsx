import { Wrapper, ButtonWrapper } from "./QuestionCard.styles";
import { QuestionProps } from "../types/types";

function decodeHtml(htmlValue: string): string {
  let txt = document.createElement("textarea");
  txt.innerHTML = htmlValue;
  return txt.value;
}

const QuestionCard: React.FC<QuestionProps> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => {
  const decodedQuestion = decodeHtml(question);

  return (
  <Wrapper>
    <p className="number">
      Question: {questionNr} / {totalQuestions}
    </p>
    <p>{decodedQuestion}</p>
    <div> 
      {answers.map(answer => (
        <ButtonWrapper 
          key={answer}
          correct={userAnswer?.correctAnswer === answer}
          userClicked={userAnswer?.answer === answer}
        >
          <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
            <span>{decodeHtml(answer)}</span>
          </button>
        </ButtonWrapper>
      ))
      }
      </div>
  </Wrapper>
  )
};

export default QuestionCard;
