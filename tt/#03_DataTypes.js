//* Data Types are there
//String, Number, Boolean, BigInt, Undefined, Null, Symbol, Object

// const string = "Hello";
// const number = 10;
// const bigInt = BigInt(25490);
// const isNull = null;
// const isMale = true;
// let helloUser;
// const arr = [2,4,5];
// const obj = {firstName:'Ajit', secondName:'Mandal'};

//Run and check yourself
// console.log(typeof(string));
// console.log(typeof(number));
// console.log(typeof(bigInt));
// console.log(typeof(isNull));
// console.log(typeof(isMale));
// console.log(typeof(helloUser));
// console.log(typeof(arr));
// console.log(typeof(obj));

// console.log(typeof(string)); //string
// console.log(typeof(number)); //number
// console.log(typeof(bigInt)); //bigint
// console.log(typeof(isNull)); //object
// console.log(typeof(isMale)); //boolean
// console.log(typeof(helloUser)); //undefined
// console.log(typeof(arr)); //object
// console.log(typeof(obj)); //object

//typeof both array and object is object

//isNaN returns true if value is not a number else returs false

//Run and check yourself
// const myName = "ajit" - "mandal"; 
// const fullName = "ajit" + "mandal";
// console.log(myName);
// console.log(typeof(myName)); 
// console.log(isNaN(NaN)); 
// console.log(NaN === NaN); 
// console.log(NaN == NaN); 
// console.log(Number.NaN); 
// console.log(Number.NaN === NaN); 
// console.log(Number.isNaN(NaN)); 
// console.log(Number.isNaN(fullName));

// const myName = "ajit" - "mandal"; 
// const fullName = "ajit" + "mandal";
// console.log(myName); //NaN
// console.log(typeof(myName)); //number
// console.log(isNaN(NaN)); //true
// console.log(NaN === NaN); //false
// console.log(NaN == NaN); //false
// console.log(Number.NaN); //NaN ~ Important
// console.log(Number.NaN === NaN); //false
// console.log(Number.isNaN(NaN)); //true
// console.log(Number.isNaN(fullName)); //false

// Some Important Notes:
// isNaN(Nan) -> true
// isNaN(fullName) -> false
// Number.true -> true
// Number.false -> false

// Challenge 
//Run and check yourself
// console.log(10 + "20");
// console.log(9 - "5");
// console.log("Java" + "Script");
// console.log("" + "");
// console.log("" + 0);
// console.log("Ajit" - "Mandal");
// console.log(true + true);
// console.log(true + false);
// console.log(false + true);
// console.log(false - true);

// console.log(10 + "20"); //1020
// console.log(9 - "5"); //Gives 4 (is a bug)
// console.log("Java" + "Script"); //JavaScipt
// console.log("" + ""); //
// console.log("" + 0); //0
// console.log("Ajit" - "Mandal"); //NaN
// console.log(true + true); //2
// console.log(true + false); //1
// console.log(false + true); //1
// console.log(false - true); //-2

// Difference between Null and Object
//          Null                                          Indefined
/*
    typeof Null is object                            typeof object is undefined
    useless variable                                 value is not assigned(undefined), will be defined(assigned) later
    var iAmUseless = null;                           var iAmStandBy;
    console.log(typeof(iAmUseless)) gives object     console.log(typeof(iAmStandBy)) gives undefined
*/

//Run and check yourself
var iAmUseless = null;
console.log(typeof(iAmUseless));
var iAmStandBy;
console.log(typeof(iAmStandBy));


// var iAmUseless = null;
// console.log(typeof(iAmUseless));  //object
// var iAmStandBy;
// console.log(typeof(iAmStandBy)); //undefined
