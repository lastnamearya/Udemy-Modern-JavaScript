// Person  Constructor
function Person(name, dob) {
  this.name = name;


  // this.age = age;

  this.birthday = new Date(dob);
  this.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    // Here in Math Object(constructor), we don't need to use new keyword 
    // Don't worry about this formula of - 1970, it's default
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}

// // This will give us window object
// console.log(this);
// this.alert(1);

// const brad = new Person('Brad', 36);
// const john = new Person('John', 30);

// console.log(john.age);

const brad = new Person('Brad', '9-10-1981');
console.log(brad.calculateAge());
