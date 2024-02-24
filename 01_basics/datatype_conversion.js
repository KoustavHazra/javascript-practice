let score = '41';
let value = '123eert';
let newValue = null;

// console.log(typeof score);
// console.log(typeof value);
// console.log(typeof newValue);

// converting str to number
let strToNum = Number(score);
// console.log(typeof strToNum);

let valueToNum = Number(value);
// console.log(typeof valueToNum);
// console.log(valueToNum);  // --> it is returning NaN, but still it's type is a Number?!

let newValueToNum = Number(newValue);
// console.log(typeof newValueToNum);
// console.log(newValueToNum);// --> it is returning 0, but still it's type is a Number?!


// type of NaN --> is Number
// console.log(typeof NaN);

// type of null --> is object
// console.log(typeof null);

let boolVal = 1;
let boolVal2 = 2;
let boolVal3 = '';
let boolVal4 = 'something';

let check = Boolean(boolVal);
// console.log(typeof check);
// console.log(check);  // returning true 

let check2 = Boolean(boolVal2);
// console.log(typeof check2);
// console.log(check2);  // returning true 

let check3 = Boolean(boolVal3);
// console.log(typeof check3);
// console.log(check3);   // returning false

let check4 = Boolean(boolVal4);
// console.log(typeof check4);
// console.log(check4);   // returning true 

