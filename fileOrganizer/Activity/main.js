// In this file --> main.js, we can use 3 commands i.e,
// 1. help --> Will show you all the available commands.
// 2. tree --> Will show all the entities of a directory.
// 3. organize --> Organizes files into folders according to it's types.

let helpObj = require('./Commands/help');
let treeObj = require('./Commands/tree');
let organizeObj = require('./Commands/organize');
const { O_DIRECTORY } = require('constants')

let inputArr = process.argv.slice(2);
let command = inputArr[0];
let path = inputArr[1];

switch(command){
    case "help":
        helpObj.helpFn();
        break;
    case "tree":
        treeObj.treeFn(path);
        break;
    case "organize":
        organizeObj.organizeFn(path);
        break;
    default:
        console.log("Invalid Command");
        break;
}