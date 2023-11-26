const matches = require("../../../matches.json");
const matchAndTossWon = require("../matchAndToss");

const result = matchAndTossWon(matches);

console.log(result);

const fs = require("fs");

const output = "../../public/output/problem5.json";
const resultJson = JSON.stringify(result);
fs.writeFileSync(output, resultJson);
