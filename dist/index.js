"use strict";
// let a = 1 + 2 
// let b = a + 3
// let c =
// {
// apple: a,
// banana: b 
// }
// let d = c.apple * 4
class Cat {
    constructor() {
        this.name = 'Whiskers';
    }
    eat(food) {
        console.info('Ate some', food, '. Mmm!');
    }
    sleep(hours) {
        console.info('Slept for', hours, 'hours');
    }
    meow() {
        console.info('meow');
    }
}
class Zebra {
    trot() {
        // ...
    }
}
class Poodle {
    trot() {
        // ...
    }
}
function ambleAround(animal) {
    animal.trot();
}
let zebra = new Zebra;
let poodle = new Poodle, ambleAround;
(zebra); // OK
ambleAround(poodle); // OK с точки зрения они взаимозаменяемы
class A {
    constructor() {
        this.x = 1;
    }
}
class B extends A {
}
function f(a) { }
f(new A);
f(new B);
f({ x: 1 });
// OK // OK
// Ошибка TS2345: аргумент типа '{x: number}' несовместим // с параметром типа 'A'. Свойство 'x' является
// private в типе 'A', но не в типе '{x: number}'.
// значения
let a = 1999;
function b() { }
class C {
}
let c = new C;
var E;
(function (E) {
    E[E["F"] = 0] = "F";
    E[E["G"] = 1] = "G";
})(E || (E = {}));
let e = E.F;
class StringDatabase {
    constructor() {
        this.state = {};
    }
    get(key) {
        return key in this.state ? this.state[key] : null;
    }
    set(key, value) {
        this.state[key] = value;
    }
    static from(state) {
        let db = new StringDatabase;
        for (let key in state) {
            db.set(key, state[key]);
        }
        return db;
    }
}
//# sourceMappingURL=index.js.map