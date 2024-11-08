const EventEmitter =  require('events');
const eventEmitter = new  EventEmitter();

const userWelcome = () =>{
    console.log("Welcome to the Server!");
}


const greetUser = () =>{
    console.log("Hello User!");
}

eventEmitter.on('userConnected', greetUser);

//eventEmitter.emit('userConnected');

eventEmitter.on('userConnected', userWelcome);

//eventEmitter.off('userConnected',  greetUser);


eventEmitter.emit('userConnected');
console.log(eventEmitter.listenerCount('userConnected'));

console.log(eventEmitter.rawListeners('userConnected'));

eventEmitter.once('eventOnce', () => console.log("fired after executing once"));

eventEmitter.emit('eventOnce');


eventEmitter.emit('eventOnce');

const birthdayWish = (name, age) =>{
    console.log('Happy Birthday  ' + name + ' you are ' + age + ' years old.');

}

eventEmitter.on('birthday', (name, age) => console.log('Happy ' + age + 'th ' + 'Birthday ' + name));

eventEmitter.on('birthday', birthdayWish);

eventEmitter.emit('birthday', 'sindu', '18');