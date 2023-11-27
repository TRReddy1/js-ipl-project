const matches = require("../../../matches.json");
const deliveries = require("../../../deliveries.json");
const strikeRate = require("../strikeRate");

const result = strikeRate(matches, deliveries);

//console.log(result);

const fs = require("fs");

const Output = "../../public/output/problem7.json";

const resultJson = JSON.stringify(result);

fs.writeFileSync(Output, resultJson);
