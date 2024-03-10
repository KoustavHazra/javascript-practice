// scopes

// scopes is all about when to use var, let, and const
// whenever we use {} within a function or if-else loops, then comes the usage of scopes

if (true) {
    var a = 0;
    let b = 1;
    const c = 2;
};

// console.log(a);  // var can be used even outside the if scope
// console.log(b);  // let cannot be used here
// console.log(c);  // const too cannot be used here


var notGood = 900;

if (true) {
    var notGood = 0;
};
// console.log(notGood);  
// even after var notGood is defined outside the if scope, the value of notGood changed.
// hence, not good at all !



// while if we do the same with let or const, it will never happen.
// as let and const know the difference between global and local scope.

let var1 = 900;
const var2 = 1000;

if (true) {
    let var1 = 0;
    const var2 = 1;
    // console.log(`in local scope ${var1} and ${var2}`);
};

// console.log(var1);  // 900 
// console.log(var2);  // 1000




// let's understand nested scopes

function one() {
    const user = "koustav";
    function two() {
        const number = "1234";
        console.log(`user is ${user}`);
    }
    // console.log(`number is ${number}`);  // threw error, as one() cannot access number variable
    two();
};

// one();

/*
first, one() ran, and tried to execute --- > console.log(`number is ${number}`);
and it threw an error, because one() is a parent function which cannot access 
two(), child function's varaibles.

Then it triggered two(), and as two() is a child, it can access parent's variable,
thus ---> console.log(`user is ${user}`); is executed properly.
*/



if (true) {
    const username = "hitesh";
    if (username === "hitesh") {
        const website = " youtube";
        console.log(username + website);
    }
    // console.log(website);  // threw error, as outer if cannot access website variable
}

// console.log(username);  // threw error, as username variable is only accessable within the if-loop




// calling a function even before declaring

console.log(addone(5));

function addone(num){
    return num + 1;
};


// this is kinda the same as above, but here we are actually storing the func into a variable
// thus it will throw an error --- this concept is called, Hoisting in JavaScript.

// addTwo(5);
// const addTwo = function(num){
//     return num + 2;
// };

// if we get error like ---> ReferenceError: Cannot access 'addTwo' before initialization
// it means we are calling a function, which we have created a function like addTwo() 
// and calling it before declaring.
