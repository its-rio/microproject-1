// Question 1 - Hoisting

// console.log(name);
// var name = "John";
// console.log(name);

// sayHello();

// function sayHello() {
//   console.log("Hello, world!");
// }

// 2. Implement a function that uses the spread/rest operator to merge two objects into a new one.
// var first = {name: "rio", age:21}
// var sec = {sname: "nam", age:20}

// function merge(first, sec){
//     return {...first, ...sec}
// }

// var mergeObj = merge(first, sec)
// console.log(mergeObj);

// 3 =>
function delayedMessage(delay, message) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(message);
        }, delay);
    });
}

// Usage example:
const delay = 2000; // 2 seconds
const message = "Hello, world!";

delayedMessage(delay, message)
    .then((result) => {
        console.log(result); // Output: Hello, world!
    })
    .catch((error) => {
        console.error("Error:", error);
    });