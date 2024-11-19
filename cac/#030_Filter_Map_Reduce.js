// Lets see the return value of forEach

// const coding = ["js", "python", "java", "cpp", "ruby"];

// if output of array after implementing forEach is assigned a variable and that variable is printed 
//  then it returns undefined
// const values = coding.forEach((item) => {
//     // console.log(item);    
//     return item;    // if console.log(item) in the above code is commented then also it gives undefined
// })

// console.log(values);

// If we need to perform operations on each values of an array and return only some specific condition
// satisfying elements of array then forEach is not preferable

// filter

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const newNums = myNums.filter((item) => {
//     item > 4
// });

// if above code is run it gives empty array []

// const newNums = myNums.filter((item) => {
//     return item > 4         // inside a scope i.e. {} we need to return item
// });

// Above code can be simplified as follows: Inside {} bracket, return keyword is needed but below code no curly bracket
// so can be simplied into single line (Dont use {} while writing filter in single line insted use small bracket())
// const newNums = myNums.filter((item) => item > 4);
// console.log(newNums);

// above code can be done using forEach as follows:

// const myNewNums = [];

// myNums.forEach( (item) => {
//     if(item > 4){
//         myNewNums.push(item);
//     }
// })

// const NewNums = [];
// const newNewNums = [];
// const newNewNewNums = [];
// const nnewNewNewNums = [];

// console.log(myNewNums);
// console.log(NewNums);
// console.log(newNewNums);
// console.log(newNewNewNums);
// console.log(newNewNewNums);
// console.log(newNewNewNewNums);

// Filter

// const books = [
//     {
//         title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004
//     },
//     {
//         title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008
//     },
//     {
//         title: 'Book Three', genre: 'Non-Fiction', publish: 1989, edition: 2010
//     },
//     {
//         title: 'Book Four', genre: 'Science', publish: 2009, edition: 2014
//     },
//     {
//         title: 'Book Five', genre: 'History', publish: 2012, edition: 2015
//     },
//     {
//         title: 'Book Six', genre: 'Motivaiton', publish: 2005, edition: 2018
//     },
//     {
//         title: 'Book Seven', genre: 'History', publish: 1994, edition: 2019
//     },
// ];

// // const userBooks = books.filter( (bookItem) => bookItem.genre === 'History');

// // const userBooks = books.filter( (bookItem) => bookItem.publish >= 2000);
// const userBooks = books.filter( (bookItem) => bookItem.publish >= 1995 && bookItem.genre === 'History');

// console.log(userBooks);

// map

// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNumbers.map ( (num) => num + 10 )
// console.log(newNums);

// Chaining
// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNumbers
//         .map( (num) => num * 10  ) //result of this line is passed below
//         .map( (num) => num + 1 )
//         .filter( (num) => num >= 40 )

// console.log(newNums);

// Reduce
const myNums = [1, 2, 3];

// const initialValue = 0;
// const sumOfArrays = myNums.reduce( (accumulator, currentValue) => accumulator+currentValue, initialValue  );
// console.log(sumOfArrays);

// OR,

// const myTotal = myNums.reduce( function(acc, currVal) {
//     console.log(`acc: ${acc} and currVal: ${currVal}`);
//     return acc + currVal   
// }, 0) // here, 0 represents the initial value of the accumulator

// OR,

const totalValues = myNums.reduce( (acc, currVal) => acc + currVal, 0 )
console.log(totalValues);

/*
    In Above code, first inital value 0 is stored in accumulator
            accumulator + currentValue
    Step 1:     0       +         1
    Step 2:     1       +         2
    Step 3:     3       +         3
*/

// Create a Shopping Cart and find the total Bill Amount to Pay

const shoppingCart = [
    {
        itemName: "JS Course",
        price: 5000
    },
    {
        itemName: "CSS Course",
        price: 6000
    },
    {
        itemName: "Python Course",
        price: 6000
    },
    {
        itemName: "Django Course",
        price: 7000
    },
]

const billToPay = shoppingCart.reduce( (acc, currVal) => acc + currVal.price , 0)
console.log(billToPay);








