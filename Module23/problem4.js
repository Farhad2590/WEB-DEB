function findAddress(obj) {
    const street = obj.street || '__';
    const house = obj.house || '__';
    const society = obj.society || '__';

    return `Street: ${street}\nHouse: ${house}\nSociety: ${society}`;
}

// Example usage:
const input = {
    street: 10,
    house: "15A",
    society: "Earth Perfect"
};

const output = findAddress(input);
console.log(output);
