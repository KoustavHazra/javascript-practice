// array and object loops 3

// const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item
// } )

// console.log(values);  // undefined  -- as forEach() doesn't returns any value



// filter ---
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     return num > 4;
// } );

/*
filter method is kinda same forEach(), it also takes a callback function in it
..however there is one difference, is that if we return something from the
callback function it will return that.
So here we wrote " return num > 4 " --- it will return an array of all the number > 4.

But we need to return it, if do not use return here, then it will return an empty [].
*/



// also as we know, in javascript functions, if do not use {} then we don't need to use return
// so....
// const newNums = myNums.filter( (num) => num > 4 );  // works fine
// const newNums = myNums.filter( (num) => (num > 4) );  // works fine

// this is because whenever we use {} we open a scope within that function, thus we need to use the return




// we can so the same thing filter is doing, but in a different way ----

// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);




// using filter on an array of objects

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//   let userBooks = books.filter( (bk) => bk.genre === 'History')

//   let userBooks = books.filter( (book) => (book.genre === 'Fiction' && book.edition === 2010));
//   console.log(userBooks);





// using multiple methods together

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10});

const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40);

console.log(newNums);
