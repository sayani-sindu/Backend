const { createReadStream} = require('fs')
const stream =  createReadStream('big.txt',{highWaterMark: 9000, encoding:'utf8'});

//default -- 64kb

//last buffer - remainder

// highWaterMark - control size
//con

stream.on('data', res =>{
    console.log(res);
})
stream.on('error', err=> console.log(err))