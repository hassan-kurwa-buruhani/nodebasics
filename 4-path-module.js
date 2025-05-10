const path = require('path');

console.log(path.basename('/content/subfolder/first.txt'));


const dir = path.dirname('/content/subfolder/first.txt');
console.log(dir);

console.log(path.parse('/content/subfolder/first.txt'));

console.log(path.resolve('content', 'subfolder', 'first.txt'));