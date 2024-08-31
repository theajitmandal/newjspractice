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

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    console.log(num);        
}

const greetings = "Hello World";
for (const greet of greetings) {
    console.log(`Each character is ${greet}`); 
}

// Maps
const map = new Map()




