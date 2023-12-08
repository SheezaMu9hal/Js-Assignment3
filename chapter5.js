// Practice exercise 5.1
// In this exercise we will create a number guessing game that takes user input and
// replies based on how accurate the user's guess was.
// 1. Create a variable to be used as the max value for the number guessing game.
// 2. Generate a random number for the solution using Math.random() and
// Math.floor(). You will also need to add 1 so that the value is returned as
// 1-[whatever the set max value is]. You can log this value to the console for
// development to see the value as you create the game, then when the game is
// complete you can comment out this console output.
// 3. Create a variable that will be used for tracking whether the answer is correct
// or not and set it to a default Boolean value of false. We can update it to be
// true if the user guess is a match.
// 4. Use a while loop to iterate a prompt that asks the user to enter a number
// between 1 and 5, and convert the response into a number in order to match
// the data type of the random number.
// 5. Inside the while loop, check using a condition to see if the prompt value is
// equal to the solution number. Apply logic such that if the number is correct,
// you set the status to true and break out of the loop. Provide the player with
// some feedback as to whether the guess was high or low, and initiate another
// prompt until the user guesses correctly. In this way we use the loop to keep
// asking until the solution is correct, and at that point we can stop the iteration
// of the block of code.
console.log("\nPractice exercise 5.1");
console.log("========================\n")
const maximumNo = 15;
const randomNo = Math.floor(Math.random() * maximumNo) + 1;
// console.log(randomNo);
let correct = false;
while (!correct) {
    let GuessNo = prompt("Guess a Number between 1 and " + maximumNo);
    GuessNo = Number(GuessNo);
    if (GuessNo === randomNo) {
        correct = true;
        console.log("You got it " + randomNo);
    } else if (GuessNo > randomNo) {
        console.log("The Number you guessed is Too high");
    } else {
        console.log("The Number you guessed is Too Low");
    }
}
/*Practice exercise 5.2
In this exercise, we will create a basic counter that will increase a dynamic variable
by a consistent step value, up to an upper limit.
1. Set the starting counter to 0
2. Create a variable, step, to increase your counter by
3. Add a do while loop, printing the counter to the console and incrementing it
by the step amount each loop
4. Continue to loop until the counter is equal to 100 or more than 100*/
console.log("\nPractice exercise 5.2");
console.log("========================\n")

let counter = 0;
let step = 10;
do {
    console.log(counter);
    counter += step;
}
while (counter <= 100);

//Practice exercise 5.3
// In this exercise we will use a for loop to create an array that holds objects. Starting
// with creating a blank array, the block of code within the loop will create an object
// that gets inserted into the array.
// 1. Setup a blank array, myWork.
// 2. Using a for loop, create a list of 10 objects, each of which is a numbered
// lesson (e.g. Lesson 1, Lesson 2, Lesson 3....) with an alternating true/false
// status for every other item to indicate whether the class will be running this
// year. For example:
// name: 'Lesson 1', status: true
// 3. You can specify the status by using a ternary operator that checks whether
// the modulo of the given lesson value is equal to zero and by setting up a
// Boolean value to alternate the values each iteration.
// 4. Create a lesson using a temporary object variable, containing the name
// (lesson with the numeric value) and predefined status (which we set up in
// the previous step).
// 5. Push the objects to the myWork array.
// 6. Output the array to the console.
console.log("\nPractice exercise 5.3");
console.log("========================\n")
const myWork = [];
for (let x = 1; x < 10; x++) {
    let checkStatus = x % 2 ? true : false;
    let object = {
        name: `Lesson ${x}`, status: checkStatus
    };
    myWork.push(object);
}
console.log(myWork);
/*Practice exercise 5.4
In this exercise we will be generating a table of values. We will be using loops to
generate rows and also columns, which will be nested within the rows. Nested arrays
can be used to represent rows in a table. This is a common structure in spreadsheets,
where each row is a nested array within a table and the contents of these rows are
the cells in the table. The columns will align as we are creating an equal number of
cells in each row.
1. To create a table generator, first create an empty array, myTable, to hold your
table data.
2. Set variable values for the number of rows and columns. This will allow us
to dynamically control how many rows and columns we want within the
table. Separating the values from the main code helps make updates to the
dimensions easier.
3. Set up a counter variable with an initial value of 0. The counter will be used
to set the content and count the values of the cells within the table.
4. Create a for loop with conditions to set the number of iterations, and to
construct each row of the table. Within it, set up a new temporary array
(tempTable) to hold each row of data. The columns will be nested within
the rows, generating each cell needed for the column.
5. Nest a second loop within the first to count the columns. Columns are run
within the row loop so that we have a uniform number of columns within
the table.
6. Increment the main counter each iteration of the inner loop, so that we track
a master count of each one of the cells and how many cells are created.
7. Push the counter values to the temporary array, tempTable. Since the array is
a nested array representing a table, the values of the counter can also be used
to illustrate the cell values next to each other in the table. Although these are
separate arrays representing new rows, the value of the counter will help
illustrate the overall sequence of cells in the final table.
8. Push the temporary array to the main table. As each iteration builds a new
row of array items, this will continue to build the main table in the array.
9. Output into the console with console.table(myTable).*/
console.log("\n\nPractice exercise 5.4");
console.log("========================\n")
const myTable = [];
const rows = 5;
const cols = 8;
let count = 0;
for (let y = 0; y < rows; y++) {
    let tempTable = [];
    for (let x = 0; x < cols; x++) {
        count++;
        tempTable.push(count);
    }
    myTable.push(tempTable);
}
console.table(myTable);

/*Practice exercise 3.5*/

/*Explore how to create a table grid that contains nested arrays as rows within a table.
The rows will each contain the number of cells needed for the number of columns set
in the variables. This grid table will dynamically adjust depending on the values for
the variables.
1. Create a grid array variable.
2. Set a value of 64 for the number of cells.
3. Set a counter to 0.
4. Create a global variable to be used for the row array.
5. Create a loop that will iterate up to the number of cells you want in the array,
plus one to include the zero value. In our example, we would use 64+1.
6. Add an outer if statement, which uses modulo to check if the main counter
is divisible by 8 or whatever number of columns you want.
7. Inside the preceding if statement, add another if statement to check if the
row is undefined, indicating whether it is the first run or whether the row
is complete. If the row has been defined, then add the row to the main grid
array.
8. To finish off the outer if statement, if the counter is divisible by 8, clear the
row array—it has already been added to the grid by the inner if statement.
9. At the end of the for loop, increment of the main counter by 1.
10. Set up a temporary variable to hold the value of the counter and push it to
the row array.
11. Within the loop iteration, check if the value of the counter is equal to the total
number of columns you want; if it is, then add the current row to the grid.
12. Please note that the extra cell will not be added to the grid since there aren't
enough cells to make a new row within the condition that adds the rows to
the grid. An alternative solution would be to remove the +1 from the loop
condition and add grid.push(row) after the loop is completed, both of which
will provide the same solution output.
13. Output the grid into the console.*/
/*Practice exercise 5.5*/
console.log("\nPractice exercise 5.5");
console.log("========================\n");
const grid = [];
const cells = 64;
let i = 0;
let row;
for (let x = 0; x < cells + 1; x++) {
    if (i % 8 == 0) {
        if (row != undefined) {
            grid.push(row);
        }
        row = [];
    }
    i++;
    let temp = i;
    row.push(temp);
}
console.table(grid);
/*Practice exercise 5.6*/
/*This exercise will construct an array as it loops through the incrementing values of
x. Once the array is done, this exercise also will demonstrate several ways to output
array contents.
1. Create an empty array
2. Run a loop 10 times, adding a new incrementing value to the array
3. Log the array into the console
4. Use the for loop to iterate through the array (adjust the number of iterations
to however many values are in your array) and output into the console
5. Use the for of loop to output the value into the console from the array*/
console.log("\nPractice exercise 5.6");
console.log("========================\n");
const Array = [];
for (let value = 0; value < 10; value++) {
    Array.push(value + value);
}
console.log(Array);
for (let i = 0; i < Array.length; i++) {
    console.log(Array[i]);
}
console.log("Using for of loop");
for (let val of Array) {
    console.log(val);
}

// Practice exercise 5.7
/*In this exercise, we will experiment with looping over objects and internal arrays.
1. Create a simple object with three items in it.
2. Using the for in loop, get the properties' names and values from the object
and output them into the console.
3. Create an array containing the same three items. Using either the for loop or
the for in loop, output the values from the array into the console.*/

console.log("\nPractice exercise 5.7");
console.log("========================\n");
const myObject = {
    person1: {
      name: "Sheeza",
      age: 19
    },
    person2: {
      name: "Hafsa",
      age: 30
    },
    person3: {
      name: "Abiha",
      age: 22
    }
  };
  
  console.log("Object Properties and Values:");
  for (let key in myObject) {
    console.log(`${key}: Name - ${myObject[key].name}, Age - ${myObject[key].age}`);
  }
  
  const namesArray = ["Sheeza", "Hafsa", "Abiha"];
  
  console.log("\nArray Values (Names Only):");
  for (let i = 0; i < namesArray.length; i++) {
    console.log(namesArray[i]);
  }
  
// Practice exercise 5.8
/*This exercise will demonstrate how to create a string with all the digits as it loops
through them. We can also set a value to skip by adding a condition that will use
continue, skipping the matching condition. A second option is to do the same
exercise and use the break keyword.
1. Set up a string variable to use as output.
2. Select a number to skip, and set that number as a variable.
3. Create a for loop that counts to 10.
4. Add a condition to check if the value of the looped variable is equal to the
number that should be skipped.
5. If the number is to be skipped in the condition, continue to the next number.
6. As you iterate through the values, append the new count value to the end of
the main output variable.
7. Output the main variable after the loop completes.
8. Reuse the code, but change the continue to break and see the difference. It
should now stop at the skip value.*/

console.log("\nPractice exercise 5.8");
console.log("========================\n");
let outputString = "";
const skipNumber = 3;

for (let i = 1; i <= 10; i++) {
  if (i === skipNumber) {
    continue;
  }
  outputString += i;
}

console.log("Output with continue:", outputString);

outputString = "";

for (let i = 1; i <= 10; i++) {
  if (i === skipNumber) {
    break;
  }
  outputString += i;
}

console.log("Output with break:", outputString);

// Chapter projects
/*Math multiplication table
In this project, you will create a math multiplication table using loops. You can do
this using your own creativity or by following some of the following suggested steps:
1. Set up a blank array to contain the final multiplication table.
2. Set a value variable to specify how many values you want to multiply with
one another and show the results for.
3. Create an outer for loop to iterate through each row and a temp array to store
the row values. Each row will be an array of cells that will be nested into the
final table.
4. Add an inner for loop for the column values, which will push the multiplied
row and column values to the temp array.
5. Add the temporary row data that contains the calculated solutions to the
main array of the final table. The final result will add a row of values for the
calculations.*/
console.log("\nChapter projects");
console.log("========================\n")
const multiplicationTable = [];
const tableSize = 10;

for (let i = 1; i <= tableSize; i++) {
  const tempRow = [];

  for (let j = 1; j <= tableSize; j++) {
    tempRow.push(i * j);
  }

  multiplicationTable.push(tempRow);
}
console.table(myTable);
for (let i = 0; i < multiplicationTable.length; i++) {
    console.log(multiplicationTable[i]);
}
