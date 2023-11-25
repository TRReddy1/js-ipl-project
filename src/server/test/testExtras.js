const matches = require("../../../matches.json");
const deliveries = require("../../../deliveries.json");
const extraRunsInYear = require("../extraRuns");

let year = 2016;

const result = extraRunsInYear(matches, deliveries, year);

//console.log(result);

// exporting output

const fs = require("fs");
const output = "../../public/output/problem3.json";

const resultJSON = JSON.stringify(result);

fs.writeFileSync(output, resultJSON);
