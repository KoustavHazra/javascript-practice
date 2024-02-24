const accountId = 12345
let mail = "myemail@gmail.com"
var password = "09876"
city = "bengaluru"
let country;

console.table([accountId, mail, password, city, country]);


mail = "mynewemail@gmail.com"
password = "432"
city = "New York"
console.table([mail, password, city]);

// CONST
// accountId = 234
// console.log(accountId); 
// --> cannot change the variable name or the value, if declared with const


// VAR
// do not use var, since scope doesn't work properly with it.


// LET
// let mail = "changemail@gmail.com"
// use let instead, as we can change the value of a let variable, and scope works with it.
// however let doesn't allow you to redeclare a same variable.


// if we just declare a variable without any value, since it has no value
// javascript will take it as undefined.
