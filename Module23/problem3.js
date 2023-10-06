function sortMaker(arr) {
    // Check if any element is a negative number
    if (arr.some(element => typeof element === 'number' && element < 0)) {
        return "Invalid";
    }

    // Compare and sort the array accordingly
    if (arr[0] === arr[1]) {
        return "equal";
    } else if (typeof arr[1] === 'number' && arr[1] > 0) {
        return arr.sort((a, b) => b - a);
    }
}

// Test cases
console.log(sortMaker([2, 3])); // [3,2]
console.log(sortMaker([4, 2])); // [4,2]
console.log(sortMaker([4, 4])); // equal
console.log(sortMaker([1, 2])); // [2,1]
console.log(sortMaker([4, -2])); // Invalid Input
