import { Box } from './QuizSettings.styles'; 
import { QuizSettingsProps } from "../types/types";

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
    { quizState.gameOver === true && !quizState.gameStarted ? (
      <Box>
        <h2>Please select:</h2>
        <label htmlFor="questionsNr">Number of questions:</label>
        <select 
          name="nrOfQuestions" 
          id="questionsNr"
          value={selectedState.nrOfQuestions}
          onChange={handleSelectChange}
        >
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
        <label htmlFor="questionType">Question type:</label>
        <select 
          name="questionType" 
          id="questionType"
          value={selectedState.questionType}
            onChange={handleSelectChange}
        >
          <option value="">Any type</option>
          <option value="multiple">Multiple</option>
          <option value="boolean">True or false</option>
        </select>
        <label htmlFor="difficultyLevel">Difficulty level:</label>
        <select 
          name="difficulty" 
          id="difficultyLevel"
          value={selectedState.difficulty}
          onChange={handleSelectChange}
        >
          <option value="">Any difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <label htmlFor="category">Category: </label>
        <select 
          name="category" 
          id="category"
          value={selectedState.category}
          onChange={handleSelectChange}
        >
          <option value="">Any category</option>
          <option value="9">General knowledge</option>
          <option value="17">Science and Nature</option>
          <option value="18">Computers</option>
          <option value="12">Music</option>
          <option value="10">Books</option>
          <option value="11">Movies</option>
          <option value="26">Celebrities</option>
          <option value="14">TV</option>
          <option value="21">Sports</option>
          <option value="15">Video Games</option>
          <option value="23">History</option>
          <option value="19">Mathematics</option>
          <option value="22">Geography</option>
          <option value="64">Politics</option>
        </select>
         
        </Box>
    ) : null} 
    </>
  )
};

export default QuizSettings;
