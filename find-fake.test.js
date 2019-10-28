const findFake = require("./find-fake.js");
const balanceMaker = require("./balance.js");

const generateFullSet = function() {
  const set = [];
  for (let i = 0; i < 12 ; i++) {
    for (let j = -1; j <= 1; j+=2) {
      const normal = ~~(Math.random() * 50) + 50;
      const array = Array(12).fill(normal);
      array[i] += (~~(Math.random() * 25) + 1) * j;
      set.push(array);
    }
  }
  return set;
};

const shuffleArray = function (array) {
  const result = [...array];
  return result.sort(Math.random() - 0.5);
};

/**
 * @typedef Anomaly
 * @type {array}
 * @property {index} 0 - anomaly index
 * @property {value} 1 - anomaly value
 */

/**
 * Finds anomaly index and value
 * @param {number[]} array
 * @returns {Anomaly}
 */
const findAnomaly = function (array) {
  const anomaly = Object.entries(
    array.reduce((acc, item) => {
      if (acc[item] === undefined) acc[item] = 1;
      else acc[item]++;
      return acc;
    }, {})
  ).reduce((acc, item) => acc ? acc : (item[1] === 1 ? +item[0] : undefined), undefined);
  return array.reduce((acc, item, idx) => acc.length ? acc : (item === anomaly ? [idx, anomaly] : []), []);
};

const testTable = shuffleArray(generateFullSet()).map(array => [array, findAnomaly(array)]);

test.each(testTable)(
  'findFake(%p) is expected to return %p',
  (array, expected) => {
    expect(findFake(array, balanceMaker())).toEqual(expected);
  },
);
