const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')
// console.log(gameName);
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(1));
// console.log(gameName.indexOf('h'));

let newStr = gameName.substring(2, -1200);
// in subString if we give -ve value in first argument, it will automatically start from 0
// and if we give -ve value in the second argument, it will just print from the first argument value
// to the last index of the string.

// console.log(newStr);

let newStr2 = gameName.slice(2, -1);  
// in slice we can give -ve values in both first or second argument

// console.log(newStr2);

const newStringOne = "   hitesh    "
// console.log(newStringOne);
// console.log(newStringOne.trim());


const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'));

console.log(url.includes('sundar'));
console.log(url.includes('.com'));

console.log(gameName.split('-'));
