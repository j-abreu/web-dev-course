// literal notation
const obj1 = {}
console.log(obj1)

// Object function in JS
console.log(typeof Object, ',', typeof new Object)
const obj2 = new Object
console.log(obj2)

// creating object wiht constructor functions
function Product(name, price, discount) {
    this.name = name // 'this' makes the attribute public. price and discount will be private attributes
    this.getPriceWithDiscount = () => {
        return price * (1 - discount)
    }
}

const p1 = new Product('shampoo', 18.99, 0.10) // instantianting objects of Product
const p2 = new Product('stylus', 1.99, 0.25)

console.log(p1, 'it\'s a(n)', typeof p1) // visualizing object and its type 
console.log(p1.name) // accessing a public attribute
console.log(p2.getPriceWithDiscount()) 

// creating object with factory functions

function createEmployee(name, salary, faults) {
    return {
        name,
        salary,
        faults,
        getSalary() {
            return (salary/30) * (30 - faults)
        }
    }
}

const employee1 = createEmployee('Ana', 2000, 3)
const employee2 = createEmployee('Marcos', 2000, 5)
console.log(employee1.getSalary(), employee1.salary)

// Object.create

const daugther = Object.create(null)
daugther.name = 'Lisa'
console.log(daugther)

// a well-known function that returns an object
const fromJSON = JSON.parse('{"info": "a JSON object"}')
console.log(fromJSON)
console.log(fromJSON.info)