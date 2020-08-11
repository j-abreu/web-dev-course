// factory functions return, in general, a object

function createProduct(name, price) {
    off = 0.3
    return {
        name,
        price,
        off,
        code: 11

    }
}

const p1 = createProduct('shampoo', 19)
console.log(p1)