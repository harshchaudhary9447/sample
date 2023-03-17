//Nested function -> function inside function

function app()
{
    //function declaration method
    function call()
    {
        console.log("Calling");
    }
    //function expression
    const dialing =function()
    {
        console.log("Dialing");
    }
    //arrow function

    const call_ended = () =>
    {
        console.log("Call ended");
    }

console.log("Entering inside dial pad");
//Calling function inside function
dialing();
call();
call_ended();
}

//Calling outer most function
app();