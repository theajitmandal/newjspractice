// myNumber1 = [2,7,1,8,10,5,3];

// number2 = myNumber1.sort();
// number3 = myNumber1.reverse();

// console.log(number2);
// console.log(number3);

// console.log(myNumber1.sort());
// console.log(myNumber1.reverse());

//sort cannot sort numbers

//map
// myNumber1 = [2,7,1,8,10,5,3];

// mapMyNumber1 = myNumber1.map((element, index, arrary) => {
//     return element > 5;
// })

// console.log(myNumber1);
// console.log(mapMyNumber1);

// const myNumber1 = [2,7,1,8,10,5,3];

// const newArr = myNumber1.map((element) => element*2).filter((element) => element>10);

// console.log(newArr);

// const newArray = myNumber1.map((element) => element * 3).filter((element) => element>20);
// const newArray2 = myNumber1.map((element) => element * 3).filter((element) => element>20).reduce((accumulator, element, index, array) => accumulator += element);
// console.log(newArray);
// console.log(newArray2);

//splice
// const newNumber = [17, 45, 67, 12, 30];
// const newNumber = ["apple", "banana", "orange", "mango"];

// const myNewNumber = newNumber.splice(2, 1, "grapes", "watermelon");

// console.log(newNumber);
// console.log(myNewNumber);

//slice
const newNumber = ["apple", "banana", "orange", "mango"];

const newArr = newNumber.slice(2);

console.log(newNumber);
console.log(newArr);

//forEach & map
// const newNumber = [17, 45, 67, 12, 30];

// const newNumber1 = newNumber.forEach(myFunction);

// function myFunction(element, index, array){
//     return element*2;
// }

// const newNumber1 = newNumber.forEach((element) => element*2);
// const newNumber2 = newNumber.map((element) => element*2);

// console.log(newNumber1);
// console.log(newNumber2);

//filter
// const filterArrary = newNumber.filter((element) => element > 50);
// console.log(filterArrary);

//reduce
// const reduceArray = newNumber.reduce((accumulator, element) => accumulator += element);
// console.log(reduceArray);

// console.log(newNumber.map((element) => element*2).filter((element) => element>50).reduce((acc, element) => acc += element));






