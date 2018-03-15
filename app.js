// Maps = Key-value Pairs - can use ANY type as key or value

const map1 = new Map();

// Set some keys

const key1 = "Some string",
      key2 = {},
      key3 = function() {};

// Set map values by key
map1.set(key1, 'Value of key1');
map1.set(key2, 'Value of key2');
map1.set(key3, 'Value of key3');

// Get Values by key
console.log(map1.get(key1), map1.get(key2), map1.get(key3));

// Count values
console.log(map1.size);

// Iterating through Maps

// Loop using for...of to get keys and values
for(let [key, value] of map1) {
  console.log(`${key} = ${value}`);
}

// Iterating only through the Keys
for(let key of map1.keys()) {
  console.log(key);
}

// Iterating only through the values
for(let value of map1.values()) {
  console.log(value);
}

// Loop with forEach
map1.forEach(function(value, key) {
  console.log(`${key} = ${value}`);
});

// Convert to Arrays

// Create an array of key value pairs
const keyValArr = Array.from(map1);
console.log(keyValArr);

// Create an array of just values from map
const valArr = Array.from(map1.values());
console.log(valArr);

// Create an array of just values from map
const keyArr = Array.from(map1.keys());
console.log(keyArr);