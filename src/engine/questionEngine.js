// ASK LOVELY RITA
// MASTER QUESTION ENGINE

import QUESTION_BANK from "../data/questions/questionBank.js";

// Shuffle an array
function shuffle(array) {
  const copy = [...array];

  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}

// Get all questions
export function getAllQuestions() {
  return [...QUESTION_BANK];
}

// Filter questions
export function getQuestions(filters = {}) {
  let questions = [...QUESTION_BANK];

  if (filters.world) {
    questions = questions.filter(
      q => q.world === filters.world
    );
  }

  if (filters.subcategory) {
    questions = questions.filter(
      q => q.subcategory === filters.subcategory
    );
  }

  if (filters.ageGroup) {
    questions = questions.filter(
      q => q.ageGroup === filters.ageGroup
    );
  }

  if (filters.difficulty) {
    questions = questions.filter(
      q => q.difficulty === filters.difficulty
    );
  }

  return questions;
}

// Get a random question
export function getRandomQuestion(filters = {}) {
  const questions = getQuestions(filters);

  if (!questions.length) {
    return null;
  }

  const question =
    questions[Math.floor(Math.random() * questions.length)];

  return formatQuestion(question);
}

// Format question and randomize answers
function formatQuestion(question) {
  const answers = question.answers.map((answer, index) => ({
    text: answer,
    correct: index === question.correct
  }));

  return {
    world: question.world,
    subcategory: question.subcategory,
    ageGroup: question.ageGroup,
    difficulty: question.difficulty,
    question: question.question,
    explanation: question.explanation,
    tags: question.tags || [],
    answers: shuffle(answers)
  };
}

// Create a question session
export function createQuestionSession(
  filters = {},
  numberOfQuestions = 10
) {
  const questions = shuffle(getQuestions(filters));

  return questions
    .slice(0, Math.min(numberOfQuestions, questions.length))
    .map(formatQuestion);
}

// Get next question without immediate repetition
export function getNextQuestion(
  filters = {},
  previousQuestion = null
) {
  let questions = getQuestions(filters);

  if (!questions.length) {
    return null;
  }

  if (previousQuestion) {
    const filtered = questions.filter(
      q => q.question !== previousQuestion
    );

    if (filtered.length) {
      questions = filtered;
    }
  }

  const question =
    questions[Math.floor(Math.random() * questions.length)];

  return formatQuestion(question);
}

// Get database statistics
export function getQuestionStats() {
  const worlds = [
    ...new Set(QUESTION_BANK.map(q => q.world))
  ];

  const subcategories = [
    ...new Set(QUESTION_BANK.map(q => q.subcategory))
  ];

  const ageGroups = [
    ...new Set(QUESTION_BANK.map(q => q.ageGroup))
  ];

  const difficulties = [
    ...new Set(QUESTION_BANK.map(q => q.difficulty))
  ];

  return {
    totalQuestions: QUESTION_BANK.length,
    worlds,
    subcategories,
    ageGroups,
    difficulties
  };
}

export default {
  getAllQuestions,
  getQuestions,
  getRandomQuestion,
  createQuestionSession,
  getNextQuestion,
  getQuestionStats
};
