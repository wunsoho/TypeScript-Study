import React, { createContext, Dispatch, useReducer, useContext } from 'react';

// 나중에 다른 컴포넌트에서 타입을 불러와서 쓸 수 있도록 export
export type Todo = {
    id: number,
    text: string,
    done: boolean;
};

type TodosState = Todo[];

// 상태 전용 Context
// Generics를 사용하여 Context에서 관리 할 값의 상태를 설정
const TodosStateContext = createContext<TodosState | undefined>(undefined); 

type Action =
    | { type: 'CREATE'; text: string} // 새로운 항목 생성
    | { type: 'TOGGLE'; id: number} // done값 반전
    | { type: 'REMOVE'; id: number}; // 항목 제거 

type TodosDispatch = Dispatch<Action>; // Generic으로 Action의 타입을 넣어주면 추후 컴포넌트에서 
                                       // 액션을 디스패치 할 때액션들에 대한 타입 검사 가능
const TodosDispatchContext = createContext<TodosDispatch | undefined>(
    undefined
);

function todosReducer(state: TodosState, action: Action): TodosState {
    switch (action.type) {
        case 'CREATE':
            const nextId = Math.max(...state.map(todo => todo.id)) + 1;
            return state.concat({
                id: nextId,
                text: action.text,
                done: false
            });
        case 'TOGGLE':
            return state.map(todo =>
                todo.id === action.id ? { ...todo, done: !todo.done } : todo
            );
        case 'REMOVE':
            return state.filter(todo => todo.id !== action.id);
        default:
            throw new Error('Unhandled action');
    }
}

export function TodosContextProvider({ children }: { children: React.ReactNode }) {
    const [todos, dispatch] = useReducer(todosReducer, [
        {
            id : 1,
            text: 'Context API 배우기',
            done:  true
        },
        {
            id: 2,
            text: 'TypeScript 배우기',
            done: true 
        },
        {
            id: 3,
            text: 'TypeScript와 Context API 함께 사용하기',
            done: false
        }
    ]);

    return (
        <TodosDispatchContext.Provider value={dispatch}>
            <TodosStateContext.Provider value={todos}>
                {children}
            </TodosStateContext.Provider>
        </TodosDispatchContext.Provider>
    )
}

export function useTodosState() {
    const state = useContext(TodosStateContext);
    if (!state) throw new Error('TodosProvider not found');
    return state;
}

export function useTodosDispatch() {
    const dispatch = useContext(TodosDispatchContext);
    if(!dispatch) throw new Error('TodosProvider not found');
    return dispatch;
}