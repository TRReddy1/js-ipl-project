const problem8 = require("../highestDismissed");

test("passing null to check null", () => {
  const deliveries = {};
  expect(problem8(deliveries)).toEqual({});
});

test("passing user test cases", () => {
  const deliveries = [
    { bowler: "Z_Khan", player_dismissed: "ms_Dhoni" },
    { bowler: "pathirana", player_dismissed: "kohli" },
    { bowler: "Z_Khan", player_dismissed: "ms_Dhoni" },
    { bowler: "boult", player_dismissed: "sharma" },
    { bowler: "boult", player_dismissed: "kohil" },
    { bowler: "Z_Khan", player_dismissed: "ms_Dhoni" },
    { bowler: "boult", player_dismissed: "" },
    { bowler: "", player_dismissed: "" },
  ];
  expect(problem8(deliveries)).toEqual({
    bolwer: "Z_Khan",
    batsmen: "ms_Dhoni",
    count: 3,
  });
});
