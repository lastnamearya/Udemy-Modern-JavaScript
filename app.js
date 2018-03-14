let re;

// It's a regular Expression that can be identified by 2 forward slashes and hello is the body of the regular expression.

re = /hello/;

console.log(re);
console.log(re.source);

// exec() - Return result in an array if it found the match or it'll return null if it not able to found the match

const result = re.exec('hello world');

console.log(result);

// We can find sub-values of the result 

console.log(result[0]);
console.log(result.index);
// search string
console.log(result.input);