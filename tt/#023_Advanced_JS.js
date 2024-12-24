/*
    12:07

    ***** Advanced Javascript *****

    1. Event Propagration (Event Bubbling and Event Capturing)
    2. Higher Order Function
    3. Callback Function
    4. Function Currying (We will see after Async JS)
    5. CallBack Hell
    6. AJAX Call Using XMLHttprequest
    7. Bonus Section JSON
    8. Fetch API
    9. Promises
    10. Async Await
    11. Error Handling in JS

    1. 1. Event Propagration (Event Bubbling and Event Capturing): 
        The event propagation mode determines in which order the elements receive the event.
        The event propagation:
            window
            document
            <html>
            <body>
            <div>
            <button>
            Target Phase

        Top to bottom: Capture Phase
        Bottom to TOp: Bubble Phase

        Event Bubbling and Capturing are two wasy of event propagation in the HTML DOM API, where an event occurs
        in an element inside another element and both elements have registered a handle for that event.

        The event propagation mode determines in which order the elements receive the event.

        By default it is bubbling phase.

        Propagation is categorized into 3 main types:
            The Capture Phase               The Target Phase                The Bubble Phase
        Going from the window to         It is the target phase.     From the event target,
        the event target phase.                                      Parent back to the window.

        Event Bubbling: With the event bubbling the event is first captured and handled by the innermost 
            element and then propagated to outer elements.
        
        Event Capturing: With the event capturing, the event is first captured by the outermost element and propagated
        to the inner elements.

        Capturing: is also called "trickling" which helps to remember the propagation order.

        By default is the event bubbling phase.

        event.stopPropagation(): to stop propagation 

        Third argument decides bubbling or capturing.
        By default is false, so bubbling phase. But if third argument is true, then capturing phase.

    2. Higher Order Function: 
        Function which takes another function as an arguments is called HOF

    3. Callback Function:
        Function which get passes as an argument to another function is called CBF. A callback function is 
        a function that is passed as an argument to another function, to be "called back" at a later time.

        Lets make a calculator:

        const add = (a, b) => {
            return a + b;
        }

        const sub = (a, b) => {
            return a - b;
        }

        const mul = (a, b) => {
            return a * b;
        }

        console.log(add(2, 3));
        console.log(sub(4, 3));
        console.log(mul(5, 6));

        Here, I have to do hardcode for each operation which is bad. We will use callback and 
        HOF to make it simple to use.

                const add = (a, b) => {
            return a + b;
        }

        const sub = (a, b) => {
            return a - b;
        }

        const mul = (a, b) => {
            return a * b;
        }

        const calculator = (num1, num2, operator) => {
            return operator(num1, num2);
        }

        console.log(calculator(2, 3, mul)); -> gives 6

        In the above example, calculator is HOF which accepts 3 arguments, the third argument `operator` being
        the callback. Here, Calculator is called HOF because it takes another function as an argument.

        And add, sub and mul are called callback function because they are passed as an argument to another function.

        Interview Questions:
        
        Difference between CBF and HOF:

    1. Callback Function
        A callback is a function that is passed as an argument to another function and is executed at a 
        certain point in that function. It's usually called (or "called back") once a specific task is completed.

        Example of a Callback:
                function greet(name) {
                    console.log("Hello, " + name);
                }

                function processUserInput(callback) {
                    const name = "Bhupendra";
                    callback(name);
                }

                processUserInput(greet);

        Here, greet is a callback function.
        processUserInput accepts a function (callback) as an argument and calls it later.
        The key point is that callbacks are passed to other functions to be executed later, 
        usually after some task completes (e.g., fetching data, handling user input).

    2. Higher-Order Function

        A higher-order function is any function that does one of the following:

            Takes one or more functions as arguments.
            Returns a function.

        Example of a Higher-Order Function:
            function higherOrder(fn) {
                return function() {
                    console.log("This is from higher-order function");
                    fn();
                };
            }

            function sayHello() {
                console.log("Hello, World!");
            }

            const resultFunction = higherOrder(sayHello);
            resultFunction();

        In this example, higherOrder is a higher-order function because it takes another function (fn) 
        as a parameter and returns a new function.
        Higher-order functions can modify or wrap the behavior of the function they take or return.

    Key Differences:
        Callback functions are typically used to allow a function to call another function when 
        a task completes (e.g., asynchronous tasks, event handling).
        
        Higher-order functions are more general and either take functions as arguments or return functions. 
        They can modify, compose, or chain behaviors.
    
    In short:
        Callback is a function you pass to be called later.
        Higher-order function is a function that takes or returns other functions.

    Question:
    Can both callback functions and higher-order functions appear in the same code?

    Yes, both callback functions and higher-order functions can appear in the same code, and they often do. In fact, in many cases, a higher-order function will use a callback as part of its logic.
    
    Example of Both in the Same Code:
    
        // Higher-order function that takes a callback
        function higherOrder(callback) {
            console.log("Inside higher-order function");
            // Executes the callback
            callback();
        }

        // Callback function
        function greet() {
            console.log("Hello, Bhupendra!");
        }

        // Passing the callback 'greet' to the higher-order function
        higherOrder(greet);

        higherOrder is the higher-order function because it takes a function (callback) as an argument.
        greet is the callback function that gets passed to the higher-order function.
        Both concepts work together in the same code:
        The higher-order function receives a function (greet).
        The callback function (greet) is executed inside the higher-order function (higherOrder).

    More Practical Example: Asynchronous Code
        Let’s take an example where you use a callback for handling an asynchronous task like fetching data:
        // Higher-order function (asynchronous)
        function fetchData(callback) {
            setTimeout(() => {
            console.log("Data fetched from server");
            callback("Server Data");
            }, 1000);
        }

        // Callback function
        function handleData(data) {
            console.log("Data received:", data);
        }

        // Calling the higher-order function with the callback
        fetchData(handleData);

        In this example:
        fetchData is the higher-order function (it takes a callback as an argument).
        handleData is the callback function, which gets executed once the data fetching is complete.

    Conclusion:
        Yes, they can and often do appear in the same code.

        The higher-order function controls the flow or logic.
        The callback function is used to handle specific actions (like processing fetched data, handling user input, 
        etc.).

    Question:
        Can we say that the whole function is an HOF and arguments are callbacks?

        Yes, that's a good way to think about it in many cases!

    Conceptualization:
        The whole function that takes other functions as arguments (or returns a function) is called a 
        higher-order function (HOF).
        The functions that are passed as arguments to this HOF are callback functions.

    Visual Breakdown:
        Higher-order function (HOF): The main function that either accepts functions as parameters or 
        returns a function.
        Callback: The function passed as an argument to be executed later (within the HOF).

        Example:

        // The whole function is the HOF
        function higherOrder(callback) {
            console.log("Starting higher-order function");

            // The argument is the callback, executed here
            callback();
        }

        // This is the callback function
        function greet() {
            console.log("Hello from the callback function!");
        }

        // Passing the 'greet' function as an argument (callback) to the HOF
        higherOrder(greet);

        In this example:
        higherOrder is the higher-order function (HOF).
        greet is the callback passed as an argument.
        
        Simplified Explanation:
        The HOF is like the main control center, orchestrating the logic.
        The callback is a specific function that the HOF can call when needed.

        Important: Not all functions passed as arguments are called callbacks. 
                   Callbacks are usually associated with a task that is meant to happen later 
                   (like asynchronous tasks or events). However, conceptually, you can view all functions passed into HOFs as callbacks in simpler contexts like the one above.

        So, your statement:
        "Whole function is HOF, and arguments are callbacks" is mostly correct, especially in practical JavaScript 
        scenarios.
    




        







    


    



*/