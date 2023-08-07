var numbers = [45, 78, 72, 10, 45, 80, 90, 65, 20, 10, 654, 87]

for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > 50) {
        continue;
    }

    console.log(number);
}