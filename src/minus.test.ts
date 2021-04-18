import { minus } from './minus'

test('adds 10 - 2 to equal 8', () => {
    expect(minus(10, 2)).toBe(8);
});
test('adds 20 - 10 to equal 10', () => {
    expect(minus(20, 10)).toBe(10);
});