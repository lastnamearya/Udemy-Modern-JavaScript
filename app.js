const personProtoTypes = {
  greeting: function(){
    return `Hello there ${this.firstName} ${this.lastName}`;
  },
  getsMarried: function(newLastName) {
    this.lastName = newLastName;
  }
}

// It will first of all create an empty object 'mary' then it will assign personProtoTypes (object) to its prototypes
 const mary = Object.create(personProtoTypes);
 mary.firstName = 'Mary';
 mary.lastName = 'Williams';
 mary.age = 30;

 mary.getsMarried('Thompson');

 console.log(mary.greeting());

 const brad = Object.create(personProtoTypes, {
   firstName: {value: 'Brad'},
   lastName: {value: 'Traversy'},
   age: {value: 36}
 });

console.log(brad);