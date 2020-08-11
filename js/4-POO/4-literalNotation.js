const a = 1
const b = 2
const c = 3

const obj1 = {a: 1, b: 2, c:3}

const obj2 = {a, b, c} // this way the object's keys are the name of the variable and the values are the values of the variables

console.log(obj1)
console.log(obj2)

const attrName = 'value'
const attrValue = 44

const obj3 = {}
// adding new pairs of key-value in the object
obj3[attrName] = attrValue
console.log(obj3)

// declaring object with value of a variable as a key
const obj4 = {[attrName]: attrValue}
console.log(obj4)


// functions in an object
const obj5 = {
    f1: function(a, b) {
        // ...
    },

    f2() {
        // ...
    }
}
console.log(obj5)

