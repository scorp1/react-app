
type UserOrderState = Exclude<OrderState, "buyingSupplies" | "producing">[]

const orderStates = [
    "initial",
    "inWork",
    "buyingSupplies",
    "producing",
    "fullfilled",
] as const;

type OrderState = typeof orderStates[number];



export const getUserOrderStates = (orderStates: OrderState[]): UserOrderState => {
    const filteredStates = [] as UserOrderState;
    orderStates.forEach((element) => {
        if (element !== "buyingSupplies" && element !== "producing") {
            filteredStates.push(element);
        }
    });
    return filteredStates;
};