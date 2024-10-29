/*const temperature = prompt(
  "Convert Celsius to Fahrenheit and vice versa: begin with C or F followed by a temperature"
);
const firstLetter = temperature[0];
// console.log(firstLetter);
let notFirstLetter = parseFloat(temperature.slice(1));
if (firstLetter === "c" || firstLetter === "C") {
  notFirstLetter = (notFirstLetter * 9) / 5 + 32;

  alert(temperature + " is " + notFirstLetter + " F");
} else if (firstLetter === "f" || firstLetter === "F") {
  alert(temperature + " is " + ((notFirstLetter - 32) * 5) / 9 + " C");
} else {
  alert("Please begin conversion with a 'C' or 'F'");
}*/
// see pole veel funktsioon
/*
let userInput = prompt(
  "Convert Celsius to Fahrenheit and vice versa: begin with C or F followed by a temperature"
);
let firstLetter = userInput[0];
let notFirstLetter = parseFloat(userInput.slice(1));
function convertToF() {
  let toF = (notFirstLetter * 9) / 5 + 32 + " F.";
}
function convertToC() {
  let toC = ((notFirstLetter - 32) * 5) / 9 + " C.";
}

if (firstLetter === "c" || firstLetter === "C") {
    alert(toF);
}
*/

let userInput = prompt("Convert Celsius to Fahrenheit and vice versa: begin with C or F followed by a temperature");
let firstLetter = userInput[0].toLowerCase(); // Convert to lowercase for case-insensitive comparison
let temperature = parseFloat(userInput.slice(1));

function convertToF(celsius) {
  return (celsius * 9/5) + 32;
}

function convertToC(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}

if (firstLetter === "c") {
  let fahrenheit = convertToF(temperature);
  alert(fahrenheit + " F");
} else if (firstLetter === "f") {
  let celsius = convertToC(temperature);
  alert(celsius + " C");
} else {
  alert("Invalid input. Please enter 'C' or 'F' followed by a temperature.");
}
//    gemini soovitus