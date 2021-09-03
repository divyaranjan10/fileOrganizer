let fs = require('fs');
let path = require('path');

let inputArr = process.argv.slice(2);
let mainDir = inputArr[0];
let subDir = inputArr.slice(1);

// console.log(mainDir);
// console.log(subDir);

let mainDirPath = path.join(process.cwd(),mainDir);

if(!fs.existsSync(mainDirPath)){
    fs.mkdirSync(mainDirPath);
}

for(let i=0; i<subDir.length; i++){
    let folder = path.join(mainDirPath,subDir[i]);
    console.log("Folder path: ", folder);
    if(!fs.existsSync(folder)){
        fs.mkdirSync(folder);
    }
    
    for(let j=1; j<=3; j++){
        let module = path.join(folder,`Module${j}`);
        console.log('Module names: ', module);
        fs.mkdirSync(module);

        let fileName = path.join(module, 'content.md');
        fs.writeFileSync(fileName, '#Hello Everyone');
    }       
}