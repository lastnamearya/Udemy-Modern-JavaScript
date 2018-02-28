// Constructor Name always start with a Capital Character / Name

// Person constructor

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// Greeting prototype method
Person.prototype.greeting = function() {
  return `Hello there ${this.firstName} ${this.lastName}`;
}

const person1 = new Person('John', 'Doe');

console.log(person1.greeting());

// Customer constructor
function Customer(firstName, lastName, phone, membership) {
  // call() is a function that allow us to call another function from somewhere else in the current context

  Person.call(this, firstName, lastName);

  this.phone = phone;
  this.membership = membership;
}

// ***************************************************************************************** //

// Inherit Person Prototype Methods
Customer.prototype = Object.create(Person.prototype);

// Make customer.prototype return Customer()
Customer.prototype.constructor = Customer;

// ***************************************************************************************** //


// Create a customer
const customer1 = new Customer('Tom', 'Smith', '555-555-555', 'Standard');

console.log(customer1);

// Override Prototype Constructor
Customer.prototype.greeting = function(){
  return `Hello there ${this.firstName} ${this.lastName} welcome! to our company`;
}

// Without inheriting prototype, it'll not work. By default js will not inherit any prototype of other constructors
console.log(customer1.greeting());