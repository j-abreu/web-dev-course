console.log(Math.ceil(6.1))

const obj = {}
obj.name = 'ball' // use point notation whenever possible
//obj['name'] = 'house'
console.log(obj.name)

// functions can store attributes and other fucntions
function Obj(name) {
    this.name = name
    this.ex = function() {
        console.log('function within another')
    }
}

const obj2 = new Obj('chair')
const obj3 = new Obj('table')

console.log(obj2.name)
console.log(obj3.name)
obj3.ex()