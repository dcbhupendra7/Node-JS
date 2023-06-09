
const fs = require('fs');
const http= require('http');
// Synchronous 
// const message =fs.readFileSync('./text/text1.txt','utf-8');
// console.log(message);
// const writtenMessage= `This is just written from the file sync ${message} \nCreated on ${Date.now})`;
// fs.writeFileSync('./text/written.txt', writtenMessage);
// console.log('Written successfully');


fs.readFile('./text/text1.txt', 'utf-8', (error, data)=>{
        console.log(data);
    console.log(error);
})
console.log("This is the printer")
