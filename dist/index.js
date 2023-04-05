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
;
;
let pizza;
function createPizza(name, sizes) {
    return {
        name,
        sizes,
        getAvailableSizes() {
            return this.sizes;
        }
    };
}
pizza = createPizza('Pepperoni', ['small', 'medium']);
pizza[1] = 'xyz';
pizza.toppings = 1;
//# sourceMappingURL=index.js.map