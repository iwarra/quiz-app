import { shuffleArray } from "./utils";

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type QuestionState = Question & { answers: string[] };

export const fetchQuizQuestions = async (selectedValues: {
      nrOfQuestions: string,
      questionType: string,
      difficulty: string,
      category: string,
    }) => {
      let { nrOfQuestions, difficulty, questionType, category } = selectedValues;

      if (nrOfQuestions.length === 0) {
        nrOfQuestions = "10";
      };

      let endpoint = `https://opentdb.com/api.php?amount=${nrOfQuestions}` 
      
      if (difficulty.length > 0) {
        endpoint += `&difficulty=${difficulty}`;
      }
      
      if (questionType.length > 0) {
        endpoint += `&type=${questionType}`;
      }
      
      if (category.length > 0) {
        endpoint += `&category=${category}`;
      }
        
      const data = await (await fetch(endpoint)).json();
      return data.results.map((question: Question) => ({
          ...question,
          answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
      }))
    };