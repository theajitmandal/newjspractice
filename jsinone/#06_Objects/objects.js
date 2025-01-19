/*
    *** JavaScript Objects ***
    
    *** Real Life Objects ***
        In real life, objects are things like: houses, cars, people, animals, or any other subjects.

        Here is a car object example:

        Car Object	         Properties	                        Methods
	
                                car.name = Fiat                    car.start()
        Imagine a Car           car.model = 500                    car.brake()
            Here                car.weight = 850kg                 car.stop()
                                car.color = white	

    *** Object Properties ***
        A real life car has properties like weight and color:
        car.name = Fiat, car.model = 500, car.weight = 850kg, car.color = white.
        Car objects have the same properties, but the values differ from car to car.

    *** Object Methods ***
        A real life car has methods like start and stop:
        car.start(), car.drive(), car.brake(), car.stop().
        Car objects have the same methods, but the methods are performed at different times.

    *** JavaScript Variables ***
        JavaScript variables are containers for data values.
        This code assigns a simple value (Fiat) to a variable named car:

        Example:
            let car = "Fiat";

    *** JavaScript Objects ***
        Objects are variables too. But objects can contain many values.
        This code assigns many values (Fiat, 500, white) to an object named car:

        Example:
            const car = {type:"Fiat", model:"500", color:"white"};

    Note: It is a common practice to declare objects with the const keyword.

    Learn more about using const with objects in the chapter: JS Const.

    *** JavaScript Object Definition ***
        How to Define a JavaScript Object
            Using an Object Literal
            Using the new Keyword
            Using an Object Constructor

    *** JavaScript Object Literal ***
        An object literal is a list of name:value pairs inside curly braces {}.
            {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}
        object literals are also called object initializers.

    Note: name:value pairs are also called key:value pairs.

    *** Creating a JavaScript Object ***
        These examples create a JavaScript object with 4 properties:

        Examples:
            // Create an Object
            const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

        Spaces and line breaks are not important. An object initializer can span multiple lines:

            // Create an Object
            const person = {
                firstName: "John",
                lastName: "Doe",
                age: 50,
                eyeColor: "blue"
            };

        This example creates an empty JavaScript object, and then adds 4 properties:

            // Create an Object
            const person = {};

            // Add Properties
            person.firstName = "John";
            person.lastName = "Doe";
            person.age = 50;
            person.eyeColor = "blue";

    *** Using the new Keyword ***
        This example create a new JavaScript object using new Object(), and then adds 4 properties:

        Example:
            // Create an Object
            const person = new Object();

            // Add Properties
            person.firstName = "John";
            person.lastName = "Doe";
            person.age = 50;
            person.eyeColor = "blue";

    Note:
        The examples above do exactly the same.
        But, there is no need to use new Object().
        For readability, simplicity and execution speed, use the object literal method.

    *** Object Properties ***
        The named values, in JavaScript objects, are called properties.

                Property	        Value
            firstName	        John
            lastName	        Doe
            age	                50
            eyeColor	        blue

        Objects written as name value pairs are similar to:

            Associative arrays in PHP
            Dictionaries in Python
            Hash tables in C
            Hash maps in Java
            Hashes in Ruby and Perl

    *** Accessing Object Properties ***
        You can access object properties in two ways:

        objectName.propertyName
        objectName["propertyName"]

        Examples:
            person.lastName;
            person["lastName"];

    *** JavaScript Object Methods ***
        Methods are actions that can be performed on objects.
        Methods are function definitions stored as property values.

                Property	        Property Value
            firstName	        John
            lastName	        Doe
            age	                50
            eyeColor	        blue
            fullName	        function() {return this.firstName + " " + this.lastName;}

        Example:
            const person = {
                firstName: "John",
                lastName : "Doe",
                id       : 5566,
                fullName : function() {
                    return this.firstName + " " + this.lastName;
                }
            };

        In the example above, this refers to the person object:
        this.firstName means the firstName property of person.
        this.lastName means the lastName property of person.

    *** In JavaScript, Objects are King. ***
        If you Understand Objects, you Understand JavaScript.
        Objects are containers for Properties and Methods.

        Properties are named Values.
        Methods are Functions stored as Properties.

        Properties can be primitive values, functions, or even other objects.

        In JavaScript, almost "everything" is an object.

            Objects are objects
            Maths are objects
            Functions are objects
            Dates are objects
            Arrays are objects
            Maps are objects
            Sets are objects

        All JavaScript values, except primitives, are objects.

    *** JavaScript Primitives ***
        A primitive value is a value that has no properties or methods.

        3.14 is a primitive value
        A primitive data type is data that has a primitive value.

        JavaScript defines 7 types of primitive data types:
            string
            number
            boolean
            null
            undefined
            symbol
            bigint

    *** Immutable ***
        Primitive values are immutable (they are hardcoded and cannot be changed).

        if x = 3.14, you can change the value of x, but you cannot change the value of 3.14.

                Value	        Type	                Comment
            "Hello"	        string	                        "Hello" is always "Hello"
            3.14	        number	                        3.14 is always 3.14
            true	        boolean	                        true is always true
            false	        boolean	                        false is always false
            null	        null (object)	                null is always null
            undefined	    undefined	                    undefined is always undefined

    *** JavaScript Objects are Mutable ***
        Objects are mutable: They are addressed by reference, not by value.

        If person is an object, the following statement will not create a copy of person:
            const x = person;
        The object x is not a copy of person. The object x is person.

        The object x and the object person share the same memory address.
        Any changes to x will also change person:

        Example:
            //Create an Object
            const person = {
                firstName:"John",
                lastName:"Doe",
                age:50, eyeColor:"blue"
            }

            // Create a copy
            const x = person;

            // Change Age in both
            x.age = 10;

    Note: We will learn a lot more about objects in the following chapters.

    *** Exercises ***
    1. Consider the following object:
        const car = {
            brand: 'Volvo',
            model: 'EX90',
            drive: function() {
                return true;
            }
        };
        How many properties do the object have?                     -> 2

    2. Alert "John" by extracting information from the person object.
            const person = {
                firstName: "John",
                lastName: "Doe"
            };

            alert(___________);                                     -> alert(person.firstName)

    3. Add the following property and value to the person object: country: Norway.

            const person = {
                firstName: "John",
                lastName: "Doe"
                _______ : _____                                     -> country: "Norway"
            };

    4. Consider the following object:
            const person = {
                name: 'John', age: 50
            };
        Insert the missing parts to alert 'John is 50'.
        alert(_______.______ + '_______' + person.________);

        -> alert(person.name + ' is ' + person.age);

    *** JavaScript Object Properties ***
        An Object is an Unordered Collection of Properties.
        Properties are the most important part of JavaScript objects.
        Properties can be changed, added, deleted, and some are read only.

    *** Accessing JavaScript Properties ***
        The syntax for accessing the property of an object is:

        // objectName.property
        let age = person.age;
            or

        //objectName["property"]
        let age = person["age"];
            or

        //objectName[expression]
        let age = person[x];

        Examples:
            person.firstname + " is " + person.age + " years old.";

            person["firstname"] + " is " + person["age"] + " years old.";

            let x = "firstname";
            let y = "age";
            person[x] + " is " + person[y] + " years old.";

    *** Adding New Properties ***
        You can add new properties to an existing object by simply giving it a value:

        Example:
            person.nationality = "English";

    *** Deleting Properties ***
        The delete keyword deletes a property from an object:

        Example:
            const person = {
                firstName: "John",
                lastName: "Doe",
                age: 50,
                eyeColor: "blue"
            };

            delete person.age;

        OR, delete person["age"];

        Example
            const person = {
                firstName: "John",
                lastName: "Doe",
                age: 50,
                eyeColor: "blue"
            };

            delete person["age"];

    Note:   The delete keyword deletes both the value of the property and the property itself.
            After deletion, the property cannot be used before it is added back again.

    *** Nested Objects ***
        Property values in an object can be other objects:

        Example:
            myObj = {
                name:"John",
                age:30,
                myCars: {
                    car1:"Ford",
                    car2:"BMW",
                    car3:"Fiat"
                }
            }
        You can access nested objects using the dot notation or the bracket notation:

        Examples:
            myObj.myCars.car2;

            myObj.myCars["car2"];

            myObj["myCars"]["car2"];

            let p1 = "myCars";
            let p2 = "car2";
            myObj[p1][p2];

    *** Complete Object Reference ***
        For a complete reference, go to our:

            Complete JavaScript Object Reference.

        The reference contains descriptions and examples of all Object Properties and Methods.

    *** Exercises ***

        1. Consider the following object:
            const car = {
                brand : 'Volvo',
                model : 'EX90'
            };
            What is NOT a correct syntax to alert 'Volvo'?
                alert(car[brand])
                alert(car.brand)
                alert(car['brand'])
            
                -> alert(car[brand])
        2. True or False: You are allowed to insert new properties to existing objects.     -> True
        3. What is a correct syntax to delete the property model from an object named car?
                del car.model
                del model from car
                delete car.model
                car.model = NULL

                -> delete car.model


*/