const max = Math.max(6,23,45)
const numbers = [3,5,2,45,5,43,60];
const arrayMax = Math.max(...numbers)
// console.log(max);
// console.log(...numbers);
// console.log(arrayMax);

// use spread operator to coppy 
const nums = [4,5,87,9];
const nums2 = nums;
const nums3 = [...nums]
nums2.push(12);
// console.log(nums2);
// console.log(nums3);

// advanced 
const sonkha = [...nums, 99999]
console.log(sonkha);

