function cubeNumber(input) {
    if (typeof input === 'number') {
        return input ** 3; // Cubing the input
    } else {
        return "Input is not a valid number";
    }
}

// Test cases
console.log(cubeNumber(3)); // Output: 27
console.log(cubeNumber(4)); // Output: 64
console.log(cubeNumber("please type a integer")); // Output: Input is not a valid number
