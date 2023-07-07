import { useState } from "react";
import { fetchQuizQuestions, QuestionState, Difficulty, QuestionType  } from '../API'
import QuestionCard from "./QuestionCard";

export type AnswerObject = {
   question: string;
   answer: string;
   correct: boolean;
   correctAnswer: string;
 }

 export type StateProps = {
   loading: boolean;
   number: number;
   score: number;
   gameOver: boolean;
   questions: QuestionState[];
   userAnswers: AnswerObject[];
 }

const TOTAL_QUESTIONS = 10

const QuizComponent: React.FC = () => {
  const [state, setState] = useState<StateProps>({
     loading: false,
     number: 0,
     score: 0,
     gameOver: true,
     questions: [],
     userAnswers: [],
   });


   //Hard-coded values for now till endpoints are connected to quiz settings
   const startTrivia = async () => {
    setState({ ...state, loading: true })

    console.log("Fetching...")
    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY,
      QuestionType.Multiple,
      9
    )
  console.log(newQuestions)

     setState({
      ...state,
      questions: newQuestions,
      loading: false,
      userAnswers: [],
      gameOver: false,
    })

    console.log(state)
  };

   const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!state.gameOver) {
       const answer = e.currentTarget.value;
       const correct = state.questions[state.number].correct_answer === answer;

      const answerObject = {
        question: state.questions[state.number].question,
        answer,
         correct,
         correctAnswer: state.questions[state.number].correct_answer,
       };

      //Update answers and score
       setState({
        ...state,
        userAnswers: [...state.userAnswers, answerObject],
        score: correct ? state.score + 1 : state.score,
      })
    }
   };

  const nextQuestion = () => {
    const nextQuestion = state.number + 1;

     if (nextQuestion === TOTAL_QUESTIONS) {
      setState({ ...state, gameOver: true })
     } else {
       setState({ ...state, number: nextQuestion })
     }
   };

   return (
    <>
    { state.gameOver || state.userAnswers.length === TOTAL_QUESTIONS ? (
      <button className='start' onClick={ startTrivia }> Start </button>
      ) : null }
      { !state.gameOver ? <p className='score'>Score: {state.score}</p> : null}
      { state.loading ? <p>Loading questions...</p> : null}
      { !state.loading && !state.gameOver ? (
        <QuestionCard 
          questionNr={state.number + 1}
          totalQuestions={TOTAL_QUESTIONS}
          question={state.questions[state.number].question}
          answers={state.questions[state.number].answers}
          userAnswer={state.userAnswers ? state.userAnswers[state.number] : undefined}
          callback={checkAnswer}
        />
      ) : null }
      { !state.gameOver && !state.loading && state.userAnswers.length === state.number + 1 && state.number !== TOTAL_QUESTIONS - 1 ? (
      <button className='next' onClick={ nextQuestion }>Next question</button>
      ) : null }
   </> 
   ) 
};

export default QuizComponent;
