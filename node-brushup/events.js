const events = require('events')

const emitter = new events.EventEmitter()

emitter.on('newEvent',() => console.log("new event emitted"))

emitter.emit('newEvent')