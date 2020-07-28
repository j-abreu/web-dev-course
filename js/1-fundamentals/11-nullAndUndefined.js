let value // not initialized
console.log(value)

//console.log(value2) // variable not defined (not declared)

value = null // doesn't pointer to a memory address
console.log(value)
//console.log(value.toString()) // values hasn't toString property

const product = {}
console.log(product.price) // the object exists, but price is not defined
console.log(product) // empty object

product.price = undefined // avoid this
console.log(!!product.price)
console.log(product)

delete product.price // to delete an attribute

//or 
product.price = null // use null to mark a non-valued attribute
console.log(product)

