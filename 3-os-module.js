const os = require('os');

console.log("=== System Information ===");
console.log(`OS Platform   : ${os.platform()}`);
console.log(`OS Type       : ${os.type()}`);
console.log(`Architecture  : ${os.arch()}`);
console.log(`CPU Cores     : ${os.cpus().length}`);
console.log(`Total Memory  : ${(os.totalmem() / (1024 ** 3)).toFixed(2)} GB`);
console.log(`Free Memory   : ${(os.freemem() / (1024 ** 3)).toFixed(2)} GB`);
console.log(`Home Dir      : ${os.homedir()}`);
const user = os.userInfo();
console.log(`User information : ${user.homedir} / ${user.username} / ${user.shell}`);
console.log(`System Uptime : ${(os.uptime() / 60).toFixed(2)} minutes`);
