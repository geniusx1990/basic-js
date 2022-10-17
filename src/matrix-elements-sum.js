const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let result = 0;
  let n = 0;
  for (let i = 0; i < matrix[n].length; i++) {
      let sum = 0;
      for (let j = 0; j < matrix.length; j++) {
          if (matrix[j][i]) {
              sum = sum + matrix[j][i];
          } else {
            break
          };
      }
      result = result + sum;
  }
  return result;
}

module.exports = {
  getMatrixElementsSum
};
