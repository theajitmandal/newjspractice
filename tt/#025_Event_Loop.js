/*
    13:06

    ***** Event Loop *****
        
        Execution Stack                 Web API
                                            settimeout()
        _______________                     dom
        _______________                     AJAX/API Calls
        _______________
                                            Message Queue
    
        Global Execution Context
*/

/*
    Interview Question: What is the output of sum (5)(3)(8)?
    The answer will be discussed in Function Currying?
*/


/*
    13:15

    *** Function Currying ***
        Currying is a technique of evaluation function with multiple arguments into sequence of function with the 
        single argument.

        In other words, when a function, instead of taking all the arguments at one time, takes the first one
        and returns a new function that takes the second one and returns a new function which takes the third one,
        and so forth, until all the arguments have been fulfilled.

    Example:
        function sum(num1){
            console.log(num1);
            return function(num2){
                console.log(num1, num2);
                return function(num3){
                    console.log(num1, num2, num3);      
                    console.log(num1 + num2 + num3);      
                }    
            }  
        }

        sum(5)(3)(8);               -> Ans will be 16

    OR,
        In One Line:

        const sum = (num1) => (num2) => (num3) => console.log(num1 + num2 + num3);
        sum(2)(4)(8);

    13:24
    
    *** Call Back Hell ***

    Callback hell refers to the situation in JavaScript where multiple nested callbacks create complex, 
    deeply indented code, often called the “pyramid of doom.” This structure makes the code difficult to read, 
    debug, and maintain, resulting in poor code quality and scalability issues.

    Inorder to avoid CallBack Hell, we use Promises.

    Example: In the below example the callback hell by nesting multiple setTimeout functions to animate words 
    sequentially. Each setTimeout depends on the previous one, leading to deeply nested, hard-to-maintain code.

    Output: We can notice that the animateAll function takes a pyramid structure, 
    thereby making it difficult to read. Run the following code and see the output.

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" 
            content="IE=edge">
        <meta name="viewport" 
            content="width=device-width, initial-scale=1.0">

        <title>Callback Hell</title>
        
        <style>
            * {
                padding: none;
                margin: none;
                box-sizing: border-box;
            }

            .word {
                color: #308d46;
                font-size: 4rem;
                transition: all .5s ease-in;
                margin: 0 5px;
                transform: translateY(3.8rem);
                opacity: 0;
            }

            body {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 95vw;
                height: 95vh;
            }

            .container {
                overflow: hidden;
                display: flex;
                flex-direction: row;
            }

            .animate {
                opacity: 1;
                transform: translateY(0);
            }
        </style>
    </head>

    <body>
        <div class="container">
            <h2 class="word">Geeks</h2>
            <h2 class="word">For</h2>
            <h2 class="word">Geeks</h2>
        </div>
    </body>
    <script>
        let words = document.querySelectorAll(".word");

        const animateAll = (animate) => {
            setTimeout(() => {
                animate(words[0]);
                setTimeout(() => {
                    animate(words[1]);
                    setTimeout(() => {
                        animate(words[2]);
                    }, 1000)
                }, 1000)
            }, 1000)
        }

        const animate = (word) => {
            word.classList.add("animate");
        }

        animateAll(animate);
    </script>
    </html>


    Conclusion:
    In conclusion, while callbacks are essential for asynchronous tasks in JavaScript, 
    excessive nesting leads to callback hell, making code difficult to read, debug, and maintain,
    highlighting the need for better alternatives like Promises or async/await.
*/