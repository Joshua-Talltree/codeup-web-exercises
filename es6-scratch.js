daysArr = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

for (let day of daysArr) {
    let HTML = `Today's day to talk about is:
    ${day.charAt(0).toUpperCase() + day.slice(1)}`
    console.log(HTML);
}

// Fat arrow: returns function

let sayHello = name => 'Hello, ' + name + '!';

console.log(sayHello('Joshua'));

// basic JavaScript, old way.

function sum(a,b) {
    return a+b;
}
console.log();

// es6, new way.

let sum2 = (a,b) => a+b;

console.log(sum2(1,2));

// function sayHello(name) {
//     if(typeof name === 'undefined') {
//         name = 'World';
//     }
//  return 'Hello, ' + name + '!';
// }

const sayHello2 = (name = "World") => `Hello ${name}`;

console.log(sayHello2("Jayden"));

// const name = 'codeup';
//     const age = 6;
// const person = {
//     name: name,
//     age: age,
// };

// new way
// const person = {name: 'codeup', age: 6};
// const {name, age} = person;
// console.log(name); // 'codeup'
// console.log(age); // 6

const home = {manufacturer: 'KB Homes', age: 5, bedrooms: 5};
const {manufacturer, age, bedrooms} = home;
console.log(manufacturer);
console.log(age);
console.log(bedrooms);