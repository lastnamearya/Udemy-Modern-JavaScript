// Log to console
console.log("hello world");
console.log(123);
console.log(true);

var greeting = 'hello';
console.log(greeting);
console.log([1,2,3,4]);
console.log({a: 1, b: 2});

// Logs Objects in a table manner
console.table({a: 1, b: 2});

// Shows error in console
console.error('This is some error');
console.clear();
console.warn('This is a Warning!');

// Timer, used to check runtime performance of our programs
console.time('Hello');
  console.log("hello world");
  console.log("hello world");
  console.log("hello world");
  console.log("hello world");
  console.log("hello world");
  console.log("hello world");
  console.log("hello world");
console.timeEnd('Hello');