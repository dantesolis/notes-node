const square = (x=2) => x * x;

console.log(square());
console.log(square(9));

const user =  {
  name: "D/S",
  sayHi: () => {
    console.log(`Hi. I'm ${this.name}`);
    console.log(arguments);
  },
  sayHiAlt () {
    console.log(`Hi. I'm ${this.name}`);  // This solves the problem when creating functions with objects literals  
    console.log(arguments);
  }
};

user.sayHi();
user.sayHiAlt(); // example with arguments
user.sayHiAlt();
user.sayHiAlt(1, 2, 3); // example with arguments



// Conclusion [Personal Note]:
// arrow functions do not bind "this" nor the "arguments" array like object.
// They bind the scope from which they were called.