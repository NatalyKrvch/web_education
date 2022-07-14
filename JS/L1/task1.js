"use strict"

let op = prompt("Choose one of four operations:\n +  -  *  /");

let number1 = prompt("Enter first number");

let number2 = prompt("Enter second number");

number1 = Number(number1);
number2 = Number(number2);

if (!number1 || !number2) {
    console.log("Error. Not a number");
} else {

    function calc(op, number1, number2) {
        switch (op) {
            case "+": return number1 + number2
                break;
            case "-": return number1 - number2;
                break;
            case "*": return number1 * number2;
                break;
            case "/": return number1 / number2;
                break;

        }

    }

    if (op != "+" && op != "-" && op != "/" && op != "*") {
        console.log("Error. Invalid operation");
    } else {
        console.log(calc(op, number1, number2));
    }

}