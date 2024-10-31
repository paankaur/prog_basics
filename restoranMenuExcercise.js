const menu = [
    { name: "Praad", price: 15, category: "main" },
    { name: "Supp", price: 8, category: "starter" },
    { name: "Tort", price: 9, category: "dessert" },
  ];

function analizeMenu(menuItems) {
    const cheapItems = menuItems.filter(item => item.price < 10);
    const cheapItemNames = cheapItems.map(item => item.name);
    cheapItems.forEach(item => console.log(`Name: ${item.name}, Price: ${item.price}€`));
    const totalCost = cheapItems.reduce((total, item) => total + item.price, 0);
    console.log(totalCost + "€");
    return {cheapItems: cheapItemNames, totalCost};

}
analizeMenu(menu);