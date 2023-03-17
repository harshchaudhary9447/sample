//variable type can be checked with the help of typeof keyword

//string type
let new_str= "harsh";
let new_int = 24;
console.log( typeof new_str);

//by adding empty string to int variable we can typecast int to string
new_int = 24+"";
// or using String() function we can change int to string
console.log(typeof new_int);

// we can change string to int by adding + sign to string 
new_str = +new_str;
console.log(typeof new_str);

