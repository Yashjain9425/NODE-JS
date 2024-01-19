const fs = require('fs');

// fs.readFile('hello.txt', 'utf8', function(err, data) {
//     console.log(err,data);
// })

// const a=fs.readFileSync('hello.txt')
// console.log(a.toString())/

// fs.writeFile('hello2.txt', "this is new data", ()=>{
//     console.log("Written to the file")
// });

const b = fs.writeFileSync('hello2.txt', "this is new data2");
console.log(b);
console.log("Finished reading hello.txt")