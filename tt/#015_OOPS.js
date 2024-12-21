/*
    10:47
    Object Literal (Object): Object Literal(or simply Object) is simply key:value pair data structure.
    Storing variables and functions together in one container, we can refer this as an object.

    How to create an object?
    1st Way:
        let bioData = {
            myName  : "Ajit Mandal",
            myAge   : 27,
            getData : function(){
                console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
            }
        }
        console.log(bioData.myName);
        console.log(bioData.getData());

    2nd way:
    No need to write the functions as well after ES6
    THe above line no 11 to 13 can be minimized as:

    What if we want object as a value inside on Object?
    
    let bioData = {
        myName: {
        firstName: "Ajit",
        secondName: "Mandal"
        },
        myage: 26
    }
    console.log(bioData.myName.firstName);
    
    What is 'this' keyword?
    The definition of "this" object is that it contain the current context. The this object can
    have different values depending on where it is placed.

    Example 1:
    console.log(this) -> gives {}   -> It refers to the current context and that is window global object

    Example 2:
    function myName(){
        console.log(this);      -> Still Its current Context is Window Global Object
    }
    myName();

    Example 3: Confusion
        let myNames = "Ajit";
function myName(){    
    console.log(this.myNames);
}
myName();

    Example 4: 
    const obj = {
    myAge : 26,
    myName(){
        console.log(this);          -> gives { myAge: 26, myName: [Function: myName] }     ~ (here, current context 
                                        changes from window to the current object only if used inside object                                        
        console.log(this.myAge);    ->  gives 26
        }
    }
    obj.myName();

    Example 5:
    'This' keyword will not work with an arrow function because fat arrow function represents window object.
    const obj = {
    myAge : 26,
    myName : () => {
        console.log(this);        
        }
    }
    obj.myName();           -> gives {} i.e. Window Global Object








*/