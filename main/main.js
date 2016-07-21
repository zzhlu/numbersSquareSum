'use strict';

function printSquaresSum(numbers) {
  const sum = numbers.filter(number => number % 2 === 1)
    .map(odd => odd * odd)
    .reduce((prev, next) => prev + next);

  console.log(sum);
}

exports.printSquaresSum = printSquaresSum;