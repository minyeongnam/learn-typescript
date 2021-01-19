/* function logMessage(value: any) {
  console.log(value);
}

logMessage('hello');
logMessage(100);
 */

var seho: string | number | boolean; //유니온 타입(Union Type) : 하나의 타입 이상 쓸 수 있도록 만드는 것, 파이프 연산자 사용

function logMessage(value: string | number) { 
  console.log(value);
  if(typeof value === 'number') {
    //if 안에 value는 number 타입으로 변환
    value.toLocaleString();
  }
  if(typeof value === 'string') {
    //if 안에 value는 string 타입으로 변환
    value.toString();
  }
  throw new TypeError('value must be string or number'); //에러 발생 가능, 타입가드?
}

logMessage('hello');
logMessage(100);



interface Developer{
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function askSomeone(someone: Developer | Person) {
  someone.name; //인터페이스같은 구조체 2개를 Union Type으로 사용할 경우 공통된 속성만 접근이 가능하다. 다른 속성에 접근할 경우 타입가드를 이용해야한다.
}

var capt: string & number & boolean; //인터섹션 타입

function askSomeone2(someone: Developer & Person) { 
  someone.name;  //유니온 타입과 다르게 2개의 인터페이스 속성에 접근이 가능하다.
  someone.age;
  someone.skill;
}

askSomeone({ //실무에서 데이터 넘길때 타입중에 골라서 넘길 수 있다.
  name: '디벨로퍼',
  skill: '웹 개발'
});

askSomeone({
  name: '디벨로퍼',
  age: 100
});

askSomeone2({ // 선택지가 없이 두개 타입을 모두 포함해야한다.
  name: '디벨로퍼',
  skill: '웹 개발',
  age: 34
});

