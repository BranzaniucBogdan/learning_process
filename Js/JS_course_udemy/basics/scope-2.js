///////////////Variable shadowing

//global
////local
//////local
////local

//let name = 'Andrew'
if (true) {
    //let name = 'Mike'
    if (true) {
        let name = 'Jen'
        console.log(name)
    }
}
if (true) {
    console.log(name)
}

//leak problem
// declaring a variable whithout let in the global scope from a child scope
// that needs to be declared