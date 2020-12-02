// Lexical Scope (Static Scope)
// Global Scope - Defined outside of all code blocks
// Local Scope - Defined inside a code block

// In a scope you can access variables defined in that scope, 
// or in any other parent/ancestor scope

//Global Scope (varOne)
////Local Scope (varTwo)
//////Local Scope (vatFour)
////Local Scope (varThree)
let varOne = 'VarOne'

if (true) {
    console.log(varOne)
    let varTwo = 'varTwo'
    console.log(varTwo)
    if (true) {
        let varFour = 'varFour'
    }
}

if (true) {
    let varThree = 'varThree'
}
console.log(varTwo)