/*In synchronous programming, operations are executed one at a time, in sequence. Each operation waits for the previous one to finish before executing.

Example:

const fs = require('fs');

// Synchronous file read
const data = fs.readFileSync('file.txt', 'utf8');
console.log(data);

console.log("Finished reading file.");
Output order:

File content

"Finished reading file."

Advantages:

Easier to read and reason about.

Straightforward error handling via try/catch.

Disadvantages:

Blocking: If an operation takes time (e.g., file read, database query), it blocks the entire process, which can degrade performance in high-concurrency environments.

What is syncAPI in Node.js?
There is no official syncAPI module in Node.js core — the term generally refers to synchronous versions of Node.js functions, like:

fs.readFileSync()

fs.writeFileSync()

child_process.execSync()*/ 

import * as fs from "fs";  //here we are using from "fs"
//so we need to mention Sync word after every function

//creating Directory
fs.mkdirSync("D:\\Desktop\\html\\test\\demo",{recursive:true});

//Remove Directory
fs.rmdirSync("D:\\Desktop\\html\\test\\demo");//we need to mention Sync word.