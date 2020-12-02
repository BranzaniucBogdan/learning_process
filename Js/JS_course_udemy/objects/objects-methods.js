
// isvalidPassword
// lenght >8 and it doesn't return the word password

let isValiPdassword = function (password) {
    return password.length > 8 && !password.includes('password')
}
console.log(isValiPdassword('asdfp'))
console.log(isValiPdassword('abc123!@#$%^&'))
console.log(isValiPdassword('asdfpasdfpoijpassword'))

