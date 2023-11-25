//.Extra runs conceded per team in the year 2016

function extraRunsInYear(matches, deliveries, year) {
  const idList = [];
  matches.map((match) => {
    if (parseInt(match.season) === year) {
      idList.push(match.id);
    }
  });

  const required = deliveries.filter((delivery) => {
    if (idList.includes(delivery.match_id)) {
      return delivery;
    }
  });

  return required.reduce((accu, curr) => {
    let team = curr["batting_team"];
    let extras = parseInt(curr["extra_runs"]);
    if (accu[team] === undefined) {
      accu[team] = extras;
    } else {
      accu[team] += extras;
    }
    return accu;
  }, {});
}

module.exports = extraRunsInYear;
