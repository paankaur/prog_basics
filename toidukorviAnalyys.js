const shoppingCart = [
{ name: "apple", quantity: 4 },
{ name: "banana", quantity: 2 },
{ name: "orange", quantity: 5 },
{ name: "milk", quantity: 1 },
{ name: "bread", quantity: 2 },
];
console.log(shoppingCart);

//Leia ostukorvi toodete koguarv: kasuta reduce, et leida kõigi toodete kogusumma.

console.log(shoppingCart.reduce((acc, item) => acc + item.quantity, 0));

//Lisa uus toode: lisa ostukorvi uus toiduaine { name: "yogurt", quantity: 3 }.

shoppingCart.push({name: "yogurt", quantity: 3});
console.log(shoppingCart);

//Muuda olemasoleva toote kogust: suurenda apple kogust 3 ühiku võrra.
//Kui õuna poleks ostukorvis, peaksid selle lisama.

function addSomeApple(cart) {
    const appleIndex = cart.findIndex(item => item.name === "apple");
    if (appleIndex !== -1) {
        cart[appleIndex].quantity += 3;
    } else {
        cart.push({ name: "apple", quantity: 3});
    }
}
addSomeApple(shoppingCart);
console.log(shoppingCart);

//Eemalda toode: eemalda ostukorvist toode nimega banana.
//Kui sellist toodet pole, siis ära tee midagi.

let bananalessShoppingCart = shoppingCart.filter(item => item.name !== "banana");
console.log(bananalessShoppingCart);

//Koosta kõigi toodete nimede nimekiri: loo uus massiiv, mis sisaldab ainult toiduainete nimesid.

function simpleShoppingCart(item) {
    return {
        name: item.name
    };
}
let cart = shoppingCart.map(simpleShoppingCart);
console.log(cart);

//Kontrolli, kas kindel toode on olemas: kontrolli, kas ostukorvis on olemas toode nimega milk.
//Tulemuseks peaks olema true või false.

console.log(shoppingCart.find(item => item.name === "milk")); //leidub, aga tulemus pole true/false..

console.log(shoppingCart.some(item => item.name === "milk"));

//Sorteeri tooted koguse järgi kahanevas järjekorras.

console.log(shoppingCart.sort((a,b) => b.quantity - a.quantity));

//{ name: "egg", quantity: 12 }
//mis ma sellega küll peale hakkan?
// tema on ilmselt ostukorvist välja pudenenud pool-kogemata