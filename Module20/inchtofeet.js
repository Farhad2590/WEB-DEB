// function inchToFeet(inches) {
//     const feet = inches / 12;
//     return feet;
// }

// const dadaInches = 144;
// const dadaFeet = inchToFeet(dadaInches);
// console.log(dadaFeet);

function compare(a, b) {
    if (a.toString() === b) {
        return true;
    } else {
        return false;
    }
}
const result = compare(25, 25);
console.log(result);