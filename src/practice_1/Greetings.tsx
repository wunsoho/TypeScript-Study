
type GreetingsProps = { // Component의 props에 대한 타입을 선언 할 때, type, interface모두 사용 가능
    name: string;
    mark: string;
    optional?: string; // 생략 가능한 값은 ? 문자 사용
    onClick: (name: string) => void; // 특정 함수 props 받아올 때 다음과 같이 타입 지정
};

// React.FC를 사용 할 때는 props의 타입을 Generics로 넣어서 사용.
// 이점 1. props에 기본적으로 children이 들어가있음.
// 이점 2. 컴포넌트의 defaultProps, propTypes, contextTypes를s 설정 할 때 자동완성이 될 수 있음.
function Greetings ({ name, mark, optional, onClick}: GreetingsProps) { // 화살표 함수 쓰지 않으려면 function으로 쓰고 중괄호
    const handleClick = () => onClick(name);
    return(
        <div>
            Hello, {name}{mark}
            {optional && <p>{optional}</p>}
            <div>
                <button onClick={handleClick}>Click me</button>
            </div>
        </div>
    )
};

Greetings.defaultProps = { // React.FC를 사용하지 않아야 defaultProps가 잘 작동
    mark: '!'
};

export default Greetings;