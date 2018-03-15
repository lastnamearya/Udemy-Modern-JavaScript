// // Basic Structure

// (function() {
//   // Declare Private vars and functions 

//   return {
//     // Declare Public Varaibles and Functions

//   }
// })();

// // STANDARD MODULE PATTERN
// const UICtrl = (function() {
//   let text = 'Hello World';

//   const changeText = function() {
//     const element = document.querySelector('h1');
//     element.textContent = text;
//   }

//   return {
//     callChangeText: function() {
//       changeText();
//       console.log(text);
//     }
//   }
// })();

// UICtrl.callChangeText();

// // Can't access Private Data ~ functions
// UICtrl.changeText();

// // Can't access Private Data ~ Variables 
// console.log(UICtrl.text);

// ************************************************************************************************ //

// Revealing Module Pattern
const ItemCtrl = (function() {
  // This can be thought as our State
  let data = [];

  function add(item) {
    data.push(item);
    console.log('Item Added...');
  }

  function get(id) {
    return data.find(item => {
      return item.id === id;
    })
  }

  return {
    add: add,
    get: get
  }
})();

ItemCtrl.add({id: 1, name: 'John'});