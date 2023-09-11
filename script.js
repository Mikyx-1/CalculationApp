const displayNumber = document.getElementById("display1");
const inputResult = document.getElementById("input1");


function replaceItemInAString(string)
{
    string = string.split("");
    for (let i = 0; i < string.length; i++)
    {
        if(string[i] == "x") string[i] = "*";
        else if(string[i] == "÷") string[i] = "/";
    }
    return string.join("");
}


function chooseRandomOperation(numOperations = ["+", "-", "x", "÷"]){

    let randomOption = parseInt(Math.random()*numOperations.length);
    return numOperations[randomOption];

}




console.log(chooseRandomOperation(["+"]));