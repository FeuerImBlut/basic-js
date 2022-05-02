const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 function minesweeper(matrix) {
  let h = matrix.length;
  let w = matrix[0].length;

  let mineArray = [];
  for (let i = 0; i < h; i++) {
      mineArray[i] = new Array(w).fill(0);
  }

  for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
          if (matrix[i][j] == true) {
              checkAndIncrement(matrix, i - 1, j - 1, mineArray);
              checkAndIncrement(matrix, i - 1, j, mineArray);
              checkAndIncrement(matrix, i - 1, j + 1, mineArray);
              checkAndIncrement(matrix, i, j - 1, mineArray);
              checkAndIncrement(matrix, i, j + 1, mineArray);
              checkAndIncrement(matrix, i + 1, j - 1, mineArray);
              checkAndIncrement(matrix, i + 1, j, mineArray);
              checkAndIncrement(matrix, i + 1, j + 1, mineArray);
          }
      }
  }
  return mineArray;
  function checkAndIncrement(arr, y, x, arr2) {
      if (arr[y] != undefined && arr[y][x] != undefined)
          arr2[y][x]++;
  }
}

module.exports = {
  minesweeper
};
