// Primitive & Non-Primitive

// Primitive Data Types : Call by Value ~ means if copied reference of original data is not given, copy of data is given
// 7 types : String, Number, Boolean, null, undefined, Symbol (used in advanced FE to make components or buttons unique)
//           BigInt

//Is JS statically typed or dynamically typed?

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const Temperature = null;

let userEmail; //value will be undefined or, let userEmail = undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id);
console.log(anotherId);
console.log(id === anotherId);

const bigNumber = 34567891457896145795n;
console.log(typeof(bigNumber));

// Reference Types or Non-Primitve : Its reference can be accesed directly
// Array, Objects, Functions
// Master JS Objects and Browser Events to become Master of JS

const heroes = ["Shaktiman", "Naagraj", "Krish"];

let myObject = {
    name: "Ajit",
    age: 25,
}

const myFunction = function () {
    console.log("Hello");
}

console.log(typeof(myFunction)); //this is function object

//typeof of all non-primitive data types is object...typeof of Function gives function which is called function object
