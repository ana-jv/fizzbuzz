import {generateFizzBuzz} from "./fizzbuzz";

describe('Fizz Buzz', () => {

    it('FizzBuzz from 1 to 1 ', () => {
        expect(generateFizzBuzz(1,1)).toBe('1\n')
    });

    it('FizzBuzz from 1 to 2 ', () => {
        expect(generateFizzBuzz(1,2)).toBe('1\n2\n')
    });

    it('FizzBuzz from 1 to 3 ', () => {
        expect(generateFizzBuzz(1,3)).toBe('1\n2\nFizz\n')
    });

})