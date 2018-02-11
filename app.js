let val;

// Number to String
val = String(555);
val = String(4+4);

// Bool to String
val = String(true);

// Date to String
val = String(new Date());

// Array to String
val = String([1,2,3,4]);

// toString Method
val = (5).toString();
val = (true).toString();

// String to Number
val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('hello');
val = Number(undefined);


// Output
console.log(val);
console.log(typeof val);
// console.log(val.length);
console.log(val.toFixed(2));