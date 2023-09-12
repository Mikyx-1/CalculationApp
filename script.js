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


function chooseRandomOperator(numOperations = ["+", "-", "x", "÷"]){

    let randomOption = parseInt(Math.random()*numOperations.length);
    return numOperations[randomOption];
}


inputResult.addEventListener("keydown", function(event){
    if(event.key == "Enter")
    {
        checkResult();
    }
})

function checkResult()
{
    let userAnswer = eval(inputResult.value)
    let Answer = parseInt(eval(replaceItemInAString(displayNumber.innerText)));
    if (userAnswer == Answer){
        nextQuestion();
    }
}

function nextQuestion(){
    let num1 = parseInt(Math.random()*30);
    let num2 = Math.max(1, parseInt(Math.random()*30));
    let operator = chooseRandomOperator();
    displayNumber.innerText = num1.toString() + " " + operator + " " + num2.toString();
    inputResult.value = "";
}

