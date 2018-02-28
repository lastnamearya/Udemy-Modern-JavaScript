// All these constructor methods will slow your scipt execution time, ignore them as possible but you need to keep them in your mind.

// String

// Primitive Data Type
const name1 = 'Jeff';

// Reference ~ Object Constructor
const name2 = new String('Jeff');

// // We can add properties to reference data types (string in this case) whenever we want to
// name2.foo = 'bar';
// console.log(name2);

console.log(typeof name2);

// We can create any data in primitive and reference form, whatever we want to
const num1 = 5;
const num2 = new Number(5);

console.log(num1);
console.log(typeof(num2));

// Boolean
const bool1 = true;
const bool2 = new Boolean(true);

console.log(typeof bool2);

// Functions
const getSum1 = function(x, y){
  return x + y;
}

// Constructor Function
const getSum2 = new Function('x','y', 'return x + y');

console.log(getSum2(1,1));

// Object Constructor
const john1 = {name: "John"};
const john2 = new Object({name: "John"});
console.log(john2);

// Arrays
const arr1 = [1,2,3,4];
const arr2 = new Array(1,2,3,4);

console.log(arr2);

// Regular Expressions Constructor
// In this expression we're looking for a word character that appears more than one time.
const re1 = /\w+/;
// When we use RegExp then we need to escape our backslash character uing one more \
const re2 = new RegExp('\\w+');

console.log(re1);
console.log(re2);
