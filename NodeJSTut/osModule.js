const os = require('os');

const systemupTime = os.uptime();

const userInfo = os.userInfo();

const otherInfo = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(systemupTime);
console.log(userInfo);
console.log(otherInfo);