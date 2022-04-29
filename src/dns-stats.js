const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let domainCount = {};
  for (let item of domains) {
    let tempKey = '';
    let splittedDomain = item.split(".").reverse();
    for (el of splittedDomain) {
      tempKey += '.' + el;
      domainCount[tempKey] = (domainCount[tempKey]) ? domainCount[tempKey] + 1 : 1;
    }
  }
  return domainCount;
}

module.exports = {
  getDNSStats
};
