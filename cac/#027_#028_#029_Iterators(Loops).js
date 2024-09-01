/**** Loops or Iterators*****/ 

// For Loop

// for (let index = 0; index < 10; index++) {
//     const element = index;
//     console.log(element);
// }

// first intializes index = 0 then checks the condition then code inside block scope runs after that index++ is executed 
// and again loop is repeated according to the condition

// Ctrl + D -> Selects the same consecutive words

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(element);
// }

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element == 5) {
//         console.log("5 is the best number");  
//     }
//     console.log(element);
// }

// console.log(element); -> doesnot work here

// for (let i = 1; i <= 10; i++) {
//     console.log(`Outer Loop value: ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         // console.log(`Inner loop value ${j} and outer loop ${i}`);
//         console.log(i + 'x' + j + '=' + i*j);    
//     }
// }

// For Loop in Arrays

// let arrayFruits = ['Mango', 'Apple', 'Banana', 'Orange', 'Guava'];

// for (let index = 0; index < arrayFruits.length; index++) {
//     const element = arrayFruits[index];
//     console.log(element); 
// }

// break and continue

// for (let index = 1; index <= 20; index++) {
//     if(index == 5){
//         console.log(`Detected 5`);
//         break;                          // loop will be stopeed here
//     }
//     console.log(`Value of is is ${index}`);
// }

// for (let index = 1; index <= 20; index++) {
//     if(index == 5){
//         console.log(`Detected 5`);
//         continue;                          // 5 will not be printed and remaining loop will execute as it is
//     }
//     console.log(`Value of is is ${index}`);
// }

/**** Higher Order Array Loops *****/ 

// for of

// ["", "", ""] -> Array of Strings
// [{}, {}, {}] -> Array of Object

// const arr = [1, 2, 3, 4, 5];

// for (const num of arr) {
//     console.log(num);        
// }

// const greetings = "Hello World";
// for (const greet of greetings) {
//     console.log(`Each character is ${greet}`); 
// }

// Maps : holds key-value pairs and remembers the original insertion order of the keys.
// const map = new Map()
// map.set('USA', "United States" );
// map.set('NP', "Nepal");
// map.set('Fr', "France");
// map.set('Fr', "France");    // doesnot add the value since map contains the unique key:value

// console.log(map);

// for (const key of map) {
//     console.log(key);        // gives arrays of key:value pairs
// }

// for (const [key, value] of map) {                               // destructing of array
//     console.log(`Key is ${key} and value is ${value}`);        // gives arrays of key:value pairs
// }

// const myObj = {
//     'Flower1' : 'Rose',
//     'Flower2' : 'Lily',
//     'Flower3' : 'Marigold'
// }

// for (const [key, value] of myObj) { // nyObj is not iterable
//     console.log(key, ':-', value);        
// }

// If object is defined by the following way then:
// const myObj = {
//     Flower1 : 'Rose',
//     Flower2 : 'Lily',
//     Flower3 : 'Marigold'
// }

// for (const [key, value] of myObj) { // nyObj is not iterable (Still we get the same error)
//     console.log(key, ':-', value);        
// }

// const myObject = {
//     js: 'Javascript',
//     cpp: 'C++',
//     rb: "Ruby",
//     swift: "Swift by apple"
// }

// for (const key in myObject) {
//     console.log(key);   
// }

// for (const key in myObject) {
//     console.log(myObject[key]);   
// }

// for (const key in myObject) {
//     console.log(`${key} : ${myObject[key]}`);
// }

// Does for In loop be applied in Arrays?

// const pl = ['js', 'cpp', 'rb', 'py', 'java'];

// for (const key in pl) {
//     console.log(key);        
// }

// for (const key in pl) {
//     console.log(pl[key]);        
// }

// Can FOR IN Loop be applied on maps, lets check

// const map = new Map()
// map.set('USA', "United States" );
// map.set('NP', "Nepal");
// map.set('Fr', "France");
// map.set('Fr', "France");    

// for (const key in map) {
//     console.log(key);        // doesnot give any error but doesnot work since map is not iterable
// }


// Frequently used loop -> FOR EACH

const coding = ["js", "python", "java", "cpp", "ruby"];

// coding.forEach(function (val) {
//     console.log(val);    
// })

// call back function
// function definition -> function name () {}
// call back function has no name function () {}
// call back function parameter on array goes on each value     ->   function (item) {}

// in arrow function form
// coding.forEach( () => {} )
// coding.forEach( (item) => {
//     console.log(item);         
// })

function printMe(item){
    console.log(item);    
}

// coding.forEach(printMe); //giving reference of printMe function

// coding.forEach( (item, index, array) => {
//     console.log(item, index, array);
    
// })

const programmingLanguage = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "cpp",
        languageFileName: "cpp"
    }
]

programmingLanguage.forEach( (item) => {
    console.log(item.languageName);    
} )