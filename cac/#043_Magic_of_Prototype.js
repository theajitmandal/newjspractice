/*
    The default behaviour of JS is prototypal behaviour.
    If data is not found it access to parents, grandparents and goes to above layer till null value is not found.

    This keyowrd is not used in the arrow function because of the prototype.

    This keyword, new keyword, classes, inheritance in js are all through the prototype.

    Prototypal Inheritance

        Function (Function is function also but can be behave as object)
        Array           ->          Object          ->  Null
        Strings         ->          Object          -> Null

    Everything in JS is Object.

    function multiplyBy5(num){
        return num*5;
    }

    multiplyBy5.power = 2;

    console.log(multiplyBy5(5));
    console.log(multiplyBy5.power);
    console.log(multiplyBy5.prototype); -> gives {} which sets a context

    function createUser(username, score){
        this.username = username;
        this.score = score;
    }

    createUser.prototype.increment = function(){
        // the one who calls
        this.score++;
    }

    createUser.prototype.printMe = function(){
        console.log(`score is ${this.score}`);    
    }

    // const ram = createUser("Ram", 20); -> This code doesnot work but below code works
    const ram = new createUser("Ram", 20);
    const shyam = new createUser("Shyam", 30);

    ram.printMe();
*/

/*
    *** New Keyword ***

    Here's what happens behind the scenes when the new keyword is used:

    A new object is created: The new keyword initiates the creation of a new Javascript object.

    A prototype is linked: The newly created object gets linked to the prototype property of the constructor
    function. This means that it has access to properties and methods defined on the constructor's prototype.

    The constructor is caleed: The constructor function is called with the specified arguments and this is bound to 
    the newly created object. If no explicit return value is specified from the constructor, Javascript assumes this,
    the newly created object, to be the intended return value.

    The newly object is returned: After the constructor function has been called, if it doesn't return a non-primitive
    value (object, array, function, etc.), the newly created object is returned.
*/

/*
    27:03
    
    *** Prototype Example ***

    let myName = "Ajit     ";

    // console.log(myName.length);
    // console.log(myName.trim().length);
    console.log(myName.truelength);
    // lets make truelength method by default (or in the prototype list)
    //solution is at the end

    let myHeroes = ["thor", "spiderman", "shaktiman"];

    let heroPower = {
        thor: "hammer",
        spiderman: "sling",

        getSpiderPower: function(){
            console.log(`Spidy power is ${this.spiderman}`);
        }
    }

    // inserting ajit method in the object so all objects, arrays can access it
        Object.prototype.ajit = function(){
            console.log(`Ajit is present in all objects`);
        }

    Array.prototype.heyAjit = function(){
        console.log(`Ajit says hello`);;
    }

    // heroPower.ajit()
    myHeroes.ajit();

    heroPower.heyAjit();        // This will not have access of heyAjit
    myHeroes.heyAjit();         // This will have access of heyAjit
*/

/*
    *** Inheritance ***

    const User = {
        name: "user",
        email: "ajit@google.ocm"
    }

    const Teacher = {
        makeVideo: true
    }

    const TeachingSupport = {
        isAvailable: false
    }

    const TASupport = {
        makeAssignment: 'JS Assignment',
        fullTime: true,
        __proto__: TeachingSupport // can access all the codes of TeachingSuppoort
    }

    Teacher.__proto__ = User;

    // modern syntax
        Object.setPrototypeOf(TeachingSupport, Teacher) //TeachingSupport access all properties of Teacher

*/


/*

    let myName = "Ajit     ";

    // console.log(myName.length);
    // console.log(myName.trim().length);
    console.log(myName.truelength);
    // lets make truelength method by default (or in the prototype list)

    let anotherUserName = "AJitMandal       ";

    String.prototype.trueLength = function(){
        console.log(this);
        console.log(this.name);
        console.log(`True length is : ${this.trim().length}`);     
    }

    anotherUserName.trueLength();
    "Ajit".trueLength();
    "HelloSir".trueLength();

*/