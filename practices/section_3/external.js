// (1) Modules basic - part 1
export let keyVal = 100;
export function sqArea(a){
    return a*a;
}

// (1) Modules basic - part 2
let myVal = 1000;
function test(){
    myVal = 2000;
    console.log('Test');
}
export {myVal, test};


// (2) Import & Export Syntax
let ab = "Something";
export default ab;      
// Only one default export per file


// (3) Export classes
export class myObj{
    constructor(){
        this.something = "something";
    }
}