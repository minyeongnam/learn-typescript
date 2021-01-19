/* interface Person {
  name: string;
  age: number;
} */

type Person = {
  name: string;
  age: number;
}

var seho: Person = {
  name: '세호',
  age: 30
}

type MyString = string;
var str: MyString = 'hello';

type Todo = {
  id: string;
  title: string;
  done: boolean;
}
function getTodo (todo: Todo) {

}


// 인터페이스와 타입별칭의 차이는 확장이 가능하냐 안하냐의 차이
// 확장이 용이하도록 인터페이스를 사용하는게 좋다