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
  let resultIndex = undefined;
  const balance1 = balance(array, [0, 1, 2, 3], [4, 5, 6, 7]);
  if (balance1 === 0) {
    if (balance(array, [9], [10]) === 0) {
      resultIndex = balance(array, [0], [8]) ? 8 : 11;
    } else {
      resultIndex = balance(array, [9], [0]) ? 9 : 10;
    }
  } else {
    const balance2 = balance(array, [0, 1, 4], [2, 3, 11]);
    if (balance2 === 0) {
      // 5,6,7 contains fake
      const balance3 = balance(array, [5], [6]);
      if (balance3 === 0) {
        resultIndex = 7;
      } else {
        resultIndex = balance3 < 0 && balance1 > 0 || balance3 > 0 && balance1 < 0 ? 5 : 6;
      }
    } else {
      // 0,1,2,3,4 contains fake
      if (balance1 > 0 && balance2 > 0 || balance1 < 0 && balance2 < 0) {
        // 0,1 contains fake
        resultIndex = balance(array, [0], [11]) === 0 ? 1 : 0;
      } else {
        // 2, 3, 4 contains fake
        const balance3 = balance(array, [2], [3]);
        if (balance3 === 0) {
          resultIndex = 4;
        } else {
          resultIndex = balance3 > 0 && balance1 > 0 || balance3 < 0 && balance1 < 0 ? 2 : 3;
        }
      }
    }
  }
  return [resultIndex, array[resultIndex]];
};

module.exports = findFake;
