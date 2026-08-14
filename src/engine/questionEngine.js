// ASK LOVELY RITA
// MASTER QUESTION ENGINE V2
//
// Connects the master question database to the app.
// Supports:
// - Music-driven questions
// - Math, Science, Geography, History, etc.
// - Age groups
// - Difficulty
// - Categories
// - Random questions
// - Question sessions
// - Statistics
//
// IMPORTANT:
// The master database lives in:
// ../data/questions/questionBank.js

import QUESTION_BANK from "../data/questions/questionBank.js";

/* =========================================================
   DATABASE NORMALIZER
   ========================================================= */

// The master database uses this structure:
//
// [id, world, subcategory, ageGroup, difficulty,
//  question, answer1, answer2, answer3, answer4,
//  correctIndex, explanation, tags]

function normalizeQuestion(item) {
  // New database format
  if (Array.isArray(item)) {
    return {
      id: item[0],
      world: item[1],
      subcategory: item[2],
      ageGroup: item[3],
      difficulty: item[4],
      question: item[5],

      answers: [
        item[6],
        item[7],
        item[8],
        item[9],
      ],

      correct: Number(item[10]),
      explanation: item[11] || "",
      tags:
        typeof item[12] === "string"
          ? item[12].split("|").filter(Boolean)
          : [],
    };
  }

  // Also support object-based questions
  return {
    id: item.id,
    world: item.world,
    subcategory: item.subcategory,
    ageGroup: item.ageGroup,
    difficulty: item.difficulty,
    question: item.question,
    answers: Array.isArray(item.answers)
      ? [...item.answers]
      : [],
    correct: Number(item.correct),
    explanation: item.explanation || "",
    tags: Array.isArray(item.tags)
      ? [...item.tags]
      : [],
  };
}


/* =========================================================
   MASTER QUESTION COLLECTION
   ========================================================= */

const QUESTIONS = QUESTION_BANK.map(normalizeQuestion);


/* =========================================================
   SHUFFLE
   ========================================================= */

function shuffle(array) {
  const copy = [...array];

  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}


/* =========================================================
   GET ALL QUESTIONS
   ========================================================= */

export function getAllQuestions() {
  return QUESTIONS.map(question => ({
    ...question,
    answers: [...question.answers],
    tags: [...question.tags],
  }));
}


/* =========================================================
   FILTER QUESTIONS
   ========================================================= */

export function getQuestions(filters = {}) {
  let questions = [...QUESTIONS];

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

  if (filters.tag) {
    questions = questions.filter(
      q => q.tags.includes(filters.tag)
    );
  }

  return questions;
}


/* =========================================================
   RANDOM QUESTION
   ========================================================= */

export function getRandomQuestion(filters = {}) {
  const questions = getQuestions(filters);

  if (questions.length === 0) {
    return null;
  }

  const question =
    questions[Math.floor(Math.random() * questions.length)];

  return {
    ...question,
    answers: shuffle(question.answers),
  };
}


/* =========================================================
   RANDOM QUESTION
   WITHOUT SHUFFLING ANSWERS
   ========================================================= */

export function getRandomQuestionExact(filters = {}) {
  const questions = getQuestions(filters);

  if (questions.length === 0) {
    return null;
  }

  return questions[
    Math.floor(Math.random() * questions.length)
  ];
}


/* =========================================================
   QUESTION SESSION
   ========================================================= */

export function createQuestionSession(
  filters = {},
  numberOfQuestions = 10
) {
  const questions = shuffle(
    getQuestions(filters)
  );

  const amount = Math.min(
    Math.max(numberOfQuestions, 1),
    questions.length
  );

  return questions
    .slice(0, amount)
    .map(question => ({
      ...question,
      answers: [...question.answers],
      tags: [...question.tags],
    }));
}


/* =========================================================
   GET NEXT QUESTION
   ========================================================= */

export function getNextQuestion(
  session,
  currentIndex = 0
) {
  if (!Array.isArray(session)) {
    return null;
  }

  if (
    currentIndex < 0 ||
    currentIndex >= session.length
  ) {
    return null;
  }

  return session[currentIndex];
}


/* =========================================================
   CHECK ANSWER
   ========================================================= */

export function checkAnswer(
  question,
  selectedAnswer
) {
  if (!question) {
    return {
      correct: false,
      correctIndex: null,
      explanation: "",
    };
  }

  const isCorrect =
    Number(selectedAnswer) ===
    Number(question.correct);

  return {
    correct: isCorrect,
    correctIndex: question.correct,
    explanation: question.explanation,
  };
}


/* =========================================================
   QUESTION STATISTICS
   ========================================================= */

export function getQuestionStats() {
  const worlds = [
    ...new Set(
      QUESTIONS.map(q => q.world)
    ),
  ];

  const subcategories = [
    ...new Set(
      QUESTIONS.map(q => q.subcategory)
    ),
  ];

  const ageGroups = [
    ...new Set(
      QUESTIONS.map(q => q.ageGroup)
    ),
  ];

  const difficulties = [
    ...new Set(
      QUESTIONS.map(q => q.difficulty)
    ),
  ];

  const tags = [
    ...new Set(
      QUESTIONS.flatMap(q => q.tags)
    ),
  ];

  const worldCounts = {};

  QUESTIONS.forEach(question => {
    worldCounts[question.world] =
      (worldCounts[question.world] || 0) + 1;
  });

  return {
    totalQuestions: QUESTIONS.length,
    worlds,
    subcategories,
    ageGroups,
    difficulties,
    tags,
    worldCounts,
  };
}


/* =========================================================
   SEARCH QUESTIONS
   ========================================================= */

export function searchQuestions(searchTerm) {
  if (!searchTerm) {
    return [];
  }

  const term =
    String(searchTerm)
      .toLowerCase()
      .trim();

  return QUESTIONS.filter(question => {
    const searchableText = [
      question.question,
      question.world,
      question.subcategory,
      question.explanation,
      ...question.tags,
    ]
      .join(" ")
      .toLowerCase();

    return searchableText.includes(term);
  });
}


/* =========================================================
   GET QUESTIONS BY WORLD
   ========================================================= */

export function getQuestionsByWorld(world) {
  return getQuestions({ world });
}


/* =========================================================
   GET QUESTIONS BY AGE
   ========================================================= */

export function getQuestionsByAge(ageGroup) {
  return getQuestions({ ageGroup });
}


/* =========================================================
   GET MUSIC QUESTIONS
   ========================================================= */

export function getMusicQuestions() {
  return getQuestions({
    world: "Music",
  });
}


/* =========================================================
   GET QUESTION BY ID
   ========================================================= */

export function getQuestionById(id) {
  return (
    QUESTIONS.find(
      question => String(question.id) === String(id)
    ) || null
  );
}


/* =========================================================
   ENGINE INFORMATION
   ========================================================= */

export function getEngineInfo() {
  return {
    name: "Ask Lovely Rita Master Question Engine",
    version: "2.0",
    totalQuestions: QUESTIONS.length,
    musicDriven: true,
    databaseConnected: true,
  };
}


/* =========================================================
   DEFAULT EXPORT
   ========================================================= */

export default {
  getAllQuestions,
  getQuestions,
  getRandomQuestion,
  getRandomQuestionExact,
  createQuestionSession,
  getNextQuestion,
  checkAnswer,
  getQuestionStats,
  searchQuestions,
  getQuestionsByWorld,
  getQuestionsByAge,
  getMusicQuestions,
  getQuestionById,
  getEngineInfo,
};
