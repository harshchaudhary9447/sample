 // MAP-> map is used just like for each in array 
 // it provides the index of the array
 // but map can return the new array every time
 // map take input as a call back function.

 const numbers = [4,1,45,12]; 

 function fun(number)
 {
    return number * number;
    
 }

 const sq_n=numbers.map(fun);
 
console.log(sq_n);