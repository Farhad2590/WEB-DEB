const glass = {
    name: 'glass', 
    color: 'golden', 
    price:12, 
    isCleaned: true
};

console.log(glass);
const keys = Object.keys(glass)

const values = Object.values(glass)
// console.log(keys);
// console.log(values);

const pair = Object.entries(glass);
// console.log(pair);

// delete glass.isCleaned;
// console.log(glass);

const {isCleaned, ...shortGlasss}  = glass;
// console.log(shortGlasss);

// freeze
Object.freeze(glass);
glass.source = 'Bangladesh'
console.log(glass);