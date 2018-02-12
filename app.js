const name = 'John';
const age = 30;
const job = 'Web Developer';
const city = 'Miami';
let html;

// Without Template strings (es5)
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job  + '</li><li>City: ' + city + '</li></ul>';

// Another way to write the same above code in ES5
html = '<ul>' +
        '<li>Name: ' + name + '</li>' + 
        '<li>Age: ' + age + '</li>' + 
        '<li>job: ' + job + '</li>' + 
        '<li>city: ' + city + '</li></ul>';

function hello() {
  return "hello";
}

// With Template Strings/Literals (ES6)
html = `
  <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${2 + 2}</li>
    <li>${hello()}</li>
    <li>${age > 30 ? 'Over 30' : 'Under 30'}

  </ul>
`;



document.body.innerHTML = html;

