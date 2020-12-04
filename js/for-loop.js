"use strict";

// create a for loop that multiplies 7 by numbers 1 - 10. //

var result = '\n';
var j = 7;
for (var i = 1; i < 11; i++) {
    result += (i*j) + ' ';
    result += '\n';
}


console.log(result);

// Use for loop to create random number between 20 and 200

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
Math.floor(Math.random() * 5) + 1;

for (var allCones = a = 1; a < 100; a++) {

    if (a % 2 !== 0) {
        // number isn't even
        // odd numbers aren't as cool
        // skip the rest of the loop and continue with the next iteration
        continue;
    }
}

console.log(allCones + a);
