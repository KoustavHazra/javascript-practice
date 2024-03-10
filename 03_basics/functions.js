// functions

function sayMyName() {
    console.log("K");
    console.log("O");
    console.log("U");
    console.log("S");
    console.log("T");
    console.log("A");
    console.log("V");
};

// sayMyName();

// if we run the function like --->
// sayMyName;  // it only refers to the function and not actually execute it.


function addTwoNum(num1, num2) {
    console.log(num1 + num2);
};

// since we are not checking the type of parameters in the function --
// addTwoNum(2, 3);  // 5
// addTwoNum(2, '3');  // 23
// addTwoNum('2', 3);  // 23
// addTwoNum(2, 'a');  // 2a
// addTwoNum(2, null);  // 2


// const result = addTwoNum(2, 3);  
// here we cannot store the result, as we are not returning anything
// we are just printing the output.
// console.log(result);  // thus, result = undefined



function loginMessage(user) {
    return `${user} just logged in.`;
};

// 3 different scenarios --- 3 different output

// loginMessage('someone');  // no output, as we are only returning and not printing

// console.log(loginMessage('someone'));  // print the output properly

// console.log(loginMessage());  // since no argument passed, user will become undefined
//  ---> this it will return, " undefined just logged in. "



// also we can give a defeault value in the function, so that even if no arguments were
// passed we still have some proper output.
function loginMessage(user = "batman") {
    return `${user} just logged in.`;
};
// console.log(loginMessage());





// sometimes we might need to create a function where we won't know how many
// number of paramters will be passed, for that scenario this can be used.
// we can use rest operator here.

// this methods is usable when we make something like add all the price in shopping cart 
// where we won't know how many products the user will put. 


// function calculateCartPrice(...num1) {
//     return num1;
// };

// console.log(calculateCartPrice(200, 12, 345, 412));


/*
rest vs spread operator :

The " ...num1 " we are using in the calculateCartPrice() is called rest operator.
The rest and spread operator looks the same, however based on the usecase it is called
a rest or a spread operator.

What " ...num1 " here means is, all the params we are getting in the function 
are desctructed, thus this operator will put all of them into a single array.

*/



// sometimes we can also put some fixed arguments, and then we put ...num1
// then the first all the arguments will have one values each, and the rest all will go inside
// the ...num1, thus in a single array.

// function calculateCartPrice(num1, num2, ...num3) {
//     return num3;
// };

// console.log(calculateCartPrice(200, 12, 345, 412, 2000));  // num3 = [ 345, 412, 2000 ]




const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
};
// handleObject(user);


// we can directly pass the object while calling the function
// handleObject({
//     username: "sammy",
//     price: "$63"
// });



// we can also pass an array into a function
let arr = [12, 132, 45, 68, 90];

function returnSecondArrayElement(list) {
    return list[1];
};

// console.log(returnSecondArrayElement(arr));
