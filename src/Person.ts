export default class Person {
  name: string;
  last_name: string;
  age: number;
  salary: number;
  main_class: string;
  private classes: string[] = [];

  // constructor(
  //   public name: string,
  //   public last_name: string,
  //   public age: number,
  //   public salary: number,
  //   public main_class: string
  // ) {}

  constructor(
    name: string,
    last_name: string,
    age: number,
    salary: number,
    main_class: string
  ) {
    this.name = name;
    this.last_name = last_name;
    this.age = age;
    this.salary = salary;
    this.main_class = main_class;
  }

  getFullName() {
    return `${this.name} ${this.last_name}`;
  }

  addClass(className: string) {
    this.classes.push(className);
  }

  showClasses() {
    console.log(this.classes);
  }
}
