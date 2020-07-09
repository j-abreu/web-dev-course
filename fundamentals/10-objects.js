const obj1 = {} // empty object
obj1.name = 'ultra mega smartphone'
obj1.price = 39.98
obj1['mega off'] = 3.99 // not a good practice
obj1['off'] = 2.99

console.log(obj1)
console.log('name of obj1:', obj1['name'])
console.log('name of obj1:', obj1.name)

// other way to declare an object

const obj2 = {
    name: 't-shirt',
    price: 59,
    obj3: { // object within other object
        name: 'tag',
        color: 'white'
    }
}

console.log('obj2: ', obj2)
