const actor = {
    name: 'Annanta',
    age: 30,
    phone: '01829313336',
    money: 2540
}

// const {phone} = actor
// const {phone, age} = actor
const {phone, age: boyosh} = actor

// const phone = actor.phone;
// const name = actor.name;
// const money = actor.money;


// console.log(phone);
// console.log(phone);
// console.log(phone);
// console.log(age);
// console.log(age);
// console.log(age);
// console.log(boyosh);
// console.log(boyosh);
// console.log(boyosh);

// array destructing

const numbers = [45,99]
const [first, second] = numbers;
const [x,y] = [12,65];

function doubleThem(a,b) {
    return [a*2,b*2];
} 
const [prothom, ditiyo] = doubleThem(6,9);
console.log(prothom,ditiyo);