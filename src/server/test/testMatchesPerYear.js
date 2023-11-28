const matches = require("../../../matches.json");
const matchesPerSeason = require("../matchesPerYear");

const result = matchesPerSeason(matches);

console.log(result);

module.exports = result;

// printing output

const fs = require("fs");

const output = "../../public/output/problem.json";

const resultJSON = JSON.stringify(result);

fs.writeFileSync(output, resultJSON);
