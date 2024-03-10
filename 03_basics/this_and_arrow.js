// this keyword and arrow function

const user = {
    name: "koustav",
    price: "$99",
    welcomeMessage: function() {
        console.log(`${this.name}, welcome to website`);
        console.log(this);
    }
};

/*
In the context of objects, when we are refering to the current object we are in,
we can use "this" keyword to access all the properties of that same object.

Here we wanted to use the " name " property of user, and that's why we accesses it 
using this.name

as we logged "this", we can see it contains the whole object in itself ---> 
{
  name: 'koustav',
  price: '$99',
  welcomeMessage: [Function: welcomeMessage]
}
*/

// user.welcomeMessage();


// if we change the name before using the object
// user.name = "naruto";
// user.welcomeMessage();  // it will be updated with the new name

 


/*

let's check if we log "this" here outside user
console.log(this); 

it returns an empty object. But it is empty because we are in the Node.Js environment
and thus "this" is referring to an empty object, as there is no data in the global object as well.


However if we try to do the same thing in browser console tab, this output will differ.
Because when we check it in broswer, the global object is the window object. 
And because the window object is there in the global object, we can track all the 
events of windows ( such as clicking on a button, form submission etc. ).
And that is why we check "this" in browser, it gives us the windows object in return.

*/



// if we try to use "this" inside a function --->

// function chai() {
//     let user = "naruto";
//     console.log(this);  // "this" here returns a detailed object of different values about the function
//     console.log(this.user);  // returns undefined, so cannot using "this" inside a function
// };

// chai();


const chai = () => {
    let user = "obito";
    console.log(this);  // "this" here returns an empty object
    console.log(this.user);  // it also returns undefined
}

// chai();




// writing arrow function like implicit return 

const addTwo = (num1, num2) => num1 + num2;
const addThree = (num1, num2, num3) => ( num1 + num2 + num3 );

const addFour = (num1, num2, num3, num4) => { 
    return num1 + num2 + num3 + num4; 
};

/*
the first two above arrow functions above are implicit type..
Implicit return means, without using "return" keyword --->
where we won't be needing to use "return" keyword. Instead we can directly use 
num1 + num2  (or)  ( num1 + num2 + num3 ) . Both works the same way.


However once we use curly braces, {}, then we have to use the "return" keyword,
otherwise it will throw error.
This one is called Explicit return, means with "return" keyword.
*/


// console.log(addTwo(2, 3));
// console.log(addThree(1,2,3));
// console.log(addFour(2,3,4,5));

// but now let's say we want to use implicit return and also we need to return an object
// but to return an object we have to use {} ... but if we use {} then we have to have the "return" keyword

const addObj = () => ( {user: "Itachi"} );  // we have to wrap the object inside a parenthesis.

// console.log(addObj());

