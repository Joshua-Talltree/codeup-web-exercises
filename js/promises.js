// Date of last "Commit"

const url = 'https://api.github.com/users/USERNAME/events/public';
const events = '/events';

const getLastCommitDate = (username) => {
    let token = `token ${GITHUB_API_KEY}`;
    console.log(token);
    return fetch(url + username + events, {headers: {'Authorization': token}})
}
let lastCommitPromise = getLastCommitDate("Joshua-Talltree")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        return data.filter(event => event.type === "PushEvent")
    })
    .then(data => {
        console.log(pushEvent[0].created_at);
    })

console.log(getLastCommitDate("Joshua-Talltree"));

// Function named "Wait"

const wait = (ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
        reject();
    })

}

wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));



// let gitUserNames = getThoseGitUserNames();
// getThoseGitUserNames().then( users => {
//     console.log(users.length);
//     users.forEach( userObj => {
//         console.log(userObj.commit);
//     });
// })