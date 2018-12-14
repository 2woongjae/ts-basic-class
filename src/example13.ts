/*
class Person13 {
  private static PROPERTY = '프라이빗 프로퍼티';
  private static METHOD() {
    console.log('프라이빗 메서드');
  }

  constructor() {
    console.log(Person13.PROPERTY);
    Person13.METHOD();
  }
}
*/

const PROPERTY = '모듈 내 변수';
function METHOD() {
  console.log('모듈 내 함수');
}

export class Person13 {
  constructor() {
    console.log(PROPERTY);
    METHOD();
  }
}
