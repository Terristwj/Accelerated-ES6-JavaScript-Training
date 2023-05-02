// (1) let / var / const
// let scope is within a code block
let name_let = 'James';
if (true) {
    let name_let = "max";
    console.log(name_let);  //max
}
console.log(name_let);  //James

// let scope is within a code block, but reused
let name_let2 = 'James';
if (true) {
    name_let2 = "max";
    console.log(name_let2);  //max
}
console.log(name_let2);  //max

// var scope is within a function
var name_var = 'James';
if (true) {
    name_var = "max";
    console.log(name_var);  //max
}
console.log(name_var);  //max

// const
const NAME_CONST = 'Name';
const ARRAY_CONST = [1, 2, 3];
//ARRAY_CONST = [2, 3];           // Error
ARRAY_CONST.push(4);            // Modifying is allowed
console.log(ARRAY_CONST);  //[ 1, 2, 3, 4 ]



// (2) Fat arrow
var fn1 = () => {
    console.log("Hello!");
};
var fn2 = () => console.log("Bye!");
fn1();  //Hello
fn2();  //Bye

// Fat arrow - Return
var fn1 = () => {
    return "Hello!";
};
var fn2 = () => "Bye!";
console.log(fn1(), fn2());

// Fat arrow - Return w/ param
var fn3 = (a,b) => a + b + 3;
var fn4 = a => a + 3;
console.log(fn3(1,2), fn4(1));

// Fat arrow - setTimeout
setTimeout( 
    ()=>console.log("Waited 5 sec")
    , 5000);


// Fat arrow - 'this'
var fn_this_1 = () => console.log(this); // 'this' refers to the variable
// Used to refer to a button caller
function fn_this_2() {
    console.log(this); // 'this' refers to the caller
}
fn_this_1();
fn_this_2();

// Functions w/ default param
function def_param_1(num1, num2 = num1){
    console.log(num1, num2);
    return num1 === num2;
}
console.log(def_param_1(5));

// Error - param reads line by line
function def_param_2(num1 = num2, num2 = 10){
    console.log(num1, num2);
    return num1 === num2;
}
console.log(def_param_2());



// (3) Object Literal
let obj_1 = {
    obj_name: "Bob",
    obj_age: 26
};

let obj_name = 'Duck';
let obj_2 = {
    obj_name,
    "obj_age": 100
};

let obj_3 = {
    obj_name: obj_1.obj_name,
    obj_age: obj_1.obj_age
};
obj_3.obj_name = "Tim";

let obj_4 = obj_2;
obj_4.obj_name = "Goose";

console.log(obj_1);
console.log(obj_2);
console.log(obj_3, obj_1);
console.log(obj_4, obj_2);

// Object Literal - Part 2
let age_data = ["age", 25];
let gender = "female";
let person = {
    name: 'Anna',
    [age_data[0]]: age_data[1],
    gender,
    "Greet me"() {
        return "Hello! My name is " + this.name + "."
                + "\nI am " + this[age_data[0]] + " years old!"
                + "\nI'm a " + this["gender"];
    }
};
console.log(person);
console.log(person["Greet me"]());


// (4) Rest vs Spread operator
// Rest operator - Auto creates an array
function sumUp(...toAdd){
    console.log(toAdd);
    let result = 0;
    for (let i=0; i<toAdd.length; i++)
        result += toAdd[i];
    return result;
}
console.log(sumUp(1,2,3,4,5));

// Spread operator - Auto splits an array
let numbers = [1,2,3,4,5]
// console.log(...numbers);
console.log(Math.max(...numbers));

// (5) for-of loop
numbers = [1.5, 1.7, 1.8]
for (let num of numbers){
    console.log(num);
}

// (6) Template literals
let count = 3;
let description1 = `
    ${count} apples
`;
let description2 = "${count} apples";
console.log(description1);
console.log(description2);

// (7) Destructuring array - By index
let key = 3
numbers = [1,2,`${key}`];
let [n1, n2] = numbers;
let [no1='Def', no2, no3, no4, no5='Def'] = numbers;
let [num1, ...num2] = numbers;
console.log(numbers)
console.log(n1, n2)
console.log(no1, no2, no3, no4, no5)
console.log(num1, num2)

let [a, b, c] = [1, 5, 9];
[c, , a] = [a, b, c];
console.log(a,b,c);


// (8) Destructuring object - By key
person = {
    name: 'Anne',
    age: '25',
    // greet() {console.log("Hello")} //Also works
    greet: () => console.log("Hello")
};

let {greet: hello, name: callMe, age} = person;
hello();
console.log(`${callMe} is ${age}`);
