'use strict';

/**
 * Function as object - how?
 *
 * .lenghth is property
 * .tostring() is method
 *
 */

function addTwoNum(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

console.log(addTwoNum.length); // Return the number of args -> 2
console.log(addTwoNum.toString());
