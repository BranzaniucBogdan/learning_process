let num = 103.499



console.log(num.toFixed(2))


console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

let min = 0
let max = 1
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min

console.log(randomNum)


//challenge area 
// 1-5 - true if correct - false if not orrect

let guess = function (input) {
    let min = 1
    let max = 1
    return input == Math.floor(Math.random() * (max - min + 1)) + min

}

console.log(guess(1))