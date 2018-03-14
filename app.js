let re;

// Literal Characters
re = /hello/;
re = /hello/i;

// Metacharacter Symbols
re = /^h/i;       // Must Starts with
re = /world$/i;       // Must Ends with
re = /^hello$/i;      // Must begin and end with
re = /h.llo/i;      // Matches any ONE Character
re = /h*llo/i;      // Matches any character 0 or more times
re = /gre?a?y/i;    // Matches optional character
re = /gre?a?y\?/i;

// Brackets [] - Character Sets
re = /gr[ae]y/i;      // Must be an a or e
re = /[GF]ray/;       // Must be G or F
re = /[^GF]ray/;      // Must not be G or F
re = /[A-Z]ray/;      // Match any uppercase character
re = /[A-Za-z]ray/;   // Match any character
re = /[0-9]ray/;      // 


// String to Match
const str = '10ray';

// Log Results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if(re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does NOT match ${re.source}`);
  }
}

reTest(re, str);