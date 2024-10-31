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

let userInput = prompt(
  "Convert Celsius to Fahrenheit and vice versa: begin with 'C' or 'F' followed by a temperature"
);
let firstLetter = userInput[0].toLowerCase();
let notFirstLetter = parseFloat(userInput.slice(1));

function convertToF() {
  return (notFirstLetter * 9) / 5 + 32 + " F.";
}
function convertToC() {
  return ((notFirstLetter - 32) * 5) / 9 + " C.";
}

if (firstLetter === "c") {
  alert(notFirstLetter + " Celsius is " + convertToF());
} else if (firstLetter === "f") {
  alert(notFirstLetter + " Fahrenheit is " + convertToC());
} else {
  alert(
    "Please learn to read instructions: conversion starts with 'C' or 'F'.."
  );
}
