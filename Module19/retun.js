function add(number1, number2) {
    console.log(number1, number2);
    var sum = number1 + number2;

    return sum;
}
var total = add(88, 12);
// console.log('total:', total); 
function bringSingara(money) {
    var singaraPrice = 10;
    var quantity = money / singaraPrice;
    return quantity;
}
var myTaka = 350;
var totalSingara = bringSingara(myTaka);
console.log('totalSingara :', totalSingara); 