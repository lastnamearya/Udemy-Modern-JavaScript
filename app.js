let re;

// It's a regular Expression that can be identified by 2 forward slashes and hello is the body of the regular expression.

re = /hello/i;    // i = case insensitive
// re = /hello/g;    // g = Global search

// console.log(re);
// console.log(re.source);

// // exec() - Return result in an array if it found the match or it'll return null if it not able to found the match

// const result = re.exec('hello world');

// console.log(result);

// // We can find sub-values of the result 

// console.log(result[0]);
// console.log(result.index);
// // search string
// console.log(result.input);

// ******************************************************************************** //

// test() - Returns true or false
// const result = re.test('hello');

// console.log(result);

// ******************************************************************************** //

// match() - Returns result array or null
const str = 'Hello There';

// match() will work opposite like other regular expression methods work
const result = str.match(re);

// It'll give us inital expression that it matches
console.log(result); 