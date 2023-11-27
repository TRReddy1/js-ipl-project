//**_8.Find the highest number of times one player has been dismissed by another player _**

function highestDismissed(deliveries) {
  // generating all bolwers and batmens and thier count
  const bowlers = deliveries.reduce((accu, curr) => {
    let bowler = curr["bowler"];
    let batsmen = curr["player_dismissed"];

    if (!accu.hasOwnProperty(bowler)) {
      accu[bowler] = {};
    }

    if (batsmen) {
      if (!accu[bowler].hasOwnProperty(batsmen)) {
        accu[bowler][batsmen] = 0;
      }
      accu[bowler][batsmen]++;
    }
    return accu;
  }, {});

  let answer = {};
  // sorting them for every bolwer based on count and storing only highest count ones in answer
  Object.keys(bowlers).forEach((bowler) => {
    const entries = Object.entries(bowlers[bowler]);
    if (entries.length > 0) {
      entries.sort(([, a], [, b]) => b - a);
      const topDismissed = entries[0][0];
      answer[bowler] = {
        batsmen: topDismissed,
        count: bowlers[bowler][topDismissed],
      };
    }
  });

  // compring their counts and getting the highest ones
  const topDismissed = Object.keys(answer).reduce((accu, curr) => {
    if (answer[curr].count > (accu.count || 0)) {
      return {
        bolwer: curr,
        batsmen: answer[curr].batsmen,
        count: answer[curr].count,
      };
    }
    return accu;
  }, {});

  return topDismissed;
}

module.exports = highestDismissed;
