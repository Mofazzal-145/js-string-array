
/* 
function addNumbers(num1, num2){
    const result = num1 + num2;
    return result;
}

const sum = addNumbers(23,44);
console.log(sum); */

// with arguments

function addNumbers(num1, num2){
    let result = 0;
    for (const num of arguments){
     result = result + num;
    }
   
    return result;
}

const sum = addNumbers(23,44,100,33,50,50);
// console.log(sum);


//======
/* 
function getFullName(first, last){
    const fullName = first + ' ' + last;
    return fullName;
}

const name = getFullName('shakil','ahasan');
console.log(name); */

// with arguments
function getFullName(first, last){
    let fullName = '';
    for(const part of arguments){
      fullName = fullName + part + ' ' ;
    }
    
    return fullName;
}

const name = getFullName('shakil','ahasan','tina','mina','rina');
console.log(name);

