class Person {
  private name: string; //변수의 접근 범위, 클래스 안에서만 사용
  public age: number; //다른곳에서도 사용가능
  readonly log: string; //읽기만 가능

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}