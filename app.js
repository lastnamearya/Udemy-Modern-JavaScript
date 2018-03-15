// Singelton Pattern
const Singelton = (function() {
  let instance;

  function createInstance() {
    const object = new Object({name: "Brad"});
    return object;
  }

  return {
    getInstance: function() {
      if(!instance) {
        instance = createInstance();
      }
      return instance;
    }
  }
})();

const instanceA = Singelton.getInstance();
const instanceB = Singelton.getInstance();

console.log(instanceA);
console.log(instanceB);

// We'll get true when we compare both instances. Why single instance is created because we use return statement and due to that after instancing one object our function stopped.
console.log(instanceA === instanceB);