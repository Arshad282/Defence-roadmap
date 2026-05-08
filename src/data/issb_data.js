export const issbData = {
  wat: [
    "Leader","Courage","Discipline","Team","Victory","Nation","Service",
    "Responsibility","Sacrifice","Honor","Duty","Strength","Unity",
    "Mission","Goal","Challenge","Brave","Loyal","Trust","Command",
    "Strategy","Peace","Guard","Protect","Country","Force","Soldier",
    "Rank","Spirit","Patriot","Authority","Order","Risk","Defend",
    "Attack","Plan","Support","Morale","Integrity","Confidence",
    "Action","Result","Progress","Wisdom","Endurance","Perseverance",
    "Initiative","Dedication","Commitment","Respect","Power","Justice",
    "Faith","Will","Mind","Body","Fight","Win","Survive","Achieve",
    "Adapt","Overcome","Serve","Lead","Inspire","Protect","Excel",
    "Advance","Resolve","Valor","Tenacity","Steadfast","Vigilance",
    "Agility","Resilience","Compassion","Empathy","Principle","Ethics",
    "Ambition","Focus","Clarity","Precision","Speed","Stealth","Tactics",
    "Teamwork","Brotherhood","Sacrifice","Homeland","Flag","Oath","Pride",
    "Tradition","Legacy","Future","Hope","Freedom","Security","Shield",
    "Sword","Rifle","March","Formation","Command","Obey","Report"
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
    "I handle criticism by __",
    "When I see injustice, I __",
    "The most important quality of a soldier is __",
    "I motivate my team by __",
    "Failure teaches me __",
    "Sacrifice for the nation means __",
    "I overcome fear by __",
    "When given an order I disagree with, I __",
    "Working under difficult conditions, I __",
    "I believe teamwork is essential because __",
    "My weakest area is __, and I improve it by __",
    "In peacetime, a soldier should __",
    "I earn the trust of my team by __",
    "The difference between a good and great leader is __",
    "When I am in command, my first priority is __",
  ],

  tat: [
    {
      id:"tat_1",
      scenario:"A group of soldiers is stranded in enemy territory after communication equipment fails. The junior officer must make a critical decision.",
      prompt:"Write a story. Include: What happened before, What action was taken, and What was the result.",
      image_desc:"🪖 Soldiers at crossroads in dense jungle, night setting"
    },
    {
      id:"tat_2",
      scenario:"A young cadet witnesses corruption among senior personnel during training. He must decide whether to report it or stay silent.",
      prompt:"Write a story. Include: The circumstances, The decision made, and The outcome.",
      image_desc:"🏫 Military training ground, two figures in heated discussion"
    },
    {
      id:"tat_3",
      scenario:"During a flood rescue mission, a soldier must choose between saving civilians or securing critical military equipment.",
      prompt:"Write a story. Include: The dilemma, The action taken, and The consequence.",
      image_desc:"🌊 Flooded village, rescue boat with limited space"
    },
    {
      id:"tat_4",
      scenario:"A platoon commander discovers his most experienced soldier is suffering from severe mental exhaustion before a critical mission.",
      prompt:"Write a story about the commander's response and how the mission unfolds.",
      image_desc:"🎖️ Commander and soldier in private conversation at base camp"
    },
    {
      id:"tat_5",
      scenario:"A young officer must lead a patrol through an unfamiliar area with a map that may be outdated. The team is getting restless.",
      prompt:"Write a story: How does the officer maintain morale and complete the mission?",
      image_desc:"🗺️ Officer studying a map surrounded by 4 soldiers in field gear"
    },
    {
      id:"tat_6",
      scenario:"Two senior soldiers in a unit have a personal conflict that is affecting team performance during a critical training exercise.",
      prompt:"Write a story: How is this resolved and what is the outcome for the unit?",
      image_desc:"⚔️ Two soldiers standing apart, unit watching in the background"
    },
    {
      id:"tat_7",
      scenario:"A cadet who comes from a poor background is excelling in academics but struggling with physical tests. His peers mock him.",
      prompt:"Write a story about perseverance, leadership, and the outcome of his journey.",
      image_desc:"🏃 Cadet running alone on a track, others watching from sideline"
    },
    {
      id:"tat_8",
      scenario:"During a peacekeeping mission abroad, a soldier witnesses a civilian being harassed by a local armed group. He is off-duty and alone.",
      prompt:"Write a story: What does he do, and what are the consequences of his decision?",
      image_desc:"🌍 UN peacekeeper watching an incident in a crowded market"
    },
  ],

  gd_topics: [
    "Should military service be mandatory for all citizens of Bangladesh?",
    "Technology is more important than manpower in modern warfare.",
    "Women should have equal opportunities in combat roles in the armed forces.",
    "Is peacekeeping more valuable than combat readiness?",
    "Social media poses a threat to national security.",
    "Should defence budget be increased at the cost of social programs?",
    "Physical fitness vs mental toughness — what matters more for a soldier?",
    "Bangladesh's role in UN Peacekeeping — are we doing enough?",
    "Artificial Intelligence will replace human soldiers in future warfare.",
    "Discipline vs creativity — which is more important for military officers?",
    "Should the armed forces be involved in disaster relief operations?",
    "Nuclear weapons — do they ensure peace or threaten it?",
    "How should Bangladesh modernize its defence forces in the next decade?",
    "Is patriotism enough motivation to join the armed forces?",
    "Cyber warfare: Is Bangladesh prepared for digital conflicts?",
  ],

  command_tasks: [
    {
      id:"ct_1",
      title:"River Crossing",
      scenario:"Your 5-member team needs to cross a 6-meter wide river using: 2 planks (each 4m), 1 rope (5m), and 2 barrels. No one can swim. You have 10 minutes.",
      hints:["Think about bridge-building","Barrels can float","Plan before acting"],
      evaluation:["Team leadership","Resource utilization","Time management","Communication"]
    },
    {
      id:"ct_2",
      title:"Supply Chain Crisis",
      scenario:"Your platoon is 40km from base. Fuel critically low. You have: 1 truck (half tank), radio with limited battery, a map, and civilian vehicles nearby. What is your plan?",
      hints:["Prioritize communication","Consider civilian cooperation","Safety first"],
      evaluation:["Decision making","Resourcefulness","Leadership","Crisis management"]
    },
    {
      id:"ct_3",
      title:"Night Navigation",
      scenario:"Your 4-member team must reach a checkpoint 3km away in darkness. You have: 1 compass, 1 map, 2 torches (one working), limited water. You have 45 minutes.",
      hints:["Assign roles clearly","Conserve resources","Use stars for navigation backup"],
      evaluation:["Navigation skills","Team coordination","Resource conservation","Time awareness"]
    },
    {
      id:"ct_4",
      title:"Medical Emergency",
      scenario:"During training, a team member collapses with heat stroke symptoms. You are 2km from medical aid. Available: 1 stretcher, 2 water bottles, a radio with 5% battery, 4 team members.",
      hints:["Immediate first aid first","Delegate roles","Send distress signal"],
      evaluation:["First aid awareness","Decision under pressure","Leadership","Empathy"]
    },
    {
      id:"ct_5",
      title:"Hostage Negotiation Simulation",
      scenario:"A group of civilians are trapped in a building due to a structural emergency. You must coordinate a rescue with: 2 ropes, 3 ladders, 6 personnel, and limited time before the structure weakens further.",
      hints:["Assess entry/exit points","Prioritize vulnerable persons first","Maintain team communication"],
      evaluation:["Strategic thinking","Calmness under pressure","Prioritization","Team management"]
    },
    {
      id:"ct_6",
      title:"Intelligence Breakdown",
      scenario:"You receive conflicting intelligence reports before a patrol. One source says the area is clear; another signals high risk. You must decide: proceed, delay, or take an alternative route. You have 10 minutes to decide.",
      hints:["Weigh the cost of each option","Consult your team","Default to safety"],
      evaluation:["Critical thinking","Risk assessment","Decision making","Leadership under uncertainty"]
    },
  ]
};
