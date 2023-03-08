# Solution 2itesting Coding Challenge


###### The solution for the above problem is completed in JavaScript


## Problem

In a language of your choice, using all best practice principles you’re aware of, could you please provide code that reads a list of 10 numbers ranging between 1 to 100. Assuming there are 4 duplicates in the list of numbers, the output should remove the duplicates and sort the remaining numbers in descending order. Please state any assumptions you’ve made.

### Solution is provided in sortDescSol.js



### Explanation

In the code, I defined a function removeDuplicatesAndSortDescending that takes an array of numbers as input. We assume that the input array contains 10 numbers ranging between 1 to 100, and that there are 4 duplicates in the array. The function first removes duplicates from the input array using a Set. Then, it sorts the resulting array in descending order using the sort method with a custom comparison function. Finally, the function returns the sorted array.

1. I have also provide an example usage of the function with a sample input array containing 10 numbers with 4 duplicates, and output the resulting sorted array to the console.

2. I assumed that the input array contains only numbers and that the input numbers are within the given range. I also assumed that the function should only remove exact duplicates (i.e., numbers that appear more than once in the input array), and not remove similar numbers (e.g., 1 and 1.0 are not considered duplicates).

3. To ensure consistency, I used a consistent naming convention for the function and variable names, and added comments to explain what each part of the code is doing.

4. I made the function reusable by defining it as a standalone function that can be called from other parts of the code.

Finally, I will upload the code to GitHub to make it easily accessible and shareable.

###### To run the code use ctrl+option+N