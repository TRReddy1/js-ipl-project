//2.Number of matches won per team per year in IPL.

function matchesWonPerTeam(matches) {
  const result = matches.reduce((accu, match) => {
    let winner = match.winner;
    let year = match.season;
    if (winner) {
      if (!accu[year]) {
        accu[year] = {};
      }

      if (!accu[year][winner]) {
        accu[year][winner] = 1;
      } else {
        accu[year][winner]++;
      }
    }
    return accu;
  }, {});
  return result;
}

module.exports = matchesWonPerTeam;
