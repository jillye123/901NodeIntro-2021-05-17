# Chapter 5 -  Working with Files  - Part 1

## Directory and files

1. In your `\WIP` directory, create directories `\WIP\Ch05\part1`

1. In this directory, create a file called `error-first-callback.js`

1. Create another file called `input.txt` with this text: 
    ```
    Hello world! Im read with error-first-callback.js
    ```

## Overview (Detailed steps below if you need help)

*  Read the `./input.txt` file using `fs.readFile` using an error first approach in the callback.
* Print the file contents to the terminal, if successful
* Print an error to the terminal if one occurs

## Detailed Steps

1. First require the fs module.

1. In order to read the `./input.txt` file, use fs.readFile()
   1. pass the filename as the first argument  

   2. The second argument is a callback. You can use an anonymous function, a named function, or the block arrow notation.
      1. The callback takes in an error as the first argument, and the data as the second.

    ```javascript
    fs.readFile( the-file-name, function(err, data) {
        /* process data or err here */
    })
    ```
 
 1. Add your logic to print out any error or data.
 
 2. Run the code to test if it is successful with and without a valid file.
   
1. Mark your work as complete before workoing on Bonuses.
   
 