// promise

/*
Promises in JS represents the eventual completion (or failure) of an asynchronous 
operation and its resulting value.

In JS code to handle we asychronus functionality we have two options --
async - await or promise (modern).

So when do we need this asynchnonus functionality ---

anytime when we are trying to access a file using programming ( which is not possible through programming, 
this is done by kernel. And then kernel will bring the file to the code. ), or getting data from a 
database which is far away from the client, or maybe doing some calculations on the data we got, or 
in cryptography to encrypt password -- these kinda tasks won't get completed like that, it might take 
some time. And that's why this asynchronus functionality comes into picture.


-----------------


Promise is an object which says --- I have got your request, I will try to complete the task 
and get back to you. Till then you continue doing other stuffs. If I am able to finish it, 
I will get you the output and if I failed then I will let you know.


Promiese has 3 different states :


To create a promise ---
as promise is an object, to create an instance of an object -- it is the same as
we take a new instace of a class.
const newPromise = new Promise();


*/

// creating a promise
const promiseOne = new Promise( function (resolve, reject) {
    setTimeout( function() {
        // console.log(`Entering the promise`);
        resolve();
    }, 1000);
});

// if promise got resolved
// "then" is directly connected to resolve() in promise.
// so if resolve() worked, then() will run
// then also contains a callback function which does some tasks.
promiseOne.then( function() {
    // console.log(`promise resolved!`);
});


// we can also conntect the two functions into one
new Promise( function (resolve, reject) {
    setTimeout( function () {
        // console.log(`promise two midway`);
        resolve();
    });
}, 2000).then( function () {
    // console.log(`promise two completed.`)
});


// but how to pass the data from the created promise to the resolved promise?
const promiseThree = new Promise( function(resolve, reject) {
    setTimeout( function() {
        // some tasks were done
        resolve({ user: "koustav", email: "hazrakoustav12@gmail.com" });
    }, false);
}, 1000);

promiseThree.then( function (data) {
    // console.log(data);
} );


// handling errors 
const promiseFour = new Promise( function(resolve, reject) {
    setTimeout( function() {
        // some errors are there
        error = true;
        if (!error) {
            resolve({ user: "koustav", email: "hazrakoustav12@gmail.com" });
        } else {
            reject({ message: "something went wrong." });
        }
    }, 1000);
});

// if we try to save the data we get from resolve() in a variable

// const userData = promiseFour.then( function (data) {
//     console.log(data);
//     return data.user;
// } );

// console.log(userData);  
// it is not possible, even though we only send data.user, the whole data was sent.

// so to rectify it, we can use chaining of multiple "then" ---

const userData = promiseFour.then( function (data) {
    // console.log(data);
    return data.user;

} ).then( (username) => {
    // console.log(username);  // whatever returned from the above "then", the next "then" will get that

}).catch( function(error) {  // to handle the errors
    // console.log(error);  // if error is there, all the above promises will be rejected and directly catch will run

}).finally( () => {
    // console.log('finally reached finally.');
})

// The finally() method of Promise instances schedules a function to be called when the promise 
// is settled (either fulfilled or rejected). It immediately returns an equivalent Promise object, 
// allowing us to chain calls to other promise methods.
// sometimes we just want to know from the Promise, if the promise is resolved or rejected... and for that
// finally comes into picture. Promise is resloved or rejcted, finally() will always be executed-- 
// it is like defautlt.


// using async-await with promise
const promiseFive = new Promise( function(resolve, reject) {
    setTimeout( function() {
        // some errors are there
        error = true;
        if (!error) {
            resolve({ user: "koustav", email: "hazrakoustav12@gmail.com" });
        } else {
            reject({ message: "something went wrong." });
        }
    }, 1000);
});

// async function consumePromiseFive() {
//     const res = await promiseFive;
//     console.log(res);
// };
// consumePromiseFive();

// there is a problem in async-await, it cannot handle errors. And that's why if error = true,
// it will throw error. That's why we should not use async-await without a try-catch block.

async function consumePromiseFive() {
    try {
        const res = await promiseFive;
        // console.log(res);

    } catch (error) {
        // console.log(error);
    }
};
consumePromiseFive();



// using async-await with fetch

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();  
        console.log(data);

    } catch (error) {
        console.log("Error: ", error);
    }
};

// getAllUsers();

// what's happenning here is to fetch the data from the url it is taking some time
// then we are trying to convert the data to json, which also takes some time.
// So if we are not waiting for it to complete, even before it is converted ---
// the data is printed, which is empty, as the conversion was not completed.



// using the above same code using then-catch 
fetch('https://api.github.com/users/koustavhazra').
then( (response) => {
    return response.json();
} ).
then( (data) => console.log(data) ).
catch( (error) => console.log(error) );
