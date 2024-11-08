const sayHello = require('./hello.js');

const myModule = require('./myModule.js');

console.log(__dirname);

console.log(__filename);

global.myVariable = "Hello, World!";
console.log(myVariable);


sayHello('Sindu');
sayHello('Teja');
sayHello('Rohit');


console.log(myModule.foo);
myModule.myFunction1();
myModule.myFunction2();