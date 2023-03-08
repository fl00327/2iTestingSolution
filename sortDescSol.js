// Assumed the input is an array of 10 numbers ranging between 1 to 100.
// Assumed there are duplicates in the input array.

function removeDuplicatesAndSortDescending(numbers) {
  // Useing a Set to remove duplicates from the array.
  const uniqueNumbers = [...new Set(numbers)];

  // Sorted the array in descending order.
  const sortedNumbers = uniqueNumbers.sort((a, b) => b - a);

  return sortedNumbers;
}

// Example usage:
const inputNumber1 = [1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 9];
const inputNumber2 = [24, 18, 18, 12, 12, 39, 39, 82, 82, 90, 98];
const sortedNumber1 = removeDuplicatesAndSortDescending(inputNumber1);
const sortedNumber2 = removeDuplicatesAndSortDescending(inputNumber2);
console.log(sortedNumber1); // 9, 8, 7, 6, 5, 4, 3, 2, 1
console.log(sortedNumber2); // 98, 90, 82, 39, 24, 18, 12