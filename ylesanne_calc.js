let numberOne = (prompt("Sisesta esimene number"));
if (isNaN(numberOne) || numberOne.trim() === "") {
    console.log("Palun sisesta vaid numbreid, tee uuesti");
}
numberOne = Number(numberOne);

let numberTwo = (prompt("Sisesta teine number"));
if (isNaN(numberTwo) || numberTwo.trim() === "") {
    console.log("Palun sisesta vaid numbreid, tee uuesti");
}
numberTwo = Number(numberTwo);

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
    console.log("Vajuta juhendijärgseid sisendeid, tee uuesti")
}