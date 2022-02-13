const anthem = 'Amar sonar bangla ami tomai valobasi';

// split
const words = anthem.split(' ');
// console.log(words);

//-----
const withoutA = anthem.split('a');
// console.log(withoutA);

// slice 
const smallSlice = anthem.slice(5,13);
//console.log(smallSlice);

// substr
/* const getSub = anthem.substr(11,6);
console.log(getSub); */

// substring 

/* const subString = anthem.substring(11, 17);
console.log(subString); */

// concat 
const first = 'mofazzal';
const second = 'hossain';
// const full = first + second;
const full = first.concat(second).concat('world');
// console.log(full);


//join

const arr = ['allen','balam','chandan','darling'];
//const allJoin = arr.join('');
// const allJoin = arr.join(' ');
//const allJoin = arr.join(',');
 const allJoin = arr.join(', ');
console.log(allJoin);