let num1 = 10;
let num2 = 2;
let operator = "1";
switch (operator) {
  case "+":
    console.log(num1 + num2);
    break; // is used to terminate the switch if case match
  case "-":
    console.log(num1 - num2);
    break;
  case "*":
    console.log(num1 * num2);
    break;
  case "/":
    console.log(num1 / num2);
    break;
  default:
    console.log('Invalid Operator');
}
