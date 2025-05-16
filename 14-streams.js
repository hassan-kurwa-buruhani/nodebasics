// const fs = require('fs');

// // Create readable stream
// const readableStream = fs.createReadStream('./content/subfolder/big.txt', 'utf8');

// // Handle stream events
// readableStream.on('data', (chunk) => {
//   console.log('Received chunk:', chunk);
// });

// readableStream.on('end', () => {
//   console.log('Finished reading.');
// });





const fs = require('fs');
const path = require('path');
const http = require('http');

http.createServer((req, res) => {
    const filePath = path.join(__dirname, 'content/subfolder/big.txt');
    const readableStream = fs.createReadStream(filePath, 'utf8');
    readableStream.on('data', (chunk) => {
        readableStream.pipe(res);
    });
    readableStream.on('end', () => {
        console.log('Finished reading.');
    });

    readableStream.on('error', (err) => {
        console.log('Error:', err);
    });
}).listen(3000, () => console.log('Server is listening on port 3000'));