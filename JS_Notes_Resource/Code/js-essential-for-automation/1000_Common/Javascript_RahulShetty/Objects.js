//Object
let person = {
  firstName: 'Souvik',
  lastName: 'Shome',
  fullname: function () {
    console.log(this.firstName + this.lastName);
  },
};

//Accessing Object entity
console.log(person.lastName);
console.log(person['lastName']);
console.log(person.fullname());

// Altering value in object
person.firstName = 'Ovi';
console.log(person.firstName);

//adding new entity in object
person.age = 29;
console.log(person.age);

//deleting an entity from object
delete person.age;
console.log(person.age);

//checking a entity present in the Objcet
console.log('gender' in person);

//printing all the values in an object
for (let key in person) {
  console.log(key + ' : ' + person[key]);
}
