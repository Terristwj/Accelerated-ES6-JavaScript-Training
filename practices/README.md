# My Practices
> <h1>Section 2</h1>
---
<h3 style="text-align: center;">
    <b>(1) let / var / const</b>
</h3>

- 'let' scope is within a code block
- 'var' scope is within a function
- 'const' is immutable
    - Object and array const can be modified but not reassigned

<br>

<h2 style="text-align: center;">
    <b>(2) Fat arrow</b>
</h2>

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
<br>




| <h2>**Description**</h2> |
| --------------- |
| **​Learn modern JavaScript!** <br> Knowing modern JavaScript, ES6 (ECMAScript 6), is extremely important in the world of JavaScript! ES6 adds tons of new features, methods, objects and helpers and the earlier you feel confident using them, the better! <br><br> JavaScript is the most important programming language in the web and it's constantly evolving. This course introduces you to the biggest "feature update" in the last couple of years: ES6 - which added a lot of new syntax features and improvements. |
| **Get the "All-In-One" package today!** <br> This course follows a hands-on, example-driven approach to show and explain all the important features added to JavaScript. This includes important **syntax changes** and additions like **let**, **const**, rest & spread operators and continues with **Promises**, the **Reflect API**, the **Proxy API**, **Maps** & **Sets**, tons of **new methods and functions** and **much more**! <br><br> At the end of the course, we'll even **build a complete project**, using many of the new Features shown throughout the Course! |
| **Benefit from my knowledge as both a freelance web developer and a top-rated instructor with many years of experience.** <br><br>As a freelance web developer, using JavaScript is my **day-to-day work** and therefore I always found it annoying the ES6 Resources are scattered out all over the web. **I created this Course to share my knowledge on ES6 with you!** |