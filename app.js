const user = {email: 'jdoe@gmail.com'};

try {
  // Produce a Reference Error
  // myFunction();

  // Produce a TypeError
  // null.myFunction();

  // Will produce Syntax Error
  // console.log(eval('Hello World'));

  // Will produce a URIError
  // decodeURIComponent('%');

  if(!user.name) {
    // throw 'User has no name';
    // It'll throw SyntaxError 
    throw new SyntaxError('User has no name');
  }

} catch(e) {
  console.log(`User Error: ${e.message}`);
  // console.log(e.message);
  // console.log(e.name);
  // console.log(e instanceof ReferenceError);
} finally {
  console.log('Finally runs regardless of results....');
}

console.log('Program continues....');