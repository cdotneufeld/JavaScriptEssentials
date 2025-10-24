//Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also a global, but scoped with let";
const globalConst = "I'm a global constant";


{
    //Block scope
    var blockVar = "I'm a block-scoped var";
    let blockLet = "I'm a block-scoped let";
    const blockConst = "I'm a block-scoped const";
}
// Global scope
// console.log(globalVar); // Output: "I'm a global variable"
// console.log(globalLet); // Output: "I'm also global, but scoped with let"
// console.log(globalConst); // Output: "I'm a global constant"

//Block scope
//console.log(blockVar);
//console.log(blockLet);

function show(){
    var functionVar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
}
show();

// console.log(functionVar); // Throws ReferenceError
// console.log(functionLet); // Throws ReferenceError
// console.log(functionConst); // Throws ReferenceError

{
    var blockvar2 = "I'm another block-scoped var";
    let blocklet2 = "I'm another block-scoped let";
    const blockconst2 = "I'm another block-scoped const";

    // var blockvar2 = "I'm reassigning a block-scoped var"
    // let blocklet2 = "I'm reassigning a block-scoped let"
    // const blockconst2 = "I'm reassigning a block-scoped const"

}

var blockvar2 = "I'm a var with the same name outside of the block";
let blocklet2 = "I'm a let with the same name outside of the block";
const blockconst2 = "I'm a const with the same name outside of the block";

console.log(blockvar2);
console.log(blocklet2);
console.log(blockconst2);