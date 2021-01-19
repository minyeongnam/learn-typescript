class Person {
  //클래스 로직

  constructor(name, age) {
    console.log('생성 되었습니다');
    this.name = name;
    this.age = age;
  }
}

var seho = new Person('세호', 30); //인스턴스 생성 // 생성되었습니다. 출력

console.log(seho)


