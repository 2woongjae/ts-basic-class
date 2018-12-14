class Person2 {
  name!: string;
  age!: number;

  constructor() {
    console.log(this.name === null); // false
    console.log(this.name === undefined); // true
  }
}

const person2: Person2 = new Person2();
person2.name = 'Mark';
person2.age = 36;
console.log(person2); // Person2 {name: 'Mark', age: 36}
