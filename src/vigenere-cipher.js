const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'a  phonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type;
    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    const alphabet = alpha.map((x) => String.fromCharCode(x));
    let alphabetCopy = [...alphabet];
    let tabulaRecta = [];
    tabulaRecta.push(alphabet);
    for (let i = 1; i < alphabet.length; i++) {
      let temp = alphabetCopy.shift();
      alphabetCopy.push(temp);
      let pushedCopy = [...alphabetCopy];
      tabulaRecta.push(pushedCopy);
    }
    this.tabulaRecta = tabulaRecta;
    this.alphabet = alphabet;
  }

  encrypt(str, key) {
    if (str === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }

    let result = [];
    let keyLength = key.length;
    for (let i = 0, k = 0; i < str.length; i++) {
      if (!this.alphabet.includes(str[i].toUpperCase())) {
        result.push(str[i]);
        continue;
      }
      let keyIndex = this.alphabet.indexOf(key[k].toUpperCase());
      let letterIndex = this.alphabet.indexOf(str[i].toUpperCase());
      result.push(this.tabulaRecta[letterIndex][keyIndex]);
      k++;
      k = (k == keyLength) ? 0 : k;
    }
    if (!this.type) return result.reverse().join('');
    return result.join('');
  }
  decrypt(str, key) {
    if (str === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    return;
    // throw new NotImplementedError('Not implemented');
    // // remove line with error and write your code here
  }
}

module.exports = {
  VigenereCipheringMachine
};
