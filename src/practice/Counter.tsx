import React, { useState } from 'react';

type Information = { name: string; description: string };
type Todo = { id: number; text: string; done: boolean };

function Counter() {
    const [count, setCount] = useState<number>(0); // 타입 스크립트에서는 Generics를 사용하여 해당 상태가 어떤 타입을 가질 지 설정
                                                   // Generics를 사용하지 않아도 타입을 유추하긴 함 
    const [info, setInfo] = useState<Information | null>(null); // Generics를 사용하는 경우 -> Null or NotNUll
    const [todos, setTodos] = useState<Todo[]>([]); // 상태의 타입이 까다로운 구조를 가진 객체이거나 배열
    
    const onIncrease = () => setCount(count + 1);
    const onDecrease = () => setCount(count - 1); 
    
    return(
        <div>
            <h1>{count}</h1>
            <div>
                <button onClick={onIncrease}>+1</button>
                <button onClick={onDecrease}>-1</button>
            </div>
        </div>
    );
}

export default Counter;