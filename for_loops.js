"use strict";

// 2. create a for loop that multiplies 7 by numbers 1 - 10.

var result = 'n';
var num = 7;

function showMultiplicationTable(j) {
    for (var i = 1; i < 11; i++) {
        var n1 = j * i;
        console.log(num + " x " + i + " = " + n1);

    }

}

showMultiplicationTable(num)

// 3. Use for loop to create random number between 20 and 200

// This is how you get a random number between 50 and 100
// var ranNum = Math.floor(Math.random() * 180) + 20;
// // This expression will generate a random number between 1 and 5
// Math.floor(Math.random() * 5) + 1;

for (var num1 = 0; num1 < 10; num1++) {
    var ranNum = Math.floor((Math.random()* 180) +20);
    if (ranNum % 2 !== 0) {
        console.log(ranNum + " is odd");
    } else { (ranNum % 2 === 0);
        console.log(ranNum + "" + " is even");
    }


}

// 4. Create a for loop that uses console.log to create the output shown below.

var i,j

for(i=1;i<=10;i++) {
    console.log(i);
{
    for(j=1;j<=i;j++);
        console.log(j);

}

}

// 5. Create a for loop that uses console.log to create the output shown below.


for (var n2 = 1; n2 < 10; n2++) {
    var string = n2.toString();
    console.log(Number(string.repeat + n2));
}
for (var n3 = 100; n3 > 0; n3--) {
    if (n3 % 5 === 0) {
        console.log(n3);
    }
}

