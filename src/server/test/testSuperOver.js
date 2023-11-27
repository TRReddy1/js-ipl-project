const deliveries = require("../../../deliveries.json");
const superOverEconomy = require("../superOver");

const result = superOverEconomy(deliveries);

//console.log(result);

const fs = require("fs");

const output = "../../public/output/problem9.json";

const resultJson = JSON.stringify(result);

fs.writeFileSync(output, resultJson);
