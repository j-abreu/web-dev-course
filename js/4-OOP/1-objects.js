// object is a dinamic collection of key/value pairs

// creating objects
const obj1 = new Object
obj1.key = 'value' // it creates a new attribute in the object if it doesn't exist, otherwise modify an existing one

obj1['other_key'] = 'other value' // another way of creating/modifying an attribute

console.log(obj1.key)
console.log(obj1)

delete obj1.key // deleting an attribute
delete obj1.other_key 
console.log(obj1) // after deleting the only two existing attributes, the object becomes an empty object


// more complex objects

const car = {
    price: 78000, // a simple attribute, the value is just a integer value
    owners: {     // an attribute whose value is an object
        name: 'Michael',
        age: 87,
        address: {
            company: 'eletrolux',
            city: 'new york',
        }
    },
    drivers: [{ // an attribute whose value is a list of objects
        name: 'Ana',
        age: 24
    }, {
        name: 'Philip',
        age: 43
    }],
    calculateCarInsurance: function() { // an attribute whose value is a function
        // ...
    }
}

// accessing attributes
car.owners.address.city = 'los angeles' // accessing by point notation
car['owners']['address']['company'] = 'some company' // accessing by square brackets notation

console.log(car)

const new_driver = {
    name: 'Raphael',
    age: 21
}

car.drivers.push(new_driver)
console.log(car)

// deleting an attribute
delete car.drivers // it deletes the attribute along with everything in it
console.log(car)

// accessing an unexisting attributes
console.log(car.model) // it returns undefined

// trying to access a property of an unexisting/undefined attribute
console.log(car.model.length) // error, undefined hasn't the property 'length'