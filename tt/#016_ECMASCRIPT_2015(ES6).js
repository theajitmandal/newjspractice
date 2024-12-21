/*
    11:16

    ECMASCRIPT 2015/ES6:

    Destructuring: The destructuring assignment syntax is a Javascript Expression that makes it possible to unpack
    values from arrays, or properties from objects, into distinct variables.
    
    Array Destructuring:
    const myBioData = ['Ajit', 'Mandal', 26];

    let myFName = myBioData[0];
    let myLName = myBioData[1];
    let myAge = myBioData[2];

    console.log(myAge);

    Array Destructuring is done as below:
    let [myFName, myLName, myAge] = myBioData;
    console.log(myFName);
    console.log(myLName);
    console.log(myAge);    

    We can also add the values:
    let [myFName, myLName, myAge, myEducation="CS"] = myBioData;
    console.log(myBioData);
    console.log(myEducation);

    Object Destructuring:
    
    const myBioData = {
        myFName : 'Ajit',
        myLName : 'Mandal',
        myAge : 26
    }

    console.log(myBioData.myAge);

    Object Destructuring is done as below:
    const {myFName, myLName, myA, myEducation="CS"} = myBioData;
    console.log(myFName);
    console.log(myEducation);

    Object Properties:
    1. We can now use Dynamic Properties:
    let myName = 'Ajit';

    const bioData = {
        [myName] : 'Hello, How are you?',
        [20+6] : 'is my Age',
    }
    console.log(bioData);

    Output will be as below:
    { '26': 'is my Age', Ajit: 'Hello, How are you?' }

    2. No need to write key and value if both are same

    let myName = 'Ajit';
    let myAge = 26;

    const bioData = {
        myName: myName,
        myAge: myAge,
    }
        or, Below line is enough:

    const bioData = {myName, myAge};
    
    console.log(bioData.myName);    -> Ajit
    console.log(bioData.myAge);     -> 26


    Spread Operator: 
    Spread syntax can be used when all elements from an object or array need to be included in a new array or object, 
    or should be applied one-by-one in a function call's arguments list.

    const colors = ['red', 'blue', 'green'];
    const myColors = ['red', 'blue', 'green', 'yellow', 'purple'];

    Inorder to  add new Colors in first array i.e. colors, I have to use the second line method in array 'myColors'.
    Instead using spread operator, it can be done as follows:

    const myNewColors = [...colors, 'yellow', 'purple'];
    console.log(myNewColors);
*/