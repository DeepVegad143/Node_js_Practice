const { doesNotReject } = require("assert");
const { log, dirxml } = require("console");
const path = require("path");

console.log(__dirname);
console.log(__filename);

// to make a new path  
const filepath = path.join("folder", "school", "data.txt")
console.log(filepath);

const parsedata = path.parse(filepath);
console.log({parsedata})