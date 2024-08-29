/***** Javascipt Execution Context *****/

/*
    When any code file is given to JS then first Global Execution Context is prepared and whenever Global Execution context
    is made this is referred to a variable called 'this'. 

    {} -> Global EC -> this

    Global Execution Context
    Function Execution Context

    In some documentation like Mongoose there is another execution context named:
    Eval Execution Context

    Javascript runs code in two phases:
    01. Memory Creation Phase or Creation Phase
    02. Execution Phase
*/

// Lets see a code:

    let val1 = 20;
    let val2 = 10;
    function addNumbers(num1, num2) {
        let sum = num1 + num2;
        return sum;
    }
    let result1 = addNumbers(val1, val2);
    let result2 = addNumbers(20, 30);

/***** How above code runs *****/
/*
    Step 1: First Global Execution is made and it is referred to 'this' variable
    Step 2: Memory Phase: All variables are stored in the memory
            val1 -> undefined
            val2 -> undefined
            addNumbers -> function definition means everythins from(num1 to } is saved inside addNumbers
            result1 -> undefined
            result2 -> undefined
        -> These are the first cycle
    Step 3: Execution Phase: 
            val1 <- 20
            val2 <- 10

            From 3rd line when function starts to function ends doesnot execute anything because 
            its definition is already coded

            When addNumbers function is encountered by result1 then new execution context is created
            Following things are made:
            
            New Variable Environment
            and Execution thread
            
            Note: Whenever functions are made then this contexts are made:
            
            Again, Memory Phase and Execution Phase are performed:

            01. Memory Phase:
                val1 -> undefined
                val2 -> undefined
                total -> undefined

            02. Execution Phase
                num1 -> 20
                num2 -> 10
                total -> 30

                total value will be returned to the Global Execution Context
            
            Most Important: New Execution Context is deleted after thise exuction phase

            Again, Step 3 Execution Phase is continued

            result1 = 15
            Again when result2 encounters the addNumber function again new Execution Phase is created
            
            Following things are made:
            
            New Variable Environment
            and Execution thread

            Again, Memory Phase and Execution Phase are performed:
            Same steps are repeated and value of resul2 = 50 is processed

            result1 <-  
*/

/***** Call Stack *****/
/*
    |               |
    |               |
         One()                   After Execution One() is removed
    |   Global EC   |
    |_______________|
*/

/*
    |    Three()     |
    |    Two()       |
         One()                   If One() calls Two() and Two() calls Three(): LIFO concept is followed
    |   Global EC   |
    |_______________|
*/
// lets learn throught the example below: (Run in browser console and check)
// Example 1:

    function One(){
        console.log("One")
    }
    function Two(){
        console.log("Two")
    }
    function Three(){
        console.log("Three")
    }
    One()
    Two()
    Three()

// Example 2:

    function One(){
        console.log("One")
        Two()
    }
    function Two(){
        console.log("Two")
        Three()
    }
    function Three(){
        console.log("Three")
    }
    One()
    Two()
    Three()


