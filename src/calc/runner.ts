import { parser } from "./parser";

import {zeroPrioritiesCalc,
    firstPrioritiesCalc,
    secondPrioritiesCalc,
    thirdPrioritiesCalc
} from "./engine";

export const runner = (line: string): number => {
    const stack = parser(line);

    if (stack === null) {
        throw new TypeError("Unexpected string");
    }

    const zeroPrioritiesRes = zeroPrioritiesCalc(stack);

    if (zeroPrioritiesRes.length === 1) {

        return Number(zeroPrioritiesRes[0]);
    }
    const firstPrioritiesRes = firstPrioritiesCalc(zeroPrioritiesRes);

    if (firstPrioritiesRes.length === 1) {

        return Number(firstPrioritiesRes[0]);
    }

    const secondPrioritiesRes = secondPrioritiesCalc(firstPrioritiesRes);

    if (secondPrioritiesRes.length === 1) {

        return Number(secondPrioritiesRes[0]);
    }

    return thirdPrioritiesCalc(secondPrioritiesRes);
};