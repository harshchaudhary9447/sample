// object are reference type
// object contain key value pairs
// object is more significant 
// object is used for real world identity

// create an object 

const obj = {Name : "Harsh", Age :22};
console.log(obj);

//how to access data form object
console.log(obj.Name);

//insert key value pair
obj.gender = "Male";

//Dot notation and braket notation
 const key ="email";
 const obj2 = {Name : "Harsh", Age :22, Gender : "Male"};
 //obj2.key = "hchaudhary@150203@gmail.com";
 console.log(obj2);

 //by using bracket notation
 obj2[key]= "hchaudhary@150203@gmail.com";
 console.log(obj2);

//just random question

 const key1 = "objv1";
 const key2 = "objv2";

 const val1 ="Harsh";
 const val2 = "Abhishek";

 const obj3 ={};
 obj3[key1]=val1;
 obj3[key2]= val2;

 console.log(obj3);

 // iteration in objects 
 for(let key in obj3)
 {
    console.log(`${key} : ${obj3[key]}`); 
 }
