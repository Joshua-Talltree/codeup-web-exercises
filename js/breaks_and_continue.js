"use strict";

// Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.


do {
    var userInput = Number(prompt("Pick an odd number between 1 and 50"));
    if (userInput % 2 === 0) {
        alert(userInput + " is not odd, please try again")
    } else if (userInput > 50) {
        alert(userInput + " is greater than 50, please try again")
    } else if (userInput < 1) {
        alert(userInput + " is less than 1, please try again")
    } else {
        alert("You picked a good one!");
        break;
    }
} while (true);

// 3. Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.

do {
    var userInput = Number(prompt("Pick an odd number between 1 and 50"));
    if (userInput % 2 === 0) {
        alert(userInput + " is not odd, please try again")
    } else if (userInput > 50) {
        alert(userInput + " is greater than 50, please try again")
    } else if (userInput < 1) {
        alert(userInput + " is less than 1, please try again")
    } else {
        alert("You picked a good one!");
        break;
    }
} while (true);