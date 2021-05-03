import {parser} from "./parser";

describe("Parser correct case", () => {
   it("2 + 20", () => {
      expect(parser("2 + 20")).toEqual([2, "+", 20]);
   });

   it("33 + 23 * 22", () => {
      expect(parser("33 + 23 * 22")).toEqual([33, "+", 23, "*", 22]);
   });
});