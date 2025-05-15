// console.log("1. first task");

// setTimeout(() => {
//     console.log("2. second task");
// }, 0)

// console.log("3. third task");

// const fs = require('fs');

// fs.readFile("content/subfolder/first.txt", "utf-8", () => {
//     console.log("file reading finished");
// })

// console.log("Reading file....")


console.log("Start");

process.nextTick(() => {
  console.log("nextTick");
});

Promise.resolve().then(() => {
  console.log("Promise");
});

setTimeout(() => {
  console.log("Timeout");
}, 0);

console.log("End");
