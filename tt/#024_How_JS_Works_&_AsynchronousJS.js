/*
    12:31

    ***** How JS Works and Asynchronous JS *****
    01. Hoisting in JS
    02. Scope Chain
    03. Lexical Scoping in JS
    04. Use Strict Mode
    05. This Keyboard
    06. Closures in JS
    07. What is Asynchronous Javascript Programming?
    08. What is Event Loop?

    01. Hoisting in JS:
        We have a creation phase and execution phase.
        Hoisting in JS is a mechanism where variables and functions declarations are moved to the top of their scope
        before the code execute.

        For Example:
            console.lgo(myName);    -> undefined
            var myName;
            myName = "Mandal";

        How it will be in output during the creation phase?
            var myName = undefined;
            console.log(myName);
            myName = "Mandal";

        In ES2015 (ES6), hoisting is avoided by using the let/const keyword istead of var.
        The other difference is that variables declared with let are local to the surrounding block,
        not the entire function.

        Using let or const, variables should be initialized before using.
    
    02. Scope Chain:
        
        What is scope chain and lexical scoping in JS?
        The scope chain is used to resolve the value of variable names in JS.
        Scope chain in JS is lexically defined which means that we can see what the scope chain will be by looking
        at the code.
        At the top, we have the Global Scope, which is the window object in the browser.
        Lexical Scoping means Now, the inner function can get access to their parent functions variables but
        the vice-versa is not true.

        Example:

        let a = "Hello";    -> Global Scope

        const first = () => {
            let b = "How are you?"

            const second = () => {
                let c = "Hi, I am fine";
                console.log(a + b + c);
            }
            second();
            console.log(a+b+c); -> c cannot be used here
        }
        first();

        Explain Scope and Scope Chain in JavaScript
        Learn Tomorrow
        https://www.geeksforgeeks.org/explain-scope-and-scope-chain-in-javascript/

    03. Closures in JS:
        A closure is the combination of a function bundled together(enclosed) with references to
        its surrounding state (the lexical environment).
        In other words, a closure gives you access to an outer functions scope from an inner function.
        In Javascript, closures are created every time a function is created at function creation time.

        For Example:
        It is same like lexical scoping

        const outerFunc = (a) => {
            let b = 10;
            const innerFunc = () => {
                let sum = a + b;
                console.log(`The sum of the two number is ${sum}`);
            }
            return innerFunc;
            let checkClosure = outerFunc(5);
            console.log(checkClosure);
        }

        InnerFunction can access data of outerfunction because of closures. 
        Datas are stored in closures and accessed from there.

    
    Interview Question:
        Differentiate between synchronous and asynchronous javascript?

    Synchronous Javascript Program:
        First work will complete then second and then the third one
    
    const func2 = () => {
        console.log("Function 2 is called");
    }

    const func1 = () => {
        console.log("Function 1 is called");
        func2();
        console.log("Function 1 is called again");  
    }

    func1();

    Asynchronous Javascript Program:
        All the works go one by one

    const func2 = () => {
        setTimeout(() => console.log("Function 2 is called"), 2000);
    };

    const func1 = () => {
        console.log("Function 1 is called");
        func2();                                    -> will be executed after 2 second
        console.log("Function 1 is called again"); -> This will be called immediately doesnot wait for func2 to complete
    };

    func1();

*/