'use strict';

function printSquaresSum(numbers) {

  const odds = buildOdds(numbers);
  const squares = buildSquares(odds);
  const sum = getSum(squares);

  console.log(sum);
}

function buildOdds(numbers) {
  const odds = [];

  for (const number of numbers) {
    if (number % 2 === 1) {
      odds.push(number);
    }
  }

  return odds;
}

function buildSquares(odds) {
  return odds.map(odd => odd = odd * odd);
}

function getSum(squares) {
  let sum = 0;

  for (const square of squares) {
    sum += square;
  }

  return sum;
}

module.exports = {
  buildOdds: buildOdds,
  buildSquares: buildSquares,
  getSum: getSum,
  printSquaresSum: printSquaresSum
};