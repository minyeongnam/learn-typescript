// 함수의 파라미터에 타입을 정의하는 방식
function sum(a: number, b: number) {
  return a + b; 
}

// 함수의 반환 값에 타입을 정의하는 방식

function add(): number {
  return 10;
}

// 함수에 타입을 정의하는 방식
function sumAdd (a: number, b: number) :number {
  return a + b;
}

//sumAdd(10, 20, 30, 40, 50); 1:1 매핑이 되어야함

// 함수의 옵셔널 파라미터 -'?' 필요에 따라 넣을수 있도록 함.
function log(a: string, b?: string) {

}

log('hello world');
log('hello world', 'abc');