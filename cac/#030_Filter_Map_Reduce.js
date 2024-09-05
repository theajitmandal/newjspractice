// Lets see the return value of forEach

const coding = ["js", "python", "java", "cpp", "ruby"];

// if output of array after implementing forEach is assigned a variable and that variable is printed 
//  then it returns undefined
const values = coding.forEach((item) => {
    // console.log(item);    
    return item;    // if console.log(item) in the above code is commented then also it gives undefined
})

console.log(values);

// If we need to perform operations on each values of an array and return only some specific condition
// satisfying elements of array then forEach is not preferable

// filter

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const newNums = myNums.filter((item) => {
//     item > 4
// });

// if above code is run it gives empty array

const newNums = myNums.filter((item) => {
    return item > 4         // inside a scope i.e. {} we need to return item
});

// const newNums = myNums.filter((item) => item > 4);
console.log(newNums);

// above code can be done using forEach as follows:

const myNewNums = [];

const NewNums = [];
const newNewNums = [];
const newNewNewNums = [];

myNums.forEach( (item) => {
    if(item > 4){
        myNewNums.push(item);
    }
})

console.log(myNewNums);
console.log(NewNums);
console.log(newNewNums);
console.log(newNewNewNums);


