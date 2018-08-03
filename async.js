var one, two, three, four, five, six, seven, eight;

async function init() {
    const response_one = await fetch('https://jsonplaceholder.typicode.com/todos/1?cache=' + new Date().getTime());
    one = response_one.json();
    const response_two = await fetch('https://jsonplaceholder.typicode.com/todos/1?cache=' + new Date().getTime());
    two = response_two.json();
    const response_three = await fetch('https://jsonplaceholder.typicode.com/todos/1?cache=' + new Date().getTime());
    three = response_three.json();
    const response_four = await fetch('https://jsonplaceholder.typicode.com/todos/1?cache=' + new Date().getTime());
    four = response_four.json();
    const response_five = await fetch('https://jsonplaceholder.typicode.com/todos/1?cache=' + new Date().getTime());
    five = response_five.json();
    const response_six = await fetch('https://jsonplaceholder.typicode.com/todos/1?cache=' + new Date().getTime());
    six = response_six.json();
    const response_seven = await fetch('https://jsonplaceholder.typicode.com/todos/1?cache=' + new Date().getTime());
    seven = response_seven.json();
    const response_eight = await fetch('https://jsonplaceholder.typicode.com/todos/1?cache=' + new Date().getTime());
    eight = response_eight.json();
    credentials();
}

function credentials() {
    console.log("All done");
}

init();