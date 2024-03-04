let score = 100;

// explicitly mentioning the type of the variable
let balance = new Number(200);
// console.log(balance);

// converting to string
// console.log(balance.toString());

// now balance became a string, it has all the string properties
// console.log(balance.toString().length);

// we can also use a method to keep a number with a particular number of decimals
// console.log(balance.toFixed(2));  // we want only 2 decimal values with balance



// we can precise some values 
let value = 21.89383;
// console.log(value.toPrecision(3));  // returns a string value
// console.log(value.toPrecision(4));
// console.log(value.toPrecision(2));

// output differs here based on the argument we pass. If we pass 1 and the value before decimal
// is of length 2, then only first digit will be in precision and the rest will be in exponential.

// so for 21.89383 with toPrecision(1) --> 2e+1
// for 21.89383 with toPrecision(2) --> 22
// for 21.89383 with toPrecision(3) --> 21.9
// for 21.89383 with toPrecision(4) --> 21.89
//  so based on the passed argument, it changes the output.



// in js, if we want we can do number representation in proper manner
const hundreds = 1000000;
// now it is hard to get a count of how many zeros are there, thus we have toLocaleString in JS
// console.log(hundreds.toLocaleString());  // the representation is in Indian standards.

// to get it in American standars --->
// console.log(hundreds.toLocaleString('en-US'));



// --------------- MATHS -----------------

// console.log(Math);

// to get absolute value
// console.log(Math.abs(-4.2));

// to round up numbers
// console.log(Math.round(2.345));
// console.log(Math.round(1.67));

// to control the round up of numbers 
// console.log(Math.ceil(2.534));  // 3
// console.log(Math.floor(2.534));   // 2

// to get max/min value in an array
// console.log(Math.min(9,3,5,1,5));
// console.log(Math.max(2,3,4,6,1));

// random module
// console.log(Math.random());  // always gives value between 0 and 1 ( both included )

// to get a random number between a min and a max
// let min = 10;
// let max = 20;
// let output = Math.floor(Math.random() * (max - min + 1)) + min;
// console.log(output);

