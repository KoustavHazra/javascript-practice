// array and object loops 1

const arr = [1,2,3,4,5];

// for of loop  ---  for arrays

for (const num of arr){
    // console.log(num);
};

const superHero = "Spiderman";
for (const hero of superHero) {
    // console.log(hero);
}



// maps
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")  // duplicate value will not come

// console.log(map);

// we can use for of loop on maps

for ( const key of map ) {
    // console.log(key);
};

// it will return something like --- >
// [ 'IN', 'India' ]
// [ 'USA', 'United States of America' ]
// [ 'Fr', 'France' ]


// if we want the key and values to be logged separately
for (const [ key, value ] of map) {
    // console.log(`${key} and ${value}`);
};



// if we try map on objects 
const obj = {
    game: "PS4",
    character: "Ironman"
};

// for (const [ key, value ] of obj) {
//     console.log(`${key} and ${value}`);
// };

// const [ key, value ] of myObj will throw error like -- TypeError: myObj is not iterable
// so maps are used for arrays, not for objects.



// for in loop  ---  for objects

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
};

for (const key in myObject) {
    // console.log(key);  // returns the key
    // console.log(myObject[key]);  // returns values
};

// using for in on an array
let myArr = [1,2,3,5,6,7,8];
for (const key in myArr) {
    // console.log(key);  // prints all the indexes
    // console.log(myArr[key]);  // prints all the values
};

// so for in runs properly with arrays

// like we tried for of on Map, let's see if for in works or nor

for ( const key in map ) {
    // console.log(key);  // doesn't work, as maps are not iterable.
};
