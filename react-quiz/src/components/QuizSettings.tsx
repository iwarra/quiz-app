import { QuizStateProps } from "../App";
import { Box } from './QuizSettings.styles'; 

interface QuizSettingsProps {
  quizState: QuizStateProps;
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

const QuizSettings: React.FC<QuizSettingsProps> = ({ quizState, selectedState, setSelectedState }) => {
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSelectedState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <> 
    { quizState.gameOver === true ? (
      <Box>
        <h2>Please select:</h2>
        <label htmlFor="questionsNr">Number of questions:
            <select 
              name="nrOfQuestions" 
              id="questionsNr"
              value={selectedState.nrOfQuestions}
              onChange={handleSelectChange}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
          </label>
          <label htmlFor="questionType">Question type:
            <select 
              name="questionType" 
              id="questionType"
              value={selectedState.questionType}
                onChange={handleSelectChange}
            >
              <option value="multiple">Multiple</option>
              <option value="boolean">True or false</option>
            </select>
          </label>
              <label htmlFor="difficultyLevel">Difficulty level:
            <select 
              name="difficulty" 
              id="difficultyLevel"
              value={selectedState.difficulty}
              onChange={handleSelectChange}
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </label>
          <label htmlFor="category">Category:
            <select 
              name="category" 
              id="category"
              value={selectedState.category}
              onChange={handleSelectChange}
            >
              <option value="9">General knowledge</option>
              <option value="17">Science and Nature</option>
              <option value="18">Computers</option>
              <option value="12">Music</option>
              <option value="10">Books</option>
              <option value="11">Movies</option>
              <option value="14">TV</option>
              <option value="15">Video Games</option>
              <option value="19">Mathematics</option>
              <option value="21">Sports</option>
              <option value="23">History</option>
              <option value="25">Art</option>
              <option value="26">Celebrities</option>
              <option value="22">Geography</option>
              <option value="24">Politics</option>
            </select>
          </label>
        </Box>
    ) : null} 
    </>
  )
};

export default QuizSettings;
