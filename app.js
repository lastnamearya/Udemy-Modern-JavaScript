// // Create a Symbol
// const sym1 = Symbol();
// const sym2 = Symbol();

// // No two symbols can be compared, they're not equal
// console.log(Symbol('123') === Symbol('123'));

// // Symbol Data not automatically convert into string data type in concatenation / backstash
// // Throw error on concatenation
// // console.log(`Hello ${sym1}`);

// // We've to convert them especially
// console.log(`Hello ${String(sym1)}`);

// // We can also using .toString()
// console.log(`Hello ${sym1.toString()}`);

// Unique Object Keys
const KEY1 = Symbol();
const KEY2 = Symbol('sym2');

const myObj = {};

// We can't pass a varialbe using dot notation as a property, instead it's better to us bracket notation over dot notation for passing an variable to store as a prop in an object
myObj[KEY1] = 'Prop1';
myObj[KEY2] = 'Prop2';
myObj.key3 = 'Prop3';
myObj.key4 = 'Prop4';

console.log(myObj[KEY1]);
console.log(myObj[KEY2]);

// Symbols are not enumerable in for...in
for(let i in myObj) {
  console.log(`${i}: ${myObj[i]}`);
}

// Symbols are ignored by JSON.stringify
console.log(JSON.stringify({key: 'prop'}));
console.log(JSON.stringify({[Symbol('sym1')]: 'prop'}));
