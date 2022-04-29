const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str == '') return '';
  let resultStr = '';
  let count = 1;
  let splittedSrt = str.split("");
  for (let i = 0; i < splittedSrt.length - 1; i++) {
    if (splittedSrt[i] == splittedSrt[i + 1]) {
      count++;
    }
    else {
      resultStr += (count > 1) ? count + splittedSrt[i] : splittedSrt[i];
      count = 1;
    }
  }
  if (splittedSrt[splittedSrt.length - 1] == splittedSrt[splittedSrt.length - 2]) {
    resultStr += (count + splittedSrt[splittedSrt.length - 1]);
  }
  else resultStr += splittedSrt[splittedSrt.length - 1];
  return resultStr;
}

module.exports = {
  encodeLine
};
