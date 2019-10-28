const balanceMaker = require("./balance.js");
const balance = balanceMaker();

describe('balance() returns -8 as a difference between sums of array elements', () =>{
  test("for valid inputs", () => {
    expect(balance([1, 2, 3, 4, 5, 6], [1, 3], [2, 4, 5])).toBe(-8);
  });
  test("when one of the indices is beyond the array length", () => {
    expect(balance([1, 2, 3, 4, 5, 6], [1, 3], [2, 4, 5, 100])).toBe(-8);
  });
  test("when no indices passed", () => {
    expect(balance([1, 2, 3, 4, 5, 6])).toBe(0);
  });
  test("unless called more than 3 times, when it throws an error", () => {
    expect(() => {
      balance([1, 2, 3, 4, 5, 6]);
    }).toThrow();
  });
});
