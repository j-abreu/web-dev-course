const ferrari = {
    model: 'f40',
    year: 2000
}

const volvo = {
    model: 'v30',
    year: 2019
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ == Object.prototype) // by default, the prototype of an object points to Object.prototype
console.log(volvo.__proto__ == Object.prototype)

console.log(Object.prototype.__proto__) // prototype of Object.prototype is null

// access prototype of an object
console.log(volvo.__proto__)

// acces prototype of a function
console.log(Object.prototype)

function myFunc() {}

console.log(myFunc.prototype)

