// constructor function
function myObj() {}

const obj1 = new myObj // instances of the function, which are objects
const obj2 = new myObj
console.log(typeof myObj)
console.log(typeof obj1)
console.log()

console.log(myObj.prototype)
console.log(obj1.__proto__ === obj2.__proto__) // instances of the functions have the same prototype
console.log(obj1.__proto__ === myObj.prototype)

myObj.prototype.name = 'Ana' // defining attributes in the prototipe of myObj
myObj.prototype.speak = function() {console.log(`hello my name is ${this.name}`)}

obj1.speak() // instances of that object can access these attributes too
obj1.name = 'Raphael' // when an attribute is overwrote in a son-object, the attribute in the father-object stays the same
obj1.speak()
obj2.speak()

// creating a new object that isn't an instace of myObj
const obj3 = {}
console.log(obj3.__proto__ === obj1.__proto__) // obj3 and obj1 don't have the same prototype

// we can make it though
obj3.__proto__ = myObj.prototype
console.log(obj3.__proto__ === obj1.__proto__) // now obj3 and obj1 have the same prototype

obj3.name = 'obj3'
obj3.speak()

//see file 10-inheritance.PNG
