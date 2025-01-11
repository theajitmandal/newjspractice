/*
    *** JavaScript Let ***
    
    The let keyword was introduced in ES6 (2015)
    
    Variables declared with let have Block Scope
    Variables declared with let must be Declared before use
    Variables declared with let cannot be Redeclared in the same scope

    *** What is scope? **

        Scope in JavaScript refers to the context or environment in which variables are declared and can be accessed.
        JavaScript Scope is the area where a variable (or function) exists and is accessible. 
        Scope determines the accessibility of variables, objects, and functions from different parts of the code.

        Types of Scope:
            JavaScript variables have 3 types of scope:

            Block scope
            Function scope
            Global scope

    *** Block Scope ***
        
        Before ES6 (2015), JavaScript did not have Block Scope.

        JavaScript had Global Scope and Function Scope.
        ES6 introduced the two new JavaScript keywords: let and const.
        These two keywords provided Block Scope in JavaScript:
    
        Example:
            Variables declared inside a { } block cannot be accessed from outside the block:
                {
                    let x = 2;
                }
                // x can NOT be used here

    *** Global Scope ***
        
        Variables declared with the var always have Global Scope.
        Variables declared with the var keyword can NOT have block scope:

        Example:
            Variables declared with var inside a { } block can be accessed from outside the block:
            {
                var x = 2;
            }
            // x CAN be used here

    *** Cannot be Redeclared ***
        
        Variables defined with let can not be redeclared.
        You can not accidentally redeclare a variable declared with let.

        With let you can not do this:

            let x = "John Doe";
            let x = 0;

        Variables defined with var can be redeclared.

        With var you can do this:

            var x = "John Doe";
            var x = 0;

    *** Redeclaring Variables ***
        Redeclaring a variable using the var keyword can impose problems.
        Redeclaring a variable inside a block will also redeclare the variable outside the block:

        Example:
            var x = 10;
            // Here x is 10

            {
            var x = 2;
            // Here x is 2
            }

            // Here x is 2

        Redeclaring a variable using the let keyword can solve this problem.
        Redeclaring a variable inside a block will not redeclare the variable outside the block:

        Example:
            let x = 10;
            // Here x is 10

            {
            let x = 2;
            // Here x is 2
            }

            // Here x is 10

    *** Difference Between var, let and const ***
    	        Scope	    Redeclare	    Reassign	    Hoisted	            Binds this
        var	    No	            Yes	            Yes	            Yes	                Yes
        let	    Yes	            No	            Yes	            No	                No
        const	Yes	            No	            No	            No	                No

    *** What is Good? ***
        let and const have block scope.
        let and const can not be redeclared.
        let and const must be declared before use.
        let and const does not bind to this.
        let and const are not hoisted.

    *** What is Not Good? ***
        var does not have to be declared.
        var is hoisted.
        var binds to this.

    *** Browser Support ***
        The let and const keywords are not supported in Internet Explorer 11 or earlier.

        The following table defines the first browser versions with full support:
        Chrome 49	    Edge 12	        Firefox 36	    Safari 11	    Opera 36
        Mar, 2016	    Jul, 2015	    Jan, 2015	    Sep, 2017	    Mar, 2016

    *** Redeclaring ***
        Redeclaring a JavaScript variable with var is allowed anywhere in a program:

        Example:
            var x = 2;
            // Now x is 2

            var x = 3;  
            // Now x is 3

        With let, redeclaring a variable in the same block is NOT allowed:

        Example:
            var x = 2;   // Allowed
            let x = 3;   // Not allowed

            {
            let x = 2;   // Allowed
            let x = 3;   // Not allowed
            }

            {
            let x = 2;   // Allowed
            var x = 3;   // Not allowed
            }

        Redeclaring a variable with let, in another block, IS allowed:

        Example:
            let x = 2;   // Allowed

            {
            let x = 3;   // Allowed
            }

            {
            let x = 4;    // Allowed
            }

    *** Let Hoisting ***
        Variables defined with var are hoisted to the top and can be initialized at any time.
        Meaning: You can use the variable before it is declared:

        Example:
            This is OK:
                carName = "Volvo";
                var carName;

        If you want to learn more about hoisting, study the chapter JavaScript Hoisting.
        Variables defined with let are also hoisted to the top of the block, but not initialized.

        Meaning: Using a let variable before it is declared will result in a ReferenceError:

        Example:
            carName = "Saab";
            let carName = "Volvo";          -> gives reference error

    *** Exercises ***
        1. What is a correct use of the let keyword?       -> let x = 5;
        2. True or False: Variables created with the let keyword can never change their value. -> False
        3. True or False: With the let keyword, you can declare variables with the same name in the same block. -> F

    *** JavaScript Const ***
        The const keyword was introduced in ES6 (2015)
        
        Variables defined with const cannot be Redeclared
        Variables defined with const cannot be Reassigned
        Variables defined with const have Block Scope

    *** Cannot be Reassigned ***
        A variable defined with the const keyword cannot be reassigned:

        Example:
            const PI = 3.141592653589793;
            PI = 3.14;      // This will give an error
            PI = PI + 10;   // This will also give an error

    *** Must be Assigned: ***
        JavaScript const variables must be assigned a value when they are declared:

        Correct:
            const PI = 3.14159265359;
            
        Incorrect:
            const PI;
            PI = 3.14159265359;

    *** When to use JavaScript const? ***
        Always declare a variable with const when you know that the value should not be changed.

        Use const when you declare:
            A new Array
            A new Object
            A new Function
            A new RegExp

    *** Constant Objects and Arrays ***
        The keyword const is a little misleading.
        It does not define a constant value. It defines a constant reference to a value.

        Because of this you can NOT:
            Reassign a constant value
            Reassign a constant array
            Reassign a constant object
        
        But you CAN:
            Change the elements of constant array
            Change the properties of constant object

    *** Constant Arrays ***
        You can change the elements of a constant array:

        Example:
            // You can create a constant array:
            const cars = ["Saab", "Volvo", "BMW"];

            // You can change an element:
            cars[0] = "Toyota";

            // You can add an element:
            cars.push("Audi");

        But you can NOT reassign the array:
        
        Example:
            const cars = ["Saab", "Volvo", "BMW"];
            cars = ["Toyota", "Volvo", "Audi"];    // ERROR

    *** Constant Objects ***
        You can change the properties of a constant object:

        Example:
            // You can create a const object:
            const car = {type:"Fiat", model:"500", color:"white"};

            // You can change a property:
            car.color = "red";

            // You can add a property:
            car.owner = "Johnson";

        But you can NOT reassign the object:

        Example:
        const car = {type:"Fiat", model:"500", color:"white"};
        car = {type:"Volvo", model:"EX60", color:"red"};    // ERROR

    *** Difference Between var, let and const ***
    	        Scope	    Redeclare	    Reassign	    Hoisted	            Binds this
        var	    No	            Yes	            Yes	            Yes	                Yes
        let	    Yes	            No	            Yes	            No	                No
        const	Yes	            No	            No	            No	                No

    *** What is Good? ***
        let and const have block scope.
        let and const can not be redeclared.
        let and const must be declared before use.
        let and const does not bind to this.
        let and const are not hoisted.

    *** What is Not Good? ***
        var does not have to be declared.
        var is hoisted.
        var binds to this.

    *** Browser Support ***
        The let and const keywords are not supported in Internet Explorer 11 or earlier.

        The following table defines the first browser versions with full support:
        Chrome 49	    Edge 12	        Firefox 36	    Safari 11	    Opera 36
        Mar, 2016	    Jul, 2015	    Jan, 2015	    Sep, 2017	    Mar, 2016

    *** Block Scope ***
        Declaring a variable with const is similar to let when it comes to Block Scope.
        The x declared in the block, in this example, is not the same as the x declared outside the block:

        Example:
            const x = 10;
            // Here x is 10

            {
            const x = 2;
            // Here x is 2
            }

            // Here x is 10

        We can learn more about block scope in the chapter JavaScript Scope.

    *** Redeclaring ***
        Redeclaring a JavaScript var variable is allowed anywhere in a program:

        Example:
            var x = 2;     // Allowed
            var x = 3;     // Allowed
            x = 4;         // Allowed

        Redeclaring an existing var or let variable to const, in the same scope, is not allowed:

        Example:
            var x = 2;     // Allowed
            const x = 2;   // Not allowed

            {
            let x = 2;     // Allowed
            const x = 2;   // Not allowed
            }

            {
            const x = 2;   // Allowed
            const x = 2;   // Not allowed
            }

        Reassigning an existing const variable, in the same scope, is not allowed:

        Example:
            const x = 2;     // Allowed
            x = 2;           // Not allowed
            var x = 2;       // Not allowed
            let x = 2;       // Not allowed
            const x = 2;     // Not allowed

            {
            const x = 2;   // Allowed
            x = 2;         // Not allowed
            var x = 2;     // Not allowed
            let x = 2;     // Not allowed
            const x = 2;   // Not allowed

        Redeclaring a variable with const, in another scope, or in another block, is allowed:

        Example:
            const x = 2;       // Allowed

            {
            const x = 3;   // Allowed
            }

            {
            const x = 4;   // Allowed
            }

    *** Hoisting ***
        Variables defined with var are hoisted to the top and can be initialized at any time.
        Meaning: You can use the variable before it is declared:

        Example
        This is OK:
            carName = "Volvo";
            var carName;

        If you want to learn more about hoisting, study the chapter JavaScript Hoisting.

        Variables defined with const are also hoisted to the top, but not initialized.
        Meaning: Using a const variable before it is declared will result in a ReferenceError:

        Example:
            alert (carName);                    -> gives reference error
            const carName = "Volvo";

    *** Some Notes ***
        Use const or let for variables in new Coding, old Coding use Var
        Do not use VAR because of Issue in block scope and function scope.
        If variable is declared with let and const without assigning any value, then its value is undefined.
    
    *** Exercises ***
        1. True or False: Variables created with the const keyword can never change their value.      -> T
        2. What is a correct use of the const keyword?         -> const x = 5;
        3. True or False: If you create an Array with the const keyword, you cannot change the item values. -> F






}
















*/