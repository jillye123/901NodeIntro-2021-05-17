# Chapter 2: Lab 1 - Practicing with ES6

## Objectives

* Practice executing JavaScript in Node

## Directory and files

1. In your `\WIP` directory, create this directory structure and work in the **js** directory: `\WIP\Ch02\js`

## Steps

### simple-concat.js
1. Create a file called `simple-concat.js`

1. In this file create the variables firstName and LastName and initialize them to have your first name and last name, example: Jane Doe

1. Use back ticks and template expressions instead of concatenation to display a greeting on two lines as follows:

  ```bat
  Hello:
  Jane Doe
   ```

2. Test your code by executing it using `node simple-concat.js` from the command line.

### constructor-function.js

For help with the following steps, or to continue scroll down past the grey box below.

1. Now create a file called `constructor-function.js` with a  constructor function called Person, which takes in a firstName, lastName, and has a function called getFullName which uses a template expression to return the fullName.  
   
2. Use the function to create a new person1 by calling the function passing firstName and lastName values. 
   
3. Use console.log to print the output of person1.getFullName(). 
   
4. Run the code to see that it works as expected. 



    ```javascript
























    function Person(fname, lname) {
        this.fname = fname;
        this.lname = lname;
        this.getFullName = function() {
            return `${fname} ${lname}`
        }
    }

    let person1 = new Person(firstName, lastName);
    console.log(person1.getFullName());
    ```
 
### weatherweek.js

1. In a new file called `weatherweek.js` - create an array of objects with the high/low temps for the week.

    An example to get started:
    
    ```javascript
     [{ day: "Monday", high: 80,low: 67 } ,
      { day: "Tuesday", high: 76,low: 72 }  ]
     ```

    With the array, can you loop through and find the highest and lowest temp of the week?

    After finding the highest high temp day, and lowest low temp day, print something similar to the following:

    ```
    The lowest temperature this week was on Wed and it was 65
    The highest temperature this week was on Thurs and it was 102
    ```

    Hint: keep track of a variable for **lowestTempDay** and **highestTempDay**, while looping compare to current day and replace variables as necessary.

1. Mark your work as complete using the means specified for your class. Ask your instructor if they did not tell you. :)  Then work on the bonuses for this chapter.

