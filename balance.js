/**
 * @callback BalanceCallback
 * @param {number[]} array of coins weights (exactly 12 entries)
 * @param {number[]} set1indices - 1st subset of the indices of the array to sum up as a left side weight
 * @param {number[]} set2indices - 2nd subset of the indices of the array to sum up as a right side weight
 * @returns difference between sums of subset 1 and subset 2
 * example: BalanceCallback([2,2,3,2,2,2,2,2,2,2,2,2], [0,1,2], [9,10,11]) => (2+2+3) - (2+2+2) => 1
 */

/**
 * A function to create a balance function that counts number of its own invocations.
 * @returns {BalanceCallback}
 */
const balanceMaker = function () {
  let callsCount = 0;
  return function (array, set1indices, set2indices) {
    if (++callsCount === 4) {
      throw "Cannot call balance more than 3 times for a single array of coins!";
    }
    if (set1indices === undefined) set1indices = [];
    if (set2indices === undefined) set2indices = [];
    return sum(array.filter((item, idx) => set1indices.includes(idx))) -
      sum(array.filter((item, idx) => set2indices.includes(idx)));
    };
};

const sum = function(array) {
  return array.reduce((acc, item) => acc+item, 0);
};

module.exports = balanceMaker;
