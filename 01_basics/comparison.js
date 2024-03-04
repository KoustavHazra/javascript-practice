// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);  // true
// console.log("0002" > 1);  // true
// console.log("1" == 2);  // false


// console.log(null > 0); // false
// console.log(null == 0);  // false
// console.log(null < 0);  // false
// console.log(null >= 0);  // true

/* 
The reason is that quality check (==) and comparison operatos
works in a different way.
Comparison convert null to a number, a 0.
That's why null >= 0 is true and null > 0 is false.
*/


// console.log(undefined > 0); // false
// console.log(undefined == 0); // false
// console.log(undefined < 0); // false
// console.log(undefined >= 0); // false


// console.log("2" == 2);  // true
// console.log("2" === 2);  // false

