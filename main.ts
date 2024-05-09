import inquirer from "inquirer"


// question#1
let oneMilesIsEqualTo = 1.60934
let kiloMeter = 130
let multiply = oneMilesIsEqualTo * kiloMeter
console.log(`The distance of ${kiloMeter} kms is equal to ${multiply} miles`);


// question#2
function comparedTheInputNumber(userNumber: number) {
  let comparedTheInputNumber = 30;
  let result = userNumber === comparedTheInputNumber
  if (userNumber > comparedTheInputNumber) {
    return "The entered number is greater than the dynamic number value."

  } else if (userNumber < comparedTheInputNumber) {
    return "The entered number is less than the dynamic number value."

  } else {
    return "The entered number is equal to the dynamic number value."

  }

  return result
}
console.log(comparedTheInputNumber(25));

// question#3
let userName: any = await inquirer.prompt({
  name: "name",
  message: "Enter your name",
  type: "input"
})

switch (userName.name) {
  case 'Ahmed':
    console.log("Known friend");

    break;
  case 'Danish':
    console.log("Known friend");

    break;
  case 'Raza':
    console.log("Known friend");

    break;
  default:
    console.log("Unkown friend");



}

// question#4

function setUpTwoDifferentVariables(num1: number, num2: number) {
  let result = num1 + num2
  return result
}
let responce = setUpTwoDifferentVariables(2, 4)
console.log(responce);
console.log(setUpTwoDifferentVariables(2, 5));

//  question#5
function operation(num1: number, num2: number, operator: string) {
  if (num1 && num2 && operator) {
    let result = 0;
    if (operator === "+") {
      result = num1 + num2;
    }
    if (operator === "-") {
      result = num1 - num2;
    }
    return result;

  } else {
    console.log("Invalid opartor");

  }
}
console.log(operation(2, 6, "+"));
console.log(operation(2, 6, "-"));

// question#6
let arrowFunction = (name1: string, name2: string = "Raza") => name1 + name2;
console.log(arrowFunction("Sidra"));

function simplyFunction(name1: string, name2: string = "Raza"): string {
  return name1 + name2
}
console.log(simplyFunction("sidra"));





