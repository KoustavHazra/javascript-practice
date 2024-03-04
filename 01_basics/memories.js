/* 
2 type of memories: Stack and Heap.

All the primitive datatype used Stack and all the non-primitive datatype uses Heap.

Whenever stack memory is used, if we copy it from
from somewhere - then the reference of it's original data is is not given to us, after copying 
it is given to us separately. And whatever changes we make in that value, those changes 
are done to the copy and not in the real one.

And whenever we use Heap memory, if we copy it from
from somewhere - then the reference of it's original data is given to us. And 
whatever changes we make in that value, those changes are done in the real one.

*/

let myName = "itachi";
let anotherName = myName;
anotherName = "zoro";

// console.log(myName);
// console.log(anotherName);


let userOne = {
    'name': "luffy",
    'job': 'pirate'
};
let userTwo = userOne;

// if we change like this, then userOne is not changed
// userTwo = {
//     'name': 'naruto',
//     'job': 'hokage'
// };

// console.log(userOne);
// console.log(userTwo);

// if we change like this, then userOne is getting changed
userTwo.name = 'rengoku';
userTwo.job = 'demon slayer';

// console.log(userOne.name);
// console.log(userTwo.name);
// console.log(userOne.job);
// console.log(userTwo.job);
