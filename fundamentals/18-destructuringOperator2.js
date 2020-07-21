const [a] = [10, 11]
console.log(a)

const [a1, , a3, a4, , , a7 = 0] = [1, 2, 3, 4, 5, 6]
console.log(a1, a3, a4, a7)

const [, [, grade]] = [[1, 2, 3], [4, 5, 6]]
console.log(grade)