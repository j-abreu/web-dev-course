// Java Script Object Notation is a textual format widely used
const obj = {a: 1, b: 2, c: 3, sum() {return a + b + c}}
console.log(JSON.stringify(obj)) // object to JSON (functions are ignored)

console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }')) // JSON to object

const json = `{
    "a": 1,
    "b": 2.4,
    "c": "string",
    "d": {
        "object": 123,
        "a": "kkkk"
    },
    "e": [1, 2, 3, 4]
}`
console.log(JSON.parse(json))