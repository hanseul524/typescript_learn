// JS 문자열 선언
//var str = 'hello';

// TS 문자열 선언
let str: string = 'hello';
// TS 숫자
let num: number = 10;
// TS 배열
let arr: Array<number> = [1,2,3];
let heroes: Array<string> = ['Capt', 'Thor'];
let items: number[] = [1,2,3];

// TS 튜플 (특정 인덱스의 타입을 지정하는 것)
let address: [string, number] = ['gangnam', 10];

// TS 객체 (object는 어떤 타입이 들어와도 괜찮음)
let obj: object = {};
// let person: object = {
//     name: 'capt',
//     age: 100
// };
let person: {name: string, age: number} = {
    name: 'capt',
    age: 100
};

// TS 진위값
let show: boolean = true;