// Scope of Var: global, function
// Scope of let: global, {}block

var a = 'Apple';

function a1() {
  var a = 'gwava';
  console.log(a);
}
console.log(a);
//block for var
if (true) {
  var a = 'orange';
}
console.log(a);

//-------------------------------
let x = 'Java';

function a2() {
  let x = 'Python';
}
console.log(x);

if (true) {
  let x = 'JS';
}
console.log(x);
