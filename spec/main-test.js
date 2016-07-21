'use strict';

const main = require('../main/main.js');

describe('numbersSquareSum', () => {

  it('buildOdds', () => {

    const numbers = [1, 2, 3, 4, 5];
    const odds = main.buildOdds(numbers);
    const expectOdds = [1, 3, 5];

    expect(odds).toEqual(expectOdds);
  });

  it('buildSquares', () => {

    const odds = [1, 3, 5];
    const squares = main.buildSquares(odds);
    const expectSquares = [1, 9, 25];

    expect(squares).toEqual(expectSquares);
  });

  it('getSum', () => {

    const squares = [1, 9, 25];
    const sum = main.getSum(squares);
    const expectSum = 35;

    expect(sum).toEqual(expectSum);
  });

  it('should print correct sum', () => {

    const numbers = [1, 2, 3, 4, 5];
    spyOn(console, 'log');
    main.printSquaresSum(numbers);
    const expectSum = 35;

    expect(console.log).toHaveBeenCalledWith(expectSum);
  });
});