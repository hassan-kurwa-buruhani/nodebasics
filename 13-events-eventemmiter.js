// const EventEmitter = require('events');

// const myEmitter = new EventEmitter()

// myEmitter.on('request', () => {
//     console.log('data received')
// })


// myEmitter.on('request', (name, id) => {
//     console.log(`data received again for user: ${name} with id: ${id}`)
// })

// myEmitter.emit('request', 'john', 34);




// const EventEmitter = require("events");

// const myEmitter = new EventEmitter();


// myEmitter.once('request', () => {
//     console.log(`Data received`);
// })

// myEmitter.emit('request');
// myEmitter.emit('request');


const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
    console.log('request received');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
});


server.listen(3000, () => console.log('Server is listening on port 3000'));