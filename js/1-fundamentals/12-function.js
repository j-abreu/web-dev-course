console.log(typeof Object)

class Product {}
console.log(typeof Product)

// functio without return
function printSum(a, b) {
    console.log(a + b)
}

printSum(2, 3)
printSum(2) // sum 2 with undefined and results in a NaN
printSum(2, 8, 4, 5, 6) // take the first two
printSum() // undefines + undefined = NaN

// function with return

function sum(a, b=3) {
    return a + b
}

console.log(sum(2, 5))
console.log(sum(2)) // the funtion uses the default value of b




