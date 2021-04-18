import { multiplier } from './multiplier'

test('adds 2 * 2 to equal 4', () => {
    expect(multiplier(2, 2)).toBe(4);
});
test('adds 6 * 6 to equal 36', () => {
    expect(multiplier(6, 6)).toBe(36);
});