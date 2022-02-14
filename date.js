
const myFav = new Date('1971-12-16');
// console.log(myFav);

//

const anotherDate = new Date(1998,12,20,08,46,48,50);
// console.log(anotherDate);


if(myFav.getTime() < anotherDate.getTime()){
    console.log('The is time running');
}
