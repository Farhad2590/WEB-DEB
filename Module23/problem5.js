function canPay(changeArray, totalDue) {
    if (changeArray.length === 0) {
        return false;
    }

    const retailAmount = changeArray.reduce((sum, note) => sum + note, 0);
    return retailAmount >= totalDue;
}

// Test cases
const retailNotes = [1, 2, 5];
const totalDue = 10;
console.log(canPay(retailNotes, totalDue));  // Output: true

const retailNotesEmpty = [1, 5, 5];
const chipPriceEmpty = 10;
console.log(canPay(retailNotesEmpty, chipPriceEmpty));  // Output: false
