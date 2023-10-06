// function functionname(parameters) {
//     //function body
//     //returm
// }

function getTotal(assignmet1, assignmet2, assignmet3) {
    const total = assignmet1 + assignmet2 + assignmet3;
    const average = total / 3;
    return average;
}

const assignmet1Marks = 60;
const assignmet2Marks = 57;
const assignmet3Marks = 58;

var myAverage = getTotal(assignmet1Marks, assignmet2Marks, assignmet3Marks);
console.log('my average so far:', myAverage);