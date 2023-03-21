"use strict";
// let a = 1 + 2 
// let b = a + 3
// let c =
// {
// apple: a,
// banana: b 
// }
// let d = c.apple * 4
let a = { value: 'a' };
let b = { value: 'b', isLeaf: true };
let c = { value: 'c', children: [b] };
let a1 = mapNode(a, _ => _.toUpperCase());
let b1 = mapNode(b, _ => _.toUpperCase());
let c1 = mapNode(c, _ => _.toUpperCase());
function mapNode(node, f) {
    return Object.assign(Object.assign({}, node), { value: f(node.value) });
}
//# sourceMappingURL=index.js.map