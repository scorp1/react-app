import { ParsedLineType, parser } from "./parser";
import { isNumber, isFactorial, isSquareMathOperator } from "./helpers";
import {
    mathOperators,
    mathPriorities,
    mathOperatorsPriorities,
    unaryMathOperators
} from "./mathOperators";

const [ZERO, FIRST, SECOND, THIRD] = mathPriorities;

export const zeroPrioritiesCalc = (stack: ParsedLineType): ParsedLineType =>
    stack.reduce<ParsedLineType>((result, item) => {
        const prevItem = result[result.length - 1];

        if (isFactorial(String(item))) {
            result = [
                ...result.slice(0, 1),
                unaryMathOperators["!"](Number(String(item).replace("!", ""))),
            ];

        } else if (isSquareMathOperator(String(item))) {
            result = [
                ...result.slice(0, 1),
                unaryMathOperators["**"](Number(String(item).replace("**", ""))),
            ];

        } else {
            if (!isNumber(String(item)) && mathOperatorsPriorities[item] === ZERO) {

                if (!mathOperators[item]) {
                    throw new TypeError("Unexpected stack!");
                }
                if (mathOperators[item]) {

                    result = [
                        ...result.slice(0, -1),
                        mathOperators[item](Number(prevItem), Number(item)),
                    ];
                }
            } else {
                result.push(item);
            }
        }

        return result;
    }, []);

export const firstPrioritiesCalc = (stack: ParsedLineType): ParsedLineType =>
    stack.reduce<ParsedLineType>((result, nextItem) => {
        const prevItem = result[result.length - 2];
        const item = result[result.length - 1];


        if (!isNumber(String(item)) && mathOperatorsPriorities[item] === FIRST) {
            if (!mathOperators[item]) {
                throw new TypeError("Unexpected stack!");
            }
            result = [
                ...result.slice(0, -2),
                mathOperators[item](Number(prevItem), Number(nextItem)),
            ];
        } else {
            result.push(nextItem);
        }

        return result;
    }, []);

export const secondPrioritiesCalc = (stack: ParsedLineType): ParsedLineType =>
    stack.reduce<ParsedLineType>((result, nextItem) => {
        const prevItem = result[result.length - 2];
        const item = result[result.length - 1];

        if (!isNumber(String(item)) && mathOperatorsPriorities[item] === SECOND) {
            if (!mathOperators[item]) {
                throw new TypeError("Unexpected stack!");
            }
            result = [
                ...result.slice(0, -2),
                mathOperators[item](Number(prevItem), Number(nextItem)),
            ];
        } else {
            result.push(nextItem);
        }
        return result;
    }, []);

export const thirdPrioritiesCalc = (stack: ParsedLineType): number =>
    stack.reduce<number>((result, nextItem, key) => {
        const item = stack[key - 1];

        if (!isNumber(String(item)) && mathOperatorsPriorities[item] === THIRD) {
            result = mathOperators[item](Number(result), Number(nextItem));
        }
        return result;
    }, Number(stack[0]));

