const cart = [
    '{ "name": "eraser", "price": 3.45}',
    '{ "name": "notebook", "price": 12.99}',
    '{ "name": "pencil kit", "price": 42.89}',
    '{ "name": "stylus", "price": 7.50}'
]

// challenge: make an array composed of only the price of the products
const products = cart.map(JSON.parse).map(e => {return e.price})
console.log(products)