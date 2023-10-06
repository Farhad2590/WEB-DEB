var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25
}
var penCount = shoppingCart.pen;
var penCount2 = shoppingCart['pen'];
var properties = Object.keys(shoppingCart);
var propertie_Values = Object.values(shoppingCart);

var sunglassCount = 'sunglass';

var sunglassValue = shoppingCart[sunglassCount];

console.log(shoppingCart);
console.log(penCount);
console.log(penCount2);
console.log(properties);
console.log(propertie_Values);
console.log(sunglassValue);