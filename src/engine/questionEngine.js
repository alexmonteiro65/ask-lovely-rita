// ASK LOVELY RITA
// MASTER QUESTION ENGINE

const QUESTION_BANK = [
  {
    world: "Knowledge",
    subcategory: "Math",
    ageGroup: "kids",
    difficulty: "easy",
    question: "What is 2 + 2?",
    answers: ["3", "4", "5", "6"],
    correct: 1,
    explanation: "Two plus two equals four.",
    tags: ["numbers", "addition"]
  },
  {
    world: "Knowledge",
    subcategory: "Science",
    ageGroup: "kids",
    difficulty: "easy",
    question: "Which animal says moo?",
    answers: ["Dog", "Cow", "Cat", "Duck"],
    correct: 1,
    explanation: "A cow says moo!",
    tags: ["animals", "sounds"]
  },
  {
    world: "Knowledge",
    subcategory: "Geography",
    ageGroup: "kids",
    difficulty: "easy",
    question: "Which planet do we live on?",
    answers: ["Mars", "Venus", "Earth", "Jupiter"],
    correct: 2,
    explanation: "We live on planet Earth.",
    tags: ["space", "planets"]
  },
  {
    world: "Music",
    subcategory: "Instruments",
    ageGroup: "kids",
    difficulty: "easy",
    question: "How many strings does a typical guitar have?",
    answers: ["4", "5", "6", "8"],
    correct: 2,
    explanation: "A typical guitar has six strings.",
    tags: ["guitar", "instruments"]
  },
  {
    world: "Knowledge",
    subcategory: "Math",
    ageGroup: "adults",
    difficulty: "medium",
    question: "What is 15% of 200?",
    answers: ["15", "20", "30", "40"],
    correct: 2,
    explanation: "15% of 200 is 30.",
    tags: ["percentage", "math"]
  },
  {
    world: "Knowledge",
    subcategory: "Science",
    ageGroup: "adults",
    difficulty: "medium",
    question: "What gas do plants absorb during photosynthesis?",
    answers: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
    correct: 1,
    explanation: "Plants absorb carbon dioxide during photosynthesis.",
    tags: ["plants", "photosynthesis"]
  },
  {
    world: "Knowledge",
    subcategory: "Geography",
    ageGroup: "adults",
    difficulty: "medium",
    question: "Which country has the largest population?",
    answers: ["India", "Brazil", "United States", "Russia"],
    correct: 0,
    explanation: "India has the world's largest population.",
    tags: ["countries", "population"]
  },
  {
    world: "Music",
    subcategory: "Instruments",
    ageGroup: "adults",
    difficulty: "medium",
    question: "Which instrument normally has 88 keys?",
    answers: ["Guitar", "Violin", "Piano", "Trumpet"],
    correct: 2,
    explanation: "A standard piano normally has 88 keys.",
    tags: ["piano", "instruments"]
  },
  {
    world: "Science",
    subcategory: "Physics",
    ageGroup: "experts",
    difficulty: "hard",
    question: "Which particle mediates the electromagnetic force?",
    answers: ["Gluon", "Photon", "Neutrino", "Muon"],
    correct: 1,
    explanation: "The photon is the carrier of the electromagnetic force.",
    tags: ["physics", "particles"]
  },
  {
    world: "Music",
    subcategory: "Theory",
    ageGroup: "experts",
    difficulty: "hard",
    question: "What does the term 'polyrhythm' describe?",
    answers: [
      "Multiple simultaneous rhythmic patterns",
      "A very fast tempo",
      "A change of key",
      "A solo vocal passage"
    ],
    correct: 0,
    explanation: "Polyrhythm means two or more contrasting rhythmic patterns occurring at the same time.",
    tags: ["music theory", "rhythm"]
  },
  {
    world: "Geography",
    subcategory: "Deserts",
    ageGroup: "experts",
    difficulty: "hard",
    question: "Which country contains the Atacama Desert?",
    answers: ["Chile", "Mexico", "Egypt", "Australia"],
    correct: 0,
    explanation: "The Atacama Desert is primarily located in northern Chile.",
    tags: ["deserts", "south america"]
  },
  {
    world: "Math",
    subcategory: "Calculus",
    ageGroup: "experts",
    difficulty: "hard",
    question: "What is the derivative of x²?",
    answers: ["x", "2x", "x²", "2"],
    correct: 1,
    explanation: "The derivative of x² is 2x.",
    tags: ["calculus", "derivatives"]
  }
];

function shuffle(array) {
  const copy = [...array];

  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}

export function getQuestionPool({
  ageGroup = null,
  difficulty = null,
  world = null,
  subcategory = null
} = {}) {
  return QUESTION_BANK.filter(question => {
    if (ageGroup && question.ageGroup !== ageGroup) return false;
    if (difficulty && question.difficulty !== difficulty) return false;
    if (world && question.world !== world) return false;
    if (subcategory && question.subcategory !== subcategory) return false;

    return true;
  });
}

export function getRandomQuestion(filters = {}) {
  const pool = getQuestionPool(filters);

  if (!pool.length) {
    return null;
  }

  const original = pool[Math.floor(Math.random() * pool.length)];

  const answers = shuffle(
    original.answers.map((answer, index) => ({
      text: answer,
      correct: index === original.correct
    }))
  );

  return {
    world: original.world,
    subcategory: original.subcategory,
    ageGroup: original.ageGroup,
    difficulty: original.difficulty,
    question: original.question,
    answers,
    explanation: original.explanation,
    tags: original.tags
  };
}

export function createQuestionSession({
  ageGroup = null,
  difficulty = null,
  world = null,
  subcategory = null,
  numberOfQuestions = 10
} = {}) {
  const pool = getQuestionPool({
    ageGroup,
    difficulty,
    world,
    subcategory
  });

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
        world: question.world,
        subcategory: question.subcategory,
        ageGroup: question.ageGroup,
        difficulty: question.difficulty,
        question: question.question,
        answers,
        explanation: question.explanation,
        tags: question.tags
      };
    });
}

export function getNextQuestion(filters = {}, previousQuestion = null) {
  const pool = getQuestionPool(filters);

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
    world: selected.world,
    subcategory: selected.subcategory,
    ageGroup: selected.ageGroup,
    difficulty: selected.difficulty,
    question: selected.question,
    answers,
    explanation: selected.explanation,
    tags: selected.tags
  };
}

export function getQuestionStats() {
  const worlds = [
    ...new Set(QUESTION_BANK.map(question => question.world))
  ];

  const subcategories = [
    ...new Set(QUESTION_BANK.map(question => question.subcategory))
  ];

  const ageGroups = [
    ...new Set(QUESTION_BANK.map(question => question.ageGroup))
  ];

  const difficulties = [
    ...new Set(QUESTION_BANK.map(question => question.difficulty))
  ];

  return {
    totalQuestions: QUESTION_BANK.length,
    worlds,
    subcategories,
    ageGroups,
    difficulties
  };
}

export function getAllQuestions() {
  return [...QUESTION_BANK];
}

export default QUESTION_BANK;
