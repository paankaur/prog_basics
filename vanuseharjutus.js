let age = prompt("sisesta oma vanus");
while (isNaN(age) || age === "") {
  age = prompt("palun sisesta ainult numbrid vanuse jaoks:");
}
if (age >= 7 && age <= 16) {
  alert("käid põhikoolis");
  alert("mine sööma kell 10");
} else if (age >= 17 && age <= 20) {
  alert("käid gümnaasiumis");
  alert("mine sööma kell 11");
} else if (age > 20) {
  alert("oled täiskasvanu");
  alert("mine sööma kell 12");
} else if (age <= 6) {
  alert("oled liiga noor");
  alert("sulle me süüa ei paku");
}
console.log("sinu vanus on " + age);
