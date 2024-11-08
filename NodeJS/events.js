const EventEmitter = require('events')
// built in modules rely on  the event emitter module

const http = require('http')
const customEmmiter = new EventEmitter()

// on -lsten for an event
// emit - emit an event

// keep  in mind that the event name is case sensitive
//you can have many functions as you want for one emit


//order place important role-- event must listen first and then they must get triggered
customEmmiter.on('response', () =>{
    console.log('data received from server')
})


customEmmiter.on('response', () =>{
    console.log('some other logic here')
})

customEmmiter.emit('response')
//using EventEmitter API
const server = http.createServer()

//emits request event
//subscribe to it/ listen to it/ respond to it
server.on('request', (req, res) =>{
    res.end('Welcome')
})

server.listen(5000)