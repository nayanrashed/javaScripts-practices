//function declaration
function add(a, b) {
    return a + b;
}

// function Expression
const add2 = function (a, b) {
    return a + b;
}

// arrow function
const add3 = (a, b) => a + b;
const multiply = (a, b) => a * b;
const sum = add3(5, 90);
console.log(sum);
const multy = multiply(3, 3);
console.log(multy);
