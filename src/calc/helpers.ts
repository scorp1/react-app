export const isNumber = (item: string): boolean => !isNaN(Number(item));

export const isFactorial = (item: string): boolean => {
    return String(item).search(/^(\d+)\!/g) !== -1;
};

export const isSquareMathOperator = (item: string): boolean => {
    return String(item).search(/^\*\*(\d+)/g) !== -1;
};