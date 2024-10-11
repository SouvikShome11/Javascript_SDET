const Person = require('./jsClass');

class Pet extends Person {
  // while inhereting -> calling parent class constructor is mandetory
  constructor(firstName, lastName) {
    super(firstName, lastName);
  }

  //overriding parent class method
  get location() {
    return 'BlueCross';
  }
}

let pet = new Pet('Top', 'Jerry');
pet.fullname();
pet.location;
