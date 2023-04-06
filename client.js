/**
 * #1 Hobbies
 * ----------
 * 1. Create an array of group member hobbies
 * 2. Write a loop that logs out each hobby
 * 3. After the loop, log out the total number of
 *    hobbies
 */
 let hobbies = ['video games', 'cooking', 'exercising', 'restaurants'];
 for (let hobby of hobbies){
    console.log(hobby)
 }

// Example output
// 1. swimming
// 2. board games
// 3. painting
// Total hobbies: 3

/**
 * #2 Colors
 * ---------
 * 1. Create an array of colors as strings
 *    (include the color 'teal' at least once)
 * 2. Create a variable tealCount
 * 3. Write a loop that counts the number of times teal 
 *    is in the array
 * 4. Output the array and number of times teal was found
 */
let colors = [ 'blue', 'green' , 'teal']
console.log(colors);
let tealCount=[2];
for (let tealCount of colors){
    console.log(tealCount);
}
// Example output
// green, red, teal, orange, teal
// Teal was found 2 times


/**
 * #3 Even & Odd
 * -------------
 * 1. Create an array of numbers (at least 5 numbers)
 * 2. Create variables oddNumbers and evenNumbers (empty arrays)
 * 3. Write a loop that puts all the odd numbers in the oddNumbers 
 *    array and even numbers in the evenNumbers array.
 * 4. Output the original array, odd number array and even number array
 */
let Numbers = ['1','2','3','4','5'];
console.log(Numbers);
let oddNumbers =[];
let evenNumbers = [];
for (let i = 0; i < Numbers.length; i++) {
    if ((Numbers[i] % 2) != 1)
    evens.push(Numbers[i]);
    console.log(evenNumbers);
}
else {
    odd.push(Numbers[i]);
    console.log(oddNumbers);
}


    //console.log;g
// Example output
// 3, 7, 2, 8, 11, 4, 2
// Odd 3, 7, 11
// Even 2, 8, 4, 2


/**
 * #4 Flipping Switches
 * --------------------
 * 1. Create an array of boolean values (some true and some false)
 * 2. Create a variable toggled (empty array)
 * 3. Write a loop that adds the opposite value to the toggled array
 * 4. Output both arrays
 */

let boolean =['true', 'false' ,'false','true'];
console.log(boolean);
let emptyArray = [];
console.log(emptyArray);
for(let false of boolean)
// Example output
// true, false, true, true
// Toggled false, true, false, false


/**
 * #5 Remove 0's
 * --------------------
 * 1. Create an array of numbers which has one or more 0's
 *    at the end (e.g. 3, 0, 2, 8, 0, 0, 0)
 * 2. Write a loop that removes 0 from the end of the array
 *    NOTE: You should not need a second array here.
 * 3. Output the array
 */
let Sequence = ['3','0','2','8','0','0','0'];
console.log(Sequence);
for(let i = 0; i < Sequence.length; i++);{
    Sequence.pop();
}
console.log(Sequence);




// Example output
// Before loop 3, 0, 2, 8, 0, 0, 0
// After loop 3, 0, 2, 8
