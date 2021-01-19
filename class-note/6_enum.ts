enum NumShoes {
  Nike, //0이 초기값 (공통)
  Adidas
}

var myNumShoes = NumShoes.Nike;
console.log(myNumShoes); // 0


enum StringShoes {
  Nike = '나이키', 
  Adidas = '아디다스'
}

var myStringShoes = StringShoes.Nike;
console.log(myStringShoes); // 나이키

//예제
enum Answer {
  Yes = 'Y',
  No = 'N',
}

function askQuestion(answer: Answer): void {
  if(answer === Answer.Yes){
    console.log('정답입니다.')
  }
  if(answer === Answer.No){
    console.log('오답입니다.')
  }
}
/* 
askQuestion('예스'); 
askQuestion('y');
askQuestion('Yes');
 */
askQuestion(Answer.Yes); //enum 에서 제공되는 값만 사용 가능