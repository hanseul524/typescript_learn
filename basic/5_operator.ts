// function logMessage(value: any) {
//     console.log(value);
// }
// logMessage('hello');
// logMessage(100);

// 유니온타입 (특정 변수나 파라미터에 한가지 이상의 타입을 쓰고 싶을때)
// 타입 가드 : 특정 타입으로 타입의 범위를 좁혀나가는(필터링 하는) 과정
var sehi: string | number | boolean;

function logMessage(value: string | number) {
    if (typeof value === 'number') {
        value.toLocaleString();
    }
    if (typeof value === 'string') {
        value.toString();
    }
    throw new TypeError('value must be string or nubmer');
}
logMessage('hello');
logMessage(100);

interface Developers {
    name: string;
    skill: string;
}

interface Designer {
    name: string;
    age: number;
}
function askSomeone(someone: Developers | Designer) {
    // 유니온타입을 선언해 줄때는 보장된 속성만 사용 가능함 (공통된 속성만 사용 가능)
    // someone.skill 
    // someone.age
    // someone.name;
}
// 함수 호출시 Developer이거나 Person인 객체를 주면 됨
askSomeone({name: 'Developer', skill: '웹 개발'});
askSomeone({name: '캡틴', age: 100});

// 인터섹션 타입 : 모든 조건을 만족하는 하나의 타입을 인터섹션이라고 함
function askSomeoneI(someone: Developers & Designer) {
    someone.skill;
    someone.age;
    someone.name;
}

// 인터섹션을 사용할 시 developer와 person 의 타입을 합한 객체를 넘겨야 함
// 두개의 인터페이스를 사용하는 것이 아니라 새로운 형태의 인터페이스를 쓰는것과 비슷함
askSomeoneI({name: 'Developer', skill: '웹 개발', age: 100});
