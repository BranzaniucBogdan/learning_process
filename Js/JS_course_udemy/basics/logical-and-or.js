let temp = 110

if (temp >= 20 && temp <= 24) {
    console.log('it is really nice out')
}


if (temp <= 0 || temp > 100) {
    console.log('do not go outside')
}

let isGuestOneVegan = true
let isGuestTwoVegan = false

//are both vegan 'only offer up vegan dishes'
//at least one vegan 'offer up some vegan options among the menue'
//Elsem offer up anything on the menue

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('only offer up vegan dishes')
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('offer up some vegan options among the default menue')
} else {
    console.log('offer up anything on the menue')
}