import { QuizStateProps } from "../App";

interface QuizSettingsProps {
  quizState: QuizStateProps;
  setQuizState: React.Dispatch<React.SetStateAction<QuizStateProps>>;
}

const QuizSettings: React.FC<QuizSettingsProps> = ({ quizState, setQuizState }) => {
  return (
    <>
      <h2>Please select:</h2>
      <label htmlFor="questionsNr">Number of questions:
          <select name="numberOfQuestions" id="questionsNr">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </label>
        <label htmlFor="questionType"> Question type:
          <select name="questionType" id="questionType">
            <option value="multiple">Multiple</option>
            <option value="boolean">True or false</option>
          </select>
        </label>
            <label htmlFor="difficultyLevel"> Difficulty level:
          <select name="difficultyLevel" id="difficultyLevel">
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </label>
        <label htmlFor="category">
          Category:
          <select name="category" id="category">
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
    </>
  );
};

export default QuizSettings;
