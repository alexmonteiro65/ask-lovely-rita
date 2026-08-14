// ASK LOVELY RITA
// MASTER CONTENT TAXONOMY
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

const WORLDS = [

  {
    id: "music",
    name: "Music",
    subcategories: [
      "Instruments",
      "Singing",
      "Rhythm",
      "Music History",
      "Musicians",
      "Genres",
      "Music Theory"
    ]
  },

  {
    id: "math",
    name: "Math",
    subcategories: [
      "Numbers",
      "Arithmetic",
      "Geometry",
      "Algebra",
      "Logic",
      "Patterns",
      "Problem Solving"
    ]
  },

  {
    id: "science",
    name: "Science",
    subcategories: [
      "Physics",
      "Chemistry",
      "Biology",
      "Earth Science",
      "Animals",
      "Plants",
      "Environment"
    ]
  },

  {
    id: "geography",
    name: "Geography",
    subcategories: [
      "Countries",
      "Cities",
      "Continents",
      "Oceans",
      "Mountains",
      "Rivers",
      "Maps",
      "Cultures"
    ]
  },

  {
    id: "smart_minds",
    name: "Smart Minds",
    subcategories: [
      "Logic",
      "Memory",
      "Critical Thinking",
      "Puzzles",
      "Patterns",
      "Problem Solving"
    ]
  },

  {
    id: "life",
    name: "Life",
    subcategories: [
      "Everyday Life",
      "Relationships",
      "Emotions",
      "Personal Development",
      "Ethics",
      "Philosophy",
      "Spirituality"
    ]
  },

  {
    id: "world",
    name: "World",
    subcategories: [
      "History",
      "Culture",
      "Civilizations",
      "Traditions",
      "Languages",
      "People",
      "World Events"
    ]
  },

  {
    id: "economics",
    name: "Economics",
    subcategories: [
      "Money",
      "Saving",
      "Business",
      "Markets",
      "Trade",
      "Personal Finance",
      "Economics Basics"
    ]
  },

  {
    id: "medicine",
    name: "Medicine & Human Body",
    subcategories: [
      "Human Body",
      "Organs",
      "Health",
      "Nutrition",
      "Anatomy",
      "Medical History",
      "Healthy Habits"
    ]
  },

  {
    id: "language",
    name: "Language",
    subcategories: [
      "Vocabulary",
      "Grammar",
      "Reading",
      "Writing",
      "Words",
      "Idioms",
      "Languages"
    ]
  },

  {
    id: "food",
    name: "Food & Culinary Arts",
    subcategories: [
      "Cooking",
      "Ingredients",
      "World Cuisine",
      "Food History",
      "Nutrition",
      "Kitchen Skills",
      "Culinary Traditions"
    ]
  },

  {
    id: "space",
    name: "Space",
    subcategories: [
      "Planets",
      "Stars",
      "Galaxies",
      "Astronomy",
      "Space Exploration",
      "Black Holes",
      "The Universe"
    ]
  },

  {
    id: "arts",
    name: "Arts & Creativity",
    subcategories: [
      "Painting",
      "Sculpture",
      "Photography",
      "Film",
      "Theater",
      "Dance",
      "Literature",
      "Creativity"
    ]
  },

  {
    id: "technology",
    name: "Technology",
    subcategories: [
      "Computers",
      "Internet",
      "Artificial Intelligence",
      "Robotics",
      "Inventions",
      "Digital Life",
      "Future Technology"
    ]
  }

];

const AGE_GROUPS = [
  {
    id: "kids_5_8",
    name: "Kids 5–8",
    minAge: 5,
    maxAge: 8
  },
  {
    id: "kids_9_12",
    name: "Kids 9–12",
    minAge: 9,
    maxAge: 12
  },
  {
    id: "teens_13_17",
    name: "Teens 13–17",
    minAge: 13,
    maxAge: 17
  },
  {
    id: "adults",
    name: "Adults",
    minAge: 18,
    maxAge: null
  }
];

const DIFFICULTIES = [
  {
    id: "easy",
    name: "Easy"
  },
  {
    id: "medium",
    name: "Medium"
  },
  {
    id: "hard",
    name: "Hard"
  },
  {
    id: "expert",
    name: "Expert"
  }
];

const QUESTION_SCHEMA = {
  world: true,
  subcategory: true,
  ageGroup: true,
  difficulty: true,
  question: true,
  answers: true,
  explanation: true,
  tags: true
};

export {
  WORLDS,
  AGE_GROUPS,
  DIFFICULTIES,
  QUESTION_SCHEMA
};

export default {
  WORLDS,
  AGE_GROUPS,
  DIFFICULTIES,
  QUESTION_SCHEMA
};
