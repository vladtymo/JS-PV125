// -=-=-=-=-=-=-=- Promises -=-=-=-=-=-=-=-

// create promise
const task = new Promise((resolve, reject) => {
    // do some work
    setTimeout(() => {
        console.log("Do hard work!");
    }, 4000);

    // if success - resolve()
    // if error - refect()

    if (Math.random() > 0.5)
        resolve();
    else
        reject();
});

// promise handling
task.then(() => {
    console.log("Everything is good!");
}).catch(() => {
    console.error("Something went wrong!");
});

// -------------- fetch
const api = 'https://api.github.com/users';

fetch(api).then((response) => {
    console.log("Response status: " + response.status);
    return response.json();
}).then((data) => {
    console.log(data);
}).catch(error => {
    console.error(error);
});

console.log("Continue work...");