// (1) Modules basic - part 1
import {keyVal} from './external.js';
import {sqArea} from './external.js';

console.log(keyVal);
let area = sqArea(5);
console.log(area);

// (1) Modules basic - part 2
import {myVal, test} from './external.js';
console.log(myVal);
test();
console.log(myVal);
// Importing references the file
// It does not make acopy of the values



// (2) Import & Export Syntax
import cd from './external.js';
// Can rename. 
// E.g. ab (import) -> cd (export)
console.log(cd);

// Other syntaxes
import {myVal as val} from './external.js';
import a, {myVal as val} from './external.js';
// Import ALL as an object
import * as example from './external.js';
console.log(example);

