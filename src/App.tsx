import { GlobalStyle, Wrapper } from './app.styles';
import QuizComponent from './components/QuizComponent';
import QuizSettings from './components/QuizSettings';
import { useState } from "react";
import { QuestionState } from './API';
import { AnswerObject } from './components/QuizComponent';

export interface QuizStateProps {
  loading: boolean;
  number: number;
  score: number;
  gameStarted: boolean,
  gameOver: boolean;
  questions: QuestionState[]; 
  userAnswers: AnswerObject[];
}

const App: React.FC = () => {
  const [quizState, setQuizState] = useState<QuizStateProps>({
     loading: false,
     number: 0,
     score: 0,
     gameStarted: false,
     gameOver: true,
     questions: [],
     userAnswers: [],
   });

   const [selectedState, setSelectedState] = useState({
     nrOfQuestions: "",
     questionType: "",
     difficulty: "",
     category: "",
   });


  return (
    <>
    <GlobalStyle />
    <Wrapper>
      <h1>React Quiz</h1>
      <QuizSettings 
        quizState={quizState} 
        selectedState={selectedState}
        setSelectedState={setSelectedState}
      />
      <QuizComponent 
        quizState={quizState} 
        setQuizState={setQuizState}
        selectedState={selectedState}
        setSelectedState={setSelectedState}
      />
    </Wrapper>
    </>
  );
}


export default App;
