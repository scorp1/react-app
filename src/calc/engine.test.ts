import {
    zeroPrioritiesCalc,
    firstPrioritiesCalc,
    secondPrioritiesCalc,
    thirdPrioritiesCalc
} from "./engine";

describe("secondPrioritiesCalc simple cases", () => {
   it("[2, * 22]", () => {
       expect(secondPrioritiesCalc([2, "*", 22])).toEqual([44]);
   });

   it("10, /, 2", () => {
       expect(secondPrioritiesCalc([10, "/", 2])).toEqual([5]);
   });
});

describe("secondPrioritiesCalc mixed with second priorities cases", () => {
    it("[32, /, 32, +, 10, *, 10]", () => {
        expect(secondPrioritiesCalc([32, "/", 32, "+", 10, "*", 10])).toEqual([
            1,
            "+",
            100,
        ]);
    });

    it("[3 * 4 + 2]", () => {
        expect(secondPrioritiesCalc([3, "*", 4, "+", 2])).toEqual([12, "+", 2]);
    })
});


describe("thirdPrioritiesCalc simple cases", () => {
    it("[32, + 32]", () => {
        expect(thirdPrioritiesCalc([32, "+", 32])).toEqual(64);
    });

    it("[32, - 32]", () => {
        expect(thirdPrioritiesCalc([32, "-", 32])).toEqual(0);
    });

    it("[32, - 32, +, 10]", () => {
        expect(thirdPrioritiesCalc([32, "-", 32, "+", 10])).toEqual(10);
    });
});

describe("zeroPrioritiesCalc simple cases", () => {
    it("['**3']", () => {
        expect(zeroPrioritiesCalc(["**3"])).toEqual([9]);
    });

    it("['5!']", () => {
        expect(zeroPrioritiesCalc(["5!"])).toEqual([120]);
    });
});

describe("firstPrioritiesCalc simple cases", () => {
    it("[5, ^ 3]", () => {
        expect(firstPrioritiesCalc([5, "^", 3])).toEqual([125])
    });
});
