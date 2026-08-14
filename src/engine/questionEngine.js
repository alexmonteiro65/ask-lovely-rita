// ASK LOVELY RITA — QUESTION ENGINE
// Master randomized question system
// Designed for age-appropriate difficulty and replay variety.

const QUESTION_BANK = {

  kids: {
    easy: [
      {
        category: "Math",
        question: "What is 2 + 2?",
        answers: ["3", "4", "5", "6"],
        correct: 1
      },
      {
        category: "Music",
        question: "How many strings does a typical guitar have?",
        answers: ["4", "5", "6", "8"],
        correct: 2
      },
      {
        category: "Science",
        question: "Which animal says 'moo'?",
        answers: ["Dog", "Cow", "Cat", "Duck"],
        correct: 1
      },
      {
        category: "Geography",
        question: "Which planet do we live on?",
        answers: ["Mars", "Venus", "Earth", "Jupiter"],
        correct: 2
      }
    ]
  },

  adults: {
    medium: [
      {
        category: "Science",
        question: "What gas do plants absorb during photosynthesis?",
        answers: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
        correct: 1
      },
      {
        category: "Geography",
        question: "Which country has the largest population?",
        answers: ["India", "Brazil", "United States", "Russia"],
        correct: 0
      },
      {
        category: "Music",
        question: "Which instrument normally has 88 keys?",
        answers: ["Guitar", "Violin", "Piano", "Trumpet"],
        correct: 2
      },
      {
        category: "Math",
        question: "What is 15% of 200?",
        answers: ["15", "20", "30", "40"],
        correct: 2
      }
    ]
  },

  experts: {
    hard: [
      {
        category: "Science",
        question: "Which particle mediates the electromagnetic force?",
        answers: ["Gluon", "Photon", "Neutrino", "Muon"],
        correct: 1
      },
      {
        category: "Music",
        question: "What does the term 'polyrhythm' describe?",
        answers: [
          "Multiple simultaneous rhythmic patterns",
          "A very fast tempo",
          "A change of key",
          "A solo vocal passage"
        ],
        correct: 0
      },
      {
        category: "Geography",
        question: "Which country contains the Atacama Desert?",
        answers: ["Chile", "Mexico", "Egypt", "Australia"],
        correct: 0
      },
      {
        category: "Math",
        question: "What is the derivative of x²?",
        answers: ["x", "2x", "x²", "2"],
        correct: 1
      }
    ]
  }
};


// Fisher-Yates shuffle
function shuffle(array) {
  const copy = [...array];

  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}


// Get questions appropriate for the selected player level.
export function getQuestionPool(level = "kids") {

  const levelData = QUESTION_BANK[level];

  if (!levelData) {
    return [];
  }

  const difficulty = Object.keys(levelData)[0];

  return levelData[difficulty] || [];
}


// Return one randomized question with randomized answer positions.
export function getRandomQuestion(level = "kids") {

  const pool = getQuestionPool(level);

  if (!pool.length) {
    return null;
  }

  const original = pool[Math.floor(Math.random() * pool.length)];

  const answers = original.answers.map((answer, index) => ({
    text: answer,
    correct: index === original.correct
  }));

  const shuffledAnswers = shuffle(answers);

  return {
    category: original.category,
    question: original.question,
    answers: shuffledAnswers
  };
}


// Create a randomized session.
// Questions are shuffled so the same order is not repeated.
export function createQuestionSession(
  level = "kids",
  numberOfQuestions = 10
) {

  const pool = getQuestionPool(level);

  const expandedPool = shuffle(pool);

  return expandedPool
    .slice(0, Math.min(numberOfQuestions, expandedPool.length))
    .map(question => {

      const answers = shuffle(
        question.answers.map((answer, index) => ({
          text: answer,
          correct: index === question.correct
        }))
      );

      return {
        category: question.category,
        question: question.question,
        answers
      };
    });
}


// Avoid immediately repeating the previous question.
export function getNextQuestion(level = "kids", previousQuestion = null) {

  const pool = getQuestionPool(level);

  if (!pool.length) {
    return null;
  }

  let available = pool;

  if (previousQuestion) {
    available = pool.filter(
      item => item.question !== previousQuestion
    );
  }

  if (!available.length) {
    available = pool;
  }

  const selected =
    available[Math.floor(Math.random() * available.length)];

  const answers = shuffle(
    selected.answers.map((answer, index) => ({
      text: answer,
      correct: index === selected.correct
    }))
  );

  return {
    category: selected.category,
    question: selected.question,
    answers
  };
}


export default {
  getQuestionPool,
  getRandomQuestion,
  createQuestionSession,
  getNextQuestion
};
