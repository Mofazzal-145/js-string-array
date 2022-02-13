const products = [
    'Dell laptop 1tb 3rd generation',
    'Asus x 556u 7th generation laptop',
    'Samsung A30s mobile phone',
    'Purple color pen on the laptop table',
    'my roomate has shawomi Phone',
    'I want to Buy a new Laptop',
    'I need a new brand i-Phone'
];

//const searching = 'laptop';
// const searching = 'dell';
const searching = 'phone';

// indexOf


// ======== for indexOf()

const output = [];
for(const product of products){
    if(product.toLowerCase().indexOf(searching.toLowerCase()) != -1){
        //output.push(product);
    } 
}

//console.log(output); 

// ======for includes

for(const product of products){
    if(product.toLowerCase().includes(searching.toLowerCase())){
       // output.push(product);
    }
}

//console.log(output);

// === for startsWith()

/* for (const product of products){
    if(product.toLowerCase().startsWith(searching.toLowerCase())){
        output.push(product);
    }
}

console.log(output); */


// for endsWith ()
for (const product of products){
    if(product.toLowerCase().endsWith(searching.toLowerCase())){
        output.push(product);
    }
}

console.log(output);