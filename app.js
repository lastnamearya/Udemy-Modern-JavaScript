const firstName = 'Wiliam';
const lastName = "Johnson";
const str = "Hello there my name is Brad";
const tags = 'web design,web development,programming';

let val;

// Concatenation
val = firstName + " " + lastName;

// Append
val = 'Brad ';
val += 'Traversy';

// Escaping
val = 'That\'s awesome I can\'t wait';

// Length
val = firstName.length;

// Concat
val = firstName.concat(' ', lastName);

// Change Case
val = firstName.toUpperCase();
val = lastName.toLowerCase();

// Find characters in strings
val = firstName[1];

// indexOf()
val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');

// charAt()
val = firstName.charAt(2); 
// Get last char
val = firstName.charAt(firstName.length - 1);

// substring()
val = firstName.substring(0, 4);

// slice()
val = firstName.slice(0, 4);
val = firstName.slice(-3);

// Split()
val = str.split(' ');
val = tags.split(',');

// replace()
val = str.replace('Brad', 'Jack');

// includes()
val = str.includes('Hello');
val = str.includes('foo');  // return with false

console.log(val);