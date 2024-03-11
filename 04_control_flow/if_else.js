// if
const isUserloggedIn = true
const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);


// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
};



// Nullish Coalescing Operator (??): null undefined

// sometimes we get soem value from like db or something else and we don't know what kind 
// of value we will be getting, so for safety checking this is used.
// Let's say there is a value which is getting some data from db, now if db is not connected or
// some issue has occurred in db, null will come. And if null will come and our code was not 
// ready for it, it will disturb the other codes for it.
// thus for safety check we use this.

let val1;
// val1 = null ?? 30;
// val1 = undefined ?? "signid in";
// val1 = null ?? undefined ?? "200";
// val1 = 201 ?? 202;  // whatever value it gets at first, it will take that. Here it is 201.
// only if it is null or undefined, it will check for the other values.

// console.log(val1);




// Terniary operator
// condition ? true : false

// we can use it while using html codes, 
// like --- if (loggedinUser) ? "logout button" : "signup and login button"

let iceTea = 30;
iceTea < 25 ? console.log("not costly") : console.log("costly");
