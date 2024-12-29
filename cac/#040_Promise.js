/*
    
*/

// fetch('https://something.com').then().catch().finally()

// Promise 1
// Before promises, libraries like Q or BlueBird were used
const promiseOne = new Promise(function (resolve, reject) {
  // Do async task
  // DB calls, cryptography, network calls
  setTimeout(function () {
    console.log("Async task is complete");
    // resolve();
    // below code just for practice
    // console.log('Async tasks is complete');
  }, 2000);
});

promiseOne.then(function () {
  console.log("Promise Consumed");
});

// Promise 2
// Above line codes can also be simplified as follows:
new Promise(function (resolve, reject) {
  // once below lines codes will be completed executing, after that codes inside .then will run
  setTimeout(function () {
    console.log("Async Task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

// Promise 3
// Passing values from Resolve to .then
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Ajit", emnail: "ajit@example.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

// Promise 4
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    // let error = false;
    if (!error) {
      resolve({ username: "Ajit", password: "123" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("Promise is either resolved or rejected"));

// Promise 5
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "JS", password: "123" });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

// lets practice more:

async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    // here response.json() also takes time so use await here but if await is not written gives error
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("error");
  }
}

getAllUsers();

// above code can be done as follows also using .then and .catch
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
