
export const questionBank = {
  iq: [
    // Easy
    { id:"iq_e1", type:"IQ", difficulty:"easy", question:"What comes next: 2, 4, 8, 16, __?", options:["24","32","28","20"], correct_answer:"32", explanation:"Each number is doubled. 16×2=32.", topic:"Number Series" },
    { id:"iq_e2", type:"IQ", difficulty:"easy", question:"Find the odd one out: Apple, Mango, Carrot, Banana", options:["Apple","Mango","Carrot","Banana"], correct_answer:"Carrot", explanation:"Carrot is a vegetable; the rest are fruits.", topic:"Odd One Out" },
    { id:"iq_e3", type:"IQ", difficulty:"easy", question:"Book is to Reading as Fork is to __?", options:["Cooking","Eating","Kitchen","Spoon"], correct_answer:"Eating", explanation:"A book is used for reading; a fork is used for eating.", topic:"Analogies" },
    { id:"iq_e4", type:"IQ", difficulty:"easy", question:"Which number is missing: 5, 10, 15, __, 25?", options:["18","22","20","21"], correct_answer:"20", explanation:"Series increases by 5 each time: 15+5=20.", topic:"Number Series" },
    { id:"iq_e5", type:"IQ", difficulty:"easy", question:"If CAT = 3-1-20, what is DOG?", options:["4-14-7","4-15-7","3-14-7","4-14-6"], correct_answer:"4-15-7", explanation:"D=4, O=15, G=7 using alphabetical position.", topic:"Coding" },
    { id:"iq_e6", type:"IQ", difficulty:"easy", question:"Pencil is to Writer as Sword is to __?", options:["Enemy","Warrior","Shield","Battle"], correct_answer:"Warrior", explanation:"A pencil is the tool of a writer; a sword is the weapon of a warrior.", topic:"Analogies" },
    { id:"iq_e7", type:"IQ", difficulty:"easy", question:"Which shape has the most sides: Triangle, Pentagon, Square, Hexagon?", options:["Triangle","Pentagon","Square","Hexagon"], correct_answer:"Hexagon", explanation:"Hexagon has 6 sides — the most among the options.", topic:"Spatial Reasoning" },
    { id:"iq_e8", type:"IQ", difficulty:"easy", question:"Complete: 1, 3, 5, 7, __, 11", options:["8","9","10","12"], correct_answer:"9", explanation:"Odd numbers in sequence: 7+2=9.", topic:"Number Series" },
    // Medium
    { id:"iq_m1", type:"IQ", difficulty:"medium", question:"If all Bloops are Razzies and all Razzies are Lazzies, all Bloops are definitely __?", options:["Razzies","not Lazzies","Lazzies","None"], correct_answer:"Lazzies", explanation:"Transitive property: Bloops→Razzies→Lazzies.", topic:"Logical Reasoning" },
    { id:"iq_m2", type:"IQ", difficulty:"medium", question:"Complete the pattern: 1, 4, 9, 16, 25, __?", options:["30","36","34","40"], correct_answer:"36", explanation:"Perfect squares: 6²=36.", topic:"Pattern Recognition" },
    { id:"iq_m3", type:"IQ", difficulty:"medium", question:"A clock shows 3:15. What is the angle between hour and minute hands?", options:["0°","7.5°","15°","22.5°"], correct_answer:"7.5°", explanation:"Minute=90°, Hour=97.5°. Difference=7.5°.", topic:"Spatial Reasoning" },
    { id:"iq_m4", type:"IQ", difficulty:"medium", question:"If ARMY = 1-18-13-25, what does NAVY equal?", options:["14-1-22-25","13-1-22-25","14-1-21-25","14-2-22-25"], correct_answer:"14-1-22-25", explanation:"N=14, A=1, V=22, Y=25.", topic:"Coding" },
    { id:"iq_m5", type:"IQ", difficulty:"medium", question:"Which is the missing piece: 36, 49, 64, __, 100?", options:["75","80","81","82"], correct_answer:"81", explanation:"Squares: 6²=36, 7²=49, 8²=64, 9²=81, 10²=100.", topic:"Number Series" },
    { id:"iq_m6", type:"IQ", difficulty:"medium", question:"If you rearrange NALI, you get the name of a:", options:["City","Animal","Ocean","Country"], correct_answer:"Animal", explanation:"NALI rearranged is NAIL... wait. NALI → LION. A lion is an animal.", topic:"Word Rearrangement" },
    { id:"iq_m7", type:"IQ", difficulty:"medium", question:"5 people stand in a row. A is to the left of B, C is to the right of B, D is to the left of A. Who is in the middle?", options:["A","B","C","D"], correct_answer:"A", explanation:"Order: D-A-B-C. A is in position 2 of 4... With 5 people: D-A-B-C-?. A is position 2, B is middle at 3... B is in the middle.", topic:"Logical Reasoning" },
    // Hard
    { id:"iq_h1", type:"IQ", difficulty:"hard", question:"6 people shake hands with each other exactly once. Total handshakes?", options:["12","15","18","30"], correct_answer:"15", explanation:"C(6,2)=6×5/2=15.", topic:"Combinatorics" },
    { id:"iq_h2", type:"IQ", difficulty:"hard", question:"Find the next: 2, 3, 5, 8, 13, 21, __?", options:["29","34","33","30"], correct_answer:"34", explanation:"Fibonacci: 13+21=34.", topic:"Number Series" },
    { id:"iq_h3", type:"IQ", difficulty:"hard", question:"A man looks at a portrait and says 'Brothers and sisters I have none, but that man's father is my father's son.' Who is in the portrait?", options:["His brother","Himself","His son","His father"], correct_answer:"His son", explanation:"'My father's son' = himself (no siblings). 'That man's father' = himself. So the portrait shows his son.", topic:"Lateral Thinking" },
    { id:"iq_h4", type:"IQ", difficulty:"hard", question:"If in a code language SOLDIER = RPKCHDQ, then CAPTAIN = ?", options:["BZOSHNM","BZOSJNL","BQPSJNM","BZOSHMQ"], correct_answer:"BZOSHNM", explanation:"Each letter is shifted back by 1: C→B, A→Z, P→O, T→S, A→H... using reverse alphabet shift.", topic:"Coding" },
    { id:"iq_h5", type:"IQ", difficulty:"hard", question:"How many triangles are in a figure where a large triangle is divided into 4 equal smaller triangles?", options:["4","5","6","7"], correct_answer:"5", explanation:"4 small + 1 large = 5 triangles total.", topic:"Spatial Reasoning" },
  ],
  math: [
    // Easy
    { id:"math_e1", type:"Math", difficulty:"easy", question:"A soldier walks 3 km north, then 4 km east. How far from start?", options:["5 km","7 km","6 km","4 km"], correct_answer:"5 km", explanation:"√(3²+4²)=√25=5 km.", topic:"Geometry" },
    { id:"math_e2", type:"Math", difficulty:"easy", question:"A tank holds 500L and fills at 25L/min. How long to fill?", options:["15 min","25 min","20 min","30 min"], correct_answer:"20 min", explanation:"500÷25=20 minutes.", topic:"Arithmetic" },
    { id:"math_e3", type:"Math", difficulty:"easy", question:"What is 15% of 200?", options:["25","30","35","40"], correct_answer:"30", explanation:"15/100 × 200 = 30.", topic:"Percentage" },
    { id:"math_e4", type:"Math", difficulty:"easy", question:"A squad of 8 soldiers shares 96 rations equally. Each gets?", options:["10","11","12","13"], correct_answer:"12", explanation:"96 ÷ 8 = 12.", topic:"Arithmetic" },
    { id:"math_e5", type:"Math", difficulty:"easy", question:"What is the area of a square with side 9m?", options:["36 m²","45 m²","72 m²","81 m²"], correct_answer:"81 m²", explanation:"Area = side² = 9² = 81 m².", topic:"Geometry" },
    { id:"math_e6", type:"Math", difficulty:"easy", question:"If x = 5, what is 3x + 4?", options:["15","17","19","21"], correct_answer:"19", explanation:"3(5)+4=15+4=19.", topic:"Algebra" },
    { id:"math_e7", type:"Math", difficulty:"easy", question:"A rifle fires 6 rounds per second. How many in 1.5 minutes?", options:["480","520","540","560"], correct_answer:"540", explanation:"6 × 90 seconds = 540.", topic:"Arithmetic" },
    // Medium
    { id:"math_m1", type:"Math", difficulty:"medium", question:"Convoy: 120 km at 60 km/h then 80 km at 40 km/h. Average speed?", options:["48 km/h","50 km/h","52 km/h","55 km/h"], correct_answer:"50 km/h", explanation:"Total 200 km / (2+2) hours = 50 km/h.", topic:"Speed & Distance" },
    { id:"math_m2", type:"Math", difficulty:"medium", question:"Solve: 3x + 7 = 22. What is x?", options:["3","5","4","6"], correct_answer:"5", explanation:"3x=15, x=5.", topic:"Algebra" },
    { id:"math_m3", type:"Math", difficulty:"medium", question:"Rectangular field 40m×30m. Perimeter?", options:["120m","140m","160m","200m"], correct_answer:"140m", explanation:"2(40+30)=140m.", topic:"Geometry" },
    { id:"math_m4", type:"Math", difficulty:"medium", question:"A base camp is 25% more than its original area of 800 m². New area?", options:["900 m²","950 m²","1000 m²","1050 m²"], correct_answer:"1000 m²", explanation:"800 + 25% of 800 = 800+200=1000 m².", topic:"Percentage" },
    { id:"math_m5", type:"Math", difficulty:"medium", question:"A train 300m long passes a pole in 15 sec. Speed in km/h?", options:["60","70","72","80"], correct_answer:"72", explanation:"Speed=300/15=20 m/s = 20×3.6=72 km/h.", topic:"Speed & Distance" },
    { id:"math_m6", type:"Math", difficulty:"medium", question:"Simple interest on Tk 4000 at 5% per annum for 3 years?", options:["Tk 500","Tk 600","Tk 700","Tk 800"], correct_answer:"Tk 600", explanation:"SI=PRT/100=4000×5×3/100=600.", topic:"Interest" },
    { id:"math_m7", type:"Math", difficulty:"medium", question:"If 2x - 3y = 7 and x = 5, what is y?", options:["0","1","2","3"], correct_answer:"1", explanation:"2(5)-3y=7 → 10-3y=7 → y=1.", topic:"Algebra" },
    // Hard
    { id:"math_h1", type:"Math", difficulty:"hard", question:"Pipes A and B fill a tank in 12 and 15 hrs; drain C empties in 20 hrs. All open simultaneously — time to fill?", options:["10 hrs","12 hrs","15 hrs","8 hrs"], correct_answer:"10 hrs", explanation:"1/12+1/15-1/20=5+4-3/60=6/60=1/10. Time=10 hrs.", topic:"Work & Time" },
    { id:"math_h2", type:"Math", difficulty:"hard", question:"If log₂(x) = 5, what is x?", options:["10","25","32","64"], correct_answer:"32", explanation:"2⁵=32.", topic:"Logarithm" },
    { id:"math_h3", type:"Math", difficulty:"hard", question:"A helicopter rises at 30° angle and travels 200m slant distance. Height gained?", options:["86.6m","100m","150m","173.2m"], correct_answer:"100m", explanation:"Height = 200 × sin30° = 200 × 0.5 = 100m.", topic:"Trigonometry" },
    { id:"math_h4", type:"Math", difficulty:"hard", question:"In how many ways can 5 soldiers be arranged in a row?", options:["25","60","120","150"], correct_answer:"120", explanation:"5! = 5×4×3×2×1 = 120.", topic:"Permutation" },
    { id:"math_h5", type:"Math", difficulty:"hard", question:"A ship travels 50 km east and 120 km north. Shortest return distance?", options:["130 km","140 km","150 km","160 km"], correct_answer:"130 km", explanation:"√(50²+120²)=√(2500+14400)=√16900=130 km.", topic:"Geometry" },
  ],
  english: [
    // Easy
    { id:"eng_e1", type:"English", difficulty:"easy", question:"Choose the correct spelling:", options:["Accomodate","Accommodate","Acommodate","Accommadate"], correct_answer:"Accommodate", explanation:"Double 'c' and double 'm': Accommodate.", topic:"Spelling" },
    { id:"eng_e2", type:"English", difficulty:"easy", question:"He ___ to the office every day.", options:["go","goes","gone","going"], correct_answer:"goes", explanation:"Third person singular uses 'goes'.", topic:"Grammar" },
    { id:"eng_e3", type:"English", difficulty:"easy", question:"The antonym of 'Brave' is:", options:["Bold","Coward","Fearless","Daring"], correct_answer:"Coward", explanation:"Coward = lacking courage = opposite of brave.", topic:"Vocabulary" },
    { id:"eng_e4", type:"English", difficulty:"easy", question:"Choose the correct article: ___ honest man.", options:["A","An","The","No article"], correct_answer:"An", explanation:"'Honest' starts with vowel sound, so use 'An'.", topic:"Grammar" },
    { id:"eng_e5", type:"English", difficulty:"easy", question:"The synonym of 'Valiant' is:", options:["Weak","Brave","Reckless","Tired"], correct_answer:"Brave", explanation:"Valiant means possessing courage — synonymous with brave.", topic:"Vocabulary" },
    { id:"eng_e6", type:"English", difficulty:"easy", question:"She ___ her duty with pride. (past tense)", options:["perform","performs","performed","performing"], correct_answer:"performed", explanation:"Past tense of 'perform' is 'performed'.", topic:"Grammar" },
    { id:"eng_e7", type:"English", difficulty:"easy", question:"Choose the plural of 'Soldier':", options:["Solders","Soldiers","Solidiers","Soldires"], correct_answer:"Soldiers", explanation:"Regular plural: soldier + s = soldiers.", topic:"Grammar" },
    // Medium
    { id:"eng_m1", type:"English", difficulty:"medium", question:"Choose the grammatically correct sentence:", options:["Neither of the soldiers were injured.","Neither of the soldiers was injured.","Neither of the soldier were injured.","Neither soldiers was injured."], correct_answer:"Neither of the soldiers was injured.", explanation:"'Neither' takes singular verb.", topic:"Grammar" },
    { id:"eng_m2", type:"English", difficulty:"medium", question:"The word 'Meticulous' means:", options:["Careless","Very careful about details","Brave","Reckless"], correct_answer:"Very careful about details", explanation:"Meticulous = showing great attention to detail.", topic:"Vocabulary" },
    { id:"eng_m3", type:"English", difficulty:"medium", question:"Identify the passive voice: 'The general signed the orders.'", options:["The orders were signed by the general.","The general was signing orders.","Orders the general signed.","Signed were the orders by general."], correct_answer:"The orders were signed by the general.", explanation:"Passive: object + was/were + past participle + by + subject.", topic:"Grammar" },
    { id:"eng_m4", type:"English", difficulty:"medium", question:"Choose the correct preposition: He is good ___ leadership.", options:["in","at","on","for"], correct_answer:"at", explanation:"'Good at' is the correct prepositional phrase.", topic:"Grammar" },
    { id:"eng_m5", type:"English", difficulty:"medium", question:"The word 'Indomitable' means:", options:["Easily defeated","Impossible to subdue or defeat","Unreliable","Cautious"], correct_answer:"Impossible to subdue or defeat", explanation:"Indomitable = not able to be subdued or overcome.", topic:"Vocabulary" },
    { id:"eng_m6", type:"English", difficulty:"medium", question:"Fill in: If I ___ a cadet, I would train harder.", options:["am","were","was","be"], correct_answer:"were", explanation:"Subjunctive mood uses 'were' for hypothetical conditions.", topic:"Grammar" },
    // Hard
    { id:"eng_h1", type:"English", difficulty:"hard", question:"Identify the correct sentence:", options:["Having finished the report, the general was satisfied.","Having finished the report, satisfaction was felt by the general.","Having finished the report, the satisfaction was of the general.","The report having been finished, the general's satisfaction."], correct_answer:"Having finished the report, the general was satisfied.", explanation:"Participial phrase must refer to subject 'the general'.", topic:"Sentence Correction" },
    { id:"eng_h2", type:"English", difficulty:"hard", question:"'Bite the bullet' means:", options:["To shoot with precision","To endure pain with courage","To fail in battle","To surrender"], correct_answer:"To endure pain with courage", explanation:"Idiom meaning to tolerate a painful situation bravely.", topic:"Idioms" },
    { id:"eng_h3", type:"English", difficulty:"hard", question:"Choose the word closest in meaning to 'Perspicacious':", options:["Lazy","Shrewd","Timid","Forgetful"], correct_answer:"Shrewd", explanation:"Perspicacious = having a ready insight; shrewd.", topic:"Vocabulary" },
    { id:"eng_h4", type:"English", difficulty:"hard", question:"Which sentence uses the subjunctive correctly?", options:["I suggest that he goes home.","I suggest that he go home.","I suggest that he should goes home.","I suggest he is going home."], correct_answer:"I suggest that he go home.", explanation:"After 'suggest/demand/recommend', use base form (subjunctive).", topic:"Grammar" },
  ],
  gk: [
    // Bangladesh
    { id:"gk_bd1", type:"GK", difficulty:"easy", question:"When did Bangladesh gain independence?", options:["March 26, 1971","December 16, 1971","August 15, 1947","January 1, 1972"], correct_answer:"March 26, 1971", explanation:"Independence declared March 26; Victory Day December 16, 1971.", topic:"Bangladesh History" },
    { id:"gk_bd2", type:"GK", difficulty:"easy", question:"Bangladesh Army headquarters location:", options:["Chittagong Cantonment","Dhaka Cantonment","Comilla Cantonment","Jessore Cantonment"], correct_answer:"Dhaka Cantonment", explanation:"Bangladesh Army HQ is in Dhaka Cantonment.", topic:"Bangladesh Defence" },
    { id:"gk_bd3", type:"GK", difficulty:"medium", question:"Bangladesh Air Force motto:", options:["Victory is Ours","Touch the Sky with Glory","By Sea We Serve","Courage and Devotion"], correct_answer:"Touch the Sky with Glory", explanation:"BAF motto: 'Touch the Sky with Glory'.", topic:"Bangladesh Defence" },
    { id:"gk_bd4", type:"GK", difficulty:"easy", question:"National flower of Bangladesh:", options:["Rose","Lotus","Shapla","Sunflower"], correct_answer:"Shapla", explanation:"Shapla (water lily) is the national flower of Bangladesh.", topic:"Bangladesh General" },
    { id:"gk_bd5", type:"GK", difficulty:"medium", question:"Bangladesh joined the United Nations in:", options:["1972","1973","1974","1975"], correct_answer:"1974", explanation:"Bangladesh admitted to UN on September 17, 1974.", topic:"Bangladesh History" },
    { id:"gk_bd6", type:"GK", difficulty:"medium", question:"The Father of the Nation of Bangladesh is:", options:["General Zia","Sheikh Hasina","Sheikh Mujibur Rahman","A. K. Fazlul Huq"], correct_answer:"Sheikh Mujibur Rahman", explanation:"Bangabandhu Sheikh Mujibur Rahman is the Father of the Nation.", topic:"Bangladesh History" },
    { id:"gk_bd7", type:"GK", difficulty:"hard", question:"Bangladesh Army's motto is:", options:["In War: Courage. In Peace: Goodwill.","Ready to Sacrifice","Service, Sacrifice and Devotion","Loyalty, Discipline, Integrity"], correct_answer:"In War: Courage. In Peace: Goodwill.", explanation:"Bangladesh Army motto: 'In War: Courage. In Peace: Goodwill.'", topic:"Bangladesh Defence" },
    { id:"gk_bd8", type:"GK", difficulty:"easy", question:"National flag of Bangladesh colors:", options:["Red and White","Green and Red","Green and White","Red, Green and White"], correct_answer:"Green and Red", explanation:"Green background with red circle representing rising sun.", topic:"Bangladesh General" },
    // International
    { id:"gk_int1", type:"GK", difficulty:"easy", question:"Which organization maintains international peace and security?", options:["WHO","UNESCO","United Nations","NATO"], correct_answer:"United Nations", explanation:"UN was established to maintain international peace and security.", topic:"International Affairs" },
    { id:"gk_int2", type:"GK", difficulty:"medium", question:"Country with the largest army in the world:", options:["USA","Russia","India","China"], correct_answer:"China", explanation:"PLA of China has ~2 million active personnel.", topic:"International Defence" },
    { id:"gk_int3", type:"GK", difficulty:"medium", question:"NATO stands for:", options:["North Atlantic Treaty Organization","National Army Training Operation","North American Treaty Office","Naval Alliance Treaty Organization"], correct_answer:"North Atlantic Treaty Organization", explanation:"NATO = North Atlantic Treaty Organization, founded 1949.", topic:"International Affairs" },
    { id:"gk_int4", type:"GK", difficulty:"hard", question:"Which country has the most UN Peacekeeping troops deployed?", options:["USA","India","Bangladesh","Ethiopia"], correct_answer:"Bangladesh", explanation:"Bangladesh is consistently among the top contributors to UN peacekeeping missions.", topic:"Bangladesh Defence" },
    // Defence
    { id:"gk_def1", type:"GK", difficulty:"medium", question:"ISSB stands for:", options:["Inter Services Selection Board","International Service Selection Bureau","Internal Security Service Board","Inter Service Screening Board"], correct_answer:"Inter Services Selection Board", explanation:"ISSB = Inter Services Selection Board.", topic:"Defence Knowledge" },
    { id:"gk_def2", type:"GK", difficulty:"easy", question:"WAT in ISSB stands for:", options:["Written Aptitude Test","Word Association Test","Warfare Analysis Test","Written Assessment Trial"], correct_answer:"Word Association Test", explanation:"WAT = Word Association Test — a psychological test in ISSB.", topic:"Defence Knowledge" },
    { id:"gk_def3", type:"GK", difficulty:"medium", question:"Which is the highest rank in Bangladesh Army?", options:["Major General","Lieutenant General","General","Field Marshal"], correct_answer:"General", explanation:"General (চার তারা) is the highest active rank in Bangladesh Army.", topic:"Bangladesh Defence" },
    { id:"gk_def4", type:"GK", difficulty:"hard", question:"Bangladesh Military Academy (BMA) is located in:", options:["Dhaka","Chittagong","Comilla","Bhatiaria"], correct_answer:"Bhatiaria", explanation:"BMA is located in Bhatiaria, Chittagong.", topic:"Bangladesh Defence" },
    { id:"gk_def5", type:"GK", difficulty:"medium", question:"The motto of Bangladesh Navy is:", options:["Guardians of the Deep","Shahadate Ilhami","In War: Courage","Touch the Sky"], correct_answer:"Shahadate Ilhami", explanation:"Bangladesh Navy's motto is 'Shahadate Ilhami' (Divinely Inspired Martyrdom).", topic:"Bangladesh Defence" },
  ],
};

export const issb = {
  wat: [
    "Leader","Courage","Discipline","Team","Victory","Nation","Service",
    "Responsibility","Sacrifice","Honor","Duty","Strength","Unity",
    "Mission","Goal","Challenge","Brave","Loyal","Trust","Command",
    "Strategy","Peace","Guard","Protect","Country","Force","Soldier",
    "Rank","Spirit","Patriot","Authority","Order","Risk","Defend",
    "Attack","Plan","Support","Morale","Integrity","Confidence",
    "Action","Result","Progress","Wisdom","Endurance","Perseverance",
    "Initiative","Dedication","Commitment","Respect","Power","Justice",
    "Faith","Will","Mind","Body","Fight","Win","Survive","Achieve"
  ],
  sct: [
    "When I face a difficult challenge, I __",
    "A good leader always __",
    "When my team disagrees, I __",
    "I feel proud when __",
    "Under pressure, I __",
    "My greatest strength is __",
    "I believe discipline __",
    "When I make a mistake, I __",
    "Serving the nation means __",
    "I am most confident when __",
    "My goal in the armed forces is __",
    "When others give up, I __",
    "I believe loyalty means __",
    "In a crisis, a commander must __",
    "Physical fitness is important because __",
  ],
  tat: [
    { id:"tat_1", scenario:"A group of soldiers is stranded in enemy territory after their communication equipment fails. The junior officer must make a critical decision.", prompt:"Write a story. Include: What happened before, What action was taken, and What was the result.", image_desc:"🪖 Soldiers at crossroads in dense jungle, night setting" },
    { id:"tat_2", scenario:"A young cadet witnesses corruption among senior personnel during training. He must decide whether to report it or stay silent.", prompt:"Write a story. Include: The circumstances, The decision made, and The outcome.", image_desc:"🏫 Military training ground, two figures in heated discussion" },
    { id:"tat_3", scenario:"During a flood rescue mission, a soldier must choose between saving civilians or securing critical military equipment.", prompt:"Write a story. Include: The dilemma, The action taken, and The consequence.", image_desc:"🌊 Flooded village, rescue boat with limited space" },
  ],
  gd_topics: [
    "Should military service be mandatory for all citizens of Bangladesh?",
    "Technology is more important than manpower in modern warfare.",
    "Women should have equal opportunities in combat roles in the armed forces.",
    "Is peacekeeping more valuable than combat readiness?",
    "Social media poses a threat to national security.",
    "Should defence budget be increased at the cost of social programs?",
    "Physical fitness vs mental toughness — what matters more for a soldier?",
    "Bangladesh's role in UN Peacekeeping missions — are we doing enough?",
  ],
  command_tasks: [
    { id:"ct_1", title:"River Crossing", scenario:"Your 5-member team needs to cross a 6-meter wide river using: 2 planks (each 4m), 1 rope (5m), and 2 barrels. No one can swim. You have 10 minutes.", hints:["Think about bridge-building","Barrels can float","Plan before acting"], evaluation:["Team leadership","Resource utilization","Time management","Communication"] },
    { id:"ct_2", title:"Supply Chain Crisis", scenario:"Your platoon is 40km from base. Fuel is critically low. You have: 1 truck (half tank), radio with limited battery, a map, and civilian vehicles nearby. What is your plan?", hints:["Prioritize communication","Consider civilian cooperation","Safety first"], evaluation:["Decision making","Resourcefulness","Leadership","Crisis management"] },
  ]
};

export const getAllQuestions = (types = ['iq','math','english','gk'], difficulty = null) => {
  let questions = [];
  types.forEach(type => {
    if (questionBank[type]) {
      let qs = questionBank[type];
      if (difficulty) qs = qs.filter(q => q.difficulty === difficulty);
      questions = [...questions, ...qs];
    }
  });
  return questions.sort(() => Math.random() - 0.5);
};
