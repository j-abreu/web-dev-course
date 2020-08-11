// IIFE -> Immediately Invoked Function Expression

(function () {
    console.log('a IIFE here')
    a = 1
    b = 2
    function sum(a, b) {
        return a + b
    }
    console.log(sum(a, b))
})()