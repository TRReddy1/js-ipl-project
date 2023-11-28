const problem5 = require("../matchAndToss");

test("passing null to check null", () => {
  const matches = {};
  expect(problem5(matches)).toEqual({});
});

test("passing usertest cases", () => {
  const matches = [
    { toss_winner: "MI", winner: "MI" },
    { toss_winner: "SRH", winner: "CSK" },
    { toss_winner: "SRH", winner: "SRH" },
    { toss_winner: "MI", winner: "MI" },
    { toss_winner: "CSK", winner: "RR" },
    { toss_winner: "CSK", winner: "CSK" },
    { toss_winner: "SRH", winner: "MI" },
  ];
  expect(problem5(matches)).toEqual({
    MI: 2,
    CSK: 1,
    SRH: 1,
  });
});
