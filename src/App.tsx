import React from 'react';
import Greetings from './practice/Greetings';
import Counter from './practice/Counter';
import MyForm from './practice/MyForm';
import Counter2 from './practice/Counter_useReducer';
import ReducerSample from './practice/ReducerSample';
import MyForm2 from './practice/MyForm_useRef';
import './App.css';

const App: React.FC = () => {
  const onClick = (name: string) => {
    console.log(`${name} says hello`);
  };
  const onSubmit = (form: {name: string; description: string}) => {
    console.log(form);
  }
  return (
    // <Greetings name="hello" onClick={onClick}/> //  이 멈포넌트에서 무엇이 필요한지 기억이 안 난다면 props 설정 부분에서 Ctrl + space
    // <Counter/>
    // <MyForm onSubmit={onSubmit}/>
    // <Counter2/>
    // <ReducerSample/>
    <MyForm2 onSubmit={onSubmit}/>
  );
}

export default App;
