function guessTheNumber() {
const min = 1;
const max = 100;
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
// console.log(randomNumber);
let attempts = 0;

while (attempts < 7) {
let guess = parseInt(prompt("Guess a number from 1 to 100"));
if (isNaN(guess)) {
alert("Please enter valid number");
continue;
}
if (guess === randomNumber) {
    alert("GZ! You guessed right in " + (attempts + 1) + " attempts!");
    break;
} else if (guess < randomNumber) {
    alert("Your guess is too low. Your guess was " + guess);
} else {
    alert("Your guess is too high. Your guess was " + guess);
}
attempts++;
}
if (attempts === 7) {
    alert("MASSIVE FAIL!! 7 should be maximum amount of attempts necessary, the correct number was " + randomNumber);
}
}
guessTheNumber();