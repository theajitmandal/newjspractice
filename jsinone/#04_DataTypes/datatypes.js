/*
    "use strict" -> treats all the codes of javascript as newer standard version
    Javascript browser is inside browser engine

    alert(3 + 3); -> we are using nodejs, not browser

    *** JS DataTypes ***

    JavaScript has 8 Datatypes:             SNBBUNSO
        String
        Number
        Bigint
        Boolean
        Undefined   ~ when value is not assigned
        Null        ~ Standalone Value -> Representation of empty value (example: let state = null), not undefined
        Symbol      ~ used when we learn react and make different components -> unique 
        Object

    The Object Datatype:
        The object data type can contain both built-in objects, and user defined objects:

    Built-in object types can be:
        objects, arrays, dates, maps, sets, intarrays, floatarrays, promises, and more.

    Examples:
        // Numbers:
        let length = 16;
        let weight = 7.5;

        // Strings:
        let color = "Yellow";
        let lastName = "Johnson";

        // Booleans
        let x = true;
        let y = false;

        // Object:
        const person = {firstName:"John", lastName:"Doe"};

        // Array object:
        const cars = ["Saab", "Volvo", "BMW"];

        // Date object:
        const date = new Date("2022-03-25");

    Note: A JavaScript variable can hold any type of data.

    *** The Concept of Data Types ***
        In programming, data types is an important concept.

        To be able to operate on variables, it is important to know something about the type.

        Without data types, a computer cannot safely solve this:
            let x = 16 + "Volvo";
        
        Does it make any sense to add "Volvo" to sixteen? Will it produce an error or will it produce a result?

        JavaScript will treat the example above as:

        let x = "16" + "Volvo";

        Note: When adding a number and a string, JavaScript will treat the number as a string.

        Example:
            let x = 16 + "Volvo";           -> 16Volvo

        Example:
            let x = "Volvo" + 16;           -> Volvo16

        JavaScript evaluates expressions from left to right. Different sequences can produce different results:

        Example:
            let x = 16 + 4 + "Volvo";       -> 20Volvo

        Example:
            let x = "Volvo" + 16 + 4;       -> Volvo164

        In the first example, JavaScript treats 16 and 4 as numbers, until it reaches "Volvo".
        In the second example, since the first operand is a string, all operands are treated as strings.

    *** JavaScript Types are Dynamic ***
        JavaScript has dynamic types. 
        This means that the same variable can be used to hold different data types:

        Example:
            let x;       // Now x is undefined
            x = 5;       // Now x is a Number
            x = "John";  // Now x is a String

    *** JavaScript Strings ***
        A string (or a text string) is a series of characters like "John Doe".
        Strings are written with quotes. You can use single or double quotes:

        Example:
            // Using double quotes:
            let carName1 = "Volvo XC60";

            // Using single quotes:
            let carName2 = 'Volvo XC60';

        You can use quotes inside a string, as long as they don't match the quotes surrounding the string:

        Example:
            // Single quote inside double quotes:
            let answer1 = "It's alright";

            // Single quotes inside double quotes:
            let answer2 = "He is called 'Johnny'";

            // Double quotes inside single quotes:
            let answer3 = 'He is called "Johnny"';

    We will learn more about strings later in this tutorial.

    *** JavaScript Numbers ***
        All JavaScript numbers are stored as decimal numbers (floating point).
        Numbers can be written with, or without decimals:

        Example:
            // With decimals:
            let x1 = 34.00;

            // Without decimals:
            let x2 = 34;

    *** Exponential Notation ***
        Extra large or extra small numbers can be written with scientific (exponential) notation:

        Example:
            let y = 123e5;    // 12300000
            let z = 123e-5;   // 0.00123

    Note: Most programming languages have many number types:

        Whole numbers (integers):
        byte (8-bit), short (16-bit), int (32-bit), long (64-bit)

        Real numbers (floating-point):
        float (32-bit), double (64-bit).

        Javascript numbers are always one type:
        double (64-bit floating point).

    We will learn more about numbers later in this tutorial.

    *** JavaScript BigInt ***
        All JavaScript numbers are stored in a 64-bit floating-point format.
        JavaScript BigInt is a new datatype (ES2020) that can be used to store integer values that are 
        too big to be represented by a normal JavaScript Number.

        Example:
            let x = BigInt("123456789012345678901234567890");

    We will learn more about BigInt later in this tutorial.

    *** JavaScript Booleans ***
        Booleans can only have two values: true or false.

        Example:
            let x = 5;
            let y = 5;
            let z = 6;
            (x == y)       // Returns true
            (x == z)       // Returns false

    Booleans are often used in conditional testing.

    We will learn more about booleans later in this tutorial.

    *** JavaScript Arrays ***
        JavaScript arrays are written with square brackets.
        Array items are separated by commas.

        The following code declares (creates) an array called cars, containing three items (car names):

        Example:
            const cars = ["Saab", "Volvo", "BMW"];

        Array indexes are zero-based, which means the first item is [0], second is [1], and so on.

    We will learn more about arrays later in this tutorial.

    *** JavaScript Objects ***
        JavaScript objects are written with curly braces {}.
        Object properties are written as name:value pairs, separated by commas.

        Example:
            const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
            
        The object (person) in the example above has 4 properties: firstName, lastName, age, and eyeColor.

    We will learn more about objects later in this tutorial.

    *** The typeof Operator ***
        You can use the JavaScript typeof operator to find the type of a JavaScript variable.
        The typeof operator returns the type of a variable or an expression:

        Example:
            typeof ""             // Returns "string"
            typeof "John"         // Returns "string"
            typeof "John Doe"     // Returns "string"

        Example:
            typeof 0              // Returns "number"
            typeof 314            // Returns "number"
            typeof 3.14           // Returns "number"
            typeof (3)            // Returns "number"
            typeof (3 + 4)        // Returns "number"

    We will learn more about typeof later in this tutorial.

    *** Undefined ***
        In JavaScript, a variable without a value, has the value undefined. 
        The type is also undefined.

        Example:
            let car;    // Value is undefined, type is undefined

        Any variable can be emptied, by setting the value to undefined. The type will also be undefined.

        Example:
            car = undefined;    // Value is undefined, type is undefined

    *** Empty Values ***
        An empty value has nothing to do with undefined.
        An empty string has both a legal value and a type.

        Example:
            let car = "";    // The value is "", the typeof is "string"

    *** Exercises ***
    
    1. In JavaScript, what is the data type of the following variable? let x = 7.5     -> Number
    2. True or False: If a variable is declared using the let keyword, it can never change its data type.  -> False
    3. Insert the correct data type for each variable:
            let a = 10;                                     -> Number
            let b = 'Sally';                                -> String
            let c = true;                                   -> Boolean

    Lets Practice:

        const string = "Hello";
        const number = 10;
        const bigInt = BigInt(25490);
        const isNull = null;
        const isMale = true;
        let helloUser;
        const arr = [2,4,5];
        const obj = {firstName:'Ajit', secondName:'Mandal'};

    Run and Check Yourself
        console.log(typeof(string));
        console.log(typeof(number));
        console.log(typeof(bigInt));
        console.log(typeof(isNull));
        console.log(typeof(isMale));
        console.log(typeof(helloUser));
        console.log(typeof(arr));
        console.log(typeof(obj));

            console.log(typeof(string));                        -> string
            console.log(typeof(number));                        -> number
            console.log(typeof(bigInt));                        -> bigint
            console.log(typeof(isNull));                        -> object
            console.log(typeof(isMale));                        -> boolean
            console.log(typeof(helloUser));                     -> undefined
            console.log(typeof(arr));                           -> object
            console.log(typeof(obj));                           -> object

    typeof both array and object is object

    // Symbols
        const sym1 = Symbol();
        const sym2 = Symbol("foo");
        const sym3 = Symbol("foo");

        console.log(typeof(sym1));                              -> symbol
        console.log(typeof(sym2));                              -> symbol
        console.log(typeof(sym3));                              -> symbol

    *** What is NaN? ***
        If 2 strings are subtracted result is NaN
        Nan ~ Not a number, Nan is a property of the global object
        It is a variable in global scope
        Its initial value is Not-A-Number.
        isNaN() returs true or false result

    *** isNaN() ***
        The isNaN() function determines whether a value is NaN, first converting the value to a number if necessary. 
        Because coercion () inside the isNaN() function can be surprising, you may prefer to use Number.isNaN().

            coercion -> In computer science, coercion is the automatic or implicit conversion of data values from 
                        one type to another. It's also known as type conversion or typecasting. 
            
            Explanation:
                Coercion is often used when comparing or operating on data types that are different. 
                It's done by the compiler or interpreter to determine the type of comparison being made. 
                Coercion is implicit, while type conversion can be either implicit or explicit. 
            
            Examples:
                Converting a string to a number
                Converting a string like "5" to an integer like 5 or a double like 5.0
                Converting a list to a character type

            Related concepts :
                Type error: When an operator is applied to an operand of an incorrect type
                Type checking: When the operands of an operator are confirmed to be compatible types

        IsNan Example:
            function milliseconds(x) {
                if (isNaN(x)) {
                    return 'Not a Number!';
                }
                return x * 1000;
            }

            console.log(milliseconds('100F'));
            // Expected output: "Not a Number!"

            console.log(milliseconds('0.0314E+2'));
            // Expected output: 3140
        
        Syntax:
            isNaN(value)

        Parameters:
            value
            The value to be tested.

        Return value:
            true if the given value is NaN after being converted to a number; otherwise, false.
            isNaN returns true if value is not a number else returs false
            if number then false otherwise always true

        Description:
            isNaN() is a function property of the global object.
            For number values, isNaN() tests if the number is the value NaN. 
            When the argument to the isNaN() function is not of type Number, the value is first coerced to a number, 
            and the resulting value is then compared against NaN.

            This behavior of isNaN() for non-numeric arguments can be confusing! 
            For example, an empty string is coerced to 0, while a boolean is coerced to 0 or 1; 
            both values are intuitively "not numbers", but they don't evaluate to NaN, so isNaN() returns false. 
            Therefore, isNaN() answers neither the question "is the input the floating point NaN value" nor the 
            question "is the input not a number".

            Number.isNaN() is a more reliable way to test whether a value is the number value NaN or not. 
            Alternatively, the expression x !== x can be used, and neither of the solutions is subject to the 
            false positives that make the global isNaN() unreliable. To test if a value is a number, 
            use typeof x === "number".

            The isNaN() function answers the question "is the input functionally equivalent to NaN when used in a 
            number context". If isNaN(x) returns false, you can use x in an arithmetic expression as if it's a 
            valid number that's not NaN. If isNaN(x) returns true, x will get coerced to NaN and make most 
            arithmetic expressions return NaN (because NaN propagates).

        Examples:
            Note how isNaN() returns true for values that are not the value NaN but are not numbers either:

            isNaN(NaN); // true
            isNaN(undefined); // true
            isNaN({}); // true

            isNaN(true); // false
            isNaN(false); // false
            isNaN(null); // false
            isNaN(37); // false

            // Strings
                isNaN("37"); // false: "37" is converted to the number 37 which is not NaN
                isNaN("37.37"); // false: "37.37" is converted to the number 37.37 which is not NaN
                isNaN("37,5"); // true
                isNaN("123ABC"); // true: Number("123ABC") is NaN

                isNaN(""); // false: the empty string is converted to 0 which is not NaN
                isNaN(" "); // false: a string with spaces is converted to 0 which is not NaN

            // Dates
                isNaN(new Date()); // false; Date objects can be converted to a number (timestamp)
                isNaN(new Date().toString()); // true; // the string representation of a Date object 
                                                        // cannot be parsed as a number

            // Arrays
                isNaN([]); // false; the primitive representation is "", which coverts to the number 0
                isNaN([1]); // false; the primitive representation is "1"
                isNaN([1, 2]); // true; the primitive representation is "1,2", which cannot be parsed as number

            isNaN({}); // empty object -> true
            isNaN([]); // empty array -> false

            More Examples:
                console.log(isNaN(123));                            -> false
                console.log(isNaN(-1.23));                          -> false
                console.log(isNaN(5-2));                            -> false
                console.log(isNaN(0));                              -> false

                console.log(isNaN('123'));                          -> false
                console.log(isNaN('Hello'));                        -> true
                console.log(isNaN('2005/12/12'));                   -> true

    *** Difference Between isnan() and Number.isnan() ***
        isNaN() method returns true if a value is Not-a-Number.
        Number.isNaN() returns true if a number is Not-a-Number.

        In other words: isNaN() converts the value to a number before testing it.

        // This returns true;
        isNaN('Hello');

            <p>Is "Hello" NaN?</p>
            <p id="demo"></p>

            <script>
                let text = "Hello";
                document.getElementById("demo").innerHTML = isNaN(text);
            </script>

        // This returns false;
        Number.isNaN('Hello');

            <p>Is "Hello" NaN?</p>
            <p id="demo"></p>

            <p>Number.isNaN() is not supported in Internet Explorer.</p>

            <script>
                let text = "Hello";
                document.getElementById("demo").innerHTML = Number.isNaN(text);
            </script>

        console.log(Number.isNaN("Hello"));                         -> false
        console.log(Number.isNaN(5));                               -> false
        console.log(Number.isNaN(5-2));                             -> false
        console.log(Number.isNaN("5a"));                            -> false

        console.log(isNaN("Hello"));                                -> true
        console.log(isNaN(5));                                      -> false
        console.log(isNaN("5a"));                                   -> true

        // Discussed in details about NaN at the bottom
        // Run and Check Yourself
            const myName = "ajit" - "mandal"; 
            const fullName = "ajit" + "mandal";
            console.log(myName);
            console.log(typeof(myName)); 
            console.log(isNaN(NaN)); 
            console.log(NaN === NaN); 
            console.log(NaN == NaN); 
            console.log(Number.NaN); 
            console.log(Number.NaN === NaN); 
            console.log(Number.isNaN(NaN)); 
            console.log(Number.isNaN(fullName));

            const myName = "ajit" - "mandal"; 
            const fullName = "ajit" + "mandal";
            console.log(myName);                                    // NaN
            console.log(typeof(myName));                            // number
            console.log(isNaN(NaN));                                // true
            console.log(NaN === NaN);                               // false
            console.log(NaN == NaN);                                // false
            console.log(Number.NaN);                                // NaN ~ Important
            console.log(Number.NaN === NaN);                        // false
            console.log(Number.isNaN(NaN));                         // true
            console.log(Number.isNaN(fullName));                    // false -> Confusion because fullName is String

            console.log(Number.true);                               -> undefined
            console.log(Number.false);                              -> undefined


            console.log(isNaN(10));                                 -> false
            console.log(Number.isNaN(10));                          -> false

            console.log(isNaN(NaN));                                -> true
            console.log(Number.isNaN(NaN));                         -> true

        // Some Important Notes:
            isNaN(Nan) -> true
            isNaN(fullName) -> false -> Confusion
            Number.true -> true
            Number.false -> false

        // Challenge 
        // Run and Check Yourself
            console.log(10 + "20");
            console.log(9 - "5");
            console.log("Java" + "Script");
            console.log("" + "");
            console.log("" + 0);
            console.log("Ajit" - "Mandal");
            console.log(true + true);
            console.log(true + false);
            console.log(false + true);
            console.log(false - true);

            console.log(10 + "20");                                     // 1020
            console.log(9 - "5");                                       // Gives 4 (is a bug)
            console.log("Java" + "Script");                             // JavaScipt
            console.log("" + "");                                       //
            console.log("" + 0);                                        // 0
            console.log("Ajit" - "Mandal");                             // NaN
            console.log(true + true);                                   // 2
            console.log(true + false);                                  // 1
            console.log(false + true);                                  // 1
            console.log(false - true);                                  // -2

    *** Difference between Null and Undefined ***
                      Null                                          undefined

    typeof Null is object                            typeof undefined is undefined
    useless variable                                 value is not assigned(undefined), will be defined(assigned) later
    var iAmUseless = null;                           var iAmStandBy;
    console.log(typeof(iAmUseless)) gives object     console.log(typeof(iAmStandBy)) gives undefined


    // Run and Check Yourself
        var iAmUseless = null;
        console.log(typeof(iAmUseless));
        var iAmStandBy;
        console.log(typeof(iAmStandBy));


        var iAmUseless = null;
        console.log(typeof(iAmUseless));            // object
        var iAmStandBy;
        console.log(typeof(iAmStandBy));            // undefined

        const myName = "Ajit" - "Mandal";
        console.log(myName);                        
        console.log(typeof(myName));                

    // Run and Check Yourself
        const myName = "Ajit" - "Mandal";
        console.log(myName);                        // NaN
        console.log(typeof(myName));                 // number

    *** Interview Questions: ***
        What is NaN?
            If 2 strings are subtracted result is NaN
            Nan ~ Not a number, Nan is a property of the global object
            It is a variable in global scope
            Its initial value is Not-A-Number.
            isNaN() returs true or false result

    // Run and Check Yourself
        var myPhoneNumber = 9804065452;
        var myName = "Ajit";
        console.log(isNaN(myPhoneNumber));
        console.log(isNaN(myName));

        var myPhoneNumber = 9804065452;
        var myName = "Ajit";
        console.log(isNan(myPhoneNumber));                  // false
        console.log(isNan(myName));                         // true

    // isNaN Usage:
        var myPhoneNumber = "9804065452"; 
        if(isNaN(myPhoneNumber)){
            console.log("Please enter a valid phone number");
        }
*/