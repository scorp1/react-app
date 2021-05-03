export type BinaryOperationType = (first: number, second: number) => number;
export type UnaryOperationType = (first: number) => number;


export const mul: BinaryOperationType = (
    first: number,
    second: number
): number => first * second;

export const div: BinaryOperationType = (
    first: number,
    second: number
): number => first / second;

export const add: BinaryOperationType = (
    first: number,
    second: number
): number => first + second;

export const minus: BinaryOperationType = (
    first: number,
    second: number
): number => first - second;

export const factorial: UnaryOperationType = (first: number): number =>
    first != 1 ? first * factorial(first - 1) : 1;

export const pow: BinaryOperationType = (
    first: number,
    second: number
): number => Math.pow(first, second);

export const square: UnaryOperationType = (first: number): number =>
    Math.pow(first, 2);

export const binaryMathOperators: { [key: string]: BinaryOperationType } = {
    "*": mul,
    "/": div,
    "+": add,
    "-": minus,
    "^": pow,
};

export const unaryMathOperators: {
    [key: string]: UnaryOperationType;
} = {
    "**": square,
    "!": factorial,
};

export const mathOperators: {
    [key: string]: BinaryOperationType | UnaryOperationType;
} = {
    ...binaryMathOperators,
    ...unaryMathOperators,
};

export const mathPriorities: number[] = [0, 1, 2, 3];

const [ZERO, FIRST, SECOND, THIRD] = mathPriorities;

export const mathOperatorsPriorities: { [key: string]: number } = {
    "!": ZERO,
    "^": FIRST,
    "**": FIRST,
    "*": SECOND,
    "/": SECOND,
    "+": THIRD,
    "-": THIRD
};