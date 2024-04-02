#! /usr/bin/env node

import inquirer from "inquirer";

// 01) Computer will generate a random number

// 02) User input for guesting number

// 03) Compare user input with Computer generated number and show result 

const randomNumber1 = Math.floor(Math.random() * 10); //   (in this condition: Minimum = 0 to Maximum = 9)
console.log(randomNumber1);
// in Print: 9 / 1 / 4 / 6 etc 
//                if   
const randomNumber2 = Math.floor(Math.random() * 6 + 1); //   (in this condition: Minimum = 0 to Maximum = 9 ,   + 1)
console.log(randomNumber2);
// in Print: 8 / 3 / 5 / 10 etc

const randomNumber = 1-6;

const answers = await inquirer.prompt([
{
    name: "userGuessedNumber",
    type: "number",
    message: "Please guess a number between 1-6:",
},                                   
]);
console.log(answers);   
if(answers.userGuessedNumber === randomNumber){
console.log("Congratulations! you guessed right number.");  // and if we guess expect number 1-6 (randomNumber then in print: Congratulations! you guessed right number.
} else {
    console.log("you guessed wrong number.");               // if we guess except number 1-6 then in print:  you guessed wrong number. 
};