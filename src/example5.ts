class Parent5 {
  private privateProp!: string;
  protected protectedProp!: string;

  constructor() {}
}

class Child5 extends Parent5 {
  constructor() {
    super();

    this.protectedProp = 'protected';
    // this.privateProp = 'private'; // (X)
  }
}

const child5 = new Child5();
console.log(child5); // Child5 { protectedProp: 'protected' }
