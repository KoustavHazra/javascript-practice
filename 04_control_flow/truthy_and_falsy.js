// truthy and falsy values

const userEmail = "lap@gmail.com";

if (userEmail) {
    console.log("email is there.");
} else {
    console.log("email doesn't exist.");
}

// falsy value --->
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

if (false) {
    console.log("falsy");
};
if (0) {
    console.log("falsy");
};
if (-0) {
    console.log("falsy");
};
if ("") {
    console.log("falsy");
};


// truthy values --->
// "0", 'false', " ", [], {}, function(){}

if ("0") {
    console.log("truthy");
};
if ("false") {
    console.log("truthy");
};
if (" ") {
    console.log("truthy");
};
if ([]) {
    console.log("truthy");
};
if ({}) {
    console.log("truthy");
};
if (function(){}) {
    console.log("truthy");
};


// conditions to check empty array or empty object
let emptyArr = [];
let emptyObj = {};

if (emptyArr.length === 0) {
    console.log('array is empty');
};
if (Object.keys(emptyObj).length === 0) {
    console.log("obj is empty");
}



console.log(false == 0);  // true
console.log(false == '');  // true
console.log(0 == '');  // true

