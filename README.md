# 1. 리액트 컴포넌트 타입스크립트로 작성하기

## 정리
- React.FC는 defaultProps가 제대로 동작하지 않기 때문에 좋지 않음.
- 함수형 컴포넌트를 작성 할 때는 화살표 함수로 작성해도 되고, function 키워드를 사용해도 됨.
- Props에 대한 타입을 선언 할 땐 interface 또는 type을 사용하면 되며, 프로젝트 내부에서 일관성을 지켜야함.

<br>

# 2. 타입스크립트로 리액트 Hooks 사용해보기

## 정리
- useState를 사용 할 때에는 useState<string>과 같이 Generics를 사용함.
- useState의 Generics는 상황에 따라 생략 가능.
  - 상태가 null인 상황이 발생 할 수 있을 때 Generics 명시
  - 배열 또는 까다로운 객체를 다룰 때 Generics 명시
- useReducer를 사용 할 때에는 action에 대한 타입스크립트 타입들을 모두 준비해서 | 문자를 사용해 결합시킴.
- 타입스크립트 환경에서 useReducer를 사용하면 자동완성이 잘 되고 타입체킹도 잘 됨.
- useRef를 사용 할 땐 Generics로 타입을 정함.
- useRef를 사용하여 DOM에 대한 정보를 담을 땐, 초깃값을 null로 설정해야 하고 값을 사용하기 위해서 NULL 체킹도 해주어야 함.

