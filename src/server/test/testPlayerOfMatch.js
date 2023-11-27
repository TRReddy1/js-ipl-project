const matches = require("../../../matches.json");
const playerOfMatch = require("../playerOfMatch");

const result = playerOfMatch(matches);

//console.log(result);

const fs = require("fs");
const output = "../../public/output/problem6.json";

const resultJson = JSON.stringify(result);

fs.writeFileSync(output, resultJson);
