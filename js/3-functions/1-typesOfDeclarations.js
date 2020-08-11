// function declaration allows calling before the declaration
console.log(sum(3, 6))

// function declaration
function sum(a, b) {
    return a + b
}

// function expression
const sub = function (a, b) {
    return a - b
}
console.log(sub(3, 5)) 

// named function expression
const multi = function multi(a, b) {
    return a * b
}
console.log(multi(2, 5))