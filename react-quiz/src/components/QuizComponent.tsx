import { fetchQuizQuestions } from '../API'
import QuestionCard from "./QuestionCard";
import { QuizStateProps } from "../App";

interface QuizComponentProps {
  quizState: QuizStateProps;
  setQuizState: React.Dispatch<React.SetStateAction<QuizStateProps>>;
  selectedState: {
    nrOfQuestions: string;
    questionType: string;
    difficulty: string;
    category: string;
  };
  setSelectedState: React.Dispatch<React.SetStateAction<{
    nrOfQuestions: string;
    questionType: string;
    difficulty: string;
    category: string;
  }>>;
}

export type AnswerObject = {
   question: string;
   answer: string;
   correct: boolean;
   correctAnswer: string;
 }

const TOTAL_QUESTIONS = 10

const QuizComponent: React.FC<QuizComponentProps> = ({ quizState, setQuizState, selectedState, setSelectedState }) => {
  
   const startTrivia = async () => {
    setQuizState(prevState => ({ ...prevState, loading: true, gameOver: false }))

    console.log("Fetching...")
    const newQuestions = await fetchQuizQuestions(
      {
      nrOfQuestions: selectedState.nrOfQuestions,
      questionType: selectedState.questionType,
      difficulty: selectedState.difficulty,
      category: selectedState.category,
      }
    )

     setQuizState({
        loading: false,
        number: 0,
        score: 0,
        gameOver: false,
        questions: newQuestions,
        userAnswers: [],
     })

    console.log('Started trivia:',quizState)
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
       setQuizState(prevState => ({
        ...prevState,
        userAnswers: [...prevState.userAnswers, answerObject],
        score: correct ? prevState.score + 1 : prevState.score,
      }))
    }
   };

  const nextQuestion = () => {
    const nextQuestion = quizState.number + 1;
//There is no next button on the last answer so the state is not updated
     if (nextQuestion === TOTAL_QUESTIONS) {
       setQuizState(prevState => ({
         ...prevState,
         gameOver: true,
        }))
        setSelectedState({
          nrOfQuestions: "",
          questionType: "",
          difficulty: "",
          category: ""
        })
     } else {
       setQuizState(prevState => ({ 
         ...prevState, 
         number: nextQuestion }))
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
