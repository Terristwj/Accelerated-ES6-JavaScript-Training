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


// (3) Class - Different from section_2_(3)
class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log(`My name is ${this.name}`);
    }
}
let adam = new Person("adam", 13);
console.log(adam);
adam.greet();
console.log();

// (3) Class - Prototype
Person.prototype.species = "human";
Person.prototype.sayHello = function hello() {
    console.log("Hello")
};
console.log(adam);  // Does not display prototype
console.log(adam.species);
// Calls sayHello attribute, 
// that points to hello function
console.log(adam.sayHello);
adam.sayHello();
console.log(adam.__proto__);
console.log();

// (3) Class - Inheritance
class Student extends Person{
    // Having a constuctor must include super()
    constructor(name, age, school){
        super(name, age);
        this.school = school;
    }

    greet(){
        console.log("Hello");
    }

    greetTwice(){
        // If there is no greet() in the class,
        // 'this' will refer to parent greet()
        this.greet();
        super.greet();
    }
}
let thomas = new Student("Thomas", 15, "App jc");
console.log(thomas);
thomas.greetTwice();

// (3) Class - Static function
class Helper {
    static logout() {
        console.log("logout");
    }
}
// No need to write:
// let helper = new Helper();
Helper.logout();