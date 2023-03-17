//some method ->
const numbers =[3,5,8,9];
//kya koi variable hai jo even hai.
//tho return true.

const s=numbers.some((number)=> number%2===0);

console.log(s);
const user =[
    {id :1, Price: 120},
    {id :2, Price: 140},
    {id :3, Price: 190},
]
function fun(u)
{
    return u.Price>150;
}

const sk=user.some(fun);
console.log(sk);

//Fill method 
// value , start ,end

const myArray = new Array(10).fill(0);
console.log(myArray);

const num =[3,5,8,9,45];

