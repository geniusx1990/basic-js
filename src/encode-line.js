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
  var result = '';
  if (str.length > 0) {
      var count = 1;
      var value = str[0];
      for (var i = 1; i < str.length; ++i) {
          var entry = str[i];
          if (entry == value) {
              count += 1;
          } else {
              result = result + count + value
              count = 1;
              value = entry;
          }
      }
      result = result + count + value;
  }

  return result.split('1').join('');

}

module.exports = {
  encodeLine
};
