console.log('Hello World');

/* 1.  Var, Let , Const

Var can be re declared, let cant  be re declared

*/

let a = 4;
let b = 2.4;
let c = 'Souvik Shome';
let d = true;
let e = null;
let f;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);

//Array:
let marks = Array(6);
marks = [1, 2, 3, 4, 5, 6];
let fruit = new Array('Mango', 'Banan', 'Jamun', 'BUtterfruit', 'Sugerken');

fruit.push('Test');
console.log(fruit);
fruit.pop();
console.log(fruit);
fruit.unshift('Orange');
console.log(fruit);
console.log(fruit.indexOf('Banan'));
console.log(fruit.includes('Gwava'));
console.log(fruit.slice(1, 3));

//Array rduce
let total = marks.reduce((sum, mark) => sum + mark, 0); // when we need to accumulate value the use reduce
console.log(total);
//Array filter
let evenMarks = marks.filter((mark) => mark % 2 == 0); // when we need to filter out some valueds depending on the condition
console.log(evenMarks);
//Array Map
let threeTimesMarks = marks.map((mark) => mark * 3); // when we need to perform some operation on each element
//sort Array
console.log(fruit.sort());
console.log(fruit.reverse());

let numArr1 = [12, 003, 24, 23, 30];
console.log(numArr1.sort()); // wrong shorting
//we can write custom shoring
console.log(numArr1.sort((a, b) => a - b)); // correct shorting
