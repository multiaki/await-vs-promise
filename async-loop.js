var todos = [];

async function init() {
    for (let i = 0; i <= 100; i++) {
        var response = await fetch('https://jsonplaceholder.typicode.com/todos/1?cache=' + new Date().getTime());
        response = response.json();
    }
    credentials();
}

function credentials() {
    console.log("All done");
}

init();