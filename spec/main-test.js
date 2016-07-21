'use strict';

const main = require('../main/main.js');

describe('numbersSquareSum', () => {

  it('should print correct sum', () => {

    const numbers = [1, 2, 3, 4, 5];

    spyOn(console, 'log');

    main.printSquaresSum(numbers);
    
    const expectSum = 35;

    expect(console.log).toHaveBeenCalledWith(expectSum);
  });
});