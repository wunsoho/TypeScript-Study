import React, { useReducer } from 'react';

//Action의 타입이 INCREASE or DECREASE임을 명시
type Action = { type: 'INCREASE' } | { type: 'DECREASE' };

// state의 타입과 함수의 리턴 타입이 동일
function reducer(state: number, action: Action): number { 
    switch (action.type) {
        case 'INCREASE':
            return state + 1;
        case 'DECREASE':
            return state - 1;
        default:
            throw new Error('Unhandled action');
    }
}

function Counter2() {
    const [count, dispatch] = useReducer(reducer, 0);
    const onIncrease = () => dispatch({ type: 'INCREASE'});
    const onDecrease = () => dispatch({ type: 'DECREASE'});

    return (
        <div>
            <h1>{count}</h1>
            <div>
                <button onClick={onIncrease}>+</button>
                <button onClick={onDecrease}>-</button>
            </div>
        </div>
    )
}

export default Counter2;