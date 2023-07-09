import { fetchQuizQuestions, Difficulty, QuestionType  } from '../API'
import QuestionCard from "./QuestionCard";
import { QuizStateProps } from "../App";

export interface QuizSettingsProps {
  quizState: QuizStateProps;
  setQuizState: React.Dispatch<React.SetStateAction<QuizStateProps>>;
}

export type AnswerObject = {
   question: string;
   answer: string;
   correct: boolean;
   correctAnswer: string;
 }

const TOTAL_QUESTIONS = 10

const QuizComponent: React.FC<QuizSettingsProps> = ({ quizState, setQuizState }) => {
   //Hard-coded values for now till endpoints are connected to quiz settings
   const startTrivia = async () => {
    setQuizState({ ...quizState, loading: true })

    console.log("Fetching...")
    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY,
      QuestionType.Multiple,
      9
    )
  console.log(newQuestions)

     setQuizState({
      ...quizState,
      questions: newQuestions,
      loading: false,
      userAnswers: [],
      gameOver: false,
    })

    console.log(quizState)
  };

   const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!quizState.gameOver) {
       const answer = e.currentTarget.value;
       const correct = quizState.questions[quizState.number].correct_answer === answer;

      const answerObject = {
        question: quizState.questions[quizState.number].question,
        answer,
         correct,
         correctAnswer: quizState.questions[quizState.number].correct_answer,
       };

      //Update answers and score
       setQuizState({
        ...quizState,
        userAnswers: [...quizState.userAnswers, answerObject],
        score: correct ? quizState.score + 1 : quizState.score,
      })
    }
   };

  const nextQuestion = () => {
    const nextQuestion = quizState.number + 1;

     if (nextQuestion === TOTAL_QUESTIONS) {
      setQuizState({ ...quizState, gameOver: true })
     } else {
       setQuizState({ ...quizState, number: nextQuestion })
     }
   };

   return (
    <>
    { quizState.gameOver || quizState.userAnswers.length === TOTAL_QUESTIONS ? (
      <button className='start' onClick={ startTrivia }> Start </button>
      ) : null }
      { !quizState.gameOver ? <p className='score'>Score: {quizState.score}</p> : null}
      { quizState.loading ? <p>Loading questions...</p> : null}
      { !quizState.loading && !quizState.gameOver ? (
        <QuestionCard 
          questionNr={quizState.number + 1}
          totalQuestions={TOTAL_QUESTIONS}
          question={quizState.questions[quizState.number].question}
          answers={quizState.questions[quizState.number].answers}
          userAnswer={quizState.userAnswers ? quizState.userAnswers[quizState.number] : undefined}
          callback={checkAnswer}
        />
      ) : null }
      { !quizState.gameOver && !quizState.loading && quizState.userAnswers.length === quizState.number + 1 && quizState.number !== TOTAL_QUESTIONS - 1 ? (
      <button className='next' onClick={ nextQuestion }>Next question</button>
      ) : null }
   </> 
   ) 
};

export default QuizComponent;
