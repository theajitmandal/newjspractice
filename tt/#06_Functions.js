/* 
    01 Function Definition
    02 Calling a function
    03 Function Parameter
    04 Function Arguments
    05 Function Expressions
    06 Return Keyboard
    07 Anonymous Function
*/

// A javascript function is a block of code designed to perform a particular task. (Function -> Reusable Code)

/* 01. Function Definition/Function Declaration/Function Statement:
        Before we use a function we need to define it.
        It consists of the function keyword followed by : 
            1. Name of the function
            2. A list of parameters to the function, enclosed in paranthesis and separated by commas.
            3. The Javascript statements that define the function, enclosed in curly brackets, { ... }

            SyntaX:
                function functionName ()
                {
                    //
                }
 */

// Example: 
    // function sum(){
    //     var a = 10;
    //     var b = 20;
    //     var total = a + b;
    //     console.log(total);
    // }
    // sum();
    // console.log(sum()); //calling function name inside console gives value 30 and then undefined

/*
    02. Calling Functions:
        Defining a function does not execute it. A Javascript function is executed when 'something' invokes it (calls it).

        sum();
        or,     console.log(sum()); -> calling inside console -> This gives undefined
*/


/*
    03 04 Differences between Function Parameter and Function Argument
            Parameters are the names listed in the functions definition. 
            Arguments are the real values passed to the function.
*/

// Example:
    // function sum(a, b){
    //     let total = a + b;
    //     console.log(total);
    // }

    // Run and Check Yourself
    // sum(); 
    // sum(20, 30); 
    // sum(50, 50);  
    // console.log(sum());  
    // console.log(sum(20,30)); 


    // sum(); //gives Nan
    // sum(20, 30); //gives 50
    // sum(50, 50);  //gives 100
    // console.log(sum());  //gives Nan and below gives undefined
    // console.log(sum(20,30)); //gives 50 and below gives undefined

/* Interview Questions:
     Why functions?
        01 You can reuse code. Define the code once and use it many times. You can use the same code many times
            with different arguments.
        02 A function is a group of reusable code which can be called anywhere in your program. This eliminates the need
           of writing the same code again and again.
        
           DRY -> Dono Repeat Yourself
*/

/*  05 Function Expressions
        It simply means to create a function and put it into the variable
*/

// Example:
        // function sum(a, b){
        // var total = a + b;
        // console.log(total);
        // }

        // var funExp = sum(5, 10);
        // funExp; // gives 15
        // console.log(funExp); //gives undefined, It doesn't returns any value (to remove, we need to use return keyword)

/*  06 Return Keyword
        When Javascript reaches a returb statement, the function will stop executing.
        Functions often compute a returb value. The returb value is "returned back to the caller".
*/

// Example:
        function sum(a, b){
            return total = a + b;
        }

        sum(20, 30); //doesnot displays any result
        var funExp = sum(5, 15);
        console.log(funExp);

/*  07 Anonymous Function : is the type of function that has no name...
        A function expression is similar to and has the same syntax as a functiond declaration. One can define 
        "named" function expression (where the name of expression might be used in the call stack for example)
        or anonymous function expressions.

        var funExp = function(a, b) {
        return total = a + b;

        In above code, the whole expression given below is anonymous function expression

        function(a, b) {
        return total = a + b;
        }
*/