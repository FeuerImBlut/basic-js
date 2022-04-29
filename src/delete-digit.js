const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let numbersArray = [];
  for (let i = 0; i < n.toString().length; i++) {
    let splittedNumber = n.toString().split("");
    splittedNumber.splice(i, 1);
    numbersArray.push(+splittedNumber.join(""));
  }
  return Math.max(...numbersArray);
}

module.exports = {
  deleteDigit
};
