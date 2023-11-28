//5.Find the number of times each team won the toss and also won the match

function matchAndTossWon(matches) {
  if (Object.keys(matches).length === 0) {
    return {};
  }

  const result = matches.reduce((accu, curr) => {
    if (!accu.hasOwnProperty(curr["toss_winner"])) {
      accu[curr["toss_winner"]] = 0;
    }
    if (curr["winner"] === curr["toss_winner"]) {
      accu[curr["winner"]]++;
    }
    return accu;
  }, {});
  return result;
}

module.exports = matchAndTossWon;
