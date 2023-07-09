import { GlobalStyle, Wrapper } from './app.styles';
import { Box } from './components/QuizSettings.styles'; 
import QuizComponent from './components/QuizComponent';
import QuizSettings from './components/QuizSettings';
import { useState } from "react";
import { QuestionState } from './API';
import { AnswerObject } from './components/QuizComponent';

export interface QuizStateProps {
  loading: boolean;
  number: number;
  score: number;
  gameOver: boolean;
  questions: QuestionState[]; 
  userAnswers: AnswerObject[]; 
}

const App: React.FC = () => {
  const [quizState, setQuizState] = useState<QuizStateProps>({
     loading: false,
     number: 0,
     score: 0,
     gameOver: true,
     questions: [],
     userAnswers: [],
   });


  return (
    <>
    <GlobalStyle />
    <Wrapper>
      <h1>React Quiz</h1>
      <Box>
        <QuizSettings 
          quizState={quizState} 
          setQuizState={setQuizState}
        />
      </Box>
      <QuizComponent 
        quizState={quizState} 
        setQuizState={setQuizState}
      />
    </Wrapper>
    </>
  );
}


export default App;
