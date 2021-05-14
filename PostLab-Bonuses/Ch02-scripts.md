## Function Practice

1. Write a JavaScript function called first to get the first element of an array. Passing a second parameter 'n' will return the first 'n' elements of the array. Here is some example Test Data and results.

  ```javascript
  console.log(first([7, 9, 0, -2]));    // outputs 7
  console.log(first([],3));             // []
  console.log(first([7, 9, 0, -2],3));  // [7, 9, 0] 
  console.log(first([7, 9, 0, -2],6));  // [7, 9, 0, -2] 
  console.log(first([7, 9, 0, -2],-3)); //[] 
  ```


### Setup jschallenges

1. Create another subdirectory: `\WIP\Ch02\jschallenges`

1. In this directory create a file called `introduction.js`.

1. Now, open a command prompt (not within VS Code) to any path. Maximize the window.

1. Execute this command, we will talk more about its meaning later:
`npm install -g javascripting`

1. Now execute the following command:
  `javascripting`

1. The CLI screen will present a list of challenges to you. Choose the first one and ignore the bits about creating a directory, you will do your work in VS Code in the folder you have already created. Skip to the first part which says to add this to introduction.js:
  
    ```javascript
      console.log('hello');
    ```

1. Right click on your `introduction.js` file to open to a terminal at this path.

1. Note the command below that the program says to use to verify your work. This is how you will check your work for future challenges.

    ```
    javascripting verify introduction.js
    ```

1. Read the output. If your code passes, go on to the next challenge by returning to the command prompt and hitting the up arrow to get to the menu again.

1. Complete all challenges.
