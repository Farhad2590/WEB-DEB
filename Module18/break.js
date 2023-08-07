// for (var i = 1; i <= 20; i++) {
//     console.log(i);
//     if (i > 10) {
//         break;
//     }
// }
var items = ['Farhad', 'Hossen', 'Akieb', 'Rahat', 'Hossen', 'Abir']
for (var i = 0; i < items.length; i++) {
    var item = items[i];
    console.log(item);
    if (item == 'Akieb') {
        break;
    }
}