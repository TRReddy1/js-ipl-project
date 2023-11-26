//4.Top 10 economical bowlers in the year 2015

function economyOfBolwers(matches, deliveri, year) {
  // get the match id from the year
  const ids = matches
    .filter((match) => parseInt(match.season) === year)
    .map((match) => match.id);

  //creating an object for bowlers and thiers balls and runs
  const answer = deliveri.reduce((ans, curr) => {
    if (ids.includes(curr.match_id)) {
      let bowler = curr["bowler"];
      let ball = parseInt(curr["ball"]);
      let run = parseInt(curr["total_runs"]);

      if (!ans.hasOwnProperty(bowler)) {
        ans[bowler] = { ball: 0, run: 0 };
      }

      ans[bowler].ball += 1;
      ans[bowler].run += run;

      if (
        parseInt(curr["noball_runs"]) > 0 ||
        parseInt(curr["wide_runs"]) > 0
      ) {
        ans[bowler].ball -= 1;
      }
    }
    return ans;
  }, {});

  // caluculating economy and adding it to object
  Object.keys(answer).forEach((bowler) => {
    let economy = answer[bowler].run / (answer[bowler].ball / 6);
    answer[bowler].economy = parseFloat(economy.toFixed(2));
    delete answer[bowler].ball;
    delete answer[bowler].run;
  });

  // converting object to array
  const entries = Object.entries(answer);
  // sorting that array
  entries.sort(([, a], [, b]) => {
    return a.economy - b.economy;
  });
  // getting the top 10 bowlers by slicing
  const topBowlers = entries.slice(0, 10);
  // again converting into object
  const result = Object.fromEntries(topBowlers);

  return result;
}

module.exports = economyOfBolwers;
