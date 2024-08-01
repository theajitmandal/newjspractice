//Control Statements
/*a. IF .....ELSE
      The IF statement executes a statement if a specified condition is truthy. If the statement is falsy, 
      another statement can be executed.

      If raining then raincoat
      else no raincoat
*/

//Challenge
//Write a program that work out whether if a give year is a leap year or not.
/* Logics:
    ~ Normal  Year has 365 days.
    ~ Leap Year has 366 days (The extra day is 29th february)
    ~ Examples: 2016,2020,2100,2200,2000,2400

    Conditions:
    Leap Year can be exactly divisible by 4.            
    except it can be divided by 100 then it isn't       
    except if it can be divided by 400, then it it

    If divided by 4, then leap year otherwise not leap year
    If divided by 4:
        If divided by 100 then
            again if divided by 400 then Leap year otherwise not leap year
        If not divided by 100 then it is leap year

    4{
        100{Yes Conditions
            400{Yes: Is Leap Year
            }else{Not Leap Year}}
        else{Is Leap Year}
    }
    else{
    No}
*/

//Leap Year Program
// let n = 2009;
// if(n % 4 === 0){
//     if(n % 100 === 0){
//         if(n % 400 === 0){
//             console.log(`${n} is a leap year.`);
//         }else{
//             console.log(`${n} is not a leap year.`);
//         }
//     }else{
//         console.log(`${n} is a leap year.`);
//     }
// }else{
//     console.log(`${n} is not a leap year.`);
// }

//What is truthy and falsy values in JS?
// let score = 1;
// if(score == 0){
//     console.log("OMG, You lost the game");
// }else{
//     console.log("Yay, you won the game");
// }

//There are 5 falsy values in JS: 0, "", undefined, null, NaN, false (Negative Numbers are also false)

//Condtiional (Ternary) Operator: It is the only Javascript operator that takes three operands.
// variablename = (condition) ? value1 : value2

//Example:
// var age = 2;
// console.log((age >= 18) ? "You can vote" : "You cannot vote");

//Switch Statement: Evaluates an expression, matching the expressions value to a cause clase and executes
//                  statements associated with that case.

// var area = "rectangle";
// var l = 2;
// var b = 3;
// var r = 5;

// switch(area){
//     case 'circle':
//         console.log(`The area of circle is : ${22/7 * r * r}`);
//         break;

//     case 'rectangle':
//         console.log(`The area of circle is : ${l * b}`);
//         break;

//     case 'circle':
//         onsole.log(`The area of circle is : ${l * l}`);
//         break;

//     default:
//         console.log(`Please enter the valid data`);
//         break;
// }

//Break Statement : 
/*
    1. Terminates the current loop, switch or label
    2. Transfers program control to the statement following the terminated statement
*/

//While Statement: It creates a loop that executes a specified statement as long as the test condition evaluates to true.

//WAP to display the 1st 10 natural number.

// var n = 1;
// while(n <= 10){
//     console.log(n);
//     n++;
// }
//everything inside curly {} braces is block scoope if condition is true loop enters the block scope

//DO WHILE LOOP

// var n = 1;
// do{
//     console.log(n);
//     n++;
// }while(n <= 10);

/* while loop  checks the condition and runs the statement (if it is true) whereas
do loop first runs the statement and then checks the condition */

// FOR LOOP : is very simple and takes DO WHILE and WHILE LOOP to the next level
// for (initialization; condition; iteration)  //not semicolon after iteration
//     {
            //code to be executed
//     }

// Example: WAP to print the table of the given number using for loop.

let n = 5;
for(i=1; i<=10; i++){
    console.log(`${n} * ${i} = ${n*i}`);
}