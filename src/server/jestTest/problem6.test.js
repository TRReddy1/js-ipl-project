const problem6 = require("../playerOfMatch");

test("passing null to check null", () => {
  const matches = {};
  expect(problem6(matches)).toEqual({});
});

test("passing usertest cases", () => {
  const matches = [
    { season: "2021", player_of_match: "chinna" },
    { season: "2020", player_of_match: "ravi" },
    { season: "2021", player_of_match: "chinna" },
    { season: "2020", player_of_match: "ravi" },
    { season: "2020", player_of_match: "sai" },
  ];
  expect(problem6(matches)).toEqual({
    2021: { player: "chinna", award: 2 },
    2020: { player: "ravi", award: 2 },
    //   2019: { player: "sai", award: 1 },
  });
});
