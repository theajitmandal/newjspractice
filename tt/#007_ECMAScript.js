// ECMA ~ European Computer Manufactures Association

/* History of JS
    1. In 1996 or 1995, JS was created by Brender Eich for Netscape 2 and became ECMA-262 standard in 1997
    2. In 1997, ECMA INternational (It was then submitted to ECMA international for standardization which resulted 
        in ECMAScript)
    3. In 2015, ES6 decided to switch annual release of ECMAScript

    Timeline:
    2015    ~ ECMAScript 2015 knowns as ES6 or ECMASCript 6
    2016    ~ ECMAScript 2016 known as ES7 or ECMAScript 7
    2017    ~ ECMAScript2017 known as ES8 or ECMAScript 8
    2018    ~ ECMAScript 2018 known as ES9 or ECMAScript 9
    2019    ~ ECMASCript 2019 known as ES10 or ECMAScript 10
    2020    ~ ECMAScript2020 known asES11 or ECMAScript 11

    ECMAScript 2015/ES6 :
    1. LET and CONST
    2. Template Strings
    3. Default Arguments
    4. Destructuring
    5. Object Properties
    6. Arrow Functions
    7. Rest Operators
    8. Spread Operators
*/ 

// Modern JS ~ Features of ECMASCript 2015 is also known as ES6 

/* 1. LET VS CONST VS VAR

    Variables defined using LET and VAR can be changed later but variables defined using CONST cannot be changed later.

    // Let                                  // Var                              // Const
    let myName = "Mandal";          let myName = "Mandal";                  const myName = "Mandal";
    console.log(myName);            console.log(myName);                    console.log(myName);

    myName = "Ajit"                 myName = "Ajit"                         myName = "Ajit"
    console.log(myName);            console.log(myName);                    console.log(myName);

    Above code works                Above code works                        Above code gives error (typeError)
*/

// let myName = "Mandal";
// console.log((myName));

// myName = "Mandal";
// console.log(myName);

// const myNameAgain = "Mandal";
// console.log((myNameAgain));

// myNameAgain = "Mandal"; //gives error
// console.log(myNameAgain); 

// var ~ function scope / Global Scope
// let and const ~ block scope (inside curly braces only)

// Using VAR
// function biodata() {
//     var myFirstName = "Ajit";
//     console.log(myFirstName);

//     if (true){
//         var myLastName = "Mandal";
//         console.log("inner" + myLastName);
//         console.log("inner" + myFirstName);        
//     }
//     console.log("innerOuter" + myLastName);  
// }
// biodata();

// Using LET or CONST same
// function biodata() {
//     let myFirstName = "Ajit";
//     console.log(myFirstName);

//     if (true){
//         let myLastName = "Mandal";
//         console.log("inner" + myLastName);
//         console.log("inner" + myFirstName);        
//     }
//     // console.log("innerOuter" + myLastName);  //cannot access values from the another scope
// }
// biodata();

/*  2. Template Literals (Template Strings) 
        Javascript program to print the table of a number using template literals (Program is below)
*/

// to print table of a number
    // let num = 12;
    // for(i = 1; i<=10; i++){
    //     console.log(`${num} * ${i} = ${num * i}`);
    // }

/*  3. Default Parameters
        Default Function Parameter allow named parameters to be initialized with default values if no value or 
        undefined is passed

*/

    // function mult(a, b){
    //     return a*b;
    // }

    // // Run and check yourself
    // console.log(mult(5,3));
    // console.log(mult(5)); 

    // // Examples
    // console.log(mult(5,3)); //result will be 15
    // console.log(mult(5));  //gives Nan since only 1 argument is passed 

    // function mult (a, b = 6){
    //     return a * b;
    // }
    // // Run and Check Yourself
    // console.log(mult(2));

    // // Example
    // console.log(mult(2)); //gives result 12

    function mul(a = 6, b){
        return a * b;
    }
    // Run and Check Yourself
    console.log(mul(2)); 
    
    //Example
    // console.log(mul(2)); //gives Nan since 2 will be passed as a value of 6 and no value of b

    /* 4. Destructuring : Later in arrays
        5. Object Properties : Later in objects
        6. Rest Operator ~ Later
        7. Spread Operator ~ Later
    */
    
    



    
    




