// spread on object
const employee = {name: 'Maria', salary: 1233.33}
const clone = {active: true, ...employee}
console.log(clone)

// spread on array
const groupA = ['John', 'Peter', 'Ana']
const groupB = ['Penelope', 'Philip', ...groupA]
console.log(groupB)
