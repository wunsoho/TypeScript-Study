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

// ------------------------------------------------------------------------------------------- //

// 4. 일반 객체를 interface로 타입 설정하기
// 클래스가 아닌 일반 객체를 interface를 사용하여 타입 지정

interface Person {
    name: string;
    age?: number; // 물음표가 들어가면, 설정을 해도 되고 안 해도 되는 값
}
interface Developer {  
    name: string;
    age?: number;
    skills: string[]; 
}

const person : Person = {
    name: '김사랑',
    age: 26
};

const expert : Developer = {
    name: '김개발',
    skills: ['javascript', 'react']
};

interface Person2 {
    name: string;
    age?: number;
}

interface Developer2 extends Person2{ // Person과 Developer의 형태가 유사 --> interface 선언 후 extends 해서 상속받기
    skills: string[];
}

const person2 : Person2 = {
    name: '김사람',
    age: 20
};

const expert2 : Developer2 = {
    name : '김게발',
    skills: ['javascript', 'react']
};

const people : Person2[] = [person2, expert2];

// ------------------------------------------------------------------------------------------- //

// 5. Type Alias 사용하기
// type은 특정 타입에 별칭을 붙이는 용도로 사용

type Person3 = {
    name: string;
    age?: number;
}

// &는 Intersection으로서 두 개 이상의 타입들을 합쳐줌
type Developer3 = Person & {
    skills: string[];
}

const person3: Person3 = {
    name: '김사림'
}

const expert3: Developer3 = {
    name: '김기발',
    skills: ['javascript', 'react']
};

type People = Person3[]; // Person3[]를 이제 앞으로 People이라는 타입으로 사용 가능
const people2: People = [person3, expert3];

type Color = 'red' | 'orange' | 'yellow';
const color2 : Color = 'red';
const colors2 : Color[] = ['red', 'orange'];

// ------------------------------------------------------------------------------------------- //
// ** Generics ** -> 제네릭은 타입스크립트에서 함수, 클래스, interface, type을 사용하게 될 때
//                   여러 종류의 타입에 대하여 호환을 맞춰야 하는 상황에서 사용하는 문법
// 6. 함수에서 Generics 사용하기
// ex) 객체 A와 객체 B를 합쳐주는 merge라는 함수를 만든다고 가정할 때, 
//     A와 B가 어떤 타입인지 모르므로 이런 상황에서 any라는 타입을 쓸 수 있음

function merge(a: any, b: any): any { // -> 하지만 이렇게 만들면 타입추론이 모두 깨진거나 다름 없음
    return {                          // 결과가 any라는 것은 즉 merged 안에 무엇이 있는지 알 수 없다는 것
        ...a,
        ...b
    };
}

const merged = merge({ foo: 1 }, { bar: 1 });

// 제네릭 사용
function merge2<A, B>(a: A, b: B): A & B {
    return{
        ...a,
        ...b
    };
}

const merged2 = merge({ foo: 1 }, { bar: 1 });

// EX2)
function wrap<T>(param: T){
    return{
        param
    }
}

const wrapped = wrap(10); // -> 문자열로 바꾸면 파라미터도 깨지지 않고 string

// ------------------------------------------------------------------------------------------- //
// 7. Interface에서 Generics 사용하기

interface Items<T> {
    list: T[];
}

const items: Items<string> = { // Items<string>라는 타입을 사용하게 되면
    list: ['a', 'b', 'c']      // Items 타입을 지니고 있는 객체의 list 배열은 string[] 타입을 지니게 된다.
};

type Item<T> = { // Type alias에서 Generic 사용하기
    list: T[];
}

const items2: Item<string> = {
    list: ['a','b', 'c']
};

// ------------------------------------------------------------------------------------------- //
// 8. 클래스에서 Generics 사용하기
// Queue라는 클래스를 만듦, Queue는 데이터를 등록 할 수 있는 자료형이며, 먼저 등록(enqueue)한 항목을 먼저
// 뽑아올(dequeue) 수 있는 성질을 가짐

class Queue<T> {
    list: T[] = [];
    get length() {
        return this.list.length;
    }
    enqueue(item : T){
        this.list.push(item);
    }
    dequeue(){
        return this.list.shift();
    }
}

const queue = new Queue<number>();
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

