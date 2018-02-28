// Sub classes: Inheritance in ES6 Classes
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
}

class Customer extends Person {
   constructor(firstName, lastName, phone, membership) {
     // In React.js it's widely used, it calls the parent class constructor
     super(firstName, lastName);

      this.phone = phone;
      this.membership = membership;
   }

   // We can also create class specific method in the extneded sub-class
   static getMembershipCost() {
     return 500;
   }

}

const john = new Customer('John', 'Doe', '555-555-555', 'Standard');

console.log(john);
console.log(john.greeting());

console.log(Customer.getMembershipCost());