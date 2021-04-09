//타입 단언(type assertion)
var aa; //any

aa = 20;
aa = 'aa';

var bb = aa as string; //bb: any로 추정, as를 쓰면 타입이 string로 변경

//내가 정의한 타입으로 변경: 타입단언

//don API 조작
var div = document.querySelector('div');
if(div){
  div.innerText
}
