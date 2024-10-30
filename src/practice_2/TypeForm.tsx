import React, { useState } from 'react';
import { useTodosDispatch } from '../contexts/TodosContext';

function TodoForm() {
    const [value, setValue] = useState(''); // input의 value값을 useState를 통해 관리
    const dispatch = useTodosDispatch();

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch({
            type: 'CREATE',
            text: value
        });
        setValue('');
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                value={value}
                placeholder="무엇을 하실 건가요?"
                onChange={e => setValue(e.target.value)}
            />
            <button>등록</button>
        </form>
    );
}

export default TodoForm;