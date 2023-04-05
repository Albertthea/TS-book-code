"use strict";
// let a = 1 + 2 
// let b = a + 3
// let c =
// {
// apple: a,
// banana: b 
// }
// let d = c.apple * 4
Object.defineProperty(exports, "__esModule", { value: true });
const pizza = { name: '4 cheese', toppings: 5 };
const serialized = JSON.stringify(pizza);
function getNameFromJSON(obj) {
    return JSON.parse(obj).toppings;
}
getNameFromJSON(serialized);
//# sourceMappingURL=index.js.map