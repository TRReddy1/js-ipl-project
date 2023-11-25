const matches = require("../../../matches.json");
const matchesWonPerTeam = require("../matchesWonPerYear");

const result = matchesWonPerTeam(matches);

//console.log(result);

// exporting

const fs = require("fs");

const output = "../../public/output/problem2.json";
const JSONResult = JSON.stringify(result);

fs.writeFileSync(output, JSONResult);
