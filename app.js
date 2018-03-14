try {
  // Produce a Reference Error
  // myFunction();

  // Produce a TypeError
  // null.myFunction();

  // Will produce Syntax Error
  // console.log(eval('Hello World'));

  // Will produce a URIError
  decodeURIComponent('%');

} catch(e) {
  console.log(`${e.name}: ITS NULL STUPID!!`);
  // console.log(e.message);
  // console.log(e.name);
  // console.log(e instanceof ReferenceError);
} finally {
  console.log('Finally runs regardless of results....');
}

console.log('Program continues....');