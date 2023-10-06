function matchFinder(firstString, secondString) {
    // Check if the secondString is empty or not a string
    if (typeof secondString !== 'string' || secondString.length === 0) {
        return false;
    }

    // Check if the secondString is found in any part of the firstString
    return firstString.includes(secondString);
}

// Test cases
console.log(matchFinder("John Doe", "ohn")); // true
console.log(matchFinder("JavaScript", "Code")); // false
console.log(matchFinder("Peter Parker", "Peter")); // false
console.log(matchFinder("Peter Parker", "pet")); // false

