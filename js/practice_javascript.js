"use strict";

var Raiders = {
    games: 16,
    wins:9,
    position: ["QB", "RB", "WR", "OL", "DL", "LB", "CB", "SS", "FS"]
}

Raiders.gamesWon = function() {
    this.games = 2;
    this.position.forEach(function(position) {
        console.log("I won with " + position)
    })

    console.log(this)
}

Raiders.gamesWon()

function isEven(number) {
    return number % 2 === 0;
}

var myNumber = prompt("What is my number?")
if (typeof parseFloat(myNumber) === "number") {
    myNumber = parseFloat(myNumber);
    if(isEven(myNumber)) {
        alert("My number is even.");
    } else {
        alert("My number is odd")
    }
}
var myKids = ["Juliana", "Joshua Jr.", "Joseli", "Jordin", "Jayden"];

myKids.forEach(function (kids,i, arr) {
    console.log("Kids: " + kids);
    console.log("Index " + i);
    console.log("Full Array " + arr);
})

