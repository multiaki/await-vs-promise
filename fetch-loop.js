var todos = [];
var count = 100;
function init() {
    for (let i = 0; i < count; i++) {
        fetch('http://jsonplaceholder.typicode.com/comments?cache=' + new Date().getTime())
            .then(response => response.json())
            .then(response => {
                todos.push(response);
                credentials();
            });
    }
}


function credentials() {
    if (todos.length < count) return;
    console.log("All done");
    debugger;
}

init();