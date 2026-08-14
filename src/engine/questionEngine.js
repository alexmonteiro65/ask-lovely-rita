// ASK LOVELY RITA
// MASTER QUESTION ENGINE
//
// The engine is responsible for:
// - Loading the question library
// - Supporting the content taxonomy
// - Selecting age-appropriate questions
// - Filtering by world/subcategory/difficulty
// - Randomizing questions
// - Randomizing answer positions
// - Preventing immediate question repetition
// - Creating question sessions
//
// CONTENT STRUCTURE:
//
// WORLD
//   ↓
// SUBCATEGORY
//   ↓
// AGE GROUP
//   ↓
// DIFFICULTY
//   ↓
// QUESTION
//   ↓
// ANSWERS
//   ↓
// EXPLANATION
//   ↓
// TAGS

import QUESTION_BANK from "../data/questions/questionBank";

// ------------------------------------------------------------
// AGE GROUP ALIASES
// ------------------------------------------------------------

const AGE_ALIASES = {
  kids: "kids_5_8",
  children: "kids_5_8",
  kids_5_8: "kids_5_8",

  preteens: "kids_9_12",
  kids_9_12: "kids_9_12",

  teens: "teens",
  adults: "adults",
  experts: "experts",
};

// ------------------------------------------------------------
// RANDOM SHUFFLE
// Fisher-Yates shuffle
// ------------------------------------------------------------

function shuffle(array) {
  const copy = [...array];

  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}

// ------------------------------------------------------------
// NORMALIZE QUESTION
// ------------------------------------------------------------

function normalizeQuestion(question, metadata = {}) {
  if (!question || typeof question !== "object") {
    return null;
  }

  if (!question.question || !Array.isArray(question.answers)) {
    return null;
  }

  return {
    id:
      question.id ||
      `${metadata.world || "world"}-${metadata.subcategory || "general"}-${Math.random()
        .toString(36)
        .slice(2, 10)}`,

    world:
      question.world ||
      metadata.world ||
      question.category ||
      "General",

    subcategory:
      question.subcategory ||
      metadata.subcategory ||
      null,

    ageGroup:
      question.ageGroup ||
      metadata.ageGroup ||
      null,

    difficulty:
      question.difficulty ||
      metadata.difficulty ||
      null,

    category:
      question.category ||
      question.world ||
      metadata.world ||
      "General",

    question: question.question,

    answers: [...question.answers],

    correct:
      typeof question.correct === "number"
        ? question.correct
        : 0,

    explanation:
      question.explanation ||
      "",

    tags:
      Array.isArray(question.tags)
        ? [...question.tags]
        : [],
  };
}

// ------------------------------------------------------------
// FLATTEN QUESTION DATABASE
//
// Supports both:
//
// OLD STRUCTURE:
// ageGroup → difficulty → category → questions
//
// AND NEW STRUCTURE:
// [
//   {
//     world,
//     subcategory,
//     ageGroup,
//     difficulty,
//     question,
//     answers,
//     correct,
//     explanation,
//     tags
//   }
// ]
// ------------------------------------------------------------

function flattenQuestions(node, metadata = {}, result = []) {
  if (!node) {
    return result;
  }

  // Array
  if (Array.isArray(node)) {
    node.forEach(item => {
      if (
        item &&
        typeof item === "object" &&
        !Array.isArray(item) &&
        item.question &&
        Array.isArray(item.answers)
      ) {
        const normalized = normalizeQuestion(item, metadata);

        if (normalized) {
          result.push(normalized);
        }
      } else {
        flattenQuestions(item, metadata, result);
      }
    });

    return result;
  }

  // Object
  if (typeof node === "object") {
    // Direct question object
    if (
      node.question &&
      Array.isArray(node.answers)
    ) {
      const normalized = normalizeQuestion(node, metadata);

      if (normalized) {
        result.push(normalized);
      }

      return result;
    }

    Object.entries(node).forEach(([key, value]) => {
      const nextMetadata = {
        ...metadata,
      };

      // Recognize known taxonomy levels.
      if (
        key.startsWith("kids") ||
        key === "children" ||
        key === "preteens" ||
        key === "teens" ||
        key === "adults" ||
        key === "experts"
      ) {
        nextMetadata.ageGroup = key;
      } else if (
        key === "easy" ||
        key === "medium" ||
        key === "hard" ||
        key === "expert"
      ) {
        nextMetadata.difficulty = key;
      } else {
        // In the old database the category is represented
        // by the object key.
        if (!nextMetadata.world) {
          nextMetadata.world = key;
        } else if (!nextMetadata.subcategory) {
          nextMetadata.subcategory = key;
        }
      }

      flattenQuestions(value, nextMetadata, result);
    });
  }

  return result;
}

// ------------------------------------------------------------
// GET ALL QUESTIONS
// ------------------------------------------------------------

function getAllQuestions() {
  return flattenQuestions(QUESTION_BANK);
}

// ------------------------------------------------------------
// RESOLVE AGE GROUP
// ------------------------------------------------------------

function resolveAgeGroup(level = "kids") {
  return AGE_ALIASES[level] || level;
}

// ------------------------------------------------------------
// FILTER QUESTIONS
// ------------------------------------------------------------

function filterQuestions(
  questions,
  {
    world = null,
    subcategory = null,
    ageGroup = null,
    difficulty = null,
    tags = null,
  } = {}
) {
  return questions.filter(question => {
    if (
      world &&
      question.world !== world &&
      question.category !== world
    ) {
      return false;
    }

    if (
      subcategory &&
      question.subcategory !== subcategory
    ) {
      return false;
    }

    if (
      ageGroup &&
      question.ageGroup !== resolveAgeGroup(ageGroup)
    ) {
      return false;
    }

    if (
      difficulty &&
      question.difficulty !== difficulty
    ) {
      return false;
    }

    if (tags && Array.isArray(tags)) {
      const hasTag = tags.some(tag =>
        question.tags.includes(tag)
      );

      if (!hasTag) {
        return false;
      }
    }

    return true;
  });
}

// ------------------------------------------------------------
// GET QUESTION POOL
//
// Existing Rita calls can continue using:
//
// getQuestionPool("kids")
//
// New code can use:
//
// getQuestionPool("kids", {
//   world: "Science",
//   difficulty: "easy"
// })
// ------------------------------------------------------------

export function getQuestionPool(
  level = "kids",
  filters = {}
) {
  const allQuestions = getAllQuestions();

  const ageGroup = resolveAgeGroup(level);

  let pool = allQuestions;

  // If the requested age group exists in the database,
  // filter by it.
  const hasAgeGroup = allQuestions.some(
    question => question.ageGroup === ageGroup
  );

  if (hasAgeGroup) {
    pool = pool.filter(
      question => question.ageGroup === ageGroup
    );
  }

  return filterQuestions(pool, {
    ...filters,
    ageGroup: null,
  });
}

// ------------------------------------------------------------
// RANDOM QUESTION
// ------------------------------------------------------------

export function getRandomQuestion(
  level = "kids",
  filters = {}
) {
  const pool = getQuestionPool(level, filters);

  if (!pool.length) {
    return null;
  }

  const original =
    pool[Math.floor(Math.random() * pool.length)];

  const answers = shuffle(
    original.answers.map((answer, index) => ({
      text: answer,
      correct: index === original.correct,
    }))
  );

  return {
    id: original.id,

    world: original.world,

    subcategory:
      original.subcategory,

    ageGroup:
      original.ageGroup,

    difficulty:
      original.difficulty,

    category:
      original.category,

    question:
      original.question,

    answers,

    explanation:
      original.explanation,

    tags:
      original.tags,
  };
}

// ------------------------------------------------------------
// CREATE QUESTION SESSION
// ------------------------------------------------------------

export function createQuestionSession(
  level = "kids",
  numberOfQuestions = 10,
  filters = {}
) {
  const pool = getQuestionPool(
    level,
    filters
  );

  const randomizedPool = shuffle(pool);

  return randomizedPool
    .slice(
      0,
      Math.min(
        numberOfQuestions,
        randomizedPool.length
      )
    )
    .map(question => {
      const answers = shuffle(
        question.answers.map((answer, index) => ({
          text: answer,
          correct:
            index === question.correct,
        }))
      );

      return {
        id: question.id,

        world: question.world,

        subcategory:
          question.subcategory,

        ageGroup:
          question.ageGroup,

        difficulty:
          question.difficulty,

        category:
          question.category,

        question:
          question.question,

        answers,

        explanation:
          question.explanation,

        tags:
          question.tags,
      };
    });
}

// ------------------------------------------------------------
// NEXT QUESTION
//
// Prevents immediate repetition.
// ------------------------------------------------------------

export function getNextQuestion(
  level = "kids",
  previousQuestion = null,
  filters = {}
) {
  const pool = getQuestionPool(
    level,
    filters
  );

  if (!pool.length) {
    return null;
  }

  let available = pool;

  if (previousQuestion) {
    available = pool.filter(
      item =>
        item.question !== previousQuestion
    );
  }

  // If the pool only contains one question,
  // allow it to be selected again.
  if (!available.length) {
    available = pool;
  }

  const selected =
    available[
      Math.floor(
        Math.random() * available.length
      )
    ];

  const answers = shuffle(
    selected.answers.map((answer, index) => ({
      text: answer,
      correct:
        index === selected.correct,
    }))
  );

  return {
    id: selected.id,

    world: selected.world,

    subcategory:
      selected.subcategory,

    ageGroup:
      selected.ageGroup,

    difficulty:
      selected.difficulty,

    category:
      selected.category,

    question:
      selected.question,

    answers,

    explanation:
      selected.explanation,

    tags:
      selected.tags,
  };
}

// ------------------------------------------------------------
// DATABASE STATISTICS
// ------------------------------------------------------------

export function getQuestionStats() {
  const questions = getAllQuestions();

  const worlds = [
    ...new Set(
      questions.map(
        question => question.world
      )
    ),
  ];

  const subcategories = [
    ...new Set(
      questions
        .map(
          question =>
            question.subcategory
        )
        .filter(Boolean)
    ),
  ];

  const ageGroups = [
    ...new Set(
      questions
        .map(
          question =>
            question.ageGroup
        )
        .filter(Boolean)
    ),
  ];

  const difficulties = [
    ...new Set(
      questions
        .map(
          question =>
            question.difficulty
        )
        .filter(Boolean)
    ),
  ];

  return {
    totalQuestions:
      questions.length,

    worlds,

    subcategories,

    ageGroups,

    difficulties,
  };
}

// ------------------------------------------------------------
// DEFAULT EXPORT
// ------------------------------------------------------------

export default {
  getQuestionPool,
  getRandomQuestion,
  createQuestionSession,
  getNextQuestion,
  getQuestionStats,
};
