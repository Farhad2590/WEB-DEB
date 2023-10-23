// function declaration
// function add(a, b) {
//     const result = a + b;
//     return result;
// }
function add(a, b) {
    return a+b;
}

//function expression
const add2 = function add(a, b) {
    return a+b;
}

//arrow function
const add3 = (a,b) => a +b;


const sum =add3(10, 5);
// console.log(sum);

const difference = (x,y) => x - y;

const multiply = (first, second, third) => first * second * third ;

const getAge = (person) => person.age;
const student = { name: 'abir', age: 45}
const age = getAge(student)
console.log(age);

const getThird = numbers => numbers[2];
const third = getThird([5,9,88,12,19])
console.log(third);

const doubleIt = num => num * 2;

// no parameter
const getPI = () => Math.PI
console.log(getPI());

// large arrow function 
const doMath = (x,y,z) => {
    const sum = x+y+z;
    const mult = x*y*z;
    const result = sum + mult;
    return result;
}