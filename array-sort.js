
/* 
const numbers = [1, 4, 6, 7, 2, 3, 5, 8, 0, 9, 45, 55, 23, 33];
const shortNumbers = numbers.sort();
console.log(shortNumbers);
 */

const numbers = [1, 4, 6, 7, 2, 3, 5, 8, 0, 9, 45, 55, 23, 33];
const shortNumbers = numbers.sort(function(a,b){
    return a - b;
});

console.log(shortNumbers);

const friends = ['mofazzal','mofu', 'jibon','papa', 'ma'];

// for sorted

/* const sortedFriends = friends.sort();
console.log(sortedFriends); */

// for reverse

/* const reverseFriends = friends.reverse();
console.log(reverseFriends);
 */

// for reverse and sorted

/* const sortedReverseFriends = friends.sort().reverse();
console.log(sortedReverseFriends);
 */

const array = ["121", "12", "1", "112", "111"];

console.log(array.sort());


