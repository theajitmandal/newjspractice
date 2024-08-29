// Stack (Primitive), Heap(Non-Primitive)

// In Stack, we get copy of that data in another variable whereas in Heap we get reference of original value

// Example: 

    let myName = "Ajit";
    let anotherName = myName; //gets copy of myName and if another name is changed its copy will change

    anotherName = "Ajit Mandal"

    console.log(anotherName);
    console.log(myName);
    // console.log(hisName);
    // console.log(ourName);

    let userOne = {
        email: "user@gmail.com",
        uid: "uid@uid.com"
    }

    let userTwo = userOne;  //gets reference of userOne directly, if userTwo is changed both will changed and vice-versa

    userTwo.email = "ajituser@gmail.com"; //changes value in both userOne and userTwo

    console.log(userOne);
    console.log(userTwo);