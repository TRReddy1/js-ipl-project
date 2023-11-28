const problem2 = require("../matchesWonPerYear");

test("passing null to check null", () => {
  const matches = {};
  expect(problem2(matches)).toEqual({});
});

test("passing usertest cases", () => {
  const matches = [
    { season: "2017", winner: "MI" },
    { season: "2016", winner: "CSK" },
    { season: "2019", winner: "SRH" },
    { season: "2018", winner: "MI" },
    { season: "2020", winner: "" },
    { season: "2016", winner: "CSK" },
    { season: "2018", winner: "MI" },
  ];
  expect(problem2(matches)).toEqual({
    2016: { CSK: 2 },
    2017: { MI: 1 },
    2018: { MI: 2 },
    2019: { SRH: 1 },
  });
});
