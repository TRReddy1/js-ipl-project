//**_7.Find the strike rate of a batsman for each season _**

function strikeRate(matches, deliveries) {
  const matchAndYear = {};
  matches.forEach((match) => {
    matchAndYear[match.id] = match.season;
  });

  //   return ids;
  const object = {};
  deliveries.reduce((accu, curr) => {
    let season = matchAndYear[curr.match_id];
    let id = curr.match_id;
    let batsman = curr.batsman;
    let runs = parseInt(curr.total_runs) - parseInt(curr.extra_runs);
    let balls = parseInt(curr.ball);

    if (object[season] === undefined) {
      object[season] = {};
    }
    if (object[season][batsman] === undefined) {
      object[season][batsman] = {
        runs: 0,
        balls: 0,
      };
    }
    object[season][batsman].runs += runs;
    object[season][batsman].balls += 1;

    if (parseInt(curr["noball_runs"] > 0) || parseInt(curr["wide_runs"]) > 0) {
      object[season][batsman].balls -= 1;
    }
  }, {});
  //return object;

  for (let year in object) {
    for (let batsman in object[year]) {
      let striker =
        (object[year][batsman].runs / object[year][batsman].balls) * 100;
      object[year][batsman].striker = parseFloat(striker.toFixed(2));
      //console.log("hii");
      delete object[year][batsman].runs;
      delete object[year][batsman].balls;
    }
  }

  return object;
}

module.exports = strikeRate;
