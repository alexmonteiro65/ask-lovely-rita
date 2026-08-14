// ASK LOVELY RITA
// MASTER QUESTION DATABASE
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

const QUESTION_BANK = [

  // ============================================================
  // SCIENCE
  // ============================================================

  {
    world: "Science",
    subcategory: "Animals",
    ageGroup: "kids_5_8",
    difficulty: "easy",

    question: "Which animal says 'moo'?",

    answers: [
      "Dog",
      "Cow",
      "Cat",
      "Duck"
    ],

    correct: 1,

    explanation: "A cow makes a 'moo' sound.",

    tags: ["animals", "sounds", "nature"]
  },

  {
    world: "Science",
    subcategory: "Human Body",
    ageGroup: "kids_5_8",
    difficulty: "easy",

    question: "Which part of your body helps you see?",

    answers: [
      "Ears",
      "Nose",
      "Eyes",
      "Hands"
    ],

    correct: 2,

    explanation: "Your eyes allow you to see the world around you.",

    tags: ["human-body", "senses", "eyes"]
  },

  {
    world: "Science",
    subcategory: "Space",
    ageGroup: "kids_5_8",
    difficulty: "easy",

    question: "What planet do we live on?",

    answers: [
      "Mars",
      "Venus",
      "Earth",
      "Jupiter"
    ],

    correct: 2,

    explanation: "Earth is the planet where humans live.",

    tags: ["space", "planets", "earth"]
  },

  {
    world: "Science",
    subcategory: "Plants",
    ageGroup: "kids_5_8",
    difficulty: "easy",

    question: "What do plants need from the Sun to help them grow?",

    answers: [
      "Sunlight",
      "Snow",
      "Rocks",
      "Plastic"
    ],

    correct: 0,

    explanation: "Plants use sunlight to make their food through photosynthesis.",

    tags: ["plants", "sun", "nature"]
  },

  {
    world: "Science",
    subcategory: "Human Body",
    ageGroup: "kids_9_12",
    difficulty: "medium",

    question: "Which organ pumps blood around your body?",

    answers: [
      "Brain",
      "Heart",
      "Lung",
      "Stomach"
    ],

    correct: 1,

    explanation: "The heart pumps blood throughout the body.",

    tags: ["human-body", "heart", "biology"]
  },

  {
    world: "Science",
    subcategory: "Space",
    ageGroup: "kids_9_12",
    difficulty: "medium",

    question: "Which planet is known as the Red Planet?",

    answers: [
      "Venus",
      "Mars",
      "Saturn",
      "Mercury"
    ],

    correct: 1,

    explanation: "Mars appears reddish because of iron minerals on its surface.",

    tags: ["space", "mars", "planets"]
  },

  {
    world: "Science",
    subcategory: "Human Body",
    ageGroup: "adults",
    difficulty: "medium",

    question: "What is the largest organ of the human body?",

    answers: [
      "Heart",
      "Liver",
      "Skin",
      "Brain"
    ],

    correct: 2,

    explanation: "The skin is the body's largest organ.",

    tags: ["human-body", "biology", "skin"]
  },

  // ============================================================
  // MATHEMATICS
  // ============================================================

  {
    world: "Mathematics",
    subcategory: "Arithmetic",
    ageGroup: "kids_5_8",
    difficulty: "easy",

    question: "What is 2 + 2?",

    answers: [
      "3",
      "4",
      "5",
      "6"
    ],

    correct: 1,

    explanation: "Two plus two equals four.",

    tags: ["math", "addition", "numbers"]
  },

  {
    world: "Mathematics",
    subcategory: "Numbers",
    ageGroup: "kids_5_8",
    difficulty: "easy",

    question: "Which number comes after 9?",

    answers: [
      "8",
      "10",
      "11",
      "12"
    ],

    correct: 1,

    explanation: "The number that comes after 9 is 10.",

    tags: ["math", "numbers", "counting"]
  },

  {
    world: "Mathematics",
    subcategory: "Arithmetic",
    ageGroup: "kids_9_12",
    difficulty: "medium",

    question: "What is 15 × 4?",

    answers: [
      "45",
      "50",
      "60",
      "75"
    ],

    correct: 2,

    explanation: "15 multiplied by 4 equals 60.",

    tags: ["math", "multiplication"]
  },

  {
    world: "Mathematics",
    subcategory: "Percentages",
    ageGroup: "adults",
    difficulty: "medium",

    question: "What is 15% of 200?",

    answers: [
      "15",
      "20",
      "30",
      "40"
    ],

    correct: 2,

    explanation: "15% of 200 is 30.",

    tags: ["math", "percentages", "arithmetic"]
  },

  // ============================================================
  // GEOGRAPHY
  // ============================================================

  {
    world: "Geography",
    subcategory: "World",
    ageGroup: "kids_5_8",
    difficulty: "easy",

    question: "Which continent is Brazil in?",

    answers: [
      "Europe",
      "Asia",
      "South America",
      "Africa"
    ],

    correct: 2,

    explanation: "Brazil is located in South America.",

    tags: ["geography", "brazil", "continents"]
  },

  {
    world: "Geography",
    subcategory: "Countries",
    ageGroup: "kids_9_12",
    difficulty: "medium",

    question: "Which country has the largest population?",

    answers: [
      "India",
      "Brazil",
      "United States",
      "Australia"
    ],

    correct: 0,

    explanation: "India is currently the world's most populous country.",

    tags: ["geography", "countries", "population"]
  },

  {
    world: "Geography",
    subcategory: "Landmarks",
    ageGroup: "kids_9_12",
    difficulty: "medium",

    question: "Where is the Eiffel Tower?",

    answers: [
      "London",
      "Paris",
      "Rome",
      "Madrid"
    ],

    correct: 1,

    explanation: "The Eiffel Tower is one of the most famous landmarks in Paris, France.",

    tags: ["geography", "landmarks", "france"]
  },

  // ============================================================
  // MUSIC
  // ============================================================

  {
    world: "Music",
    subcategory: "Instruments",
    ageGroup: "kids_5_8",
    difficulty: "easy",

    question: "How many strings does a typical guitar have?",

    answers: [
      "4",
      "5",
      "6",
      "8"
    ],

    correct: 2,

    explanation: "A standard guitar usually has six strings.",

    tags: ["music", "guitar", "instruments"]
  },

  {
    world: "Music",
    subcategory: "Instruments",
    ageGroup: "kids_9_12",
    difficulty: "medium",

    question: "Which instrument normally has 88 keys?",

    answers: [
      "Guitar",
      "Violin",
      "Piano",
      "Trumpet"
    ],

    correct: 2,

    explanation: "A standard modern piano has 88 keys.",

    tags: ["music", "piano", "instruments"]
  },

  {
    world: "Music",
    subcategory: "Music Theory",
    ageGroup: "adults",
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

    tags: ["music", "theory", "rhythm"]
  },

  // ============================================================
  // ECONOMICS
  // ============================================================

  {
    world: "Economics",
    subcategory: "Money",
    ageGroup: "kids_5_8",
    difficulty: "easy",

    question: "What do people usually use money to buy?",

    answers: [
      "Goods and services",
      "Clouds",
      "Sunlight",
      "Dreams"
    ],

    correct: 0,

    explanation: "Money is commonly used to exchange for goods and services.",

    tags: ["economics", "money", "basics"]
  },

  {
    world: "Economics",
    subcategory: "Markets",
    ageGroup: "kids_9_12",
    difficulty: "medium",

    question: "What usually happens when there is very high demand for something that is difficult to find?",

    answers: [
      "Its price may increase",
      "It always becomes free",
      "Nobody wants it",
      "It disappears immediately"
    ],

    correct: 0,

    explanation: "When demand is high and supply is limited, prices may rise.",

    tags: ["economics", "supply", "demand"]
  },

  {
    world: "Economics",
    subcategory: "Finance",
    ageGroup: "adults",
    difficulty: "medium",

    question: "What is inflation?",

    answers: [
      "A general rise in prices",
      "A fall in population",
      "A decrease in rainfall",
      "A rise in unemployment only"
    ],

    correct: 0,

    explanation: "Inflation is a sustained increase in the general level of prices.",

    tags: ["economics", "inflation", "finance"]
  },

  // ============================================================
  // MEDICINE
  // ============================================================

  {
    world: "Medicine",
    subcategory: "Human Body",
    ageGroup: "kids_9_12",
    difficulty: "medium",

    question: "Which organ helps you breathe by taking oxygen into your body?",

    answers: [
      "Lungs",
      "Stomach",
      "Kidneys",
      "Skin"
    ],

    correct: 0,

    explanation: "The lungs bring oxygen into the body and remove carbon dioxide.",

    tags: ["medicine", "lungs", "breathing"]
  },

  {
    world: "Medicine",
    subcategory: "Human Body",
    ageGroup: "adults",
    difficulty: "hard",

    question: "Which blood cells primarily help fight infections?",

    answers: [
      "Red blood cells",
      "White blood cells",
      "Platelets",
      "Plasma"
    ],

    correct: 1,

    explanation: "White blood cells are important components of the immune system.",

    tags: ["medicine", "blood", "immune-system"]
  },

  // ============================================================
  // HUMAN BEHAVIOR
  // ============================================================

  {
    world: "Human Behavior",
    subcategory: "Body Language",
    ageGroup: "kids_9_12",
    difficulty: "easy",

    question: "What can a smile often communicate?",

    answers: [
      "Happiness or friendliness",
      "That someone is sleeping",
      "That someone is underwater",
      "That someone is running"
    ],

    correct: 0,

    explanation: "A smile can often communicate positive emotions such as happiness or friendliness.",

    tags: ["body-language", "communication", "emotions"]
  },

  {
    world: "Human Behavior",
    subcategory: "Communication",
    ageGroup: "adults",
    difficulty: "medium",

    question: "What is active listening?",

    answers: [
      "Paying attention and responding thoughtfully",
      "Interrupting constantly",
      "Ignoring the speaker",
      "Thinking only about what to say next"
    ],

    correct: 0,

    explanation: "Active listening involves paying attention, understanding the speaker, and responding appropriately.",

    tags: ["communication", "body-language", "psychology"]
  },

  // ============================================================
  // FOOD & CULINARY ARTS
  // ============================================================

  {
    world: "Food & Culinary Arts",
    subcategory: "Food",
    ageGroup: "kids_5_8",
    difficulty: "easy",

    question: "Which food is made from milk?",

    answers: [
      "Cheese",
      "Rice",
      "Carrot",
      "Apple"
    ],

    correct: 0,

    explanation: "Cheese is commonly made from milk.",

    tags: ["food", "dairy", "cooking"]
  },

  {
    world: "Food & Culinary Arts",
    subcategory: "Cooking",
    ageGroup: "kids_9_12",
    difficulty: "medium",

    question: "What does boiling water mean?",

    answers: [
      "Water is freezing",
      "Water is turning into ice",
      "Water is heated until it bubbles",
      "Water is being mixed with oil"
    ],

    correct: 2,

    explanation: "Boiling occurs when water is heated to the point where it produces bubbles throughout the liquid.",

    tags: ["food", "cooking", "science"]
  },

  {
    world: "Food & Culinary Arts",
    subcategory: "Culinary Techniques",
    ageGroup: "adults",
    difficulty: "medium",

    question: "What does 'sauté' generally mean?",

    answers: [
      "Cook food quickly in a small amount of fat",
      "Freeze food",
      "Bake food overnight",
      "Dry food in the sun"
    ],

    correct: 0,

    explanation: "Sautéing involves quickly cooking food in a small amount of fat over relatively high heat.",

    tags: ["culinary", "cooking", "techniques"]
  },

  // ============================================================
  // SPACE
  // ============================================================

  {
    world: "Space",
    subcategory: "Solar System",
    ageGroup: "kids_5_8",
    difficulty: "easy",

    question: "What is the name of the star at the center of our solar system?",

    answers: [
      "The Moon",
      "The Sun",
      "Mars",
      "Earth"
    ],

    correct: 1,

    explanation: "The Sun is the star at the center of our solar system.",

    tags: ["space", "sun", "solar-system"]
  },

  {
    world: "Space",
    subcategory: "Planets",
    ageGroup: "kids_9_12",
    difficulty: "medium",

    question: "Which planet has the most prominent ring system?",

    answers: [
      "Earth",
      "Mars",
      "Saturn",
      "Mercury"
    ],

    correct: 2,

    explanation: "Saturn is famous for its large and prominent system of rings.",

    tags: ["space", "saturn", "planets"]
  },

  {
    world: "Space",
    subcategory: "Astronomy",
    ageGroup: "adults",
    difficulty: "hard",

    question: "What is a light-year?",

    answers: [
      "A unit of time",
      "A unit of distance",
      "A type of star",
      "A spacecraft"
    ],

    correct: 1,

    explanation: "A light-year is the distance light travels through vacuum in one year.",

    tags: ["space", "astronomy", "light-year"]
  },

  // ============================================================
  // HISTORY
  // ============================================================

  {
    world: "History",
    subcategory: "Ancient History",
    ageGroup: "kids_9_12",
    difficulty: "medium",

    question: "Which civilization built the pyramids at Giza?",

    answers: [
      "Ancient Egyptians",
      "Romans",
      "Vikings",
      "Aztecs"
    ],

    correct: 0,

    explanation: "The pyramids at Giza were built in ancient Egypt.",

    tags: ["history", "egypt", "pyramids"]
  },

  // ============================================================
  // ARTS
  // ============================================================

  {
    world: "Arts",
    subcategory: "Visual Arts",
    ageGroup: "kids_5_8",
    difficulty: "easy",

    question: "Which tool is commonly used to paint a picture?",

    answers: [
      "Paintbrush",
      "Spoon",
      "Hammer",
      "Ruler"
    ],

    correct: 0,

    explanation: "A paintbrush is commonly used to apply paint to a surface.",

    tags: ["arts", "painting", "creativity"]
  },

  // ============================================================
  // TECHNOLOGY
  // ============================================================

  {
    world: "Technology",
    subcategory: "Computers",
    ageGroup: "kids_9_12",
    difficulty: "medium",

    question: "What does a computer use to store information for later use?",

    answers: [
      "Storage",
      "Water",
      "Paper only",
      "Sunlight"
    ],

    correct: 0,

    explanation: "Computers use storage devices and systems to save information.",

    tags: ["technology", "computers", "storage"]
  },

  // ============================================================
  // NATURE
  // ============================================================

  {
    world: "Nature",
    subcategory: "Environment",
    ageGroup: "kids_5_8",
    difficulty: "easy",

    question: "Which of these is a renewable source of energy?",

    answers: [
      "Sunlight",
      "Coal",
      "Oil",
      "Natural gas"
    ],

    correct: 0,

    explanation: "Sunlight is a renewable source of energy because it is naturally replenished.",

    tags: ["nature", "environment", "energy"]
  }

];


// ============================================================
// HELPER FUNCTIONS
// ============================================================

function shuffle(array) {
  const copy = [...array];

  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}


// ============================================================
// GET FILTERED QUESTIONS
// ============================================================

export function getQuestions({
  world = null,
  subcategory = null,
  ageGroup = null,
  difficulty = null
} = {}) {

  return QUESTION_BANK.filter(question => {

    if (world && question.world !== world) {
      return false;
    }

    if (subcategory && question.subcategory !== subcategory) {
      return false;
    }

    if (ageGroup && question.ageGroup !== ageGroup) {
      return false;
    }

    if (difficulty && question.difficulty !== difficulty) {
      return false;
    }

    return true;
  });
}


// ============================================================
// GET RANDOM QUESTION
// ============================================================

export function getRandomQuestion(filters = {}) {

  const pool = getQuestions(filters);

  if (!pool.length) {
    return null;
  }

  const question = pool[
    Math.floor(Math.random() * pool.length)
  ];

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
}


// ============================================================
// CREATE QUESTION SESSION
// ============================================================

export function createQuestionSession(
  filters = {},
  numberOfQuestions = 10
) {

  const pool = shuffle(getQuestions(filters));

  return pool
    .slice(0, Math.min(numberOfQuestions, pool.length))
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


// ============================================================
// GET DATABASE STATISTICS
// ============================================================

export function getQuestionStats() {

  const worlds = [
    ...new Set(
      QUESTION_BANK.map(question => question.world)
    )
  ];

  const subcategories = [
    ...new Set(
      QUESTION_BANK.map(question => question.subcategory)
    )
  ];

  const ageGroups = [
    ...new Set(
      QUESTION_BANK.map(question => question.ageGroup)
    )
  ];

  const difficulties = [
    ...new Set(
      QUESTION_BANK.map(question => question.difficulty)
    )
  ];

  return {
    totalQuestions: QUESTION_BANK.length,
    worlds,
    subcategories,
    ageGroups,
    difficulties
  };
}


// ============================================================
// GET ALL QUESTIONS
// ============================================================

export function getAllQuestions() {
  return [...QUESTION_BANK];
}


// ============================================================
// DEFAULT EXPORT
// ============================================================

export default QUESTION_BANK;
