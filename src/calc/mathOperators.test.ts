import { mul, div, add, minus, pow, factorial, square } from "./mathOperators";

describe("mathOperators test cases", () => {
   it("add 22 + 56 to equal 78", () => {
       expect(add(22,56)).toBe(78);
   });

   it("div 14 / 7 to equal 2", () => {
       expect(div(14,7)).toBe(2);
   });

   it("minus 22 - 13 to equal 9", () => {
       expect(minus(22,13)).toBe(9);
   });

   it("mul 4 * 4 to equal 16", () => {
       expect(mul(4,4)).toBe(16);
   });

   it("pow 2 ^ 3 to equal 8", () => {
        expect(pow(2, 3)).toBe(8);
   });

   it("factorial !5 to equal 120", () => {
      expect(factorial(5)).toBe(120);
   });

   it("square 4 to equal 16", () => {
       expect(square(4)).toBe(16);
   });

    it("square 5 to equal 25", () => {
        expect(square(5)).toBe(25);
    });

    it("factorial !1 to equal 1", () => {
        expect(factorial(1)).toBe(1);
    });
});