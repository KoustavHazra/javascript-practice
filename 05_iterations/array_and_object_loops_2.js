// array and object loops 2

const coding = ["js", "ruby", "java", "python", "cpp"];

// for each --- 

coding.forEach( function (item) {
    // console.log(item);
} );

/*
forEach() method takes a call back function, a function in which we don't need to
write the function name --- so it will be like: 

function () {}   or 
() => {}   or   () => () 

where in the first () we will pass the items of the array or the index or the whole array itself
and in the second () we will pass what we we want to do with each of the items 
of that array.
*/

// we can also create a function separately and use it inside a for each
function printMe (item) {
    // console.log(item);
};

coding.forEach(printMe);  
// one thing to notice, here we are just giving the reference the printMe func
// we are not writing like printMe() --- as it will execute it, which will throw error.


// passing items, index, and array in forEach

// coding.forEach( function (item, index, arr) {console.log(item, index, arr)}); 




// let's check forEach in an array of objects

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
];

myCoding.forEach( (item) => {
    // console.log(item.languageFileName);
    // console.log(item.languageName);
} )
