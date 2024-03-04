// There are only 2 data types in JS - Primitive and Non-primitive. 
// This categorization has been done based on 2 things - 
// how these data are stored in the memory and how we get access of those data.


/*
Primitive:

Primitives are those data types these are call by value, which means if we copy it from
from somewhere - then the reference of it's original data is is not given to us, after copying 
it is given to us separately. And whatever changes we make in that value, those changes 
are done to the copy and not in the real one.

7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

*/

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123'); 
const anotherId = Symbol('123');
// console.table([id, anotherId]);
// console.log(id === anotherId); // false
// even though in symbol we pass a same value, the output will differ.

// const bigNumber = 3456543576654356754n


/* 
Reference (Non primitive):

Array, Objects, Functions
*/

const list = ['apple', 'orange', 'mango'];  // type is object

const myObj = {
    'field1': 'value',
    'field2': 'value'  // type is object
};

const myFunction = () => {
    alert("hello world!");  // type is Function object
};
// every non primitive is of object datatype,
// only Function is of object Function datatype, just name is different. 


/*
JavaScript is a dynamically typed language. As while writing a code in JS, we don't 
need to specify any variable what datatype it will have.

Statically typed vs dynamically typed langauge link: 
https://stackoverflow.com/questions/1517582/what-is-the-difference-between-statically-typed-and-dynamically-typed-languages
*/


// typeof returns of differnet datatypes:
// https://262.ecma-international.org/5.1/#sec-11.4.3
