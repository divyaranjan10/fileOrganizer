// help.js will tell you about all the commands available.

function helpFunction(){
    console.log(`List of all Commands:
    1. node main.js tree <pathName>
    2. node main.js organize <pathName>
    3. node main.js help`);   
}

//exports the file contents to main.js
module.exports={
    helpFn:helpFunction
};
