const {shuffleArray} = require('./utils')
const testArray = [1,2,3,4];
describe('shuffleArray should', () => {
    test('return anything not null.', () => {
        expect(shuffleArray([1,2,3,4])).toBeTruthy();
    })
    test('have the same amount in the array', () => {
        expect(shuffleArray(testArray)).toHaveLength(testArray.length);
    })
    test('have the number i put in it.', () => {
        expect(shuffleArray(testArray)).toContain(1);
        expect(shuffleArray(testArray)).toContain(2);
        expect(shuffleArray(testArray)).toContain(3);
        expect(shuffleArray(testArray)).toContain(4);
    })
})