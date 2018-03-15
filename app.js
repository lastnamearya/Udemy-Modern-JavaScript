// // Basic Structure

// (function() {
//   // Declare Private vars and functions 

//   return {
//     // Declare Public Varaibles and Functions

//   }
// })();

// STANDARD MODULE PATTERN
const UICtrl = (function() {
  let text = 'Hello World';

  const changeText = function() {
    const element = document.querySelector('h1');
    element.textContent = text;
  }

  return {
    callChangeText: function() {
      changeText();
      console.log(text);
    }
  }
})();

UICtrl.callChangeText();

// Can't access Private Data ~ functions
UICtrl.changeText();

// Can't access Private Data ~ Variables
console.log(UICtrl.text);