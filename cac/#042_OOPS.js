/*
    JS is prototype-based language.
    
    *** JS and Classess ***

    *** OOPS ***

        Objects: 
            Collection of properties and methods
            Example: toLowerCase

    *** Why to use OOPS? ***

    *** Parts of OOPS ***
        Object Literal: Literally {}
        Constructor Functions
        Prototypes
        Classes
        Instances (new, this)
        
        Constructor Function

    *** 4 Pillars ***
        Abstraction -> Hides the internal structure e.g. fetch() how it internally work we dont know
        Encapsulation -> Wrap ups the data
        Inheritance
        Polymorphism -> poly means many and morphism means forms
*/

// Lets make an object i.e. this is called object literal
const user = {
  userName: "Ajit",
  logInCount: 5,
  signedIn: true,
  getUserDetails: function () {
    // console.log("Got User Details from Database");
    // console.log(`Username: ${this.userName}`);
    console.log(this);
  },
};

// console.log(user.userName);
console.log(user.getUserDetails());
console.log(this);
// Above line gives {} because in global execution context there is nothing right now
// But if console.log(this) is run in the browser console then it gives Global Execution Context, check yourself

// If user2 should be made then it contains different values in such case we need to make constructor

// Constructor Function
// new keyword is a constructor function, it make multiple instance for same object
const promiseOne = new Promise()
const date = new Date()

function User(username, logInCount, isLoggedIn){
    this.username = username;
    this.logInCount = logInCount;
    this.isLoggedIn = isLoggedIn;

    // methods can also be used here
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    // if return this is removed then also the value will be returned here
    return this
}

// const userOne = User("Ajit", 10, true);
// const userTwo = User("Mandal", 15, false);
// Here the value of userOne will be override by userTwo
// console.log(userOne);

// Inorder to solve above problem we do the following:
const userOne = new User("Ajit", 10, true);
// above and below code makes new copy/instance of user
const userTwo = new User("Mandal", 15, false);
// Here the value of userOne will be override by userTwo
console.log(userOne);


// const userOne = new User("Ajit", 20, true);
// console.log(userOne.constructor);
// [Function: User]

// 'New' Keyword: Working mechanish is given below:
// Step 1: Whenever we use new keyword, it creates an empty object which is called instance
// Step 2: Contructor function is called through new keyword and all arguments are packed there
// Step 3: All the arguments are injected into 'this' keyword
// Step 4: We get the result/data


// instanceof
// The instanceof operator tests to see if the prototype property of a constructor appears anywhere in the 
// prototype chain of an object. The return value is a boolean value.

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  const auto = new Car('Honda', 'Accord', 1998);
  
  console.log(auto instanceof Car);
  // Expected output: true
  
  console.log(auto instanceof Object);
  // Expected output: true

