class Parent1 {
  private privateProp!: string;
  protected protectedProp!: string;

  constructor() {}
}

class Child1 extends Parent1 {
  constructor() {
    super();

    this.protectedProp = 'protected';
    // this.privateProp = 'private'; // (X)
  }
}

const child1 = new Child1();
console.log(child1);
