# <a id='top'>My Practices</a>
### Prerequisites:
- Initialize package.json
  - npm init
- Install 'Code Runner' extension to run code by selection
<br><br>
### Navigation
> | <a href='#2'>Sec_2</a> | <a href='#3'>Sec_3</a> |
> | -- | -- |
<br>

> <h1 id='2'><a href='#top'>Section 2</a></h1>
---
### **(1) let / var / const**
- 'let' scope is within a code block
- 'var' scope is within a function
- 'const' is immutable
  - Object and array const can be modified but not reassigned

### **(2) Fat arrow**
- Function
    <pre><code>var fn1 = () => {
      console.log("Hello!");
  };
  var fn2 = () => console.log("Bye!");</code></pre>
- Function w/ return
    <pre><code>var fn1 = () => {
      return "Hello!";
  };
  var fn2 = () => "Bye!";</code></pre>
- Function w/ parameters
    <pre><code>var fn1 = (a,b) => {
      a + b + 3;
  };
  var fn2 = (a,b) => a + b + 3;
  var fn3 = a => a + 3;</code></pre>
- setTimeout
    <pre><code>setTimeout( 
      ()=>console.log("Waited 5 sec")
      , 5000);</code></pre>
- Fat arrow - 'this'
    <pre><code>//'this' refers to the variable
  var fn_this_1 = () => console.log(this); 

  //'this' refers to the caller. E.g.Button
  function fn_this_2() {
      console.log(this);
  }</code></pre>
- Functions w/ default paramaters
    <pre><code>// Pass
  function def_param_1(num1, num2 = num1) {
      console.log(num1, num2);
      return num1 === num2;
  }

  // Error - param reads line by line
  function def_param_2(num1 = num2, num2 = 10){
      console.log(num1, num2);
      return num1 === num2;
  }
</code></pre>

### <a id='s2_3'>**(3) Object literal**</a>
- Creating objects without using a class (<a href='#s3_3'>Section_3 (3)</a>)
- Objects can be assigned to another object

Code:
<pre><code>let age_data = ["age", 25];
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
console.log(person["Greet me"]());</code></pre>
Output:
<pre><code>{
  name: 'Anna',
  age: 25,
  gender: 'female',
  'Greet me': [Function: Greet me]
}
Hello! My name is Anna.
I am 25 years old!
I'm a female</code></pre>

### **(4) Rest vs Spread**
- Rest operator - Auto creates an array
    <pre><code>function sumUp(...toAdd){
      //OUT: [ 1, 2, 3, 4, 5 ]
      console.log(toAdd);
      let result = 0;
      for (let i = 0; i < toAdd.length; i++)
          result += toAdd[i];
      return result;
  }
  //OUT: 15
  console.log(sumUp(1,2,3,4,5));</code></pre>
- Spread operator - Auto splits an array
    <pre><code>let numbers = [1,2,3,4,5]
  //OUT: 1 2 3 4 5
  console.log(...numbers);
  //OUT: 5
  console.log(Math.max(...numbers));</code></pre>

### **(5) for-of loop**
Code:
<pre><code>numbers = [1.5, 1.7, 1.8]
for (let num of numbers){
    console.log(num);
}</code></pre>
Output:
<pre><code>1.5
1.7
1.8</code></pre>

### **(6) Template literals**
Code:
<pre><code>let count = 3;
let description1 = `
    ${count} apples
`;
let description2 = "${count} apples";

console.log(description1);
console.log(description2);</code></pre>
Output:
<pre><code>
    3 apples

 ${count} apples</code></pre>

### **(7) Destructuring array - By index**
<pre><code>let key = 3
numbers = [1,2,`${key}`];
let [n1, n2] = numbers;
let [no1='Def', no2, no3, no4, no5='Def'] = numbers;
let [num1, ...num2] = numbers;

console.log(numbers)                    //OUT: [ 1, 2, '3' ]
console.log(n1, n2)                     //OUT: 1 2
console.log(no1, no2, no3, no4, no5)    //OUT: 1 2 3 undefined Def
console.log(num1, num2)                 //OUT: 1 [ 2, '3' ]

let [a, b, c] = [1, 5, 9];
[c, , a] = [a, b, c];
console.log(a,b,c);                     //OUT: 9 5 1</code></pre>

### **(8) Destructuring object - By key**
<pre><code>person = {
    name: 'Anne',
    age: '25',
    // greet() {console.log("Hello")} //Also works
    greet: () => console.log("Hello")
};

let {greet: hello, name: callMe, age} = person;
hello();                                //OUT: Hello
console.log(`${callMe} is ${age}`);     //OUT: Anne is 25</code></pre>

<br>

> <h1 id='3'><a href='#top'>Section 3</a></h1>
---
### **(1) Modules basic**
- Prerequisites: Any module loader
  - Node.js (Install latest ver)
    - cd \<project folder>
    - node -v
    - npm init - Enter settings
    - Locate package.json
      - Add { "type": "module" }
- Modules are **Importing references to a file**
  - It does not make acopy of the values

### **(2) Import & Export syntax**
- Basic import -> **import {keyVal as val} from ".script.js";**
- Default import -> **import ab from "...";**
  - Any import name
- \* import -> **import * as myObj from "...";**

### <a id='s3_3'>**(3) Classes**</a>
- Different from object literals (<a href='#s2_3'>Section_2 (3)</a>)
- Contains only
  1. constuctor(name)
     - this.name = name 
  2. functions. E.g. greet()
  
| class Person {...} | let myPer = new Person() |
| :----------------: | :----------------------: |
#### **Prototype**
- Used to edit the class
  - Add attribute
  - Add function
- myObj.\_\_proto__
  - View the prototype attributes
#### **Inheritance**
- class Student extends Person {...}
  - Copies Person constructor if no constructor
  - Must add super() inside own constructor
- Creating functions
  - 'this' refers to current/parent function
  - 'super' refers to parent function
### **Static function**
- Allows direct calling of a class function
<pre><code>class Helper {
    static logout() {
      console.log("logout");
    }
}
// No need to write:
// let helper = new Helper();
Helper.logout();</code></pre>


