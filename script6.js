// function add(x, y, z){
// return x + y + z;

// }
// console.log(add(2,3,4));

// function addDivide(x,y,z){
//     return (x + y) / z;

// }
// console.log(addDivide(10,5,3));

// function isEven(number){
//     return number % 2 === 0 ? true : false;
// }
// console.log(isEven(14));

//  let fruits = ["apple", "tomato", "lime", "pear"];

//  fruits.forEach(capitalize);
//  fruits.forEach(display);

//  function upperCase(element, index, array){
//      array[index] = element.toUpperCase();
//  }
//  function capitalize(element,index,array){
//     array[index]
//  }
//poolik

// const students = ["spengebob","Patrick","Sandy"];
// const studentsUpper = students.map(upperCase);
// console.log(studentsUpper);

// function upperCase(element){
//     return element.toUpperCase();
// }

// const ages = [16, 17, 18, 19, 20, 60];
// const adulsts = ages.filter(isAdult);
// function isAdult(element){
// return element >= 18;
// }

//  const words = ["orange", "apple", "banana", "kiwi", "pomegranate", "coconut"];
//  const shortWords = words.filter(getShortWords);
//   const longWords = words.filter(getLongWords);

//  console.log(shortWords);
//  console.log(longWords);

//  function getShortWords(element){
//    return element.length <= 6;
//  }
// function getLongWords(element){
//     return element.length > 6;
// }
//reduce

// const prices = [5, 30, 10, 25, 15, 20];

// const total = prices.reduce(sum);
// console.log(total)
// function sum(accumulator, element){
//     return accumulator + element;
// }

// const grades = [75, 50, 90, 80, 65, 95];

// const maximum = grades.reduce(getMax);
// const minimum = grades.reduce(getMin);
// console.log(maximum);
// console.log(minimum);
// function getMax(accumulator, element){
//     return Math.max(accumulator, element);
// }
// function getMin(accumulator,element){
//     return Math.min(accumulator,element);
// }

const numbers = [1,2,3,4,5,6];

const squares = numbers.map(function(element){
    return Math.pow(element, 3);
});
console.log(squares);

//arrow

// const hello = (name) => console.log(`Hello! ${name}`)

// hello(name);

setTimeout( () => console.log("hello"), 3000);

const cubes = numbers.map((element) => Math.pow(element, 3));
console.log(cubes);