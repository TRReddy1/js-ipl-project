const csvFilePath = "./src/data/matches.csv";
const { isUtf8 } = require("buffer");
const csv = require("csvtojson");
const fs = require("fs");

const outputFile = "./matches.json";

csv()
  .fromFile(csvFilePath)
  .then((jsonObj) => {
    const jsonData = JSON.stringify(jsonObj, null, 2); // Convert JSON object to string with indentation
    fs.writeFile(outputFile, jsonData, (err) => {
      if (err) throw err;
      console.log("Output JSON data has been saved to", outputFile);
    });
  })
  .catch((err) => {
    console.error(err);
  });
