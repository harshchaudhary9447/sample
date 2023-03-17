// array
// ordered collection of items is known as array.

let array1 = ["harsh", "chaudhary", "GBU"];
console.log(array1[2]);

//to check the type of array we have to use Array.isarray();
console.log(Array.isArray(array1));

//push-> used to insert element for backside 
array1.push("galgotia");
//console.log(array1);

//pop-> used to remove element for backside
array1.pop();
//console.log(array1);

//unshift-> used to enter the element form start
array1.unshift("galgotia");
//console.log(array1);

//shift-> used to remove the element form start
array1.shift();
//console.log(array1);

// **NOTE** unshift and shift is slower than push and pop 

//How to clone the array
//Three methods of cloning

// 1-> slicing
let array2 = array1.slice(0);
//console.log(array2);

//2-> concatination
let array3 = [].concat(array1);
//console.log(array3)

//spread operator
let array4 =[...array3];
//console.log(array4);

//Four types of loop 
// *while
// *for of
// *for in
// *for

//Destructoring of the array
let des = ["value1", "value2", "value3"];
let [val1, val2]= des;
console.log(val1,val2);

let newarray =[];
//This is to store rest of the value in the array
[val1,val2,...newarray]= des;
console.log(newarray);
