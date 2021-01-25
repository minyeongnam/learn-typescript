function logText(text) {
  console.log(text);
  return text;
}

logText(10);
logText('hi');
logText(true);

function JlogText<T>(text:T):T {
  console.log(text);
  return text;
}

JlogText<string>('hi'); //인자의 타입은 스트링이다


function UlogText<T>(text: T):T {
  console.log(text);
  return text;
}

/* const a = UlogText('a');
console.log(a);
UlogText(10); */

UlogText<string>('abc');
UlogText<boolean>(true);

//인터페이스에 제네릭 선언 방법
interface Dropdown<T> {
  value:T;
  selected: boolean;
}

const obj: Dropdown<string> = {
  value: 'abc',
  selected:false
};

function logTextLength<T>(text: T[]):T[]{
  console.log(text.length);
  text.forEach(function (text) {
    console.log(text);
  });
  return text;
}

logTextLength<string>(['hi', 'abc']);

//제네릭 타입 제한 2 - 정의된 타입 이용하기
interface LengthType {
  length: number;
}

function TlogTextLength<T extends LengthType>(text: T): T {
  text.length;
  return text;
}

TlogTextLength('a');
TlogTextLength(10); //length가 정의되어있지 않아서 오류
TlogTextLength({length: 10});

//제네릭 타입 제한 3 - keyof
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}

/* getShoppingItemOption(10);
getShoppingItemOption<string>('a'); */

getShoppingItemOption('name');












