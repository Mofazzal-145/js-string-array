const numbers = [1, 3, 5, 7, 9, 12, 15, 24, 56, 14, 78];
// number slice
/* const numberSliced = numbers.slice(4,9);
 console.log(numberSliced);
console.log(numbers);
 */
// number splice

/* const numbersSpliced = numbers.splice(4,2);
console.log(numbersSpliced);
console.log(numbers);
 */

const numbersSpliced2 = numbers.splice(4, 3, 45, 22, 33);
console.log(numbersSpliced2);
console.log(numbers);

