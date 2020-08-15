Array.prototype.map2 = function(callback) {
    const result = new Array
    for (let i = 0; i < this.length; ++i) {
        result.push(callback(this[i], i, this))
    }
    return result
}

const cart = [
    '{ "name": "eraser", "price": 3.45}',
    '{ "name": "notebook", "price": 12.99}',
    '{ "name": "pencil kit", "price": 42.89}',
    '{ "name": "stylus", "price": 7.50}'
]

// challenge: make an array composed of only the price of the products
const prices = cart.map2(JSON.parse).map2(e => {return e.price})
console.log(prices)