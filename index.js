// app.js

const http = require('http');

// Create an instance of the http server to handle HTTP requests
let app = http.createServer((req, res) => {
    // Set a response type of plain text for the response
    res.writeHead(200, {'Content-Type': 'text/plain'});

    // Send back a response and end the connection
    res.end('Hello World!\n');
});

// Start the server on port 3000
app.listen(3000, '127.0.0.1');
console.log('Node server running on port 3000');

// ewe link

const ewelink = require('ewelink-api');

/* instantiate class */
const connection = new ewelink({
  email: 'gamma4tis@gmail.com',
  password: 'Ramraj19'
});

/* get all devices */

async function start(){
    const devices = await connection.getDevices();

    return devices;
}

start()
.then(devices => {
    console.log(devices);
})
.catch(err => console.log(err));