class Person1 {
  name!: string;
  age!: number;
}

const person1: Person1 = new Person1();
console.log(person1); // Person1 {}
person1.age = 36;
console.log(person1.name); // undefined
