const WRONG_ARGUMENTS = 'Wrong arguments'

export const generateFizzBuzz = (init: number, final: number): string => {
    let fizzBuzzList = ''

    if (init > final) return WRONG_ARGUMENTS

    for (let i = init; i <= final; i++) {
        fizzBuzzList = fizzBuzzList.concat(getNextNumber(i).concat('\n'))
    }

    return fizzBuzzList
}

const getNextNumber = (i: number) => {
    let nextNumber = i.toString()
    if (i == 0) {
        return '0'
    }
    if (isFizzOrBuzz(i, 3)) {
        nextNumber = 'Fizz'
    }
    if (isFizzOrBuzz(i, 5)) {
        nextNumber = 'Buzz'
    }
    if (isFizzOrBuzz(i, 3) && isFizzOrBuzz(i, 5)) {
        nextNumber = 'FizzBuzz'
    }
    return nextNumber;
}

const isFizzOrBuzz = (i: number, conditional: number) => {
    return i % conditional == 0 || i.toString().includes(conditional.toString())
}

