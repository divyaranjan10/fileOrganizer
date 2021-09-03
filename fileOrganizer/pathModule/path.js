let path = require('path');
let fs = require('fs');

let inputArr = process.argv.slice(2);
// console.log(inputArr);

let fileName = inputArr[0];
let content = inputArr[1];

// console.log("File Name: ", fileName);
// console.log("Content: ", content);

let currentPath = process.cwd();        //cwd = Current Working Directory
// console.log("Current Path: ",currentPath);      //to know the current path

let joinedPath = path.join(currentPath, "abc", "def.txt");
// console.log("New Joined Path: ",joinedPath);    //to know the new joined path

let file = path.basename('C:\\Users\\divyaranjan\\Desktop\\PP14\\fileOrganizer\\pathModule\\path.js');
// console.log(file);      //to know the base file name

let extName = path.extname('C:\\Users\\divyaranjan\\Desktop\\PP14\\fileOrganizer\\pathModule\\path.js');
console.log(extName);