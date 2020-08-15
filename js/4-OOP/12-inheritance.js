// simulating behavior of operator new

// USING OPERATOR NEW
// constructor function
function Course(name, id) {
    this.name = name
    this.id = id
}

const c1 = new Course('engineering', 5678)
const c2 = new Course('architecture', 98)
console.log(c1, c2)

// SIMULATING OPERATOR NEW  

function novo(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params) // apply function using scope of obj and params as parameters
    return obj
}

const c3 = novo(Course, 'Medicine', 987)
console.log(c3)
