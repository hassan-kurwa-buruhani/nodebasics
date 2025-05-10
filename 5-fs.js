const fs = require('fs');

// fs.writeFileSync('content/subfolder/first.txt', 'hello world again');

const content = fs.readFileSync('content/subfolder/first.txt', 'utf8');
console.log(content);

// fs.appendFileSync('content/subfolder/first.txt', '\nHello again');


// fs.unlinkSync('content/subfolder/second.txt');

if (fs.existsSync('content/subfolder/first.txt')) {
  console.log('File exists');
} else {
  console.log('File does not exist');
}