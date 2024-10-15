// let x = 3.21;
// let y = 2;
// let z;

// z = Math.round(x); ümardab täisarvuks
// z = Math.floor(x); 
// z = Math.ceil(x);
// z = Math.trunc(x);
// z = Math.pow(x, y);
// z = Math.sqrt(x);
// z = Math.log(x);
// z = Math.sin(x);
// z = Math.cos(x);
// let max = Math.max(x, y, z,);
// let min = Math.max(x, y, z,);


// console.log(z);

//RNG

const myButton = document.getElementById("myButton");
const myLabels = document.getElementById("myLabels");

 const min = 1;
 const max = 3;
 let randomNum1;
 let randomNum2;
 let randomNum3;

 rngButton.onclick = function(){
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    myLabel1.textContent = randomNum1;
    myLabel2.textContent = randomNum2;
    myLabel3.textContent = randomNum3;
 }
//  let randomNum = Math.floor(Math.random() * (max - min)) + min;
//  console.log(randomNum);