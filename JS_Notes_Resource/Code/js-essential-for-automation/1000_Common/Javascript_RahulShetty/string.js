let str = 'Souvik ';

console.log(str);

//slice
let subStr = str.slice(1, 3);
console.log(subStr);
console.log(str[1]);

//split
let splitStr = str.split('u');
console.log(splitStr[0]);

//trim
console.log(splitStr[1].length + '==> ' + splitStr[1].trim().length);

//String tro int
let date = '23';
let nextDate = '27';

let dayDiff = parseInt(nextDate) - parseInt(date);
console.log(dayDiff);
console.log(typeof dayDiff);
console.log(typeof toString(dayDiff));

//-----------------------------------------------
//? find the occurance of 'day' in the bwlow string

let str2 = 'Friday is fun day day';

let count = 0;
let position = str2.indexOf('day');
while (position != -1) {
  count++;
  position = str2.indexOf('day', position + 1);
}
console.log(count);
