//fs module is package of node.

let fs = require('fs');
let path = require('path');
//by default, it is in a buffer format.
//buffer is in the form of hexa-numerical code.
// let content = fs.readFileSync('f1.txt');
// // console.log(content);
// console.log(content+"");

// //if we change it contents, then it will override
// fs.writeFileSync("abc.txt","The Adarsh School");

// fs.appendFileSync("abc.txt"," is in Kirti Nagar, New Delhi.");

// fs.unlinkSync("abc.txt");   //it deletes the file

//directories
//to make a folder
// fs.mkdirSync("pathModule");

//to delete a folder
// fs.rmdirSync("pathModule");

// console.log(fs.existsSync("fs.js"));
// console.log(fs.existsSync("fs1.js"));

// let statusObj = fs.lstatSync("f1.txt");
// // console.log(statusObj);

// console.log(statusObj.isFile());
// console.log(statusObj.isDirectory());

//Imp: Use Double back slash
// let fileArr = fs.readdirSync('C:\\Users\\divyaranjan\\Desktop\\PP14\\fileOrganizer\\dir');
// console.log(fileArr);

//for copying content from one source to another
let srcPath = 'C:\\Users\\divyaranjan\\Desktop\\PP14\\fileOrganizer\\fsModule\\f1.txt';
let destPath = 'C:\\Users\\divyaranjan\\Desktop\\PP14\\fileOrganizer\\fsModule\\f2.txt';
let toBeCopiedFileName = path.basename(srcPath);
let dest = path.join('C:\\Users\\divyaranjan\\Desktop\\PP14\\fileOrganizer\\dir', toBeCopiedFileName);
console.log(dest);
fs.copyFileSync(srcPath,dest);

