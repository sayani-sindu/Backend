const fs = require('fs');
//synchronous way of file system

try{
    fs.writeFileSync('./myFolder/myFileSync.txt', 'This si synchrous method');
    console.log('Write operation successful');

    const fileData = fs.readFileSync('./myFolder/myFileSync.txt', 'utf-8');
    console.log(fileData);
}
catch(err){
    console.log(err);
}