// array and object loops 4

const myNums = [1, 2, 3, 4]

// reduce ---
// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval;
// }, 0);

/*
the reduce method also uses a callback function. However in that callback function
we use two specific params - accumulator and current value.

In an array when we use reduce method, the currentValue is the current item of the array
and there will be this accumulator, and in the begining there will be a specific value
assigned to it. So for every currentValue, we will be performing some calculations
with the accumulator. 

Also the accumulator value we define, we keep it in the end of the callback function.
myNums.reduce(function (acc, currval) => ( acc + currval ), 0);

the 0 in the end is the inital value of accumulator.
And after that the accumulator value keeps on updating.
*/


const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0);

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(priceToPay);
