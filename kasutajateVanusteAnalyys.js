const users = [
  { name: "John", age: 25 },
  { name: "Alice", age: 30 },
  { name: "Bob", age: 20 },
  { name: "Jane", age: 35 },
  { name: "Tom", age: 40 },
  { name: "Sara", age: 29 },
  { name: "Paan", age: 13 },
];
// Kasuta filter, et luua uus nimekiri kasutajatest, kes on vanemad kui 25 aastat.

const usersOld = users.filter((user) => user.age > 25);
console.log(usersOld);

//Kasuta map, et muuta iga kasutaja objekti nii, et see sisaldab lisaks nimele ja
//vanusele ka uut välja isAdult, mis on tõene, kui kasutaja on täisealine (18 ja vanem).

const usersAdult = users.map((user) => ({
  ...user,
  isAdult: user.age >= 18,
}));
console.log(usersAdult);

//Kasuta forEach, et kuvada konsoolis iga kasutaja nimi 
//ja tema täiskasvanustatus (kasutades isAdult välja).

usersAdult.forEach(user => {
    console.log(`${user.name} is ${user.isAdult ? 'adult' : 'miner'}.`);
});

//Kasuta reduce, et arvutada kõigi kasutajate keskmine vanus.

let usersAverage = users.reduce((acc, user) => acc + user.age, 0) / users.length;

console.log(usersAverage);

//Kirjuta järgmised funktsioonid:
//isOlderThan25: funktsiooniväljend, mis võtab argumendiks kasutaja objekti ja tagastab tõeväärtuse,
// kas kasutaja on vanem kui 25 aastat.

function isOlderThan25(user) {
    return user.age > 25;
} users.forEach(user => {
    console.log(isOlderThan25(user));
});

//addIsAdultField: funktsiooniväljend, mis võtab argumendiks kasutaja objekti ja lisab sinna isAdult välja,
// mis on tõene, kui kasutaja on vanem kui 18 aastat.

function addIsAdultField(user) {
    user.isAdult = user.age > 18;
    return user;
      
}
const usersAddAdult = users.map(addIsAdultField);
console.log(usersAddAdult);

//logUser: funktsiooniväljend, mis võtab argumendiks 
//kasutaja objekti ja kuvab tema nime ja täiskasvanustaatuse.

function logUser(user) {
  return {
    name: user.name,
    isAdult: user.isAdult
  };
}
console.log(users.map(logUser));