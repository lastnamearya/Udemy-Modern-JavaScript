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

// Braces {} - Quantifiers
re = /Hel{2}o/i;      // Must occur exactly {m} amount of times
re = /Hel{2,4}o/i;     // Must be in range of 2 - 4
re = /hel{2,}o/i;      // Must be atleast 2 Times

// Parenthesis Grouping
re = /^([0-9]x){3}/i;

// Shorthand Character Classes
re = /\w/;      // Word Character - alphanumric or _    First Character
re = /\w+/;      // Word Character - alphanumric or _   With + all the characters
re = /\W/;      // opposite of small W
re = /\d/;      // Must be Digit
re = /\d+/;     // More than once, must be digit.
re = /\D/;      // Match any Non-digit;
re = /\s/;      // Match whitespace
re = /\S/;      // Non-whitespace
re = /Hell\b/;  // Word boundary

// Assertions
re = /x(?=y)/;
re = /x(?!y)/;


// String to Match
const str = 'dkjekdxsfsdfx';

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