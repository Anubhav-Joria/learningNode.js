const os = require('os');

console.log(os.arch());

const freeMemory = os.freemem();
console.log(`Free Memory is : ${freeMemory/1024/1024/1024}`);

const totalMemory = os.totalmem();
console.log(`TotalMemory is : ${totalMemory/1024/1024/1024}`);