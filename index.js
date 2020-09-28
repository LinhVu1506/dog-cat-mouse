const Cat = require("./Cat");
const Dog = require("./Dog");

const dog = new Dog('Tom');

const cat = new Cat();

dog.eat(cat);

console.log(dog);