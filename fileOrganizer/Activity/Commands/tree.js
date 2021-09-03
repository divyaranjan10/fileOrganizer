// tree.js is used for showing all the entities in a directory/folder.

let fs = require('fs');
let path = require('path');

function treeFn(srcPath){
    let baseName = path.basename(srcPath);
    console.log("Directory Name: ",baseName);
    
    let content = fs.readdirSync(srcPath);
    let allEntities = "";
    for(let i=0; i<content.length; i++){
        allEntities += '\n\t' + "--" + content[i];
    }
    console.log("All Entities: ",allEntities);
}

//exports the file contents to main.js
module.exports={
    treeFn:treeFn
};