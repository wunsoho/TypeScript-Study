# Context API 사용해보기

## Context API란 ?
- React version 16부터 사용 가능한 리액트의 내장 API
- 앱에서 컴포넌트에게 props를 사용하지 않고 필요한 데이터(state)를 쉽게 공유할 수 있게 해줌.
- 따라서 모든 컴포넌트에서 사용할 수 있는 데이터(state)를 전달할 때 유용

## Component
- TodoForm.tsx: 새 할 일을 등록할 때 사용
- TodoItem.tsx: 할 일에 대한 정보를 보여줌
- TodoList.tsx: 여러 TodoItem들을 렌더링해줌
- TodoContext.tsx: 상태 전용 Context와 디스패치 전용 Context 두 개를 만들어 낭비 렌더링 방지

## 정리
- Context API를 사용하여 상태를 관리 할 때 useReducer를 사용하고 상태 전용 Context와 디스패치 전용 Context를 만들면 유용
