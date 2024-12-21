/*
    11:45    
    1. Rest/Spread Properties: was introduced for objects, previously was introduced only for array
        Spread syntax can be used when all elements from an object or array need to be included in a new array or 
        object, or should be applied one-by-one in a function call's arguments list. 
        There are three distinct places that accept the spread syntax:

        1. Function arguments list (myFunction(a, ...iterableObj, b))
        2. Array literals ([1, ...iterableObj, '4', 'five', 6])
        3. Object literals ({ ...obj, key: 'value' })
        
        const myBioData = {
            name: 'Ajit',
            age: 26
        }

        // const myNewBioData = {
        //     name: 'Ajit',
        //     age: 26,
        //     education: 'CS'
        // }

        console.log(myBioData);
        // console.log(myNewBioData);

        // Spread Operator copies all the data of the previous array into new array.
        const myNewBioData = {...myBioData, education: 'CS Major'};
        console.log(myNewBioData);

        The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, 
        providing a way to represent variadic functions in JavaScript.
        
        Lets see an example:
        
        function sum(...theArgs) {
            let total = 0;
            for (const arg of theArgs) {
            total += arg;
            }
            return total;
        }

        console.log(sum(1, 2, 3));
        // Expected output: 6

        console.log(sum(1, 2, 3, 4));
        // Expected output: 10

        Rest Operator Example By My Side:
        
        const mulNumbers = function(...theArgs){
            let mul = 1;
            for (elements of theArgs){
            mul *= elements;
            }
            return mul;
        }
        console.log(mulNumbers(1, 2, 3));

    Practice Yourself
    2. Asynchronous Function
    3. Promise Prototype.finally()
    4. Regular Expression Improvements
*/