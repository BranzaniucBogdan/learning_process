//Global scope (converFahrenheittoCelsius)
////local scope (fahrenheit celsius)
//////local scope (isFreezing)

let convertFahrToCelsius = function (Fahrenheit) {
    let celsius = (Fahrenheit - 32) * 5 / 9 + 'C'

    if (celsius <= 0) {
        let isFreezing = true
    }

    return celsius
}
let temp1 = convertFahrToCelsius(68)
let temp2 = convertFahrToCelsius(32)

console.log(temp1)
console.log(temp2)

