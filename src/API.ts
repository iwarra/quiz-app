import { shuffleArray } from "./utils";
import { OpenTdbRoot } from "./types/types";

type selectedValTypes = {
  nrOfQuestions: string,
  questionType: string,
  difficulty: string,
  category: string,
}

export const fetchQuizQuestions = async (selectedValues: selectedValTypes) => {
      const { difficulty: d, questionType: t, category: c } = selectedValues;
      const nr = selectedValues.nrOfQuestions || 10
      
      const url = 'https://opentdb.com/api.php'
      const endpoints = `amount=${nr}&difficulty=${d}&type=${t}&category=${c}` 

      try {
        const response = await fetch(`${url}?${endpoints}`);
        if (!response.ok) throw new Error('Failed to fetch quiz questions.');
          
        const data: OpenTdbRoot = await response.json();
        return data.results.map((question) => ({
            ...question,
            answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
        }));
      } catch(error) {
          console.error('An error occurred while fetching quiz questions:', error);
          throw error; 
      }
    };