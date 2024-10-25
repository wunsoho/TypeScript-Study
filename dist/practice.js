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
