const os = require("os");

console.log("Операционная система:", os.platform());

console.log("Архитектура процессора:", os.arch());

console.log("What", os.cpus());

console.log("What", os.freemem());

console.log('What', os.totalmem());

console.log('Home direction:', os.homedir());

console.log("On:", os.uptime());
