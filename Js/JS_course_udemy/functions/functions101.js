let greetUser = function () {
    console.log('Welkome user!')
}

greetUser()

let square = function (num) {
    let result = num * num
    return result
}

let value1 = square(3)
let value2 = square(10)

console.log(value1)
console.log(value2)

//challenge Area

// convertFahrenheitToCelsius

let convertFahrToCelsius = function (Fahrenheit) {
    let celsius = (Fahrenheit - 32) * 5 / 9 + 'C'
    return celsius
}
let temp1 = convertFahrToCelsius(68)
let temp2 = convertFahrToCelsius(32)

console.log(temp1)
console.log(temp2)
