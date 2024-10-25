document.write("25.OCT.2024<hr>");

// massiiv ehk array

let kylmkapp = ["juust", "sai"];
document.write(kylmkapp);

kylmkapp.push("vorst"); //adds to end of array
kylmkapp.push("õlu");

kylmkapp.pop(); //removes last
kylmkapp.unshift("kala"); // adds to beginning of array
kylmkapp.shift(); //removes first

console.log(kylmkapp);
// document.write(kylmkapp[0]);
// document.write(kylmkapp[1]);
// document.write(kylmkapp[2]);
// document.write(kylmkapp[3]);
// document.write(kylmkapp[4]);

let numOfKylmkapp = kylmkapp.length; // sisendi arv
console.log(numOfKylmkapp);

// ülesanne raamatukogu ja temp.arvutused
let books = [
  "War and Peace",
  "The Great Gatsby",
  "Moby Dick",
  "To Kill a Mockingbird",
  "Pride and Prejudice",
];
let temperatures = [18, 21, 19, 22, 20, 17, 16];

//1. Loenda raamatute arv
let totalBooks = books.length;
console.log(totalBooks);
// shows 5

//2. Leia lühima pealkirjaga raamat.Kasuta reduce meetodit
let shortestTitle = books.reduce((shortest, current) => {
  return current.length < shortest.length ? current : shortest;
});
console.log(shortestTitle);// segane

let shortTitle = books[0];
for (let i = 1; i < books.length; i++) {
  if (books[i].length < shortTitle.length) {
    shortTitle = books[i];
  }
}
console.log(shortTitle); //vähem segane

//3.Sorteeri raamatud a-z
books.sort();
console.log(books);

//4.Kontrolli kas raamatute seas on "The Great Gatsby"
console.log(books.includes("The Great Gatsby"));

//5.filtreeri temperatuurid +20kraadi
let soeKraad
function soeKraad(temperatures)