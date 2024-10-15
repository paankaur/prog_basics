let age = prompt("mis su vanus on");
if (age <= 10) {
  console.log("Oled laps");
} else if (age <= 19) {
  console.log("Oled Tee Naager");
} else if (age > 19) {
  console.log("Oled täiskasvanu");
}
let puuVili = prompt("mis su lemmik puuvili on?");
switch (puuVili) {
  case "õun":
    console.log("õun on väga popp asi");
    break;
  case "banaan":
    console.log("banaan on väga hea valik aga see pole puuvili");
    break;
  case "pirn":
    console.log("pirni mina näiteks ei kannata süüa");
    break;
  case "ploom":
    console.log("ploom on hea valik");
    break;
  default:
    console.log("imelik valik, pole popp vili");
}
let soodus = (age <= 18) ? "Saad soodustust" : "pead ostma täispileti";
console.log(soodus);