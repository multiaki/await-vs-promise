var one, two, three, four, five, six, seven, eight;

function init() {
    fetch('https://jsonplaceholder.typicode.com/todos/1?cache=' + new Date().getTime())
        .then(response => response.json())
        .then(response => {
            one = response;
            credentials(response)
        });
    fetch('https://jsonplaceholder.typicode.com/todos/2?cache=' + new Date().getTime())
        .then(response => response.json())
        .then(response => {
            two = response;
            credentials(response)
        });
    fetch('https://jsonplaceholder.typicode.com/todos/3?cache=' + new Date().getTime())
        .then(response => response.json())
        .then(response => {
            three = response;
            credentials(response)
        });
    fetch('https://jsonplaceholder.typicode.com/todos/4?cache=' + new Date().getTime())
        .then(response => response.json())
        .then(response => {
            four = response;
            credentials(response)
        });
    fetch('https://jsonplaceholder.typicode.com/todos/5?cache=' + new Date().getTime())
        .then(response => response.json())
        .then(response => {
            five = response;
            credentials(response)
        });
    fetch('https://jsonplaceholder.typicode.com/todos/6?cache=' + new Date().getTime())
        .then(response => response.json())
        .then(response => {
            six = response;
            credentials(response)
        });
    fetch('https://jsonplaceholder.typicode.com/todos/7?cache=' + new Date().getTime())
        .then(response => response.json())
        .then(response => {
            seven = response;
            credentials(response)
        });
    fetch('https://jsonplaceholder.typicode.com/todos/8?cache=' + new Date().getTime())
        .then(response => response.json())
        .then(response => {
            eight = response;
            credentials(response)
        });
}

function credentials(res) {
    if (!one || !two || !three || !four || !five || !six || !seven || !eight) return;
    console.log("All done");
}

init();