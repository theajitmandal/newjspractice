/*
    11:38

    ECMASCRIPT 2017/ES8

    1. String  Padding
    2. Object.values()
    3. Object.entries()
    4. Async_Await -> later in advanced JS concepts

    1. String  Padding
        Code The Following and see the output:
        let name = "Ajit".padStart(7);
        console.log(name);      -> gives 7 spaces before name starts

        let myAge = "26".padEnd(5);
        console.log(myAge);                                     -> gives 5 spaces at the end
        console.log(`My age is ${myAge} and my name is Ajit`);  -> run this way to see the result

    2. Object.values() and object.entries()
        Example 1:
        const person = {
            name: 'Ajit',
            age: 26
        }
        console.log(Object.values(person));     -> gives [ 'Ajit', 26 ]
                                                -> Object.values gives only values of the object except keys in array 
                                                   form
        console.log(Object.entries(person));    -> gives [ [ 'name', 'Ajit' ], [ 'age', 26 ] ]
                                                -> Object.entries converts object to arrays

        Example 2:

        const person = {
            name: 'Ajit',
            age: 26
        }

        const myPersonArray = Object.entries(person);   -> converts Object into Arrays
        console.log(myPersonArray[0]);                  -> gives [ 'name', 'Ajit' ]
        console.log(myPersonArray[0][0]);               -> gives name
        console.log(myPersonArray[0][1]);               -> gives Ajit
        console.log(myPersonArray[1]);                  -> gives [ 'age', 26 ]
        console.log(myPersonArray[1][0]);               -> gives age
        console.log(myPersonArray[1][1]);               -> gives 26
*/