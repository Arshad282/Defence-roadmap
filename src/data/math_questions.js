export const mathQuestions = [
  // EASY
  { id:"math_e1", type:"Math", difficulty:"easy", question:"A soldier walks 3 km north, then 4 km east. Distance from start?", options:["5 km","7 km","6 km","4 km"], correct_answer:"5 km", explanation:"√(3²+4²)=5 km.", topic:"Geometry" },
  { id:"math_e2", type:"Math", difficulty:"easy", question:"A tank holds 500L, fills at 25L/min. Time to fill?", options:["15 min","25 min","20 min","30 min"], correct_answer:"20 min", explanation:"500÷25=20 min.", topic:"Arithmetic" },
  { id:"math_e3", type:"Math", difficulty:"easy", question:"What is 15% of 200?", options:["25","30","35","40"], correct_answer:"30", explanation:"15/100×200=30.", topic:"Percentage" },
  { id:"math_e4", type:"Math", difficulty:"easy", question:"A squad of 8 soldiers shares 96 rations. Each gets?", options:["10","11","12","13"], correct_answer:"12", explanation:"96÷8=12.", topic:"Arithmetic" },
  { id:"math_e5", type:"Math", difficulty:"easy", question:"Area of a square with side 9m?", options:["36 m²","45 m²","72 m²","81 m²"], correct_answer:"81 m²", explanation:"9²=81 m².", topic:"Geometry" },
  { id:"math_e6", type:"Math", difficulty:"easy", question:"If x=5, what is 3x+4?", options:["15","17","19","21"], correct_answer:"19", explanation:"3(5)+4=19.", topic:"Algebra" },
  { id:"math_e7", type:"Math", difficulty:"easy", question:"A rifle fires 6 rounds/sec. Rounds in 1.5 minutes?", options:["480","520","540","560"], correct_answer:"540", explanation:"6×90=540.", topic:"Arithmetic" },
  { id:"math_e8", type:"Math", difficulty:"easy", question:"What is 25% of 400?", options:["75","80","100","125"], correct_answer:"100", explanation:"25/100×400=100.", topic:"Percentage" },
  { id:"math_e9", type:"Math", difficulty:"easy", question:"A vehicle travels 240 km in 4 hours. Speed?", options:["50 km/h","60 km/h","70 km/h","80 km/h"], correct_answer:"60 km/h", explanation:"240÷4=60 km/h.", topic:"Speed & Distance" },
  { id:"math_e10", type:"Math", difficulty:"easy", question:"Perimeter of a rectangle 10m×6m?", options:["30m","32m","36m","40m"], correct_answer:"32m", explanation:"2(10+6)=32m.", topic:"Geometry" },
  { id:"math_e11", type:"Math", difficulty:"easy", question:"Solve: 2x = 18. x = ?", options:["7","8","9","10"], correct_answer:"9", explanation:"x=18/2=9.", topic:"Algebra" },
  { id:"math_e12", type:"Math", difficulty:"easy", question:"A platoon of 120 soldiers split into 4 equal groups. Each group?", options:["25","30","35","40"], correct_answer:"30", explanation:"120÷4=30.", topic:"Arithmetic" },

  // MEDIUM
  { id:"math_m1", type:"Math", difficulty:"medium", question:"Convoy: 120 km at 60 km/h then 80 km at 40 km/h. Average speed?", options:["48 km/h","50 km/h","52 km/h","55 km/h"], correct_answer:"50 km/h", explanation:"Total 200 km / 4 hrs = 50 km/h.", topic:"Speed & Distance" },
  { id:"math_m2", type:"Math", difficulty:"medium", question:"Solve: 3x+7=22. x=?", options:["3","5","4","6"], correct_answer:"5", explanation:"3x=15, x=5.", topic:"Algebra" },
  { id:"math_m3", type:"Math", difficulty:"medium", question:"A base camp is 25% larger than 800 m². New area?", options:["900 m²","950 m²","1000 m²","1050 m²"], correct_answer:"1000 m²", explanation:"800+200=1000 m².", topic:"Percentage" },
  { id:"math_m4", type:"Math", difficulty:"medium", question:"Train 300m long passes a pole in 15 sec. Speed in km/h?", options:["60","70","72","80"], correct_answer:"72", explanation:"20 m/s × 3.6 = 72 km/h.", topic:"Speed & Distance" },
  { id:"math_m5", type:"Math", difficulty:"medium", question:"Simple interest on Tk 4000 at 5%/year for 3 years?", options:["Tk 500","Tk 600","Tk 700","Tk 800"], correct_answer:"Tk 600", explanation:"SI=4000×5×3/100=600.", topic:"Interest" },
  { id:"math_m6", type:"Math", difficulty:"medium", question:"If 2x-3y=7 and x=5, y=?", options:["0","1","2","3"], correct_answer:"1", explanation:"10-3y=7 → y=1.", topic:"Algebra" },
  { id:"math_m7", type:"Math", difficulty:"medium", question:"A 60m flagpole casts a 40m shadow. A nearby tree casts 20m shadow. Tree height?", options:["25m","30m","35m","40m"], correct_answer:"30m", explanation:"60/40=h/20 → h=30m.", topic:"Ratio & Proportion" },
  { id:"math_m8", type:"Math", difficulty:"medium", question:"Work done by 12 soldiers in 10 days. Same work by 8 soldiers in?", options:["12 days","15 days","18 days","20 days"], correct_answer:"15 days", explanation:"12×10=8×d → d=15.", topic:"Work & Time" },
  { id:"math_m9", type:"Math", difficulty:"medium", question:"Compound interest on Tk 1000 at 10%/year for 2 years?", options:["Tk 200","Tk 210","Tk 220","Tk 250"], correct_answer:"Tk 210", explanation:"1000×(1.1²)-1000=1210-1000=210.", topic:"Interest" },
  { id:"math_m10", type:"Math", difficulty:"medium", question:"A map scale is 1:50000. 2cm on map = ? km in reality?", options:["0.5 km","1 km","2 km","5 km"], correct_answer:"1 km", explanation:"2×50000=100000 cm=1 km.", topic:"Ratio & Proportion" },

  // HARD
  { id:"math_h1", type:"Math", difficulty:"hard", question:"Pipes A (12h) and B (15h) fill; C (20h) drains. All open. Fill time?", options:["10 hrs","12 hrs","15 hrs","8 hrs"], correct_answer:"10 hrs", explanation:"1/12+1/15-1/20=1/10. Time=10 hrs.", topic:"Work & Time" },
  { id:"math_h2", type:"Math", difficulty:"hard", question:"If log₂(x)=5, x=?", options:["10","25","32","64"], correct_answer:"32", explanation:"2⁵=32.", topic:"Logarithm" },
  { id:"math_h3", type:"Math", difficulty:"hard", question:"Helicopter rises at 30° angle, 200m slant. Height gained?", options:["86.6m","100m","150m","173.2m"], correct_answer:"100m", explanation:"200×sin30°=100m.", topic:"Trigonometry" },
  { id:"math_h4", type:"Math", difficulty:"hard", question:"5 soldiers arranged in a row. Number of ways?", options:["25","60","120","150"], correct_answer:"120", explanation:"5!=120.", topic:"Permutation" },
  { id:"math_h5", type:"Math", difficulty:"hard", question:"Ship: 50 km east, 120 km north. Shortest return distance?", options:["130 km","140 km","150 km","160 km"], correct_answer:"130 km", explanation:"√(50²+120²)=130 km.", topic:"Geometry" },
  { id:"math_h6", type:"Math", difficulty:"hard", question:"In how many ways can 3 medals be given to 10 soldiers (1 gold, 1 silver, 1 bronze)?", options:["120","240","720","1000"], correct_answer:"720", explanation:"P(10,3)=10×9×8=720.", topic:"Permutation" },
  { id:"math_h7", type:"Math", difficulty:"hard", question:"A cone has radius 7cm, height 24cm. Slant height?", options:["23cm","24cm","25cm","26cm"], correct_answer:"25cm", explanation:"l=√(7²+24²)=√(49+576)=√625=25.", topic:"Geometry" },
  { id:"math_h8", type:"Math", difficulty:"hard", question:"Speed of boat in still water 12 km/h, current 4 km/h. Upstream speed?", options:["6 km/h","7 km/h","8 km/h","16 km/h"], correct_answer:"8 km/h", explanation:"Upstream=12-4=8 km/h.", topic:"Speed & Distance" },
];
