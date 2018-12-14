class Person11 {
  public static CITY = '';
  private static lastName: string = 'Lee';
  private _name: string;
  private _age: number;

  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

  public print() {
    console.log(`${this._name} ${Person11.lastName} in ${Person11.CITY}.`);
  }
}

const person11: Person11 = new Person11('Mark', 36);
Person11.CITY = 'Seoul';
person11.print(); // Mark Lee in Seoul.
