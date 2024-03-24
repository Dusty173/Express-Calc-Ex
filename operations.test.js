const {mean, median, mode} = require('./operations');

describe('Find the mean', () => {
    test('find mean of even set of nums', () => {
        expect(mean([2,4,6,8,10,12])).toEqual(7)
    })
    test('find mean of odd set of nums', () => {
        expect(mean([1,3,5])).toEqual(3)
    })
    test('find mean of empty array should return 0', () => {
        expect(mean([])).toEqual(0);
    })
})

describe('Find the Median', () => {
    test('find median of even set of nums', () => {
        expect(median([2,4,6,8])).toEqual(5)
    })
    test('find median of odd set of nums', () => {
        expect(median([1,3,5,7,9])).toEqual(5)
    })
})

describe('Find the Mode', () => {
    test('find the mode of given array of nums', () => {
        expect(mode([1,2,3,3,3,3,4,4,4,5])).toEqual(3)
    })
})