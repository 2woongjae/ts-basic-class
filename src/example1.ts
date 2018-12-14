class Person1 {
  name!: string;
  age!: number;
}

const person: Person1 = new Person1();
console.log(person); // Person1 {}
person.age = 35;
console.log(person.name); // undefined
