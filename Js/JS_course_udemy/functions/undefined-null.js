//undefined for variable

let name = 'Jen'
if (name === undefined) {
    console.log('Please provide a name')
} else {
    console.log(name)
}

// undefined for function arguments
// undefined as the function return default value
let square = function (num) {
    return num
}
let result = square()
console.log(result)

//Null as assigned value
let age = 27

age = null
console.log(age)