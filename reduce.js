// Reduce -> It is an array method to short the array 
//reduce method contain two things accumulator and current value


const numbers =[12,3,124,11];

const sum = numbers.reduce((accumulator, currentvalue)=>{
return accumulator+currentvalue;
},0);

console.log(sum);

//  accumulator     current value       return
//  12(default)         3(default)          15
//  15(copy return value)   124             139
//  139                     11              150


const cart =[
    {productID : 1, productname : "Mobile", price : 12000},
    {productID : 3, productname : "T.V", price : 11000},
]
const cout = cart.reduce((a,b)=> {
    return a+b.price;
},0);

console.log(cout);

//Sort -> javascript sort the array as a string.
const arr =[120,45,1,567,78];
arr.sort();

console.log(arr);
  
//Sort method for integer.

arr.sort((a,b)=>{
    return a-b;
});
console.log(arr);




