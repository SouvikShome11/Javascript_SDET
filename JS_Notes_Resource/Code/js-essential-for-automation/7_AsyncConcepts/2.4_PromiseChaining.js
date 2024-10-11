/**
 * There Are 2 function whic retruns data1 and data2
 * We want to simulate that we get data 1 then after 4 sec we get data 2
 * @returns Data
 */

function asyncFunction1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Data 1');
      resolve('Success');
    }, 4000);
  });
}

function asyncFunction2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Data 2');
      resolve('Success');
    }, 4000);
  });
}

/**
 *  *If we call in the bewlow way it will run async way-----------------------------------------------
 *  O/P will be -->
 *     Calling Function 1---->
 *     Calling Function 2---->
 *     Data 1
 *     Success
 *     Data 2
 *     Success
 */

/* ----
console.log('Calling Function 1----> ');
let p1 = asyncFunction1();
p1.then((res) => {
  console.log(res);
});

console.log('Calling Function 2----> ');
let p2 = asyncFunction2();
p2.then((res) => {
  console.log(res);
}); ---*/

/**
 *  *Promise Chaining Example 1 ------------------>
 *
 */
/*
console.log('Calling Function 1----> ');
let p1 = asyncFunction1();
p1.then((res) => {
  console.log(res);
  console.log('Calling Function 2----> ');
  let p2 = asyncFunction2();
  p2.then((res) => {
    console.log(res);
  });
}); */

/**
 *  *Promise Chaining Example 2 (Easier Syntax) ------------------>
 *
 */

console.log('Calling Function 1----> ');
asyncFunction1().then((res) => {
  console.log(res);
  console.log('Calling Function 2----> ');
  asyncFunction2().then((res) => {
    console.log(res);
  });
});
