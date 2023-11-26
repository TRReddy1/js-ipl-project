const matches = require("../../../matches.json");
const deliveries = require("../../../deliveries.json");
const economyOfBolwers = require("../economyBowlers");

let year = 2015;

const result = economyOfBolwers(matches, deliveries, year);
console.log(result);

//creating an export

const fs = require("fs");

const output = "../../public/output/problem4.json";

const resultJson = JSON.stringify(result);

fs.writeFileSync(output, resultJson);
