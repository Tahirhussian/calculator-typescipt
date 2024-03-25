#! /usr/bin/env node
import inquirer from "inquirer";
let answer = await inquirer.prompt([
    { message: "enter your first number", type: "number", name: "firstNumber" },
    { message: "enter your second number", type: "number", name: "secondNumber" },
    {
        message: "select please one opretor",
        type: "list",
        name: "opretor",
        choices: ["+", "-", "x", "/"],
    },
]);
if (answer.opretor === "+") {
    console.log("your answer is", answer.firstNumber + answer.secondNumber);
}
else if (answer.opretor === "-") {
    console.log("your answer is", answer.firstNumber - answer.secondNumber);
}
else if (answer.opretor === "x") {
    console.log("your answer is ", answer.firstNumber * answer.secondNumber);
}
else if (answer.opretor === "/") {
    console.log("your value is", answer.firstNumber / answer.secondNumber);
}
else {
    console.log("select the valid number or opretor");
}
