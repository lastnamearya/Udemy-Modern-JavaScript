// // One line function doesn't need braces
// const sayHello = () => console.log('hello');

// // Don't need return keyword in single line function
// const sayHello = () => 'Hello';

// // Return Object Literal
// const sayHello = () => ({ msg: 'Hello'});

// console.log(sayHello());

// // Parameters

// // // Single Parameters, even don't need parenthesis
// const sayHello = name => console.log(`Hello ${name}`);

// // More than one Parameters
// const sayHello2 = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);

// sayHello('Jigyasu');
// sayHello2('Jigyasu', 'Arya');

// Arrow functions in callback

const users = ['Nathan', 'John', 'Willian'];

const nameLengths = users.map(name => name.length);

console.log(nameLengths);