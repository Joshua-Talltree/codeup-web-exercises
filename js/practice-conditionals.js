"use strict";

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

function analyzeColor(colors) {
    if (colors === 'blue') {
        return "Blue make the sky is lit today";
    } else if (colors === 'yellow') {
       return "Yellow is very bright!";
    } else if (colors === 'orange') {
        return "orange such a soft color";
    } else if (colors === 'indigo') {
        return "Why do you like the color indigo?";
    }

}

console.log(analyzeColor);

// random colors


console.log(analyzeColor(colors));

function analyzeColor(color) {
    switch(color) {
        case "blue":
            prompt ("Why blue?");
            break;
        case "yellow":
            prompt ("What do you like about Yellow?");
            break;
        case "orange":
            prompt ("Don't you think Orange is average?");
            break;
        case "indigo":
            prompt ("I like Indigo, what about you?");
    }
}

console.log(analyzeColor(randomColor));