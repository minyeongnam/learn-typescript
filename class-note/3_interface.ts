interface User {
  age: number;
  name: string;
}

var seho: User = {
  age:33,
  name: '세호'
}

function getUser(user: User):void {
  console.log(user);
}

const capt = {
  name: '캡틴',
  age: 22
}

getUser(capt);


// 함수의 스펙(구조)에 인터페이스를 활용

interface SumFunction {
  (a: number, b: number) : number;
}

var sum: SumFunction;

sum = function(a: number, b: number): number {
  return a + b;
}

interface StringArray {
  [index: number]: string;
}

var arr: StringArray = ['a', 'b', 'c'];
//arr[0] = "10";

//딕셔너리 패턴

interface StringRegexDictionary {
  [key: string] : RegExp; //정규식
}

var obj: StringRegexDictionary = {
  sth: /abc/,
  cssFile: /\.css$/,
  jsFile: /\.js$/,
}

Object.keys(obj).forEach(function(value: string){});

interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  language: string;
}

var captain: Developer = {
  language: 'ts',
  name: '캡틴',
  age: 100
}