// ASK LOVELY RITA
// MASTER QUESTION DATABASE
//
// Content is separated from the game engine so the library can
// grow independently without rewriting the application.
//
// Structure:
// ageBand -> difficulty -> category -> questions
//
// The production database will eventually contain hundreds/thousands
// of questions. This file establishes the expandable architecture.

const QUESTION_BANK = {

  // ============================================================
  // KIDS — approximately ages 5–8
  // ============================================================

  kids_5_8: {

    easy: {

      Math: [
        {
          question: "What is 2 + 2?",
          answers: ["3", "4", "5", "6"],
          correct: 1
        },
        {
          question: "Which number comes after 9?",
          answers: ["8", "10", "11", "12"],
          correct: 1
        },
        {
          question: "How many sides does a triangle have?",
          answers: ["2", "3", "4", "5"],
          correct: 1
        }
      ],

      Science: [
        {
          question: "Which animal says moo?",
          answers: ["Dog", "Cow", "Cat", "Duck"],
          correct: 1
        },
        {
          question: "What do plants need from the Sun?",
          answers: ["Sunlight", "Shoes", "Music", "Toys"],
          correct: 0
        },
        {
          question: "Which part of your body helps you see?",
          answers: ["Ears", "Eyes", "Nose", "Hands"],
          correct: 1
        }
      ],

      Geography: [
        {
          question: "What planet do we live on?",
          answers: ["Mars", "Earth", "Venus", "Jupiter"],
          correct: 1
        },
        {
          question: "Which is usually found in the sky?",
          answers: ["Clouds", "Fish", "Trees", "Shoes"],
          correct: 0
        },
        {
          question: "Which is the largest body of water?",
          answers: ["Ocean", "Pond", "Bathtub", "Cup"],
          correct: 0
        }
      ],

      Music: [
        {
          question: "Which instrument usually has black and white keys?",
          answers: ["Piano", "Drum", "Flute", "Guitar"],
          correct: 0
        },
        {
          question: "Which instrument do you hit to make a beat?",
          answers: ["Drum", "Violin", "Flute", "Piano"],
          correct: 0
        },
        {
          question: "What do we call a group of sounds arranged into a musical idea?",
          answers: ["Melody", "Cloud", "Puzzle", "Rocket"],
          correct: 0
        }
      ],

      SmartMind: [
        {
          question: "Which one does not belong?",
          answers: ["Apple", "Banana", "Carrot", "Guitar"],
          correct: 3
        },
        {
          question: "If you have 3 apples and get 2 more, how many do you have?",
          answers: ["4", "5", "6", "7"],
          correct: 1
        },
        {
          question: "Which shape has four equal sides?",
          answers: ["Circle", "Triangle", "Square", "Oval"],
          correct: 2
        }
      ]
    },

    medium: {

      Math: [
        {
          question: "What is 7 + 8?",
          answers: ["13", "14", "15", "16"],
          correct: 2
        },
        {
          question: "What is 20 - 7?",
          answers: ["11", "12", "13", "14"],
          correct: 2
        }
      ],

      Science: [
        {
          question: "Which state of matter is ice?",
          answers: ["Solid", "Liquid", "Gas", "Plasma"],
          correct: 0
        },
        {
          question: "What do bees collect from flowers?",
          answers: ["Nectar", "Sand", "Snow", "Leaves"],
          correct: 0
        }
      ],

      Geography: [
        {
          question: "Which direction does the Sun appear to rise from?",
          answers: ["North", "South", "East", "West"],
          correct: 2
        },
        {
          question: "Which continent is Brazil in?",
          answers: ["Africa", "Asia", "Europe", "South America"],
          correct: 3
        }
      ],

      Music: [
        {
          question: "How many strings does a standard guitar usually have?",
          answers: ["4", "5", "6", "8"],
          correct: 2
        },
        {
          question: "What is the speed of music called?",
          answers: ["Tempo", "Color", "Shape", "Volume"],
          correct: 0
        }
      ]
    }
  },


  // ============================================================
  // KIDS — approximately ages 9–12
  // ============================================================

  kids_9_12: {

    medium: {

      Math: [
        {
          question: "What is 12 × 8?",
          answers: ["86", "96", "106", "116"],
          correct: 1
        },
        {
          question: "What is half of 3/4?",
          answers: ["1/4", "3/8", "1/2", "2/3"],
          correct: 1
        },
        {
          question: "What is 25% of 80?",
          answers: ["10", "15", "20", "25"],
          correct: 2
        }
      ],

      Science: [
        {
          question: "What gas do humans need to breathe?",
          answers: ["Oxygen", "Helium", "Carbon dioxide", "Hydrogen"],
          correct: 0
        },
        {
          question: "What force pulls objects toward Earth?",
          answers: ["Magnetism", "Gravity", "Friction", "Electricity"],
          correct: 1
        },
        {
          question: "What organ pumps blood around the body?",
          answers: ["Lungs", "Brain", "Heart", "Kidney"],
          correct: 2
        }
      ],

      Geography: [
        {
          question: "Which is the largest continent?",
          answers: ["Africa", "Asia", "Europe", "Australia"],
          correct: 1
        },
        {
          question: "Which ocean is between Africa and Australia?",
          answers: ["Atlantic", "Pacific", "Indian", "Arctic"],
          correct: 2
        },
        {
          question: "Which country is famous for the pyramids at Giza?",
          answers: ["Egypt", "Greece", "India", "Mexico"],
          correct: 0
        }
      ],

      Music: [
        {
          question: "What does rhythm primarily organize?",
          answers: [
            "Beats and timing",
            "Colors",
            "Words on a page",
            "Geographic borders"
          ],
          correct: 0
        },
        {
          question: "Which family does the violin belong to?",
          answers: ["Strings", "Brass", "Woodwind", "Percussion"],
          correct: 0
        },
        {
          question: "What is harmony?",
          answers: [
            "Different notes sounding together",
            "A type of drum",
            "A music venue",
            "A recording machine"
          ],
          correct: 0
        }
      ],

      SmartMind: [
        {
          question: "If all birds have feathers and a robin is a bird, what does a robin have?",
          answers: ["Scales", "Feathers", "Fur", "Shell"],
          correct: 1
        },
        {
          question: "Which number continues the pattern: 2, 4, 8, 16, ___?",
          answers: ["20", "24", "30", "32"],
          correct: 3
        }
      ]
    },

    hard: {

      Math: [
        {
          question: "What is 15% of 200?",
          answers: ["20", "25", "30", "35"],
          correct: 2
        },
        {
          question: "If a triangle has angles of 50° and 60°, what is the third angle?",
          answers: ["60°", "70°", "80°", "90°"],
          correct: 1
        }
      ],

      Science: [
        {
          question: "What is the process by which plants make food using sunlight?",
          answers: [
            "Photosynthesis",
            "Respiration",
            "Digestion",
            "Evaporation"
          ],
          correct: 0
        },
        {
          question: "Which planet is known for its prominent ring system?",
          answers: ["Mars", "Saturn", "Mercury", "Venus"],
          correct: 1
        }
      ],

      Music: [
        {
          question: "What does dynamics describe in music?",
          answers: [
            "How loud or soft music is",
            "How fast music is",
            "The number of musicians",
            "The length of a song"
          ],
          correct: 0
        },
        {
          question: "What is an octave?",
          answers: [
            "The interval between one note and the next note with the same name",
            "A type of rhythm",
            "A musical instrument",
            "A recording technique"
          ],
          correct: 0
        }
      ]
    }
  },


  // ============================================================
  // ADULTS — GENERAL KNOWLEDGE
  // ============================================================

  adults: {

    medium: {

      Science: [
        {
          question: "What gas do plants absorb during photosynthesis?",
          answers: [
            "Oxygen",
            "Carbon dioxide",
            "Nitrogen",
            "Hydrogen"
          ],
          correct: 1
        },
        {
          question: "Which organ is primarily responsible for filtering blood?",
          answers: [
            "Kidney",
            "Heart",
            "Lung",
            "Stomach"
          ],
          correct: 0
        }
      ],

      Geography: [
        {
          question: "Which country is the largest by land area?",
          answers: ["Canada", "China", "Russia", "Brazil"],
          correct: 2
        },
        {
          question: "Which river is traditionally considered the longest in South America?",
          answers: [
            "Amazon",
            "Nile",
            "Mississippi",
            "Danube"
          ],
          correct: 0
        }
      ],

      Music: [
        {
          question: "Which instrument normally has 88 keys?",
          answers: ["Piano", "Guitar", "Trumpet", "Violin"],
          correct: 0
        },
        {
          question: "What does the word 'tempo' refer to?",
          answers: [
            "Musical speed",
            "Musical volume",
            "Instrument size",
            "Song lyrics"
          ],
          correct: 0
        }
      ],

      History: [
        {
          question: "Which ancient civilization developed democracy in Athens?",
          answers: [
            "Ancient Greece",
            "Ancient Egypt",
            "Ancient Rome",
            "The Maya"
          ],
          correct: 0
        }
      ]
    },

    hard: {

      Science: [
        {
          question: "Which particle mediates the electromagnetic force?",
          answers: ["Gluon", "Photon", "Muon", "Neutrino"],
          correct: 1
        },
        {
          question: "What is the approximate speed of light in vacuum?",
          answers: [
            "300,000 km/s",
            "30,000 km/s",
            "3,000 km/s",
            "3,000,000 km/s"
          ],
          correct: 0
        }
      ],

      History: [
        {
          question: "Which treaty is generally associated with ending the First World War?",
          answers: [
            "Treaty of Versailles",
            "Treaty of Paris",
            "Treaty of Rome",
            "Treaty of Vienna"
          ],
          correct: 0
        }
      ],

      Music: [
        {
          question: "What is a polyrhythm?",
          answers: [
            "Two or more contrasting rhythmic patterns occurring together",
            "A change from major to minor",
            "A very fast tempo",
            "A type of vocal harmony"
          ],
          correct: 0
        },
        {
          question: "In Western music theory, how many semitones are in an octave?",
          answers: ["8", "10", "12", "14"],
          correct: 2
        }
      ],

      SmartMind: [
        {
          question: "If all A are B, and all B are C, what must be true?",
          answers: [
            "All A are C",
            "All C are A",
            "No A are C",
            "Some C are not B"
          ],
          correct: 0
        }
      ]
    }
  },


  // ============================================================
  // EXPERTS
  // ============================================================

  experts: {

    hard: {

      Science: [
        {
          question: "Which fundamental interaction is mediated by photons?",
          answers: [
            "Electromagnetic interaction",
            "Strong interaction",
            "Weak interaction",
            "Gravitational interaction"
          ],
          correct: 0
        },
        {
          question: "What does the second law of thermodynamics describe?",
          answers: [
            "The tendency of entropy to increase in an isolated system",
            "The conservation of electric charge",
            "The relationship between force and acceleration",
            "The speed of electromagnetic waves"
          ],
          correct: 0
        }
      ],

      Mathematics: [
        {
          question: "What is the derivative of x²?",
          answers: ["x", "2x", "x²", "2"],
          correct: 1
        },
        {
          question: "What is the integral of 1/x with respect to x?",
          answers: [
            "ln|x| + C",
            "x + C",
            "1/x² + C",
            "x² + C"
          ],
          correct: 0
        }
      ],

      Music: [
        {
          question: "In tonal harmony, what is a cadence?",
          answers: [
            "A harmonic or melodic progression that creates a sense of closure",
            "A repeating drum pattern",
            "A change in recording format",
            "A type of microphone"
          ],
          correct: 0
        },
        {
          question: "What is counterpoint?",
          answers: [
            "The combination of independent melodic lines",
            "A change in musical volume",
            "A method of tuning drums",
            "A type of recording studio"
          ],
          correct: 0
        }
      ],

      Philosophy: [
        {
          question: "Which philosophical tradition emphasizes the pursuit of knowledge through systematic doubt and reasoning?",
          answers: [
            "Rationalism",
            "Epicureanism",
            "Stoicism",
            "Hedonism"
          ],
          correct: 0
        }
      ],

      SmartMind: [
        {
          question: "If a proposition is logically necessary, can it be false in any possible world under the same definitions?",
          answers: [
            "No",
            "Yes",
            "Only empirically",
            "Only probabilistically"
          ],
          correct: 0
        }
      ]
    }
  }

};


// ============================================================
// UTILITY FUNCTIONS
// ============================================================

function flattenQuestions(ageBand, difficulty = null, category = null) {

  const ageData = QUESTION_BANK[ageBand];

  if (!ageData) {
    return [];
  }

  const difficulties = difficulty
    ? [difficulty]
    : Object.keys(ageData);

  const result = [];

  difficulties.forEach(level => {

    const levelData = ageData[level];

    if (!levelData) {
      return;
    }

    Object.keys(levelData).forEach(cat => {

      if (category && cat !== category) {
        return;
      }

      levelData[cat].forEach(question => {

        result.push({
          ...question,
          ageBand,
          difficulty: level,
          category: cat
        });

      });

    });

  });

  return result;
}


// Fisher-Yates shuffle
function shuffle(array) {

  const result = [...array];

  for (let i = result.length - 1; i > 0; i--) {

    const j = Math.floor(Math.random() * (i + 1));

    [result[i], result[j]] =
      [result[j], result[i]];

  }

  return result;
}


// Get the complete pool for an age group.
export function getQuestions(
  ageBand = "kids_5_8",
  difficulty = null,
  category = null
) {

  return flattenQuestions(
    ageBand,
    difficulty,
    category
  );

}


// Get one random question.
export function getRandomQuestion(
  ageBand = "kids_5_8",
  difficulty = null,
  category = null
) {

  const pool = flattenQuestions(
    ageBand,
    difficulty,
    category
  );

  if (!pool.length) {
    return null;
  }

  const question =
    pool[Math.floor(Math.random() * pool.length)];

  const answers = shuffle(
    question.answers.map((answer, index) => ({
      text: answer,
      correct: index === question.correct
    }))
  );

  return {
    question: question.question,
    category: question.category,
    ageBand: question.ageBand,
    difficulty: question.difficulty,
    answers
  };

}


// Create a randomized quiz session.
export function createQuiz(
  ageBand = "kids_5_8",
  difficulty = null,
  category = null,
  numberOfQuestions = 10
) {

  const pool = flattenQuestions(
    ageBand,
    difficulty,
    category
  );

  const shuffledQuestions = shuffle(pool);

  return shuffledQuestions
    .slice(
      0,
      Math.min(numberOfQuestions, shuffledQuestions.length)
    )
    .map(question => {

      const answers = shuffle(
        question.answers.map((answer, index) => ({
          text: answer,
          correct: index === question.correct
        }))
      );

      return {
        question: question.question,
        category: question.category,
        ageBand: question.ageBand,
        difficulty: question.difficulty,
        answers
      };

    });

}


// Get available categories.
export function getCategories(
  ageBand = "kids_5_8"
) {

  const questions =
    flattenQuestions(ageBand);

  return [
    ...new Set(
      questions.map(question => question.category)
    )
  ];

}


// Get database statistics.
export function getQuestionStats() {

  let total = 0;

  Object.keys(QUESTION_BANK).forEach(ageBand => {

    total +=
      flattenQuestions(ageBand).length;

  });

  return {
    totalQuestions: total,
    ageBands: Object.keys(QUESTION_BANK),
    categories: [
      ...new Set(
        Object.keys(QUESTION_BANK).flatMap(ageBand =>
          flattenQuestions(ageBand)
            .map(question => question.category)
        )
      )
    ]
  };

}


export default QUESTION_BANK;
