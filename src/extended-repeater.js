const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 * 
 * 
 */
function repeater(str, options) {
  if (str === null) str = "null";
  if (options.addition === null) addition = "null";
  else if (typeof options.addition == "boolean") addition = options.addition.toString();
  else addition = (options.addition) ? options.addition : "";
  repeatTimes = (options.repeatTimes) ? options.repeatTimes : 1;
  additionRepeatTimes = (options.additionRepeatTimes) ? options.additionRepeatTimes : 1;
  separator = (options.separator) ? options.separator : "+";
  additionSeparator = (options.additionSeparator) ? options.additionSeparator : "|";
  let additionalRepeater = (addition + additionSeparator).repeat(additionRepeatTimes);
  let addResult;
  if (additionSeparator.length) {
    addResult = additionalRepeater.slice(0, -additionSeparator.length);
  }
  else {
    addResult = additionalRepeater;
  }
  let mainRepeater = (str + addResult + separator).repeat(repeatTimes);
  let result = mainRepeater.slice(0, -separator.length);
  return result;
}

module.exports = {
  repeater
};
