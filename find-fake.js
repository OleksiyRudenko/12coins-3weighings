/**
 * @typedef Fake
 * @type {array}
 * @property {index} 0 - fake coin index
 * @property {value} 1 - fake coin value
 */

/**
 * @callback BalanceCallback
 * @param {number[]} array of coins weights (exactly 12 entries)
 * @param {number[]} set1indices - 1st subset of the indices of the array to sum up as a left side weight
 * @param {number[]} set2indices - 2nd subset of the indices of the array to sum up as a right side weight
 * @returns difference between sums of subset 1 and subset 2
 * example: BalanceCallback([2,2,3,2,2,2,2,2,2,2,2,2], [0,1,2], [9,10,11]) => (2+2+3 - 2+2+2) => 1
 */

/**
 * Finds fake coin index and value
 * @param {number[]} array of coins weights (exactly 12 entries)
 * @param {BalanceCallback} balance function; supplied by the project author
 * @returns {Fake}
 * example: findFake([1,1,3,1,1,1,1,1,1,1,1,1], balanceMaker()) => [2, 3]
 */
const findFake = function(array, balance) {
  // Example of balance function use
  // balance(array, [0, 1, 2], [4, 5, 6]) will sum up coins 0, 1 and 2,
  // then coins 4, 5 and 6, and will return difference between sums.
  // If either of the coins 0, 1, 2 is lighter than a good coin
  // then the result would be negative.

  // Put your code here

  return [0, 1]; // [fakeCoinIndex, fakeCoinWeight]
};

module.exports = findFake;
