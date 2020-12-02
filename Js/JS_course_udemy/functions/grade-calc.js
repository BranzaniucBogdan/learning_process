// students score, total D score
// 15/20 -> you got a C (75%)! 
// A 90-100 , B 80-89, C 70-79, D 60-69, F 0-59 

let gradeCalc = function (studentScore = 0, totalScore = 20, percentage = 10) {
    let grade = ''
    percentage = (studentScore / totalScore) * 100

    if (percentage >= 90) {
        grade = 'A'
    } else if (percentage >= 80) {
        grade = 'B'
    } else if (percentage >= 70) {
        grade = 'C'
    } else if (percentage >= 60) {
        grade = 'D'
    } else {
        grade = 'F'
    }

    return `${studentScore}/${totalScore} -> you got a ${grade} (${percentage}%)`
}
student1 = gradeCalc(18)
console.log(student1)