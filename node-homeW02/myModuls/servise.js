
const fs = require("fs");
const path = require("path");

//WRITE FILE
console.log("Before write");

// Will always overwrite the old value with the new one =)
fs.writeFileSync("my_text.txt", "Hello from node js");
// fs.writeFileSync("my_text.txt", "Hello amigos =)");
