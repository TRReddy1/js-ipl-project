//**_9.Find the bowler with the best economy in super overs _**

function superOverEconomy(deliveries) {
  const bowlers = deliveries
    .filter((delivery) => parseInt(delivery["is_super_over"]) !== 0)
    .reduce((accu, curr) => {
      let bowler = curr["bowler"];
      let ball = parseInt(curr["ball"]);
      let runs = parseInt(curr["total_runs"]);

      if (!accu.hasOwnProperty(bowler)) {
        accu[bowler] = { ball: 0, run: 0 };
      }

      accu[bowler].ball += 1;
      accu[bowler].run += runs;

      if (
        parseInt(curr["wide_runs"]) > 0 ||
        parseInt(curr["noball_runs"]) > 0
      ) {
        accu[bowler].ball -= 1;
      }
      return accu;
    }, {});

  Object.keys(bowlers).forEach((bowler) => {
    let economy = bowlers[bowler].run / (bowlers[bowler].ball / 6);
    bowlers[bowler].economy = parseFloat(economy.toFixed(2));
    delete bowlers[bowler].run;
    delete bowlers[bowler].ball;
  });

  const entries = Object.entries(bowlers);
  entries.sort(([, a], [, b]) => {
    return a.economy - b.economy;
  });

  const result = entries.slice(0, 1);

  const answer = Object.fromEntries(result);

  return answer;
}

module.exports = superOverEconomy;
