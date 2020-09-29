const Cat = require('./Cat');
const Mouse = require('./Mouse');

const cat = new Cat();
const mouse = new Mouse('Mickey');

cat.eat(mouse);

console.log(cat);