import { GlobalStyle, Wrapper } from './app.styles';
import QuizComponent from './components/QuizComponent';
import QuizSettings from './components/QuizSettings';
import { useState } from "react";
import { QuizStateProps } from './types/types';

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
      { quizState.gameStarted ? (
        <button className='backBtn'>
          <a href="/">Back to home page</a>
        </button>
      ) : null }
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
