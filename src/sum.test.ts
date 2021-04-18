import { sum } from './sum'

test('adds 4 + 4 to equal 8', () => {
    expect(sum(4, 4)).toBe(8);
});
test('adds 10 + 22 to equal 30', () => {
    expect(sum(10, 22)).toBe(32);
});