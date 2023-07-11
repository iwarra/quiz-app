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
      const { nrOfQuestions, difficulty, questionType, category } = selectedValues;
      const endpoint = `https://opentdb.com/api.php?amount=${nrOfQuestions}&difficulty=${difficulty}&type=${questionType}&category=${category}`;
      const data = await (await fetch(endpoint)).json();
      return data.results.map((question: Question) => ({
          ...question,
          answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
      }))
    };