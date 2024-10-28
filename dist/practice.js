"use strict";
// 1 . 기본 타입
let count = 0; // 숫자
count += 1;
// count = "문자열 ??" // 오류 발생 !
const message = "hello world"; // 문자열
const done = true; //불리언
const numbers = [1, 2, 3]; // 숫자 배열
const messages = ['hello', 'world']; // 문자열 배열
// message.push(1); // 문자열 배열에 숫자를 넣으려고 하면 오류 발생 !
let mightBeUndefined = undefined; // string일 수도 있고 undefined일 수도 있음
let nullableNumber = null; // Number일 수도 있고 null일 수도 있음
let color = 'red'; // red, orange, yellow 중 하나
color = "yello";
// color = "green"; // 오류 발생 !
// ------------------------------------------------------------------------------------------- //
// 2. 함수에서 타입 정의하기
function sum(x, y) {
    return x + y;
    //    return null; // number가 명시되었기 때문에 null 반환할 수 없음
}
sum(1, 2);
function sumArray(numbers) {
    return numbers.reduce((acc, current) => acc + current, 0);
}
const total = sumArray([1, 2, 3, 4, 5]);
function returnNothing() {
    console.log('반환 값 없음');
}
class Circle {
    // `implements` 키워드로 이 클래스가 Shape interface의 조건을 충족하겠다 명시
    constructor(radius) {
        this.radius = radius;
        this.radius = radius;
    }
    //너비를 가져오는 함수
    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
const circle = new Circle(5);
const rectangle = new Rectangle(10, 5);
console.log(circle.radius);
// console.log(rectangle.width); // width가 private이므로 에러 발생 !
const shapes = [new Circle(5), new Rectangle(10, 5)];
shapes.forEach(shape => {
    console.log(shape.getArea());
});
const person = {
    name: '김사랑',
    age: 26
};
const expert = {
    name: '김개발',
    skills: ['javascript', 'react']
};
const person2 = {
    name: '김사람',
    age: 20
};
const expert2 = {
    name: '김게발',
    skills: ['javascript', 'react']
};
const people = [person2, expert2];
const person3 = {
    name: '김사림'
};
const expert3 = {
    name: '김기발',
    skills: ['javascript', 'react']
};
const people2 = [person3, expert3];
const color2 = 'red';
const colors2 = ['red', 'orange'];
// ------------------------------------------------------------------------------------------- //
// ** Generics ** -> 제네릭은 타입스크립트에서 함수, 클래스, interface, type을 사용하게 될 때
//                   여러 종류의 타입에 대하여 호환을 맞춰야 하는 상황에서 사용하는 문법
// 6. 함수에서 Generics 사용하기
// ex) 객체 A와 객체 B를 합쳐주는 merge라는 함수를 만든다고 가정할 때, 
//     A와 B가 어떤 타입인지 모르므로 이런 상황에서 any라는 타입을 쓸 수 있음
function merge(a, b) {
    return Object.assign(Object.assign({}, a), b);
}
const merged = merge({ foo: 1 }, { bar: 1 });
// 제네릭 사용
function merge2(a, b) {
    return Object.assign(Object.assign({}, a), b);
}
const merged2 = merge({ foo: 1 }, { bar: 1 });
// EX2)
function wrap(param) {
    return {
        param
    };
}
const wrapped = wrap(10); // -> 문자열로 바꾸면 파라미터도 깨지지 않고 string
const items = {
    list: ['a', 'b', 'c'] // Items 타입을 지니고 있는 객체의 list 배열은 string[] 타입을 지니게 된다.
};
const items2 = {
    list: ['a', 'b', 'c']
};
// ------------------------------------------------------------------------------------------- //
// 8. 클래스에서 Generics 사용하기
// Queue라는 클래스를 만듦, Queue는 데이터를 등록 할 수 있는 자료형이며, 먼저 등록(enqueue)한 항목을 먼저
// 뽑아올(dequeue) 수 있는 성질을 가짐
class Queue {
    constructor() {
        this.list = [];
    }
    get length() {
        return this.list.length;
    }
    enqueue(item) {
        this.list.push(item);
    }
    dequeue() {
        return this.list.shift();
    }
}
const queue = new Queue();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
