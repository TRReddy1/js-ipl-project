// 1.Number of matches played per year for all the years in IPL.
// season = year

//const fs = require("fs");

//const matchesJsonString = fs.readFileSync("../../matches.json", "ut;f-8") // requireing and converting when needed

//const matches = JSON.parse(matchesJsonString);

//console.log(matches[0].season); // Access the first element of the parsed JSON object

function matchesPerSeason(matches) {
  //for testing jest
  if (matches === null || Object.keys(matches).length === 0) {
    return {};
  }
  // generate years from inventory
  const years = matches.map((match) => {
    return match.season;
  });

  let matchesPerYear = {}; // create a empty object to store

  // check and increase key and values in new object
  for (let i = 0; i < years.length; i++) {
    if (matchesPerYear.hasOwnProperty(years[i])) {
      matchesPerYear[years[i]]++;
    } else {
      matchesPerYear[years[i]] = 1;
    }
  }
  return matchesPerYear;
}

module.exports = matchesPerSeason;
