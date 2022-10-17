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
  let arr = [];
  for (let i = 0; i < n.toString().length; i++) {
      let f = 0;
      arr.push(n.toString().replace(n.toString().slice(i, i + 1), ''))
      f = f + 1;
  
  }
  let m = arr[0];
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] > m) {
          m = arr[i];
      }
  }

  return Number(m);
}

module.exports = {
  deleteDigit
};
