const csvFilePath = "./src/data/deliveries.csv";
const csv = require("csvtojson");
const fs = require("fs");

const outputFile = "./deliveries.json"; // Path to the output JSON file

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
