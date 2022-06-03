interface Person {
    name: string;
    age: number;
}

type person = {
    name: string;
    age: number;
}

var seho: Person = {
    age: 30,
    name: '세호'
}

type MyString = string;
var str: MyString = 'hello';

type TodoObj = { id: string; title: string; done: boolean };
function getTodo(todo: TodoObj) {
   
}