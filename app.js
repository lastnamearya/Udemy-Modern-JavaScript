 // ES6 Classes
 class Person {
   constructor(firstName, lastName, dob) {
     this.firstName = firstName;
     this.lastName = lastName;
     this.birthday = new Date(dob);
   }

   greeting() {
     return `Hello there ${this.firstName} ${this.lastName}`; 
   }

   calculateAge() {
     const diff = Date.now() - this.birthday.getTime();
     const ageDate = new Date(diff);
     return Math.abs(ageDate.getUTCFullYear() - 1970);
   }

   getsMarried(newLastName) {
     this.lastName = newLastName;
   }

  // Static Methods, we can't use static methods on the object instances that we create using the ES6 classes or object constructor
  // If you're not using something like this keyword in your methods then static method is the best way to do the task
   static addNumbers(x, y) {
     return x + y;
   }

 }

const mary = new Person('Mary', 'Williams', '11-13-1980');

console.log(mary);

mary.getsMarried('Thompson');

console.log(mary.greeting());

console.log(mary.calculateAge());

console.log(Person.addNumbers(1,2));