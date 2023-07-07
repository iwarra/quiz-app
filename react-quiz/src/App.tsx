import { GlobalStyle, Wrapper } from './app.styles';
import QuizComponent from './components/QuizComponent';
import QuizSettings from './components/QuizSettings';
import { Box } from './components/QuizSettings.styles'; 


const App: React.FC = () => {
  return (
    <>
    <GlobalStyle />
    <Wrapper>
      <h1>React Quiz</h1>
      <Box>
        <QuizSettings />
      </Box>
      <QuizComponent />
    </Wrapper>
    </>
  );
}


export default App;
