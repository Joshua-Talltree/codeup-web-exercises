const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


//TODO: Create a file named map-filter-reduce.js in your js directory and copy the users data below into it.

//DONE!

//TODO: Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

let langs = users.filter(it => it.languages.includes('php'));

// let langsES6 = users.filter(user => user.languages.length >= 3)
console.log(langs);


//TODO: Use .map to create an array of strings where each element is a user's email address

let usersEmail = users.map(function(uea){
    return uea.email;
});

console.log(usersEmail);

//TODO: Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

let yearsOfExp = users.reduce(function(total,yoe){
    return total += yoe.yearsOfExperience;
}, 0);
console.log("The total number of years of experience is: " + yearsOfExp);
console.log("The average of the years of experience is: " + yearsOfExp / users.length);


//TODO: Use .reduce to get the longest email from the list of users.

let emailLength = users.reduce((currentLongest, user) => user.email.length > currentLongest.email.length ? user : currentLongest, users[0]);
console.log(emailLength.name + " has the longest email address, with: " + emailLength.email);

//TODO: Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

// let userNames = users.reduce(listOfNames, user) => users.length, "The Users are: ") {
//     return [...names, users.name]
// }, []);

let userNames = users.reduce(function(name, val, index) {
    let comma = users.length ? ",": "";
    return name + comma + val.name;
}, "");
console.log("Users: " + userNames);


