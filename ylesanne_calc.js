let numberOne = Number(prompt("Sisesta esimene number"));
let numberTwo = Number(prompt("Sisesta teine number"));
let operation = prompt("kirjuta kas liidame'a'? lahutame's'? korrutame'm'? jagame'd'? paneme esimese numbri teise astmesse'e'? või vaatame jääki'r'?");
switch(operation){
    case "a":
        console.log(numberOne + numberTwo);
        break;
case "s":
    console.log(numberOne - numberTwo);
        break;
case "m":
    console.log(numberOne * numberTwo);
        break;
case "d":
    console.log(numberOne / numberTwo);
        break;
case "e":
    console.log(numberOne ** numberTwo);
        break;
case "r":
    console.log(numberOne % numberTwo);
        break;
default:
    console.log("vajuta juhendijärgseid sisendeid, tee uuesti")
}