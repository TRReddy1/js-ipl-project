const deliveries = require("../../../deliveries.json");
const highestDismissed = require("../highestDismissed");

const result = highestDismissed(deliveries);

//console.log(result);

const fs = require("fs");

const output = "../../public/output/problem8.json";

const resultJson = JSON.stringify(result);

fs.writeFileSync(output, resultJson);
