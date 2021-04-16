// tagged tamplates - it processes a template inside a function
function tag(parts, ...values) {
    console.log(parts)
    console.log(values)
    return 'another string'
}

const name = 'John'
const situation = 'approved'

console.log(`${name} is ${situation}.`)

console.log(tag `${name} is ${situation}.`)

// using tagged template
function toReal(parts, ...values) {
    console.log(parts)
    const res = []
    values.forEach((val, index) => {
        val = isNaN(val) ? val : `R$${val.toFixed(2)}`
        res.push(parts[index], val)
        if (values.length-1 == index) res.push(parts[index+1])
    })
    return res.join('')
}

const price = 24.4
const priceTranche = 24/3 - 5
console.log(toReal `1x ${price} or 3x ${priceTranche}!!!`)
