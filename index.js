const matches = require("./matches.json");
const deliveries = require("./deliveries.json");

const problem1 = require("./src/server/matchesPerYear");
console.log(problem1(matches));

const problem2 = require("./src/server/matchesWonPerYear");
console.log(problem2(matches));

const problem3 = require("./src/server/extraRuns");
console.log(problem3(matches, deliveries, 2016));

const problem4 = require("./src/server/economyBowlers");
console.log(problem4(matches, deliveries, 2015));

const problem5 = require("./src/server/matchAndToss");
console.log(problem5(matches));

const problem6 = require("./src/server/playerOfMatch");
console.log(problem6(matches));

const problem7 = require("./src/server/strikeRate");
console.log(problem7(matches, deliveries));

const problem8 = require("./src/server/highestDismissed");
console.log(problem8(deliveries));

const problem9 = require("./src/server/superOver");
console.log(problem9(deliveries));
