let str = "Itachi Uchiha";
let a = 10;

function foo(msg){
    return 'Hi! I was made in owner.js' + msg;
}

console.log('Hello! I was also made in owner.js');

module.exports={
    var:a,
    string:str,
    fooFn:foo
};