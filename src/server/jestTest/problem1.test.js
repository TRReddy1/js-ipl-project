const problem1 = require("../matchesPerYear");

test("passing null to check null", () => {
  const matches = {};
  expect(problem1(matches)).toEqual({});
});

test("passing usertest cases", () => {
  const matches = [
    { season: "2017", id: "1" },
    { season: "2016", id: "2" },
    { season: "2017", id: "3" },
  ];
  expect(problem1(matches)).toEqual({ 2017: 2, 2016: 1 });
});
