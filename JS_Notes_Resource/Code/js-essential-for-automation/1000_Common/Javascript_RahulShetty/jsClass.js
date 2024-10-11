module.export = class Person {
  //Class Variable
  age = 25;

  //Getter, not a method
  get location() {
    return 'Canada';
  }

  //constructor
  constructor(firstName, lastName) {
    this.firstName = firstName; // this are instance variable, as it can be change while creating object
    this.lastName = lastName;
  }

  //method
  fullname() {
    console.log(this.firstName + ' ' + this.lastName);
  }
};

//export default Person;

/*
let person = new Person('Souvik', 'Shome');

console.log(person.age);
console.log(person.location);
console.log(person.fullname());
*/
