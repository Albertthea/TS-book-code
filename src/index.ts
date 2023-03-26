// let a = 1 + 2 
// let b = a + 3
// let c =
// {
// apple: a,
// banana: b 
// }
// let d = c.apple * 4

// let a: any = 666
// let b: any = ['danger'] 
// let c = a + b

// let a: unknown = 30
// let b = a === 123
// let c = a + 10
// if (typeof a === 'number') {
// // unknown
// // boolean
// // Ошибка TS2571: объект имеет тип 'unknown'.
// let d = a + 10 // number 
// }

// let a = true
// var b = false
// const c = true
// let d: boolean = true 
// let e: true = true 
// let f: true = false

// let a = 1234
// var b = Infinity * 0.10 
// const c = 5678
// let d = a < b
// let e: number = 100 
// let f: 26.218 = 26.218 
// let g: 26.218 = 10

// let a = 1234n 
// const b = 5678n 
// var c = a + b 
// let d = a < 1235 
// let e = 88.5n
// let f: bigint = 100n 
// let g: 100n = 100n 
// let h: bigint = 100

// let a = 'hello'
// var b = 'billy'
// const c = '!'
// let d = a + ' ' + b + c 
// let e: string = 'zoom' 
// let g: 'john' = 'zoe'

// let a = Symbol('a')
// let b: symbol = Symbol('b') 
// var c = a === b
// let d = a + 'x'
// const e = Symbol('e') // typeof e
// const f: unique symbol = Symbol('f') // typeof f
// let g: unique symbol = Symbol('f')
// let h = e === e // boolean
// let i = e === f

// let a: object = { 
//     b: 'x'
// }

// let b = { 
//     c: {
//         d: 'f' 
//     }
// }

// let c: {
//     firstName: string 
//     lastName: string
// } = {
//     firstName: 'john', 
//     lastName: 'barrowman'
// }

// class Person { 
//     constructor(
//     public firstName: string,
//     public lastName: string 
//     ) {}
// }
// c = new Person('matt', 'smith')

// let a: {b: number}
// a= {}
// a= {
//     b: 1,
//     c: 2
// }

// let a: {
//     b: number
//     c?: string
//     [key: number]: boolean 
// }

// a = {b: 1}
// a = {b: 1, c: undefined}
// a = {b: 1, c: 'd'}
// a = {b: 1, 10: true}
// a = {b: 1, 10: true, 20: false}
// a = {10: true} // Ошибка TS2741: свойство 'b' упущено
// // в типе'{10: true}'.
// a = {b: 1, 33: 'red'} // Ошибка TS2741: тип 'string' не может

// let user: {
//     readonly firstName: string
// }= {
//     firstName: 'abby'
// }

// let airplaneSeatingAssignments: { 
//     [seatNumber: string]: string
// } = {
//     '34D': 'Boris Cherny', 
//     '34E': 'Bill Gates'
// }

// type Color = 'red'
// type Color = 'blue'

// type Color = 'red'
// let x = Math.random() < .5 
// //^?
// if (x) {
//     type Color = 'blue' // Здесь перекрывается Color, объявленный выше. let b: Color = 'blue'
// } else {
//     let c: Color = 'red'
// }

// type Cat = {name: string, purrs: boolean}
// type Dog = {name: string, barks: boolean, wags: boolean} 
// type CatOrDogOrBoth = Cat | Dog
// type CatAndDog = Cat & Dog

// // Cat
// let a: CatOrDogOrBoth = { 
//     name: 'Bonkers', 
//     purrs: true
// }
// // Dog
// a = {
//     name: 'Domino', 
//     barks: true, 
//     wags: true
// }
// // И то и другое
// a = {
// name: 'Donkers', 
// barks: true,
// purrs: true,
// wags: true 
// }

// let b: CatAndDog = { 
//     name: 'Domino',
//     barks: true,
//     purrs: true,
//     wags: true
// }

// function trueOrNull(isTrue: boolean) { if (isTrue) {
//     return 'true'
// }
// return null }

// type Returns = string | null

// let a = [1, 2, 3]
// var b = ['a', 'b']
// let c: string[] = ['a'] 
// let d = [1, 'a']
// const e = [2, 'b']
// let f = ['red'] 
// f.push('blue') 
// f.push(true)
// let g = [] 
// g.push(1) 
// g.push('red')
// let h: number[] = [] 
// h.push(1) 
// h.push('red')

// function buildArray() { 
//     let a = []
//     a.push(1) 
//     a.push('x') 
//     return a
//  }
// let myArray = buildArray()
// myArray.push(true)

// let a: [number] = [1]
// // Кортеж [имя, фамилия, год рождения]
// let b: [string, string, number] = ['malcolm', 'gladwell', 1963]
// let trainFares: [number, number?][] = [
//     [3.75],
//     [8.25, 7.70],
//     [10.50],
//     [9.65, 9.0]
// ]

// let as: readonly number[] = [1, 2, 3] 
// let bs: readonly number[] = as.concat(4) 
// let three = bs[2]
// as[4] = 5

// type A = readonly string[] 
// type B = ReadonlyArray<string> 
// type C = Readonly<string[]>
// type D = readonly [number, string] 
// type E = Readonly<[number, string]>

// (a) Функция, возвращающая число или null

// function a(x: number) { 
//     if (x < 10) {
//     return x 
//     }
//     return null
// }

// // (b) Функция, возвращающая undefined
// function b() { 
//     return undefined
// }
// // (c) Функция, возвращающая void
// function c() { 
//     let a = 2 + 2 
//     let b = a * a
// }
// // (d) Функция, возвращающая never
// function d() {
//     throw TypeError('I always error')
// }
// // (e) Другая функция, возвращающая never
// function e() { 
//     while (true)
//         { doSomething()
//     }
// }

// enum Language { 
//     English,
//     Spanish,
//     Russian 
// }

// enum Language { 
//     English = 0,
//     Spanish = 1,
//     Russian = 2 
// }
    
// let myFirstLanguage = Language.Russian // Language 
// let mySecondLanguage = Language['English'] // Language

// enum Language { 
//     English = 0,
//     Spanish = 1 
// }
// enum Language { 
//     Russian = 2
// }

// enum Color {
//     Red = '#c10000', 
//     Blue = '#007ac1', 
//     Pink = 0xc10050, 
//     White = 255
// }

// const enum Flippable {
//     Burger = 'Burger',
//     Chair = 'Chair',
//     Cup = 'Cup',
//     Skateboard = 'Skateboard', Table = 'Table'
// }

// function flip(f: Flippable) { 
//     return 'flipped it'
// }
// flip(Flippable.Chair) // 'flipped it'
// flip(Flippable.Cup)
// flip(12)
// flip('Hat')
    // 'flipped it'
    // Ошибка TS2345: аргумент типа '12'
    // не может быть присвоен параметру типа
    // 'Flippable'.
    // Ошибка TS2345: аргумент типа '"Hat"'
    // не может быть присвоен параметру типа
    // 'Flippable'.

// let a = 1042
// let b = 'apples and oranges'
// const c = 'pineapples'
// let d = [true, true, false]
// let e = {type: 'ficus'}
// let f = [1, false]
// const g = [3]
// let h = null

// let i: 3 = 3 
// i = 4

// let l: unknown = 4 
// let m = l 

// function sumVariadic(): number { return Array
//     .from(arguments)
//     .reduce((total, n) => total + n, 0)
// }
// sumVariadic(1, 2, 3);

// function fancyDate(this: Date) {
//     return `${this.getDate()}/${this.getMonth()}/${this.getFullYear()}`
// }

// fancyDate.call(new Date) // выводится как "6/13/2008"
// fancyDate() // Ошибка TS2684: контекст 'this'

// function* createNumbers(): IterableIterator<number> { 
//     let n = 0
//     while (1) { 
//         yield n++
//     } 
// }

// let numbers = createNumbers()
// numbers.next()
// numbers.next()
// numbers.next()


// let numbers = { 
//     *[Symbol.iterator]() {
//         for (let n = 1; n <= 10; n++) { 
//         yield n
//         } 
//     }
// }

// function sum(a: number, b: number): number { 
//     return a + b
// }

// функция greet(name: string)
// type Greet = (name: string) => string
// // функция log(message: string, userId?: string)
// type Log = (message: string, userId?: string) => void
// // функция sumVariadicSafe(...numbers: number[]): number
// type SumVariadicSafe = (...numbers: number[]) => number


// let log: Log = (
//     message, 
//     userId = 'Not signed in'  
// ) => {
//     let time = new Date().toISOString() 
//     console.log(time, message, userId)
//     }
   
// function times(
//     f: (index: number) => void, 
//     n: number
// )   {
//     for (let i = 0; i < n; i++) {
//         f(i) 
//     }
// }

// times(n => console.log(n), 4);



// Сокращенная сигнатура вызова
// type Log = (message: string, userId?: string) => void

// Полная сигнатура вызова
// type Log = {
// (message: string, userId?: string): void
// }

// type Reserve = {
//     (from: Date, to: Date, destination: string): Reservation /* для рейсов в обе стороны */
//     (from: Date, destination: string): Reservation /* для рейсов в одну сторону */
// }

// let reserve: Reserve = (
//     from: Date, 
//     toOrDestination: Date | string,
//     destination ?: String) => {
//      // ...
// }

// let reserve: Reserve = ( 
//     from: any,
//     toOrDestination: any,
//     destination?: any
// ) => {
// // ...
// }

// function createElement(tag: 'a'): HTMLAnchorElement 
// function createElement(tag: 'canvas'): HTMLCanvasElement 
// function createElement(tag: 'table'): HTMLTableElement 
// function createElement(tag: string): HTMLElement {
//     // ...
// }

// function warnUser(warning) { 
//     if (warnUser.wasCalled) {
//         return
//     }
//     warnUser.wasCalled = true 
//     alert(warning)
// }
// warnUser.wasCalled = false

// type WarnUser = { 
//     (warning: string): void 
//     wasCalled: boolean
// }

// type Filter = {
//     (array: unknown, f: unknown) => unknown[]
// }

// type Filter = {
//     (array: number[], f: (item: number) => boolean): number[]
// }

// type Filter = {
//     (array: number[], f: (item: number) => boolean): number[] 
//     (array: string[], f: (item: string) => boolean): string[]
//     (array: object[], f: (item: object) => boolean): object[]
// }

// let names = [
//     {firstName: 'beth'}, 
//     {firstName: 'caitlyn'}, 
//     {firstName: 'xin'}
// ]

// let result = filter( 
//     names,
//     _ => _.firstName.startsWith('b')
// )

// result[0].firstName

// type Filter = {
//     <T>(array: T[], f: (item: T) => boolean): T[]
// }

// type Filter = {
//     <T>(array: T[], f: (item: T) => boolean): T[]
// }
    
// let filter: Filter = (array, f) => // ...
    
// // (a) T привязан к number
// filter([1, 2, 3], _ => _ > 2)

// // (b) T привязан к строке
// filter(['a', 'b'], _ => _ !== 'b')

// // (c) T привязан к {firstName: string}
// let names = [
//     {firstName: 'beth'}, 
//     {firstName: 'caitlyn'}, 
//     {firstName: 'xin'}
// ]
    
// filter(names, _ => _.firstName.startsWith('b'))

// type Filter<T> = {
//     (array: T[], f: (item: T) => boolean): T[]
// }
    
// let filter: Filter = (array, f) => // Ошибка TS2314: обобщенный тип
//     // ... // 'Filter' требует 1 аргумент типа. type OtherFilter = Filter // Ошибка TS2314: условный тип
//     // 'Filter' требует 1 аргумент типа.
// let filter: Filter<number> = (array, f) => // ...

//     type StringFilter = Filter<string>
// let stringFilter: StringFilter = (array, f) =>
//     // ...

// type Filter = {
//     <T>(array: T[], f: (item: T) => boolean): T[]
// }
    
// let filter: Filter = // ...

// type Filter<T> = {
//     (array: T[], f: (item: T) => boolean): T[]
// }
    
// let filter: Filter<number> = // ...

// type Filter = <T>(array: T[], f: (item: T) => boolean) => T[] 
// let filter: Filter = // ...
    
// type Filter<T> = (array: T[], f: (item: T) => boolean) => T[] 
// let filter: Filter<string> = // ...
    
// function filter<T>(array: T[], f: (item: T) => boolean): T[] { 
//      // ...
// }

// interface Array<T> { filter(
//     callbackfn: (value: T, index: number, array: T[]) => any,
//     thisArg?: any
// ): T[]
// map<U>(
//     callbackfn: (value: T, index: number, array: T[]) => U,
//     thisArg?: any
// ): U[] 
// }

// function map <T, U>(array: T[], f: (item: T) => U): U[] {
//     let result = []
//     for (let i = 0; i < array.length; i++) {
//         result[i] = f(array[i])
//     }
//     return result
// }

// map(
//     ['a', 'b', 'c'],
//     _ => _ === 'a' // Массив T // Функция, возвращающая U
// )

// map <string, boolean>( 
//     ['a', 'b', 'c'],
//     _ => _ === 'a' 
// )

// type MyEvent<T> = { 
//     target: T
//     type: string 
// }

// type ButtonEvent = MyEvent<HTMLButtonElement>

// let myEvent: MyEvent<HTMLButtonElement | null> = { 
//     target: document.querySelector('#myButton'), 
//     type: 'click'
// }

// type TimedEvent<T> = { 
//     event: MyEvent<T> 
//     from: Date
//     to: Date
// }

// let cat: MyEvent<number> = {
//     target: 5,
//     type: 'blue'
// }

// type TreeNode = { 
//     value: string
// }

// type LeafNode = TreeNode & {
//     isLeaf: true
// }

// type InnerNode = TreeNode & {
//     children: [TreeNode] | [TreeNode, TreeNode]
// }

// let a: TreeNode = {value: 'a'}
// let b: LeafNode = {value: 'b', isLeaf: true} 
// let c: InnerNode = {value: 'c', children: [b]}
// let a1 = mapNode(a, _ => _.toUpperCase()) 
// let b1 = mapNode(b, _ => _.toUpperCase()) 
// let c1 = mapNode(c, _ => _.toUpperCase())

// function mapNode<T extends TreeNode>(
//      node: T,
//     f: (value: string) => string 
//     ): T {
//         return {
//             ...node,
//             value: f(node.value)
//         }
//     }

// type HasSides = {numberOfSides: number}
// type SidesHaveLength = {sideLength: number}

// function logPerimeter< 
//     Shape extends HasSides & SidesHaveLength
// >(s: Shape): Shape { 
//     console.log(s.numberOfSides * s.sideLength) 
//     return s
// }

// type Square = HasSides & SidesHaveLength
// let square: Square = {numberOfSides: 4, sideLength: 3} 
// logPerimeter(square) // Square, logs "12"
 
// function call(
//     f: (...args: unknown[]) => unknown, 
//     ...args: unknown[]
// ): unknown {
//     return f(...args)
// }
    
// function fill(length: number, value: string): string[] { 
//     return Array.from({length}, () => value)
// }
    
// call(fill, 10, 'a') 

// function call<T extends unknown[], R>( 
//     f: (...args: T) => R,
//     ...args: T
// ): R {
//     return f(...args)
// }

// let a = call(fill, 10, 'a') 
// let b = call(fill, 10)
// let c = call(fill, 10, 'a', 'z')

// type MyEvent<T> = { 
//     target: T
//     type: string 
// }

// let buttonEvent: MyEvent<HTMLButtonElement> = { 
//     target: myButton,
//     type: string
// }

// type MyEvent<T = HTMLElement> = { 
//     target: T
//     type: string 
// }

// type MyEvent<T extends HTMLElement = HTMLElement> = { 
//     target: T
//     type: string 
// }

// // Хорошо
// type MyEvent2<
//     Type extends string,
//     Target extends HTMLElement = HTMLElement,
// >= {
//     target: Target
//     type: Type 
// }

// // Плохо
// type MyEvent3<
//     Target extends HTMLElement = HTMLElement,
//     Type extends string // Ошибка TS2706: необходимые параметры
// > = { // типов не могут следовать за опциональными. 
//     target: Target
//     type: Type 
// }

// type Reserve = {
//     (from: Date, to: Date, destination: string): Reservation /* для рейсов в обе стороны */
//     (from: Date, destination: string): Reservation /* для рейсов в одну сторону */
//     (destination: string): Reservation /*для отпуска сразу*/
// }

// let reserve: Reserve = (
//     from: Date, 
//     toOrDestination: Date | string,
//     destination ?: String) => {
//      // ...
// }

// let reserve: Reserve = ( 
//     from: any,
//     toOrDestination: any,
//     destination?: any
// ) => {
// // ...
// }

// function call1(
//     f: (...args: unknown[]) => unknown, 
//     ...args: unknown[]
// ): unknown {
//     return f(...args)
// }
    
// function fill1(length: number, value: string): string[] { 
//     return Array.from({length}, () => value)
// }
    
// call1(fill1, 10, 1) 


// function call2<T extends unknown[], R>( 
//     f: (...args: T) => R,
//     ...args: T
// ): R {
//     return f(...args)
// }

// let g = call2(fill1, 10, 'a') 
// // let b = call2(fill1, 10)
// // let c = call2(fill1, 10, 'a', 'z')

// // дз 4.4

// function call<First, T extends unknown[], R>(
//     f: (arg0: First, arg1: string, ...rest: T) => R,
//     arg0: First,
//     arg1: string,
//     ...args: T
//   ): R {
//     return f(arg0, arg1, ...args);
//   }
    
// function fill(length: number, value: string): string[] { 
//     return Array.from({length}, () => value)
// }
    
// call(fill, 10, 'a') 

// function call<T extends unknown[], R>( 
//     f: (...args: T) => R,
//     ...args: T
// ): R {
//     return f(...args)
// }

// let a = call(fill (1, '1'), '10', 'a') 
// let b = call(fill, 10)
// let c = call(fill, 10, 'a', 'z')


// Шахматы
// class Game {
//     private pieces = Game.makePieces()
//         private static makePieces() {
//             return [
//     // Короли
//                 new King('White', 'E', 1),
//                 new King('Black', 'E', 8),
//     // Ферзи
//                 new Queen('White', 'D', 1),
//                 new Queen('Black', 'D', 8),
//     // Слоны
//                 new Bishop('White', 'C', 1),
//                 new Bishop('White', 'F', 1),
//                 new Bishop('Black', 'C', 8),
//                 new Bishop('Black', 'F', 8),
//     // ...
//     ] }
// }
    
// abstract class Piece {
//     protected position: Position
//     constructor (
//         private readonly color: Color, //Модификатор доступа private в конструкторе автоматически присваивает параметр к this (this.file и т. д.) и устанавливает его видимость как приватную. 
//         file : File,
//         rank: Rank
//     ) {
//         this.position = new Position(file, rank)
//     } 
//     moveTo(position: Position) {
//         this.position = position
//     }
//     abstract canMoveTo(position: Position): boolean
// }
    


// class Position {
//     constructor (
//         private file: File,
//         private rank: Rank
//     ) {}
//     distanceFrom(position: Position) {
//         return {
//             rank: Math.abs(position.rank - this.rank),
//             file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0))  
//         } 
//     }
// }   

// class King extends Piece { 
//     canMoveTo(position: Position) {
//     let distance = this.position.distanceFrom(position)
//     return distance.rank < 2 && distance.file < 2
//     } 
// } 


// class Queen extends Piece {} 
// class Bishop extends Piece {} 
// class Knight extends Piece {} 
// class Rook extends Piece {} 
// class Pawn extends Piece {}

// type Color = 'Black' | 'White'
// type File = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' 
// type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 



// function distanceFrom(position: any, Position: typeof Position) {
//     throw new Error("Function not implemented.")
// }
// ...
// abstract class Piece { // если хотим чтобы пользователь не мог инстанцировать Piece, а создавал новые классы
//     constructor(
//     // ...

// new Piece('White', 'E', 1)

// class Set1 {
//     has(value: number): boolean {
    
//     }
//         add(value: number): this {
  
//     } 
// }

// class MutableSet extends Set1 { 
//     delete(value: number): boolean {
    
//     } 
//     // add(value: number): MutableSet { 
//         // если добавиь зис в 835 то можно убрать 844-846
//     // }
// }

//Интерфейсы
// type Sushi = { calories: number
//     salty: boolean
//     tasty: boolean
// }

// interface Sushi { calories: number
//     salty: boolean
//     tasty: boolean
// }

// type Cake = { calories: number
//     sweet: boolean
//     tasty: boolean
// }

// type Food = { 
//     calories: number
//     tasty: boolean
// }
// type Sushi = Food & { 
//     salty: boolean
// }
// type Cake = Food & {
//     sweet: boolean
// }

// interface Food { 
//     calories: number
//     tasty: boolean
// }
// interface Sushi extends Food { 
//     salty: boolean
// }
// interface Cake extends Food {
//     sweet: boolean
// }

// // type A = number type B = A | string // не переписать на интерфейсы

// interface A {
//     good(x: number): string
//     bad(x: number): string }
// interface B extends A {
//     good(x: string | number): string
//     bad(x: string): string // Ошибка TS2430: Interface 'B'
//     // некорректно расширяет
// }

// //слияние деклораций
// interface User { 
//     name: string
// }

// interface User { 
//     age: number
// }

// let a: User = { 
//     name: 'Ashley',
//     age: 30 
// }


// //типы такое не позволяют делать
// type User = { 
//     // Ошибка TS2300: повторяющийся идентификатор 'User'. 
//     name: string
// }
// type User = { 
//     // Ошибка TS2300: повторяющийся идентификатор 'User'. 
//     age: number
// }

interface Animal { 
    readonly name: string
    eat(food: string): void
    sleep(hours: number): void 
}
class Cat implements Animal, Feline { 
    name = 'Whiskers'
    eat(food: string) {
        console.info('Ate some', food, '. Mmm!')
    }
    sleep(hours: number) {
        console.info('Slept for', hours, 'hours')
    }
    meow() {
        console.info('meow');
    }
}

interface Feline {
    meow(): void
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

function ambleAround(animal: Zebra) { 
    animal.trot()
}

let zebra = new Zebra
let poodle = new Poodle ambleAround(zebra) // OK
ambleAround(poodle) // OK с точки зрения они взаимозаменяемы

class A { 
    private x = 1
}

class B extends A {} 
function f(a: A) {}

f(new A)
f(new B)

f({x: 1})
// OK // OK
// Ошибка TS2345: аргумент типа '{x: number}' несовместим // с параметром типа 'A'. Свойство 'x' является
// private в типе 'A', но не в типе '{x: number}'.

// значения
let a = 1999 function b() {}

// типы
type a = number 
interface b {
    (): void 
}

class C {}
let c: C
    = new C 

enum E {F, G} 
let e: E
    = E.F 

type State = {
[key: string]: string
}
class StringDatabase {
    state: State = {}
    get(key: string): string | null {
    return key in this.state ? this.state[key] : null 
    }

    set(key: string, value: string): void { 
        this.state[key] = value
    }
    static from(state: State) {
    let db = new StringDatabase 
    for (let key in state) {
            db.set(key, state[key])
        }
    return db 
    }
}

interface StringDatabase { state: State
    get(key: string): string | null
    set(key: string, value: string): void 
}
interface StringDatabaseConstructor { 
    new(): StringDatabase
    from(state: State): StringDatabase
}