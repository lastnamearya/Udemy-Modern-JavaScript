 // Function Declarations

 function greet(firstName = 'John', lastName = 'Doe') {
  //  ES5 Way
  //  if(typeof firstName === 'undefined'){firstName = 'John'}
  //  if(typeof lastName === 'undefined'){lastName = 'Doe'}

  return 'hello ' + firstName + " " + lastName;
 }

 // console.log(greet());

 // Immediately Invoked Function Expressions

 (function(){
   console.log('IIFE Ran...');
 })();

 (function(name){
   console.log(`Hello ${name}`);
 })('Brad');

 const todo = {
   add: function() {
     console.log('Add todo..');
   },
   edit: function(id){
    console.log(`Edit todo ${id}`); 
   }
 }

// Add methods later to the object
todo.delete = function(){
  console.log('Delete todo...');
}

 todo.add();
 todo.edit(22);
 todo.delete();