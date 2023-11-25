const matches = require("../../../matches.json");
const matchesPerSeason = require("../matchesPerYear");

const result = matchesPerSeason(matches);

console.log(result);
