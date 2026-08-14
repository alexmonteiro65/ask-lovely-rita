// ASK LOVELY RITA — MASTER QUESTION DATABASE V1
// 184 questions. Music-driven educational entertainment.
// Do not change questionEngine.js when updating this file.

const QUESTION_BANK = [
["0001","Music","Instruments","kids_5_8","easy","Which instrument is commonly played with drumsticks?","Drum","Flute","Violin","Harp",0,"A drum is commonly played with drumsticks.","instruments|percussion"],
["0002","Music","Instruments","kids_5_8","easy","Which instrument has strings and is often strummed?","Guitar","Trumpet","Drum","Flute",0,"A guitar has strings and is often strummed.","instruments|strings"],
["0003","Music","Rhythm","kids_5_8","easy","What do we call the steady pulse you can clap along with in music?","Beat","Melody","Volume","Silence",0,"The beat is the steady pulse of music.","rhythm|beat"],
["0004","Music","Sounds","kids_5_8","easy","Which sound is higher?","A bird singing","A large drum","Thunder","A bass drum",0,"Bird songs often have higher pitches than large drums.","sound|pitch"],
["0005","Music","Songs","kids_5_8","easy","What do we call the words of a song?","Lyrics","Tempo","Beat","Harmony",0,"Lyrics are the words sung in a song.","songs|lyrics"],
["0006","Music","Instruments","kids_5_8","easy","Which instrument is played by blowing air through it?","Flute","Drum","Piano","Violin",0,"A flute makes sound when air is blown through it.","instruments|woodwind"],
["0007","Music","Rhythm","kids_5_8","easy","If you clap one time on every beat, what are you following?","The rhythm","The color","The picture","The lyrics",0,"Clapping with the beat means you are following the rhythm.","rhythm|beat"],
["0008","Music","Instruments","kids_5_8","easy","Which instrument has black and white keys?","Piano","Guitar","Trumpet","Drum",0,"A piano has black and white keys.","instruments|piano"],
["0009","Music","Tempo","kids_5_8","easy","If music gets faster, what happens to its tempo?","It increases","It disappears","It becomes silent","It gets lower",0,"Tempo describes how fast or slow music is played.","tempo|speed"],
["0010","Music","Sounds","kids_5_8","easy","Which animal is famous for making a musical-sounding howl?","Wolf","Fish","Turtle","Rabbit",0,"A wolf is known for its howl.","sounds|animals"],

["0011","Math","Numbers","kids_5_8","easy","What is 2 + 2?","3","4","5","6",1,"Two plus two equals four.","numbers|addition"],
["0012","Math","Numbers","kids_5_8","easy","What number comes after 9?","8","10","11","7",1,"Ten comes after nine.","numbers|counting"],
["0013","Math","Shapes","kids_5_8","easy","How many sides does a triangle have?","2","3","4","5",1,"A triangle has three sides.","shapes|geometry"],
["0014","Math","Numbers","kids_5_8","easy","What is 5 - 2?","2","3","4","7",1,"Five minus two equals three.","numbers|subtraction"],
["0015","Math","Patterns","kids_5_8","easy","What comes next: 2, 4, 6, 8, ?","9","10","11","12",1,"The pattern adds two each time.","patterns|numbers"],
["0016","Math","Shapes","kids_5_8","easy","Which shape is round?","Square","Triangle","Circle","Rectangle",2,"A circle is round.","shapes|geometry"],
["0017","Math","Numbers","kids_5_8","easy","How many fingers are on one hand?","4","5","6","10",1,"A typical human hand has five fingers.","numbers|counting"],
["0018","Math","Money","kids_5_8","easy","If you have two coins and get one more, how many coins do you have?","1","2","3","4",2,"Two plus one equals three.","money|addition"],
["0019","Math","Time","kids_5_8","easy","How many minutes are in one hour?","30","45","60","100",2,"One hour has sixty minutes.","time|measurement"],
["0020","Math","Numbers","kids_5_8","easy","Which number is greater?","3","7","2","1",1,"Seven is greater than three, two, or one.","numbers|comparison"],

["0021","Science","Animals","kids_5_8","easy","Which animal says moo?","Dog","Cow","Cat","Duck",1,"A cow makes a moo sound.","animals|sounds"],
["0022","Science","Plants","kids_5_8","easy","What do plants need from the Sun to help them grow?","Sunlight","Music","Sand","Plastic",0,"Plants use sunlight to make food through photosynthesis.","plants|nature"],
["0023","Science","Earth","kids_5_8","easy","What planet do we live on?","Mars","Earth","Venus","Jupiter",1,"Earth is our home planet.","earth|space"],
["0024","Science","Animals","kids_5_8","easy","Which animal is known for having a long trunk?","Elephant","Lion","Horse","Penguin",0,"Elephants have long trunks.","animals|body"],
["0025","Science","Human Body","kids_5_8","easy","Which body part do you use to hear sounds?","Eyes","Ears","Nose","Hands",1,"We use our ears to hear.","human-body|senses"],
["0026","Science","Weather","kids_5_8","easy","What falls from clouds during rain?","Sand","Water","Leaves","Rocks",1,"Rain is water falling from clouds.","weather|water"],
["0027","Science","Animals","kids_5_8","easy","Which animal can fly?","Elephant","Eagle","Dog","Fish",1,"An eagle is a flying bird.","animals|birds"],
["0028","Science","Space","kids_5_8","easy","What shines in the daytime sky and gives Earth light?","The Moon","The Sun","Mars","A starfish",1,"The Sun provides Earth with light and heat.","space|sun"],
["0029","Science","Animals","kids_5_8","easy","Which animal lives mainly in water?","Fish","Cow","Chicken","Horse",0,"Fish live in water.","animals|water"],
["0030","Science","Nature","kids_5_8","easy","What do we call frozen water?","Steam","Ice","Rain","Cloud",1,"Frozen water is ice.","nature|water"],

["0031","Geography","Earth","kids_5_8","easy","What is the name of the planet we live on?","Earth","Mars","Saturn","Venus",0,"We live on planet Earth.","earth|planet"],
["0032","Geography","Places","kids_5_8","easy","What is a very large body of salt water called?","Ocean","Pond","Puddle","River",0,"An ocean is a very large body of salt water.","water|oceans"],
["0033","Geography","Places","kids_5_8","easy","Which place is usually covered with lots of trees?","Forest","Desert","Airport","Harbor",0,"Forests contain many trees and other plants.","places|nature"],
["0034","Geography","Places","kids_5_8","easy","What do we call land surrounded by water?","Island","Mountain","Valley","Forest",0,"An island is land surrounded by water.","places|islands"],
["0035","Geography","Earth","kids_5_8","easy","Which direction is opposite of north?","East","West","South","Up",2,"South is opposite north.","directions|earth"],
["0036","Geography","Places","kids_5_8","easy","Which place is usually very dry and sandy?","Rainforest","Desert","Lake","River",1,"Deserts are generally very dry and can be sandy.","places|desert"],
["0037","Geography","Maps","kids_5_8","easy","What helps us find places on Earth?","A map","A spoon","A drum","A shoe",0,"Maps help us locate places.","maps|places"],
["0038","Geography","Places","kids_5_8","easy","What is a tall natural landform called?","Mountain","Pond","Island","Road",0,"A mountain is a tall natural landform.","landforms|mountains"],
["0039","Geography","Water","kids_5_8","easy","Which one is a type of moving water?","River","Chair","Cloud","Rock",0,"A river is flowing water.","water|rivers"],
["0040","Geography","Countries","kids_5_8","easy","Which country is famous for the Eiffel Tower?","France","Brazil","India","Canada",0,"The Eiffel Tower is in Paris, France.","countries|landmarks"],

["0041","Smart Mind","Memory","kids_5_8","easy","Which activity can help you remember a rhythm?","Clapping it","Ignoring it","Closing the book","Turning off the sound",0,"Repeating a rhythm by clapping can help memory.","memory|rhythm"],
["0042","Smart Mind","Logic","kids_5_8","easy","If all cats are animals, is a cat an animal?","Yes","No","Only on Tuesday","Maybe",0,"A cat is an animal.","logic|reasoning"],
["0043","Smart Mind","Patterns","kids_5_8","easy","What comes next: red, blue, red, blue, ?","Green","Red","Yellow","Black",1,"The pattern alternates red and blue.","patterns|logic"],
["0044","Smart Mind","Attention","kids_5_8","easy","What sense helps you notice a quiet sound?","Hearing","Taste","Touch","Smell",0,"Hearing helps us notice sounds.","attention|senses"],
["0045","Smart Mind","Memory","kids_5_8","easy","Repeating something several times can help you do what?","Forget it","Remember it","Hide it","Break it",1,"Repetition can strengthen memory.","memory|learning"],

["0046","Life & World","People","kids_5_8","easy","What do we call someone who teaches children?","Teacher","Pilot","Chef","Driver",0,"A teacher helps people learn.","people|learning"],
["0047","Life & World","Community","kids_5_8","easy","Who helps put out fires?","Firefighter","Painter","Singer","Baker",0,"Firefighters respond to fires and emergencies.","community|jobs"],
["0048","Life & World","Health","kids_5_8","easy","Why is drinking water important?","It helps keep the body hydrated","It makes us invisible","It stops time","It changes our hair",0,"Water is essential for the body.","health|water"],
["0049","Life & World","Skills","kids_5_8","easy","What should you do before crossing a street?","Look both ways","Run without looking","Close your eyes","Dance",0,"Looking both ways helps you cross safely.","safety|skills"],
["0050","Life & World","People","kids_5_8","easy","What is a group of people who live near one another often called?","Community","Planet","Instrument","Puzzle",0,"A community is a group of people living or working together.","community|people"],

["0051","Music","Instruments","kids_9_12","easy","Which instrument normally has six strings?","Guitar","Trumpet","Drum","Flute",0,"A standard guitar commonly has six strings.","instruments|guitar"],
["0052","Music","Rhythm","kids_9_12","easy","What is the beat of music most like?","A steady pulse","A color","A picture","A smell",0,"The beat is the steady pulse of music.","rhythm|beat"],
["0053","Music","Tempo","kids_9_12","easy","What does tempo describe?","How fast or slow music is","How tall a singer is","The color of an instrument","The number of lyrics",0,"Tempo describes the speed of music.","tempo|speed"],
["0054","Music","Melody","kids_9_12","easy","What is a melody?","A sequence of musical notes","A type of microphone","A drumstick","A concert ticket",0,"A melody is a sequence of notes that forms a musical idea.","melody|notes"],
["0055","Music","Harmony","kids_9_12","easy","What happens when different notes sound together in a pleasing way?","Harmony","Silence","Static","Echo",0,"Harmony occurs when notes sound together to support a musical idea.","harmony|notes"],
["0056","Music","Instruments","kids_9_12","easy","Which instrument belongs to the brass family?","Trumpet","Violin","Piano","Drum",0,"The trumpet is a brass instrument.","instruments|brass"],
["0057","Music","Instruments","kids_9_12","easy","Which instrument belongs to the string family?","Violin","Trumpet","Flute","Drum",0,"The violin is a string instrument.","instruments|strings"],
["0058","Music","Rhythm","kids_9_12","easy","What is a repeated rhythmic idea called?","Pattern","Map","Paragraph","Compass",0,"Rhythmic patterns repeat recognizable timing ideas.","rhythm|patterns"],
["0059","Music","Songs","kids_9_12","easy","What is a chorus in a song?","A section that often repeats","The instrument case","The concert hall","The microphone cable",0,"A chorus is commonly a repeated section of a song.","songs|chorus"],
["0060","Music","Listening","kids_9_12","easy","What should you use when trying to identify a rhythm?","Careful listening","Guessing randomly","Looking away","Ignoring the sound",0,"Careful listening helps you identify musical patterns.","listening|rhythm"],

["0061","Math","Numbers","kids_9_12","easy","What is 7 + 8?","14","15","16","17",1,"Seven plus eight equals fifteen.","numbers|addition"],
["0062","Math","Multiplication","kids_9_12","easy","What is 3 × 4?","7","10","12","14",2,"Three times four equals twelve.","multiplication|numbers"],
["0063","Math","Fractions","kids_9_12","easy","Which fraction is equal to one half?","1/2","1/3","2/3","3/4",0,"One half is written as 1/2.","fractions|numbers"],
["0064","Math","Geometry","kids_9_12","easy","How many degrees are in a right angle?","45","90","180","360",1,"A right angle measures 90 degrees.","geometry|angles"],
["0065","Math","Patterns","kids_9_12","easy","What comes next: 5, 10, 15, 20, ?","21","25","30","35",1,"The pattern adds five each time.","patterns|numbers"],

["0066","Science","Space","kids_9_12","easy","Which planet is known as the Red Planet?","Earth","Mars","Venus","Neptune",1,"Mars appears reddish because of iron minerals on its surface.","space|planets"],
["0067","Science","Plants","kids_9_12","easy","What gas do plants take in during photosynthesis?","Oxygen","Carbon dioxide","Helium","Hydrogen",1,"Plants use carbon dioxide during photosynthesis.","plants|photosynthesis"],
["0068","Science","Human Body","kids_9_12","easy","Which organ pumps blood through the body?","Lung","Heart","Stomach","Brain",1,"The heart pumps blood through the body.","human-body|heart"],
["0069","Science","Matter","kids_9_12","easy","What happens to water when it freezes?","It becomes ice","It becomes fire","It becomes air","It disappears",0,"Freezing changes liquid water into solid ice.","matter|water"],
["0070","Science","Animals","kids_9_12","easy","Which animal is a mammal?","Dolphin","Shark","Trout","Octopus",0,"Dolphins are mammals.","animals|mammals"],

["0071","Geography","Countries","kids_9_12","easy","What is the capital of France?","Madrid","Paris","Rome","Berlin",1,"Paris is the capital of France.","countries|capitals"],
["0072","Geography","Countries","kids_9_12","easy","Which continent is Brazil in?","Europe","Asia","South America","Africa",2,"Brazil is in South America.","countries|continents"],
["0073","Geography","Continents","kids_9_12","easy","Which is the largest continent?","Africa","Asia","Europe","Australia",1,"Asia is the largest continent by area.","continents|earth"],
["0074","Geography","Oceans","kids_9_12","easy","Which is the largest ocean?","Atlantic","Indian","Pacific","Arctic",2,"The Pacific Ocean is the largest ocean.","oceans|earth"],
["0075","Geography","Maps","kids_9_12","easy","What does a compass help you find?","Directions","Weather","Music","Food",0,"A compass helps determine directions.","maps|directions"],

["0076","Smart Mind","Logic","kids_9_12","easy","If a pattern repeats A-B-A-B, what comes after B?","A","B","C","D",0,"The repeating pattern returns to A.","logic|patterns"],
["0077","Smart Mind","Memory","kids_9_12","easy","Which strategy can help you remember a list?","Grouping related items","Ignoring the list","Changing the subject","Looking away",0,"Grouping related information can make it easier to remember.","memory|learning"],
["0078","Smart Mind","Problem Solving","kids_9_12","easy","What is a good first step when a problem seems difficult?","Break it into smaller parts","Give up immediately","Guess everything","Ignore the problem",0,"Breaking a problem into smaller parts can make it easier to solve.","problem-solving|learning"],
["0079","Smart Mind","Attention","kids_9_12","easy","What helps you concentrate while listening?","Reducing distractions","Adding more noise","Doing five things at once","Ignoring the speaker",0,"Fewer distractions can improve attention.","attention|learning"],
["0080","Smart Mind","Logic","kids_9_12","easy","If today is Monday, what day comes after tomorrow?","Tuesday","Wednesday","Thursday","Sunday",1,"Tomorrow is Tuesday and the day after tomorrow is Wednesday.","logic|time"],

["0081","Life & World","Community","kids_9_12","easy","What does a library provide?","Access to books and information","Only food","Only sports equipment","Only musical instruments",0,"Libraries provide access to books and information.","community|learning"],
["0082","Life & World","Skills","kids_9_12","easy","Why do people work together on a team?","To combine skills and ideas","To make everyone identical","To avoid communication","To stop learning",0,"Teams can combine different skills and ideas.","teamwork|skills"],
["0083","Life & World","Health","kids_9_12","easy","Why is sleep important?","It helps the body and mind recover","It replaces food","It stops growth","It makes time disappear",0,"Sleep supports physical and mental recovery.","health|sleep"],
["0084","Life & World","Environment","kids_9_12","easy","What can recycling help reduce?","Waste","Sunlight","Gravity","Music",0,"Recycling can reduce waste and conserve materials.","environment|recycling"],
["0085","Life & World","Skills","kids_9_12","easy","What is communication?","Sharing information or ideas","Keeping every idea secret","Only writing numbers","Only making music",0,"Communication is the sharing of information or ideas.","communication|skills"],

["0086","Music","History","teens","medium","Which family does the saxophone belong to?","Woodwind","Brass","String","Percussion",0,"The saxophone is classified as a woodwind instrument.","instruments|woodwind"],
["0087","Music","Theory","teens","medium","What does a musical scale organize?","Notes in a sequence","Concert seats","Instrument cases","Microphones",0,"A scale organizes notes in ascending or descending order.","theory|scales"],
["0088","Music","Rhythm","teens","medium","What is syncopation?","Emphasis on unexpected beats","Playing without rhythm","Only playing loudly","Stopping between every note",0,"Syncopation places emphasis on normally weak or unexpected beats.","rhythm|syncopation"],
["0089","Music","Production","teens","medium","What does a microphone primarily do?","Convert sound into an electrical signal","Create sunlight","Tune a guitar automatically","Print sheet music",0,"A microphone converts sound into an electrical signal.","production|audio"],
["0090","Music","Listening","teens","medium","What is dynamics in music?","Changes in loudness","Changes in lyrics","Changes in instrument color","Changes in concert location",0,"Dynamics describe changes in musical loudness.","dynamics|listening"],

["0091","Math","Algebra","teens","medium","If x + 5 = 12, what is x?","5","6","7","8",2,"Subtract five from both sides to get x = 7.","algebra|equations"],
["0092","Math","Percentages","teens","medium","What is 25% of 100?","10","20","25","50",2,"Twenty-five percent of 100 is 25.","percentages|numbers"],
["0093","Math","Geometry","teens","medium","How many degrees are in a straight angle?","90","180","270","360",1,"A straight angle measures 180 degrees.","geometry|angles"],
["0094","Math","Probability","teens","medium","What is the probability of getting heads on a fair coin toss?","1/4","1/3","1/2","1",2,"A fair coin has two equally likely outcomes, so heads is 1/2.","probability|numbers"],
["0095","Math","Algebra","teens","medium","What is 3x when x = 4?","7","12","16","24",1,"Three times four equals twelve.","algebra|multiplication"],

["0096","Science","Physics","teens","medium","What force pulls objects toward Earth?","Magnetism","Gravity","Friction","Electricity",1,"Gravity attracts objects toward Earth.","physics|gravity"],
["0097","Science","Biology","teens","medium","What is the basic unit of life?","Atom","Cell","Organ","Tissue",1,"The cell is the basic unit of life.","biology|cells"],
["0098","Science","Chemistry","teens","medium","What is H2O?","Oxygen","Hydrogen","Water","Salt",2,"H2O is the chemical formula for water.","chemistry|water"],
["0099","Science","Physics","teens","medium","What is speed?","Distance divided by time","Time divided by mass","Mass divided by volume","Force divided by area",0,"Speed is distance traveled divided by time.","physics|motion"],
["0100","Science","Earth","teens","medium","What layer surrounds Earth and contains the air we breathe?","Atmosphere","Core","Mantle","Crust",0,"Earth's atmosphere surrounds the planet and contains its gases.","earth|atmosphere"],

["0101","Geography","Countries","teens","medium","Which country has the largest population?","Canada","India","Australia","Spain",1,"India has the world's largest population in current demographic estimates.","countries|population"],
["0102","Geography","Continents","teens","medium","Which continent contains the Sahara Desert?","Africa","Asia","Europe","South America",0,"The Sahara Desert is in northern Africa.","continents|desert"],
["0103","Geography","Maps","teens","medium","What does latitude measure?","Distance north or south of the equator","Distance east or west of Greenwich","Elevation only","Ocean depth",0,"Latitude measures position north or south of the equator.","maps|latitude"],
["0104","Geography","Maps","teens","medium","What does longitude measure?","Distance north or south","Distance east or west","Temperature","Rainfall",1,"Longitude measures position east or west of the Prime Meridian.","maps|longitude"],
["0105","Geography","Countries","teens","medium","Which country is shaped roughly like a boot?","Italy","Norway","Japan","Egypt",0,"Italy is famously described as boot-shaped.","countries|landforms"],

["0106","Smart Mind","Logic","teens","medium","If every musician in a group reads music and Ana is in the group, what follows?","Ana reads music","Ana is a singer","Ana plays piano","Ana wrote the music",0,"If every member has a property, each member has that property.","logic|reasoning"],
["0107","Smart Mind","Critical Thinking","teens","medium","What is evidence?","Information used to support a claim","A random guess","A personal wish","A question with no answer",0,"Evidence supports or evaluates a claim.","critical-thinking|evidence"],
["0108","Smart Mind","Memory","teens","medium","Why can rhythm help memory?","Patterns can make information easier to recall","Rhythm removes information","Rhythm stops the brain","Rhythm makes facts disappear",0,"Patterns and repetition can support memory.","memory|rhythm"],
["0109","Smart Mind","Problem Solving","teens","medium","What should you do after testing a possible solution?","Evaluate the result","Forget the problem","Change the question","Stop thinking",0,"Evaluating results helps determine whether a solution works.","problem-solving|reasoning"],
["0110","Smart Mind","Critical Thinking","teens","medium","Which statement is an opinion?","Blue is the best color","Water freezes at 0°C under standard conditions","Earth orbits the Sun","A triangle has three sides",0,"An opinion expresses a personal judgment.","critical-thinking|opinion"],

["0111","Life & World","Economics","teens","medium","What is a budget?","A plan for managing money","A type of instrument","A weather forecast","A map",0,"A budget helps plan income and spending.","economics|money"],
["0112","Life & World","Communication","teens","medium","What is empathy?","Understanding another person's feelings or perspective","Winning every argument","Ignoring others","Avoiding communication",0,"Empathy involves understanding another person's feelings or perspective.","people|empathy"],
["0113","Life & World","Health","teens","medium","Which habit generally supports physical health?","Regular physical activity","Never sleeping","Skipping water","Avoiding movement",0,"Regular physical activity supports health.","health|fitness"],
["0114","Life & World","Environment","teens","medium","What is renewable energy?","Energy from sources that can naturally replenish","Energy that can never be used again","Only gasoline","Only coal",0,"Renewable energy comes from sources that naturally replenish.","environment|energy"],
["0115","Life & World","Technology","teens","medium","What is an algorithm?","A step-by-step procedure for solving a problem","A musical instrument","A country","A type of food",0,"An algorithm is a sequence of steps used to accomplish a task.","technology|logic"],

["0116","Music","History","adults","medium","Who composed the Ninth Symphony known for its Ode to Joy?","Beethoven","Mozart","Bach","Chopin",0,"Ludwig van Beethoven composed the Ninth Symphony.","music-history|classical"],
["0117","Music","Theory","adults","medium","What is a chord?","Several notes sounding together","One silent beat","A concert ticket","A microphone stand",0,"A chord consists of multiple notes sounding together.","theory|harmony"],
["0118","Music","Production","adults","medium","What is mixing in music production?","Balancing recorded sounds","Writing a biography","Building an instrument","Selling concert tickets",0,"Mixing balances and shapes recorded tracks.","production|mixing"],
["0119","Music","Songwriting","adults","medium","What is a hook in a song?","A memorable musical or lyrical idea","A microphone cable","A stage light","A drum case",0,"A hook is a memorable musical or lyrical idea.","songwriting|hooks"],
["0120","Music","Culture","adults","medium","What does musical genre describe?","A category or style of music","The length of a guitar string","The price of an album","The size of a stage",0,"Genre describes a category or style of music.","culture|genres"],

["0121","Math","Algebra","adults","medium","If 2x = 18, what is x?","6","7","8","9",3,"Divide both sides by two to get x = 9.","algebra|equations"],
["0122","Math","Percentages","adults","medium","What is 10% of 250?","15","20","25","30",2,"Ten percent of 250 is 25.","percentages|numbers"],
["0123","Math","Geometry","adults","medium","What is the area of a rectangle 5 units by 4 units?","9","16","20","25",2,"Area equals length times width: 5 × 4 = 20.","geometry|area"],
["0124","Math","Probability","adults","medium","What is the probability of rolling a 6 on a fair six-sided die?","1/2","1/4","1/6","1/12",2,"There is one favorable outcome among six equally likely outcomes.","probability|numbers"],
["0125","Math","Logic","adults","medium","If a price rises from $50 to $60, what is the percentage increase?","10%","20%","25%","30%",1,"The increase is $10, which is 20% of $50.","percentages|money"],

["0126","Science","Physics","adults","medium","What is the SI unit of force?","Joule","Newton","Watt","Pascal",1,"The newton is the SI unit of force.","physics|force"],
["0127","Science","Chemistry","adults","medium","What is the pH of a neutral solution at room temperature?","0","5","7","14",2,"A neutral solution has a pH of approximately 7.","chemistry|ph"],
["0128","Science","Biology","adults","medium","Which molecule carries genetic information?","DNA","ATP only","Water","Glucose",0,"DNA carries genetic information in living organisms.","biology|dna"],
["0129","Science","Astronomy","adults","medium","What is a light-year?","A unit of distance","A unit of temperature","A unit of mass","A unit of time",0,"A light-year is the distance light travels in one year.","astronomy|space"],
["0130","Science","Earth","adults","medium","What causes Earth's seasons?","Earth's axial tilt as it orbits the Sun","The Moon changing size","Earth stopping its rotation","Ocean tides alone",0,"Earth's axial tilt causes seasonal changes as it orbits the Sun.","earth|seasons"],

["0131","Geography","Countries","adults","medium","What is the capital of Japan?","Seoul","Tokyo","Beijing","Bangkok",1,"Tokyo is the capital of Japan.","countries|capitals"],
["0132","Geography","Countries","adults","medium","Which river is traditionally associated with ancient Egypt?","Amazon","Nile","Danube","Thames",1,"The Nile was central to ancient Egyptian civilization.","countries|rivers"],
["0133","Geography","Earth","adults","medium","What is the equator?","An imaginary line around Earth's middle","A mountain range","A national border","An ocean current",0,"The equator circles Earth halfway between the poles.","earth|latitude"],
["0134","Geography","Continents","adults","medium","Which continent contains the Andes Mountains?","South America","Europe","Africa","Australia",0,"The Andes run along western South America.","continents|mountains"],
["0135","Geography","Oceans","adults","medium","Which ocean lies between Africa and Australia?","Atlantic","Indian","Arctic","Southern",1,"The Indian Ocean lies between Africa and Australia.","oceans|earth"],

["0136","Smart Mind","Critical Thinking","adults","medium","What is confirmation bias?","Favoring information that supports existing beliefs","Forgetting everything","Learning a new language","Measuring temperature",0,"Confirmation bias can lead people to favor evidence that supports what they already believe.","critical-thinking|bias"],
["0137","Smart Mind","Logic","adults","medium","What is a correlation?","A relationship between variables","A guaranteed cause","A musical scale","A type of equation only",0,"Correlation describes an association between variables; it does not automatically prove causation.","logic|statistics"],
["0138","Smart Mind","Learning","adults","medium","Why can teaching something help you understand it better?","Explaining requires organizing your knowledge","Teaching removes knowledge","Teaching prevents questions","Teaching replaces practice",0,"Explaining information forces you to organize and retrieve what you know.","learning|memory"],
["0139","Smart Mind","Problem Solving","adults","medium","What is a hypothesis?","A testable explanation or prediction","A proven fact","A random noise","A musical instrument",0,"A hypothesis is a testable proposed explanation or prediction.","science|reasoning"],
["0140","Smart Mind","Attention","adults","medium","Why can multitasking reduce performance?","Attention is divided between tasks","The brain becomes larger","Tasks become shorter","Memory becomes perfect",0,"Dividing attention can reduce performance and increase errors.","attention|learning"],

["0141","Life & World","Economics","adults","medium","What is inflation?","A general rise in prices over time","A fall in population","A type of music","A weather event",0,"Inflation is a sustained increase in the general price level.","economics|money"],
["0142","Life & World","Communication","adults","medium","What is active listening?","Paying attention and showing understanding","Waiting for your turn to talk","Ignoring the speaker","Changing the subject",0,"Active listening involves attention and demonstrating understanding.","communication|listening"],
["0143","Life & World","Environment","adults","medium","What is biodiversity?","The variety of living organisms","The amount of rainfall","The speed of wind","The number of roads",0,"Biodiversity refers to the variety of life in an ecosystem or on Earth.","environment|nature"],
["0144","Life & World","Technology","adults","medium","What is artificial intelligence generally designed to do?","Perform tasks associated with human intelligence","Replace all electricity","Create gravity","Stop computers from working",0,"AI systems are designed to perform tasks that can involve learning, reasoning, perception, or language.","technology|ai"],
["0145","Life & World","Health","adults","medium","Why is regular sleep important for adults?","It supports physical and cognitive functioning","It eliminates the need for food","It prevents all illness","It stops aging",0,"Adequate sleep supports health, cognition, and daily functioning.","health|sleep"],

["0146","Music","Culture","teens","medium","What is a remix?","A new version that reworks an existing recording","A silent recording","A type of microphone","A music lesson only",0,"A remix reworks elements of an existing recording.","music|remix"],
["0147","Music","Technology","teens","medium","What does MIDI primarily communicate?","Musical performance information","Video images","Internet passwords","Printed lyrics",0,"MIDI communicates musical information such as notes, timing, and control data.","technology|midi"],
["0148","Music","Rhythm","adults","medium","What does a time signature tell musicians?","How beats are organized in measures","The singer's age","The concert price","The instrument's weight",0,"A time signature describes how beats are organized into measures.","theory|rhythm"],
["0149","Music","Harmony","adults","medium","What is consonance generally associated with?","Stable or pleasing combinations of notes","Only very loud sounds","Silence","Random noise",0,"Consonance generally refers to stable or pleasing relationships between pitches.","harmony|theory"],
["0150","Music","Performance","adults","medium","What does an ensemble require from musicians?","Coordination and listening","Everyone playing independently","No rhythm","No communication",0,"Ensemble performance depends heavily on coordination and listening.","performance|teamwork"],

["0151","Math","Algebra","adults","hard","If 3x + 4 = 19, what is x?","3","4","5","6",2,"Subtract four and divide by three: x = 5.","algebra|equations"],
["0152","Math","Geometry","adults","hard","What is the circumference of a circle with radius r?","πr","2πr","πr²","4πr",1,"The circumference of a circle is 2πr.","geometry|circles"],
["0153","Math","Statistics","adults","hard","What is the median of 2, 4, 7, 9, 12?","4","6","7","9",2,"The middle value in the ordered list is 7.","statistics|median"],
["0154","Math","Probability","adults","hard","If two fair coins are tossed, what is the probability of getting two heads?","1/2","1/3","1/4","3/4",2,"There are four equally likely outcomes and only one is two heads.","probability|coins"],
["0155","Math","Logic","adults","hard","If a statement is true and its negation is considered, what must the negation be?","True","False","Both","Unknown",1,"In classical logic, the negation of a true statement is false.","logic|reasoning"],

["0156","Science","Physics","adults","hard","What does acceleration measure?","Change in velocity over time","Distance only","Mass over volume","Temperature over time",0,"Acceleration is the rate of change of velocity.","physics|motion"],
["0157","Science","Chemistry","adults","hard","What does an atom's atomic number represent?","Number of protons","Number of neutrons only","Total molecules","Number of bonds only",0,"Atomic number equals the number of protons in the nucleus.","chemistry|atoms"],
["0158","Science","Biology","adults","hard","What organelle is primarily responsible for cellular respiration?","Nucleus","Mitochondrion","Ribosome","Cell wall",1,"Mitochondria are central to cellular respiration in eukaryotic cells.","biology|cells"],
["0159","Science","Earth","adults","hard","What drives most weather on Earth?","Solar energy","Moonlight alone","Earth's core alone","Starlight",0,"Solar energy drives atmospheric circulation and many weather processes.","earth|weather"],
["0160","Science","Astronomy","adults","hard","What is a galaxy?","A large system of stars, gas, dust, and dark matter","A single planet","A single moon","A type of asteroid",0,"A galaxy contains enormous numbers of stars along with gas, dust, and dark matter.","astronomy|galaxies"],

["0161","Geography","Earth","adults","hard","What is a tectonic plate?","A large moving section of Earth's lithosphere","A weather system","An ocean wave","A type of cloud",0,"Tectonic plates are large sections of Earth's lithosphere that move over time.","earth|geology"],
["0162","Geography","Climate","adults","hard","What is climate?","Long-term patterns of weather","One afternoon's temperature","A single storm","A daily forecast",0,"Climate describes long-term patterns of weather in a region.","climate|weather"],
["0163","Geography","Population","adults","hard","What is population density?","People per unit of area","Births per country only","Total land area","Number of mountains",0,"Population density measures how many people live within a given area.","population|geography"],
["0164","Geography","Maps","adults","hard","What does a map scale represent?","The relationship between map distance and real distance","Elevation only","Temperature only","Population only",0,"A map scale relates distances on the map to distances in the real world.","maps|scale"],
["0165","Geography","Economics","adults","hard","What is globalization?","Increasing worldwide interconnectedness","A type of mountain","A local weather pattern","A musical scale",0,"Globalization describes growing connections among economies, societies, and cultures.","globalization|world"],

["0166","Smart Mind","Critical Thinking","adults","hard","Why does correlation not necessarily imply causation?","Two variables can move together without one causing the other","Correlation always means causation","Causes never exist","Statistics cannot be used",0,"An association between variables does not by itself establish a causal relationship.","critical-thinking|statistics"],
["0167","Smart Mind","Logic","adults","hard","What is a logical fallacy?","An error in reasoning","A musical note","A scientific instrument","A type of map",0,"A logical fallacy is a flaw in reasoning.","logic|critical-thinking"],
["0168","Smart Mind","Memory","adults","hard","What is spaced repetition?","Reviewing information at increasing intervals","Reading once","Never reviewing","Repeating everything continuously",0,"Spaced repetition schedules reviews over increasing intervals to support long-term retention.","memory|learning"],
["0169","Smart Mind","Problem Solving","adults","hard","What is a useful way to test a proposed solution?","Define a measurable outcome","Avoid evidence","Change the problem","Assume it worked",0,"A measurable outcome allows you to evaluate whether the solution worked.","problem-solving|evidence"],
["0170","Smart Mind","Creativity","adults","hard","What is divergent thinking?","Generating multiple possible ideas","Choosing one answer immediately","Memorizing one fact","Avoiding alternatives",0,"Divergent thinking generates multiple possibilities or solutions.","creativity|thinking"],

["0171","Life & World","Economics","adults","hard","What is opportunity cost?","The value of the next best alternative given up","The price of every item","A type of tax","Free money",0,"Opportunity cost is what you give up by choosing one option over another.","economics|decision-making"],
["0172","Life & World","Communication","adults","hard","What is confirmation bias likely to affect?","How people evaluate information","The speed of sound","The length of a day","Gravity",0,"Confirmation bias can influence how people seek and evaluate information.","communication|bias"],
["0173","Life & World","Technology","adults","hard","What is encryption used for?","Protecting information by encoding it","Increasing screen brightness","Creating gravity","Measuring rainfall",0,"Encryption transforms information so unauthorized users cannot easily read it.","technology|security"],
["0174","Life & World","Environment","adults","hard","What is an ecosystem?","Organisms interacting with each other and their environment","A single animal","Only a forest","Only the atmosphere",0,"An ecosystem includes living organisms and their physical environment interacting together.","environment|ecosystems"],
["0175","Life & World","Skills","adults","hard","What is media literacy?","The ability to critically understand and evaluate media","The ability to play every instrument","The ability to run quickly","The ability to memorize every song",0,"Media literacy involves understanding, evaluating, and creating media critically.","media|critical-thinking"],

["0176","Music","Learning","kids_5_8","easy","What can singing a number song help you practice?","Counting","Sleeping","Swimming","Painting",0,"Songs can make counting practice playful and memorable.","music|math"],
["0177","Music","Learning","kids_9_12","easy","Why can a rhythm game help with learning?","It combines attention, timing, and memory","It removes the need to think","It makes every answer correct","It stops learning",0,"Rhythm games can combine timing, attention, memory, and playful practice.","music|learning"],
["0178","Music","Learning","teens","medium","Why might a melody help someone remember information?","Melody can provide a memorable pattern","Melody makes facts automatically true","Melody replaces understanding","Melody prevents repetition",0,"Melody can create memorable patterns that support recall.","music|memory"],
["0179","Music","Learning","adults","medium","Why is music useful as a learning medium?","It can engage attention, emotion, pattern, and memory","It guarantees everyone learns identically","It eliminates practice","It replaces all other forms of learning",0,"Music can engage multiple cognitive and emotional pathways while supporting learning.","music|learning"],
["0180","Music","Culture","adults","medium","Why can music help us understand different cultures?","Music reflects history, traditions, and social experiences","Music exists without cultural context","Music is identical everywhere","Music has no connection to people",0,"Music can express cultural history, traditions, identity, and shared experiences.","music|culture"],

["0181","Music","Listening","kids_5_8","easy","If Rita plays four beats and asks you to tap along, what skill are you practicing?","Listening and timing","Spelling only","Geography only","Cooking",0,"Tapping along practices listening, timing, and rhythm.","music|timing"],
["0182","Music","Listening","kids_9_12","easy","When you listen carefully for a repeating sound, what are you identifying?","A pattern","A country","A fraction","A temperature",0,"Repeated sounds form recognizable patterns.","music|patterns"],
["0183","Music","Learning","teens","medium","What makes Rita different from a traditional quiz app?","Learning can connect with music, play, listening, and discovery","It only asks math questions","It removes entertainment","It teaches only one subject",0,"Ask Lovely Rita connects knowledge with music-driven entertainment and interactive discovery.","music|learning|identity"],
["0184","Music","Learning","adults","medium","What is the central idea behind Ask Lovely Rita?","Learn and grow through music, knowledge, games, questions, audio, and visual experiences","Study only mathematics","Listen to music without learning","Answer the same question repeatedly",0,"Ask Lovely Rita is designed as a music educational entertainment platform where learning and discovery meet.","music|learning|platform"]
];

function expand(q) {
  return {
    id: q[0],
    world: q[1],
    subcategory: q[2],
    ageGroup: q[3],
    difficulty: q[4],
    question: q[5],
    answers: q.slice(6, 10),
    correct: q[10],
    explanation: q[11],
    tags: q[12].split("|")
  };
}

const QUESTIONS = QUESTION_BANK.map(expand);

export function getQuestions({
  world = null,
  subcategory = null,
  ageGroup = null,
  difficulty = null,
} = {}) {
  return QUESTIONS.filter(q =>
    (!world || q.world === world) &&
    (!subcategory || q.subcategory === subcategory) &&
    (!ageGroup || q.ageGroup === ageGroup) &&
    (!difficulty || q.difficulty === difficulty)
  );
}

export function getAllQuestions() {
  return [...QUESTIONS];
}

export function getQuestionStats() {
  return {
    totalQuestions: QUESTIONS.length,
    worlds: [...new Set(QUESTIONS.map(q => q.world))],
    subcategories: [...new Set(QUESTIONS.map(q => q.subcategory))],
    ageGroups: [...new Set(QUESTIONS.map(q => q.ageGroup))],
    difficulties: [...new Set(QUESTIONS.map(q => q.difficulty))]
  };
}

export default QUESTIONS;
