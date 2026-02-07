const os = require ('os');

console.log("platform : " + os.platform());
console.log("arch : " + os.arch());
console.log("freememory (bytes) :" + os.freemem());
console.log("totalmemory (bytes) :" + os.totalmem());
console.log("uptime :" + os.uptime()); 