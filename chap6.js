// Practice exercise 6.1
/*See if you can write a function for yourself. We want to write a function that adds
two numbers.
1. Create a function that takes two parameters, adds the parameters together,
and returns the result.
2. Set up two different variables with two different values.
3. Use your function on the two variables, and output the result using
console.log.
4. Create a second call to the function using two more numbers as arguments
sent to the function.*/
console.log("\nPractice exercise 6.1");
console.log("========================\n")
function sumNumbers(x, y) {
    return x + y;
}
const num1 = 34;
const num2 = 17;
console.log(`Adding ${num1} and ${num2}:`);
const result1 = sumNumbers(num1, num2);
console.log(`Result 1: ${result1}`);
console.log(`Adding 39 and 78:`);
const result2 = sumNumbers(39, 78);
console.log(`Result 2: ${result2}`);

// Practice exercise 6.2
/*We are going to create a program that will randomly describe an inputted name.
1. Create an array of descriptive words.
2. Create a function that contains a prompt asking the user for a name.
3. Select a random value from the array using Math.random.
4. Output into the console the prompt value and the randomly selected array
value.
5. Invoke the function.*/
console.log("\nPractice exercise 6.2");
console.log("========================\n");

const descriptiveWords = ["awesome", "creative", "friendly", "intelligent", "adventurous"];

function describeName() {
    const question = prompt("What is your name?");
    const nameAdj = Math.floor(Math.random() * descriptiveWords.length);
    console.log(descriptiveWords[nameAdj] + " " + question);
}
describeName();


// Practice exercise 6.3
/*Create a basic calculator that takes two numbers and one string value indicating
an operation. If the operation equals add, the two numbers should be added. If the
operation equals subtract, the two numbers should be subtracted from one another.
If there is no option specified, the value of the option should be add.
The result of this function needs to be logged. Test your function by invoking it
with different operators and no operator specified.
1. Set up two variables containing number values.
2. Set up a variable to hold an operator, either + or -.
3. Create a function that retrieves the two values and the operator string value
within its parameters. Use those values with a condition to check if the
operator is + or -, and add or subtract the values accordingly (remember if
not presented with a valid operator, the function should default to addition).
4. Within console.log(), call the function using your variables and output
the response to the console.
5. Update the operator value to be the other operator type—either plus or
minus—and call to the function again with the new updated arguments.
*/
console.log("\nPractice exercise 6.3");
console.log("========================\n")
const operand1 = 83;
const operand2 = 17;

let operator = '+';

function calculateValues(value1, value2, operation) {
  if (operation === '+') {
    return value1 + value2;
  } else if (operation === '-') {
    return value1 - value2;
  } else {
    return value1 + value2;
  }
}

console.log(`Result (operator = ${operator}):`, calculateValues(operand1, operand2, operator));

operator = '-';
console.log(`Result (operator = ${operator}):`, calculateValues(operand1, operand2, operator));

/*Practice exercise 6.4
Modify the calculator that you made in Practice exercise 6.2 to return added values
instead of printing them. Then, call the function 10 or more times in a loop, and store
the results in an array. Once the loop finishes, output the final array into the console.
1. Set up an empty array to store the values that will be calculated within the
loop.
2. Create a loop that runs 10 times, incrementing by 1 each time, creating two
values each iteration. For the first value, multiply the value of the loop count
by 5. For the second value, multiply the value of the loop counter by itself.
3. Create a function that returns the value of the two parameters passed into the
function when it is called. Add the values together, returning the result.
4. Within the loop, call the calculation function, passing in the two values as
arguments into the function and storing the returned result in a response
variable.
5. Still within the loop, push the result values into the array as it iterates
through the loop.
6. After the loop is complete, output the value of the array into the console.
7. You should see the values [0, 6, 14, 24, 36, 50, 66, 84, 104, 126] for
the array in the console.*/
console.log("\nPractice exercise 6.4");
console.log("========================\n")

const resultsArray = [];

for (let i = 0; i < 10; i++) {
  const value1 = i * 5;
  const value2 = i * i;

  const response = calculateValues(value1, value2, "+");
  resultsArray.push(response);
}
console.log("Array:", resultsArray);


// Practice exercise 6.5
/*Use IIFE to create a few immediately invoked functions and observe how the scope is
affected.
1. Create a variable value with let and assign a string value of 1000 to it.
2. Create an IIFE function and within this function scope assign a new value to
a variable of the same name. Within the function, print the local value to the
console.
3. Create an IIFE expression, assigning it to a new result variable, and assign
a new value to a variable of the same name within this scope. Return this
local value to the result variable and invoke the function. Print the result
variable, along with the variable name you've been using: what value does it
contain now?
4. Lastly, create an anonymous function that has a parameter. Add logic that
will assign a passed-in value to the same variable name as the other steps,
and print it as part of a string sentence. Invoke the function and pass in your
desired value within the rounded brackets.*/
console.log("\nPractice exercise 6.5");
console.log("========================\n")
let val = "1000";
(function () {
let val = "100"; // local scope variable
console.log(val);
})();
let result = (function () {
let val = "Sheeza";
return val;
})();
console.log(result);
console.log(val);
(function (val) {
console.log(`My name is ${val}`);
})("Sheeza");

// Practice exercise 6.6
/*A common problem that we can solve with recursion is calculating the factorial.

How are recursive functions going to help us calculate the factorial? We are going to
call the function with a lower number until we reach 0. In this exercise, we will use
recursion to calculate the factorial result of a numeric value set as the argument of a
function.
1. Create a function that contains a condition within it checking if the argument
value is 0.
2. If the parameter is equal to 0, it should return the value of 1. Otherwise, it
should return the value of the argument multiplied by the value returned
from the function itself, subtracting one from the value of the argument
that is provided. This will result in running the block of code until the value
reaches 0.
3. Invoke the function, providing an argument of whatever number you want
to find the factorial of. The code should run whatever number is passed
initially into the function, decreasing all the way to 0 and outputting the
results of the calculation to the console. It could also contain a console.log()
call to print the current value of the argument in the function as it gets
invoked.
4. Change and update the number to see how it affects the results.*/
console.log("\nPractice exercise 6.6");
console.log("========================\n")
function Factorial(num) {
    if (num === 0) {
      return 1;
    } else {
      return num * Factorial(num - 1);
    }
  }
  const number = 6;
  console.log(`Factorial of ${number}: ${Factorial(number)}`);

//   Practice exercise 6.7
 /*  Create a countdown loop starting at a dynamic value of 10.
  1. Set the start variable at a value of 10, which will be used as the starting
  value for the loop.
  2. Create a function that takes one argument, which is the countdown value.
  3. Within the function, output the current value of the countdown into the
  console.
  4. Add a condition to check if the value is less than 1; if it is, then return the
  function.
  5. Add a condition to check if the value of the countdown is not less than 1,
  then continue to loop by calling the function within itself.
  6. Make sure you add a decrement operator on the countdown so the preceding
  condition eventually will be true to end the loop. Every time it loops, the
  value will decrease until it reaches 0.
  7. Update and create a second countdown using a condition if the value is
  greater than 0. If it is, decrease the value of the countdown by 1.
  8. Use return to return the function, which then invokes it again and again
  until the condition is no longer true.
  9. Make sure, when you send the new countdown value as an argument into
  the function, that there is a way out of the loop by using the return keyword
  and a condition that continues the loop if met.*/
console.log("\nPractice exercise 6.7");
console.log("========================\n")
let start = 10;

function countdown(value) {
  console.log(value);
  if (value < 1) {
    return;
  }
  countdown(value - 1);
}

function countdownSecond(value) {
  console.log(value);
  if (value > 0) {
    return countdownSecond(value - 1);
  }
}

countdown(start);
console.log("\n");
countdownSecond(start);

//   Practice exercise 6.8
 /* 1. Set a variable name and assign a function to it. Create a function expression
with one parameter that outputs a provided argument to the console.
2. Pass an argument into the function.
3. Create the same function as a normal function declaration.*/
  console.log("\nPractice exercise 6.8");
  console.log("========================\n")
  const funcExpr = function (arg) {
    console.log(arg);
  };
  
  funcExpr("Hello from function expression!");
  
  function funcDecl(arg) {
    console.log(arg);
  }
  
  funcDecl("Hello from function declaration!")
  
// Chapter projects
console.log("\nChapter projects");
console.log("========================\n")
/*Create a recursive function
Create a recursive function that counts up to 10. Invoke the function with different
start numbers as the arguments that are passed into the function. The function
should run until the value is greater than 10.*/
console.log("\nRecursive function");
console.log("========================\n")
const recursion = function counts(i) {
    console.log(i);
    if (i < 10) {
    return counts(i + 1);
    }
    return;
    }
    recursion(0);
/*Set timeout order
Use the arrow format to create functions that output the values one and two to the
console. Create a third function that outputs the value three to the console, and then
invokes the first two functions.
Create a fourth function that outputs the word four to the console and also use
setTimeout() to invoke the first function immediately and then the third function.
What does your output look like in the console? Try to get the console to output:
Four
Three
One
Two
One*/
console.log("\ntimeout order");
console.log("========================\n")
const one = ()=> console.log('one');
const two = ()=> console.log('two');
const three = () =>{
console.log('three');
one();
two();
}
const four = () =>{
    console.log('four');
    setTimeout(one,0);
    three();
    }
    four();