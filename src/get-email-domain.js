const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let atSignIndex = email.indexOf("@");
  let result = email.slice(atSignIndex + 1, email.length);
  if (result.includes("@"))
    return getEmailDomain(result);
  else return result;
}

module.exports = {
  getEmailDomain
};
