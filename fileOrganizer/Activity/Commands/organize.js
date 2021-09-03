// In organizeFn.js, we will organize the files according to it's types, we have segregated the types in key:value pairs below, therefore the "key" will be our folders, and we will organize it accordingly to it's value pairs. 

let fs = require('fs');
const { type } = require('os');
let path = require('path');

let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"],
    pictures: ['png','jpg','jpeg']
}

function organizeFn(srcPath){
    let entities = fs.readdirSync(srcPath);
    let organizeFolder = path.join(srcPath,'organizedFiles');
    
    if(!fs.existsSync(organizeFolder)){
        fs.mkdirSync(organizeFolder);
    }

    for(let i=0; i<entities.length; i++){
        let file = entities[i];
        const filePath = path.join(srcPath,file);
        if(fs.lstatSync(filePath).isFile()){
            let type = checkType(file);
            let typeFolder = path.join(organizeFolder,type);
            if(!fs.existsSync(typeFolder)){
                fs.mkdirSync(typeFolder);
            }
    
            let src = path.join(srcPath,entities[i]);
            let dest = path.join(typeFolder,entities[i]);
            fs.copyFileSync(src,dest);
        }
        
    
    }
    
}

// It checks the file type and organize it accordingly.
function checkType(file){
    for(let type in types){
        for(let ext of types[type]){
            if(path.extname(file).split('.')[1] == ext){
                return type;
            }
        }
    }

    return 'others';
}

//exports the file contents to main.js
module.exports = {
    organizeFn:organizeFn
};