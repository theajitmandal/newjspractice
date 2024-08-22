// () paranthesis [] square brackets {} braces or curly braces

// Array
const arr = [1, 2, 4, 5]; //single data types
// const myArr = [1, 4, true, "Hello"]; //mixed data types

// const myArr2 = new Array(1, 2, 3, 4);

// console.log(arr[2]);

// Copy operations of Arrays create shallow copies means that properties share the same reference point.
// Deep copy donot share the same references

// Array Methods

// arr.push(8);
// console.log(arr);
// arr.pop(); //removes the last element of array
// console.log(arr);

// arr.unshift(7); //unshifts shifts all remaining elements which increases processing time
// console.log(arr);

// console.log(arr.includes(10));
// console.log(arr.indexOf(10));

// const newArr = arr.join(); //converts arrays into strings

// console.log(newArr);
// console.log(typeof newArr);

// slice and splice
// const myArr = [0,1,2,3,4,5];

// console.log("A", myArr);

// const myn1 = myArr.slice(1, 3);
// console.log(myn1);

// console.log("B", myArr);

// const myn2 = myArr.splice(1, 3);
// console.log(myn2);

// console.log("C", myArr);

// Difference between slice and splice method
// slice() creates a new array with a portion of elements copied from the original array, 
// while splice() mutates the original array itself by removing, replacing or adding elements to it.

const marvel_heroes = ["thor", "Iroman", "Spiderman"];
const dc_heroes = ["superman", "flash", "batman"];

// marvel_heroes.push(dc_heroes);

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

// push works on the original array but concat returns a new array
// const allHeroes = marvel_heroes.concat(dc_heroes);
// console.log(allHeroes);

// [...arr1, ...arr2] -> Spread Operator
// concat and spread operator are similar but spread operators are used more
const allNewHeroes = [...marvel_heroes, ...dc_heroes];
console.log(allNewHeroes);

// flatten an array
const anotherArray = [1, 2, 3 , [4, 5, 6], 7, [6, 7, [4, 5]]];
const realArray = anotherArray.flat(Infinity);
console.log(realArray);

// Array.isArray
// Array.from
// Array.of

console.log(Array.isArray("Mandal"));
console.log(Array.from("Mandal"));
console.log(Array.from({name:"Mandal"})); //interesting -> Why interesting?

let score1 = 100;
let score2 = 300;
let score3 = 400;
console.log(Array.of(score1, score2, score3));





















