//Call back function means calling the function inside the function

function fun2(name)
{
    console.log("You are now inside the function 2");
    console.log(`Your Name is ${name}`);
}

function fun1(callback)
{
    console.log("Hello There, Good Morning");
    callback("Amit");
}

fun1(fun2);