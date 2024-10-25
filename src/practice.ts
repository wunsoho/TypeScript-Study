// 1 . 기본 타입
let count = 0; // 숫자
count += 1;
// count = "문자열 ??" // 오류 발생 !

const message: string = "hello world"; // 문자열

const done : boolean = true; //불리언

const numbers : number[] = [1, 2, 3]; // 숫자 배열
const messages : string[] = ['hello', 'world'] // 문자열 배열
// message.push(1); // 문자열 배열에 숫자를 넣으려고 하면 오류 발생 !

let mightBeUndefined : string | undefined = undefined; // string일 수도 있고 undefined일 수도 있음
let nullableNumber : number | null = null; // Number일 수도 있고 null일 수도 있음

let color : 'red' | 'orange' | 'yello' = 'red'; // red, orange, yellow 중 하나
color = "yello";
// color = "green"; // 오류 발생 !

// ------------------------------------------------------------------------------------------- //

// 2. 함수에서 타입 정의하기
function sum(x : number, y : number) : number{
    return x + y;
//    return null; // number가 명시되었기 때문에 null 반환할 수 없음
}

sum(1,2);

function sumArray(numbers: number[]) : number{
    return numbers.reduce((acc, current) => acc + current, 0);
}

const total = sumArray([1, 2, 3, 4, 5]);

function returnNothing(): void{ // 아무 값도 반환하지 않을 때는 void로 설정하면 됨
    console.log('반환 값 없음')
}

// ------------------------------------------------------------------------------------------- //

// 3. interface 사용해보기
// interface는 클래스 또는 객체를 위한 타입을 지정 할 때 사용되는 문법
// 클래스를 만들 때, 특정 조건을 준수해야 함을 명시하려면 interface를 사용하여 클래스가 가지고 있어야 할 요구사항 설정 -> implements로 명시

//Shape 라는 interface를 선언
interface Shape {
    getArea() : number; // 이 인터페이스에는 getArea라는 함수가 꼭 있어야 하며 반환값은 숫자
}

class Circle implements Shape {
    // `implements` 키워드로 이 클래스가 Shape interface의 조건을 충족하겠다 명시
    constructor(public radius : number){ // -> public으로 파라미터의 타입을 하나하나 설정해줄 필요 X
        this.radius = radius;
    }

    //너비를 가져오는 함수
    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}

class Rectangle implements Shape {
    constructor(private width : number, private height : number) { // -> private으로 파라미터의 타입을 하나하나 설정해줄 필요 X
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

const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];

shapes.forEach(shape => {
    console.log(shape.getArea());
})

