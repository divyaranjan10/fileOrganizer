let fs = require('fs');
let path = require('path');
let inputArr = process.argv.slice(2);
let inputDir = inputArr[0];

let allEntities = fs.readdirSync(inputDir);
console.log("All Entities are: ", allEntities);
let content = "";

for(let i=0; i<allEntities.length; i++){
    let entityName = allEntities[i];
    let eName = path.join(inputDir,entityName);
    let statusObj = fs.lstatSync(eName);

    let isFile = statusObj.isFile();
    if(isFile){
        let extName = path.extname(eName);
        if(extName == ".txt"){
            content += fs.readFileSync(eName);
        }
    }
}

let summaryFile = 'C:\\Users\\divyaranjan\\Desktop\\PP14\\fileOrganizer\\summary.txt';
fs.writeFileSync(summaryFile,content);