// // // let age = 21;
// // // let age message = age >= 18 ? "youre n adult" : "youre a miner";

//  let time = 16;
//  let greeting = time < 12 ? "good morning" : "good afternoon";
// console.log("greeting");
// let purchaseAmount = 125;
// let discount = purchaseAmount >= 100 ? 10 : 0;
// console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount/100)}`);
//  let day = 4;
//  switch(day){
//      case 1:
//          console.log('it is Monday');
//          break;
//          case 2:
//          console.log('it is Tuesday');
//          break;
//          case 3:
//          console.log('it is 3rday');
//          break;
//          case 4:
//          console.log('it is 4thay');
//          break;
//          case 5:
//          console.log('it is 5thay');
//          break;
//          case 6:
//          console.log('it is Saturday');
//          break;
//          case 7:
//          console.log('it is Sunday');
//          break;
//          default:
//              console.log(`${day} is not a day`);
//  }

//  let userName = "BroCode";
// // console.log(userName.lastIndexOf("o"));
// userName = userName.trim();
// console.log(userName)
// userName.charAT(0) kuvab nullindal kohal oleva karakteri väärtuse
// userName.indexOf("i") ütleb mitmes on i saab kasutada lastIndexOf ja firstIndexOf
// console.log(userName.lenght) mitu karakterit on?
// let userName = " BroCode"
// userName = userName.trim() eemaldab mingi karakteri
// userName = userName.toUpperCase();
// console.log(userName);
// userName = userName.repeat(3)
// let result = userName.startsWith("");
// userName = userName.replaceAll("o", "0"); vahetab esimese jutumärgisisu komaga eraldatud teise jutumärgisisuga

// userName = userName.padStart(20,"+"); +++++++++++++BroCode(kokku 20 charsi)

// console.log(userName)

// string slicing
// const fullName = "Broseph Code";
// let firstName = fullName.slice(0, fullName.indexOf(" "));
// let lastName = fullName.slice(fullName.indexOf(" "));
// let firstChar = fullName.slice(0, 1);
// let lastChar = fullName.slice(-1);

// console.log(firstName);
// console.log(lastName);
// console.log(fullName);

// const email = "paan-kaur.riives@voco.ee";
// let userName = email.slice(0, email.indexOf("@"));
// let extension = email.slice(email.indexOf("@"), +1);
// console.log(userName);
// console.log(extension); vigane

// let userName = window.prompt("Enter username");
// userName = userName.trim().charAt(0).toUpperCase() + userName.trim().slice(1).toLowerCase();
// console.log(userName);

// while loop

// let loggedIn;
// let userName;
// let userPassword;

// while(!loggedIn) {
//     userName = prompt('Enter user name');
//     userPassword = prompt('Enter password');

//     if(userName === "asd123" && userPassword === "qwerty") {
//         loggedIn =true;
//         console.log("You are logged in");

//     } else{
//         console.log("Wrong credentials, do it again");
//     }
// }

// let loggedIn;
// let userName;
// let userPassword;

//  do{
//     userName = prompt('Enter user name');
//     userPassword = prompt('Enter password');

//     if(userName === "asd123" && userPassword === "qwerty") {
//         loggedIn =true;
//         console.log("You are logged in");

//     } else{
//         console.log("Wrong credentials, do it again");
//     }
// }while(!loggedIn);

// for(let i= 20; i >= 0; i--){
//     console.log(i);
//     if(i == 13){
//         break;
//         // continue;
//     }
// }
// console.log("happy nYear");

// number guessing game

const min = 1;
const max = 100;
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNumber);

let guess;

while(isNaN(guess)){
    guess = parseInt(prompt("Insert an integer 1-100"));
    console.log("you must insert an integer 1-100");

    
}
// if(guess === randomNumber) {
//     alert("you win, yiss!");

// } else if (guess < randomNumber) {
//     alert("your guess is too low!");
//     guess = Number(prompt("Insert an integer 1-100"));
// } else{
//     alert("your guess is too high!")
//     guess = Number(prompt("Insert an integer 1-100"));
// }
do {
    if(guess < randomNumber) {
        alert("your guess is too low");
        guess = Number(prompt("Insert an integer 1-100"));
    } else {
        guess
    }
    
} while(guess === randomNumber);
