// singleton objects

let puzzleUser = new Object();  // declaring as singleton object
let otherUser = {}  // declaring as non-singleton object
// if we print the puzzleUser or otherUser, there will be no difference 

puzzleUser.id = "123098a";
puzzleUser.name = 'koustav';
puzzleUser.place = "Amsterdam";
puzzleUser.isLoggedIn = true;
// console.log(puzzleUser);

otherUser = {
    email: "email@gmail.com",
    fullName: {
        firstName: "Naruto",
        clanName: "Uzumaki"
    },
    parents: {
        father: {
            fatherName: "Minato",
            clanName: "Namikaze"
        },
        mother: {
            motherName: "Kushina",
            clanName: "Uzumaki"
        }
    }
};
// console.log(otherUser['parents']['father']['fatherName']);


// combining two objects
let obj1 = {1: "a", 2: "b"};
let obj2 = {3: "c", 4: "d"};
let obj3 = {5: "c", 10: "d"};
let obj4 = {4: "c", 9: "d"};
let obj5 = {7: "c", 8: "d"};

let obj30 = { obj1, obj2 };
// console.log(obj30);  // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

let obj40 = Object.assign({}, obj1, obj2);
// console.log(obj40);  // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

/*
here in the assign method, the first argument is called the target.
Target is the object data type which it will return an output of.
And after that every other argument will be the objects we want to merge.
Also it will only merge those unique keys. If same keys are there, and 
they have different values, it will still take the unique keys only.


The target is not a mandetory argument. If we don't give it, then 
also we will get the exact same result. But it is a good practice.

if we had like, obj_op_1 = Object.assign({}, obj1, obj2, obj3, obj4, obj5);
then the output will be stored in the {}.

And if we had, obj_op_2 = Object.assign(obj1, obj2, obj3, obj4, obj5);
then all the values of obj2, obj3, obj4, obj5 will be merged into 
obj1.. which also gives the same output. It's just for understanding 
how it works internally.

However one thing will differ, the 
*/



obj_op_1 = Object.assign({}, obj1, obj2, obj3, obj4, obj5);

obj_op_2 = Object.assign(obj1, obj2, obj3, obj4, obj5);

// console.log(obj_op_1 === obj1);  // false
// console.log(obj_op_2 === obj1);  // true

// it is true because all the objects obj2, obj3, obj4, obj5 are merged into
// obj_1, thus obj_op_2 and obj1 are same. But in case of obj_op_1 it isn't
// the case.


// we can also use spread operator to merge two objects

// this also takes the unique keys only
let op = { ...obj1, ...obj2, ...obj3, ...obj4, ...obj5 };
// console.log(op);


// to get all the keys or values from an object

// console.log(Object.keys(puzzleUser));
// console.log(Object.values(puzzleUser));



// to make all the key-value pair into an array

// console.log(Object.entries(otherUser));



// sometimes we will loop through the object to find a value which might not exists

// console.log(puzzleUser.hasOwnProperty("loggedIn"));
// if it doesn't have the vlaue, instead of throwing any error it will return
// true or false



// -------------------------------------------------



// object destructure

let course = {
    courseName: "CS fundamentals",
    courseDate: "2nd March",
    courseInstructor: "Habibi"
}

// sometimes we have some objects and we need to get a value out of it
// so we have a few ways to do it...

// let value1 = course['courseInstructor'];
// let value2 = course['courseInstructor'];
// but these are very inconvenient when using multiple times in our code..

// thus de-structuring comes into picture

let { courseInstructor } = course;  // thus we can use courseInstructor as a variable
// console.log(courseInstructor);

// we can also give it a different name to call it
let { courseInstructor: instructor } = course;
// console.log(instructor);


// this we can also use in react codes

// const navBar1 = (props.company1) => {
//     return;
// }    
// ---- > either we can use like props.some_value coming from function call

// const navBar2 = ({company2}) => {
//     return;
// }   
// ---- > or we can directly destructure it while using those variables in the function

// now we can parse values to the functions in different ways..
// navBar1(company1 = "Adobe");
// navBar2(company2 = "Microsoft");





// -------------------------------------------------



// how to compare two different objects ?

let obj101 = {1: "a", 2: "b"};
let obj102 = {1: "a", 2: "b"};

// if we do this -->
// console.log(obj101 === obj102);  
// it will be false, as it is not only checking the properties 
// of obj101 and obj102, but also checking the memory location of them
// and because both are different objects, both have differnt memory 
// location... and thus it returns false.


function checkType(obj_1, obj_2) {
    return JSON.stringify(obj_1) === JSON.stringify(obj_2);
};
// console.log(checkType(obj101, obj102));
// this will return true.
// However, if the values of both of them are different,
// this will also returns false.

