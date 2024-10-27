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
  console.log(shortestTitle); // segane
  
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
  let soeKraad = temperatures.filter((number) => number > 20);
  console.log(soeKraad);
  
  //6.Arvuta temperatuuride keskmine. Kasuta reduce et arvutada keskmine
  let keskmineTemperatuur =
    temperatures.reduce((acc, curr) => acc + curr, 0) / temperatures.length;
  console.log(keskmineTemperatuur);
  
  /* 7. Temperatuuride teisendamine Fahrenheiti:
  teisenda iga temperatures massiivi element celsiuse kraadidest Fahrenheiti kraadidesse
  (valem:F=C * 9/5 + 32) ja kuva tulemus uues massiivis.
   */
  let fTemperatures = temperatures.map(function(number) {
    return number * 9/5 + 32 + ' F';
  });
  console.log(fTemperatures);
  
  //8. Sorteeri temperatuurid kahanevas järjekorras:
  console.log(temperatures.sort().reverse());
  console.log(fTemperatures.sort().reverse());