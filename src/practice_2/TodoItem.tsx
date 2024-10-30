import React from 'react';
import './TodoItem.css'
import { useTodosDispatch, Todo } from '../contexts/TodosContext';

export type TodoItemProps = {
    todo: Todo; // TodoContext에서 선언했던 타입을 불러옴.
}

function TodoItem({ todo }: TodoItemProps) { // props로 todo 객체를 받아옴 
    const dispatch = useTodosDispatch();

    const onToggle = () => {
        dispatch({
            type: 'TOGGLE',
            id: todo.id
        });
    };

    const onRemove = () => {
        dispatch({
            type: 'REMOVE',
            id: todo.id
        })
    }
    return ( // todo.done이 참이라면 done css 클래스 적용
        <li className={`TodoItem ${todo.done ? 'done' : ''}`}> 
            <span className="text" onClick={onToggle}>
                {todo.text}
            </span> 
            <span className="remove" onClick={onRemove}>
                (X)
            </span>
        </li>
    )
}

export default TodoItem;