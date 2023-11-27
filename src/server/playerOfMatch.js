//**_6.Find a player who has won the highest number of Player of the Match awards for each season _**

function playerOfMatch(matches) {
  const players = matches.reduce((accu, curr) => {
    let season = curr["season"];
    let player = curr["player_of_match"];

    if (!accu.hasOwnProperty(season)) {
      accu[season] = {};
    }

    if (!accu[season].hasOwnProperty(player)) {
      accu[season][player] = 0;
    }
    accu[season][player]++;

    return accu;
  }, {});
  //return players;

  const result = {};

  Object.keys(players).forEach((season) => {
    const entries = Object.entries(players[season]);
    entries.sort(([, a], [, b]) => b - a);
    // console.log(entries);
    const topPlayer = entries[0][0];
    result[season] = { player: topPlayer, award: players[season][topPlayer] };
  });

  //   const result = {};
  //   Object.keys(players).forEach((season) => {
  //     const topPlayer = Object.keys(players[season]).reduce(
  //       (a, b) => (players[season][a] > players[season][b] ? a : b),
  //       ""
  //     );
  //     result[season] = { player: topPlayer, awards: players[season][topPlayer] };
  //   });

  return result;
}

module.exports = playerOfMatch;
