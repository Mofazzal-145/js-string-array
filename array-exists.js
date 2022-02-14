function megafriend(friends){
    // error handle
    if(Array.isArray(friends) == false){
        return 'Please provide an array';
    }
    //---
    let mega = friends[0];
    for(const friend of friends){
        if (friend.length > mega.length){
            mega = friend;
        }
    }
    return mega;
}


const friends = ['kutub','Lion','shamol','sabbir'];
const allFriend = megafriend(friends);
//console.log(allFriend);

//====
/* 
if(friends.indexOf('Lion') != -1){
    console.log('lion exists');
}
 */

//===

/* if(friends.includes('Lion')){
    console.log('lion exists using includes');
}
 */


//=== concat

const first = [1, 3, 5];
const second = [2, 4, 6];
const combined = first.concat(second);
console.log(combined);
