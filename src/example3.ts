class Person3 {
  name: string = 'Mark';
  age: number = 36;

  constructor() {
    console.log(this.name); // 'mark'
  }
}

const person3: Person3 = new Person3();
console.log(person3); // Person3 {name: 'Mark', age: 36}
