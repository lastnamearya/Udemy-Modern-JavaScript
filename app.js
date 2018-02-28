// Object.prototype
// Person.prototype

// Person Constructor
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);

  // // this is something, that we need to put inside of our prototype rather than the object constructor
  // this.calculateAge = function(){
  //   const diff = Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  // }
}

// Calculate Age Prototype
Person.prototype.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// Get Full Name Prototype
Person.prototype.getFullName = function(){
  // // ES5 Way
  // return (this.firstName + " " + this.lastName);

  // ES6 Way using template literals
  return `${this.firstName} ${this.lastName}`;
}

// Get Married Prototype
Person.prototype.getsMarried = function(newLastName){
  this.lastName = newLastName;
}

const john = new Person('John', 'Doe', '8-12-90');
const mary = new Person('Mary', 'Johnson', 'March 20 1978');

console.log(mary);

console.log(john.calculateAge());

console.log(mary.getFullName());

mary.getsMarried('Smith');

console.log(mary.getFullName());

// Access Prototype Properties
console.log(mary.hasOwnProperty('firstName'));

// We get false value, because it's under the prototype not in the object's properties
console.log(mary.hasOwnProperty('getFullName'));

